"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const API_TOKEN = process.env.NEXT_PUBLIC_ASTRA_TOKEN;

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (): Promise<void> => {
    setIsLoading(true);
    if (!API_TOKEN) {
      setError("API token not configured");
      setIsLoading(false);
      return;
    }
    setError(null);

    try {
      const res = await fetch("/api/getdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          message: input,
          input_type: "chat",
          output_type: "chat"
        })
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.outputs[0].outputs[0].results.message.text,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    await handleSubmit();
  };

  const formatTimestamp = (date: Date): string =>
    date.toLocaleString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

  return (
    <div className="h-full flex flex-col">
      <Card className="flex-1 flex flex-col overflow-hidden bg-black text-xs border-[1px] border-zinc-900">
        <ScrollArea className="flex-1 text-xs p-4" ref={scrollAreaRef}>
          <CardContent className="space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-md">
                    <div
                      className={`p-3 rounded-lg shadow-md ${
                        message.role === "user"
                          ? "bg-purple-900 text-white"
                          : "bg-blue-900 text-white"
                      }`}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                    <p className="text-xs mt-1 text-gray-500">
                      {formatTimestamp(message.timestamp)}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="max-w-md">
                    <div className="p-3 rounded-lg text-xs shadow-md bg-gray-200 text-black flex items-center">
                      <Loader className="animate-spin mr-2 h-4 w-4" />
                      <span>Loading...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </ScrollArea>
        <div className="p-4 border-t border-zinc-900">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 text-white border border-zinc-900 rounded-lg"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader className="animate-spin h-4 w-4" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      </Card>
      {error && (
        <div className="mt-4 p-4 bg-red-200 text-red-800 rounded-lg shadow-md">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default ChatPage;

