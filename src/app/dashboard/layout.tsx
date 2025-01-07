"use client";
import "../globals.css";
import { useEffect, useState } from "react";
import SidebarLayout from "./SidebarBase";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className="flex bg-white">
        <SidebarLayout />
        <div className="flex-1 p-4">
          {isMounted ? children : null}
        </div>
      </body>
    </html>
  );
}