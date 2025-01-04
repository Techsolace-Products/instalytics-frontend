import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiChatSmileFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import Image from "next/image";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-gray-900 text-gray-300 w-64 h-screen flex flex-col p-6 border-r border-gray-800">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image src="/logo.png" alt="Logo" width={150} height={100} className="opacity-90 hover:opacity-100 transition-opacity" />
      </div>

      {/* Menu */}
      <div className="flex-1">
        <div className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4">Menu</div>
        <ul className="space-y-2">
          <li
            className={`flex items-center space-x-3 cursor-pointer rounded-lg p-3 transition-all duration-200 group ${
              activeTab === "overview"
                ? "bg-indigo-500/10 text-indigo-400"
                : "hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            <RxDashboard className={`text-lg ${activeTab === "overview" ? "text-indigo-400" : "group-hover:text-indigo-400"}`} />
            <span className="text-sm font-medium">Overview</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer rounded-lg p-3 transition-all duration-200 group ${
              activeTab === "statistics"
                ? "bg-indigo-500/10 text-indigo-400"
                : "hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("statistics")}
          >
            <IoStatsChartSharp className={`text-lg ${activeTab === "statistics" ? "text-indigo-400" : "group-hover:text-indigo-400"}`} />
            <span className="text-sm font-medium">Statistics</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer rounded-lg p-3 transition-all duration-200 group ${
              activeTab === "customers"
                ? "bg-indigo-500/10 text-indigo-400"
                : "hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("customers")}
          >
            <RiChatSmileFill className={`text-lg ${activeTab === "customers" ? "text-indigo-400" : "group-hover:text-indigo-400"}`} />
            <span className="text-sm font-medium">Customers</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer rounded-lg p-3 transition-all duration-200 group ${
              activeTab === "product"
                ? "bg-indigo-500/10 text-indigo-400"
                : "hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("product")}
          >
            <AiFillProduct className={`text-lg ${activeTab === "product" ? "text-indigo-400" : "group-hover:text-indigo-400"}`} />
            <span className="text-sm font-medium">Product</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer rounded-lg p-3 transition-all duration-200 group ${
              activeTab === "messages"
                ? "bg-indigo-500/10 text-indigo-400"
                : "hover:bg-gray-800/50"
            }`}
            onClick={() => setActiveTab("messages")}
          >
            <IoMailSharp className={`text-lg ${activeTab === "messages" ? "text-indigo-400" : "group-hover:text-indigo-400"}`} />
            <span className="text-sm font-medium">Messages</span>
            <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full ml-auto">
              13
            </span>
          </li>
        </ul>
      </div>

      {/* Profile */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-medium text-sm">
            F
          </div>
          <div>
            <div className="text-sm font-medium text-gray-200">Fandaww Punx</div>
            <div className="text-xs text-gray-500">fandaww6@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;