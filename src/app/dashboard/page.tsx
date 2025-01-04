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

interface DashboardData {
  revenue: string;
  revenueGrowth: string;
  subscriptions: string;
  subscriptionsGrowth: string;
  sales: string;
  salesGrowth: string;
  activeNow: string;
  activeNowGrowth: string;
  overviewData: {
    totalRevenue: string;
    totalSubscribers: string;
    totalSales: string;
    activeUsers: string;
  };
  recentSales: {
    id: number;
    date: string;
    amount: string;
  }[];
}

const mockData: DashboardData = {
  revenue: "$45,231.89",
  revenueGrowth: "+20.1%",
  subscriptions: "+2350",
  subscriptionsGrowth: "+180.1%",
  sales: "+12,234",
  salesGrowth: "+19%",
  activeNow: "+573",
  activeNowGrowth: "+201 since last hour",
  overviewData: {
    totalRevenue: "$45,231.89",
    totalSubscribers: "2350",
    totalSales: "12,234",
    activeUsers: "573",
  },
  recentSales: [
    { id: 1, date: "2025-01-02", amount: "$120" },
    { id: 2, date: "2025-01-01", amount: "$200" },
    { id: 3, date: "2024-12-31", amount: "$150" },
    { id: 4, date: "2024-12-30", amount: "$250" },
  ],
};


export default function DashboardPage() {
  // Explicitly define the state type as `DashboardData | null`
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulating an API fetch with mock data
    const fetchData = () => {
      setTimeout(() => {
        setData(mockData);
      }, 1000); // Simulating a 1-second delay for API request
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen bg-white">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8 pt-6 bg-white text-gray-900">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Dashboard
              </h2>
              <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button className="bg-[#5819e3] hover:bg-[#5f27d8]">
                  Download
                </Button>
              </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-gray-50">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-[#5819e3] data-[state=active]:text-white"
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
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-gray-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-gray-900">
                        Total Revenue
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF3B30"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-6 w-6"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gray-900">
                        {data.revenue}
                      </div>
                      <p className="text-md text-green-600">
                        {data.revenueGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-gray-900">
                        Subscriptions
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#5856D6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-6 w-6"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gray-900">
                        {data.subscriptions}
                      </div>
                      <p className="text-md text-green-600">
                        {data.subscriptionsGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-gray-900">
                        Sales
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#007AFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-6 w-6"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gray-900">
                        {data.sales}
                      </div>
                      <p className="text-md text-green-600">
                        {data.salesGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-gray-900">
                        Active Now
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF9500"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-6 w-6"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gray-900">
                        {data.activeNow}
                      </div>
                      <p className="text-md text-green-600">
                        {data.activeNowGrowth}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview data={data.overviewData} />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-gray-900">
                        Recent Sales
                      </CardTitle>
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
        </div>
      </div>
    </>
  );
}
