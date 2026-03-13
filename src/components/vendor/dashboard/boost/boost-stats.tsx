"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatItemProps {
  label: string;
  value: string;
  isPrimary?: boolean;
}

function StatItem({ label, value, isPrimary }: StatItemProps) {
  return (
    <div className="space-y-1 border-r">
      <h3 className={`text-2xl font-semibold ${isPrimary ? "text-pink-600" : "text-foreground"}`}>
        {value}
      </h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function BoostStats() {
  const stats = [
    { label: "Profile Views", value: "1,245" },
    { label: "Inquiries", value: "38" },
    { label: "Bookings", value: "12" },
    { label: "Revenue", value: "$28,500", isPrimary: true },
    { label: "Avg Rating", value: "4.8" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-medium text-foreground">Your Current Performance</CardTitle>
        <p className="text-sm text-muted-foreground">Last 30 days • Standard Plan</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
