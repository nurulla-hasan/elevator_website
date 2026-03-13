"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, BarChart3, Users, TrendingUp } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
  trend: string;
}

function StatItem({ icon: Icon, value, label, trend }: StatItemProps) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-2.5 bg-pink-50 rounded-lg">
            <Icon className="h-5 w-5 text-pink-500" />
          </div>
          <span className="text-sm font-medium text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
            {trend}
          </span>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-foreground">{value}</h3>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function AnalyticsStats() {
  const stats = [
    {
      icon: DollarSign,
      value: "PKR 121,500",
      label: "Total Revenue (6 months)",
      trend: "+23.5%",
    },
    {
      icon: BarChart3,
      value: "78",
      label: "Total Bookings",
      trend: "+18.2%",
    },
    {
      icon: Users,
      value: "12,150",
      label: "Profile Views",
      trend: "+34.7%",
    },
    {
      icon: TrendingUp,
      value: "6.4%",
      label: "Conversion Rate",
      trend: "+2.1%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}
