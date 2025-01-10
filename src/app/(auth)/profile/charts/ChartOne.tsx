"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Updated chart data for Instagram engagement
const chartData = [
  { post: "Post 1", engagement: 8, fill: "var(--color-post1)" },
  { post: "Post 2", engagement: 12, fill: "var(--color-post2)" },
  { post: "Post 3", engagement: 18, fill: "var(--color-post3)" },
  { post: "Post 4", engagement: 0, fill: "var(--color-post4)" },
  { post: "Post 5", engagement: 8, fill: "var(--color-post5)" },
  { post: "Post 6", engagement: 4, fill: "var(--color-post6)" },
  { post: "Post 7", engagement: 13, fill: "var(--color-post7)" },
  { post: "Post 8", engagement: 0, fill: "var(--color-post8)" },
  { post: "Post 9", engagement: 7, fill: "var(--color-post9)" },
  { post: "Post 10", engagement: 11, fill: "var(--color-post10)" },
];

const chartConfig = {
  // Define your chart configuration here
  engagement: {
    label: "Engagement",
    color: "hsl(var(--chart-1))", // Example color
  },
};

const ChartInstagramEngagement = () => {
  const totalEngagement = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.engagement, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Instagram Engagement Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="engagement"
              nameKey="post"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalEngagement.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Engagement
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total engagement for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartInstagramEngagement;
