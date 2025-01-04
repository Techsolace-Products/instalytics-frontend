"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Static data for consistent rendering
const data = [
  { name: "Jan", total: 2000 },
  { name: "Feb", total: 3000 },
  { name: "Mar", total: 2500 },
  { name: "Apr", total: 4000 },
  { name: "May", total: 1500 },
  { name: "Jun", total: 3500 },
  { name: "Jul", total: 4500 },
  { name: "Aug", total: 2200 },
  { name: "Sep", total: 3100 },
  { name: "Oct", total: 2700 },
  { name: "Nov", total: 3800 },
  { name: "Dec", total: 4200 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        {/* X-Axis */}
        <XAxis
          dataKey="name"
          stroke="#141414" // Axis color
          fontSize={12} // Tick font size
          tickLine={false}
          axisLine={false}
        />

        {/* Y-Axis */}
        <YAxis
          stroke="#141414" // Axis color
          fontSize={12} // Tick font size
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`} // Format ticks with a dollar sign
        />

        {/* Bar Graph */}
        <Bar
          dataKey="total"
          fill="#1DA1F2" // Bar color (replace with your color)
          radius={[4, 4, 0, 0]} // Rounded corners on the top
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
