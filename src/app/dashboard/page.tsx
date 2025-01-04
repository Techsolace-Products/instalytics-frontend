"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker";
import { MainNav } from "@/app/dashboard/components/main-nav";
import { Overview } from "@/app/dashboard/components/overview";
import { RecentSales } from "@/app/dashboard/components/recent-sales";
import { Search } from "@/app/dashboard/components/search";
import TeamSwitcher from "@/app/dashboard/components/team-switcher";
import { UserNav } from "@/app/dashboard/components/user-nav";
import Sidebar from "@/app/dashboard/components/sidebar";

interface OverviewData {
  // Define properties of overviewData here
  totalUsers: number;
  totalSales: number;
  // Add more properties as needed
}

interface Sale {
  id: number;
  amount: number;
  date: string; // Adjust types as necessary
}

interface DashboardData {
  revenue: number;
  revenueGrowth: string;
  subscriptions: number;
  subscriptionsGrowth: string;
  sales: number;
  salesGrowth: string;
  activeNow: number;
  activeNowGrowth: string;
  overviewData: OverviewData; // Use the defined type
  recentSales: Sale[]; // Use the defined type
}

const mockData: DashboardData = {
  revenue: 10000,
  revenueGrowth: "5%",
  subscriptions: 200,
  subscriptionsGrowth: "10%",
  sales: 150,
  salesGrowth: "8%",
  activeNow: 75,
  activeNowGrowth: "3%",
  overviewData: {
    totalUsers: 500,
    totalSales: 300,
  },
  recentSales: [], // Adjust as necessary
};

// ... [Previous interfaces and mock data remain the same]



export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(mockData);
      }, 1000);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex h-screen justify-center items-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-100 shrink-0 bg-white shadow-sm">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="border-b border-gray-100 sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
          <div className="flex h-16 items-center gap-4 px-6">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center gap-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6 space-y-8">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Dashboard
              </h2>
              <div className="flex items-center gap-4">
                <CalendarDateRangePicker />
                <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-lg shadow-indigo-500/20 border-0">
                  Download
                </Button>
              </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="w-full justify-start p-1 bg-gray-100/50 rounded-xl">
                <TabsTrigger
                  value="overview"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md transition-all duration-200"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics" disabled>
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" disabled>
                  Reports
                </TabsTrigger>
                <TabsTrigger value="notifications" disabled>
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Revenue Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Total Revenue
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF3B30"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{data.revenue}</div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.revenueGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>

                  {/* Subscriptions Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Subscriptions
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5856D6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {data.subscriptions}
                      </div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.subscriptionsGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>

                  {/* Sales Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">Sales</CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#007AFF"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{data.sales}</div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.salesGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>

                  {/* Active Now Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Active Now
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF9500"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{data.activeNow}</div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.activeNowGrowth}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                  <Card className="lg:col-span-4 bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Overview data={data.overviewData} />
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-3 bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription className="text-gray-600">
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales sales={data.recentSales} />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}