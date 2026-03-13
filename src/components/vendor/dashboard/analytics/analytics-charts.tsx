"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", quotes: 12000, bookings: 8, views: 1200 },
  { name: "Feb", quotes: 15000, bookings: 10, views: 1600 },
  { name: "Mar", quotes: 21000, bookings: 14, views: 2200 },
  { name: "Apr", quotes: 18000, bookings: 12, views: 1900 },
  { name: "May", quotes: 24000, bookings: 16, views: 2500 },
  { name: "Jun", quotes: 28000, bookings: 18, views: 2900 },
];

const pieData = [
  { name: "Engagement Shoot", value: 26, color: "#EC4899" },
  { name: "Premium Wedding", value: 18, color: "#DB2777" },
  { name: "Deluxe Wedding", value: 9, color: "#FDF2F8" },
  { name: "Basic Package", value: 35, color: "#FBCFE8" },
  { name: "Full Day Coverage", value: 13, color: "#F472B6" },
];


export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Quote Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Quote Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "#888" }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "#888" }}
                  ticks={[0, 7500, 15000, 22500, 30000]}
                />
                <Tooltip 
                  cursor={{ fill: "transparent" }}
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Bar 
                  dataKey="quotes" 
                  fill="#D32F6F" 
                  radius={[4, 4, 0, 0]} 
                  barSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Bookings Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "#888" }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "#888" }}
                  ticks={[0, 5, 10, 15, 20]}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="#D32F6F" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: "#D32F6F", strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Package Bookings Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Package Bookings Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-75 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            {/* Custom Labels to match image */}
            <div className="absolute inset-0 pointer-events-none flex flex-wrap items-center justify-center">
               {pieData.map((item, i) => (
                 <div key={i} className="absolute text-[10px] font-medium" style={{
                   transform: `rotate(${i * 72}deg) translate(120px) rotate(-${i * 72}deg)`,
                   color: item.color === "#FDF2F8" ? "#888" : item.color
                 }}>
                   {item.name}: {item.value}%
                 </div>
               ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Views */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-primary">Profile Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "#888" }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "#888" }}
                  ticks={[0, 750, 1500, 2250, 3000]}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#10B981" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
