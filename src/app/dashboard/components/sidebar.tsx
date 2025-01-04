import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiChatSmileFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import Image from "next/image";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("overview"); // Default active tab

  return (
    <div className="bg-gray-950 text-white w-64 h-screen grid grid-rows-[auto_1fr_auto] p-4">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src="/logo.png" alt="Logo" width={150} height={100} />
      </div>

      {/* Menu */}
      <div className="mb-8 mt-16">
        <div className="text-2xl font-semibold text-gray-300 mb-6">Menu</div>
        <ul className="space-y-4">
          <li
            className={`flex items-center space-x-3 cursor-pointer text-xl p-2 ${
              activeTab === "overview"
                ? "text-[#5819e3] border-2 rounded-md p-2 border-[#5819e3] bg-[#5819e3]/10"
                : "hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            <RxDashboard className="text-xl" />
            <span>Overview</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer text-xl p-2 ${
              activeTab === "statistics"
                ? "text-[#5819e3] border-2 rounded-md p-2 border-[#5819e3] bg-[#5819e3]/10"
                : "hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("statistics")}
          >
            <IoStatsChartSharp className="text-xl" />
            <span>Statistics</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer text-xl p-2 ${
              activeTab === "customers"
                ? "text-[#5819e3] border-2 rounded-md p-2 border-[#5819e3] bg-[#5819e3]/10"
                : "hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("customers")}
          >
            <RiChatSmileFill className="text-xl" />
            <span>Customers</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer text-xl p-2 ${
              activeTab === "product"
                ? "text-[#5819e3] border-2 rounded-md p-2 border-[#5819e3] bg-[#5819e3]/10"
                : "hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("product")}
          >
            <AiFillProduct className="text-xl" />
            <span>Product</span>
          </li>
          <li
            className={`flex items-center space-x-3 cursor-pointer text-xl p-2 ${
              activeTab === "messages"
                ? "text-[#5819e3] border-2 rounded-md p-2 border-[#5819e3] bg-[#5819e3]/10"
                : "hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("messages")}
          >
            <IoMailSharp className="text-xl" />
            <span>Messages</span>
            <span className="bg-[#5819e3] text-white rounded-full text-xs px-2 py-0.5">
              13
            </span>
          </li>
        </ul>
      </div>

      {/* Profile */}
      <div className="flex items-center justify-center space-x-3 mt-6">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
          F
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">Fandaww Punx</div>
          <div className="text-sm text-gray-500">fandaww6@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
