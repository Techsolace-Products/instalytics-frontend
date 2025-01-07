"use client"
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';


const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className=" flex">
      <button
        className="lg:hidden fixed z-50 bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static lg:shrink-0 z-40 transition-transform duration-300 ease-in-out w-64`}
      >
        <Sidebar
          collapsed={!sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      <div className="flex-1 p-4">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default SidebarLayout;
