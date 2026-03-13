"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PackageData {
  rank: number;
  name: string;
  bookings: number;
  revenue: string;
}

const packages: PackageData[] = [
  {
    rank: 1,
    name: "Premium Wedding",
    bookings: 45,
    revenue: "PKR 157,500",
  },
  {
    rank: 2,
    name: "Engagement Shoot",
    bookings: 67,
    revenue: "PKR 199,325",
  },
  {
    rank: 3,
    name: "Full Day Coverage",
    bookings: 32,
    revenue: "PKR 78,400",
  },
  {
    rank: 4,
    name: "Basic Package",
    bookings: 89,
    revenue: "PKR 171,325",
  },
  {
    rank: 5,
    name: "Deluxe Wedding",
    bookings: 23,
    revenue: "PKR 32,200",
  },
];


export function TopPackages() {
  return (
    <Card className="border border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-primary">Top Performing Packages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {packages.map((pkg) => {
          return (
            <div key={pkg.rank} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm`}>
                  #{pkg.rank}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-medium text-foreground">{pkg.name}</h4>
                  <p className="text-xs text-muted-foreground">{pkg.bookings} bookings</p>
                </div>
              </div>
              <div className="text-right space-y-0.5">
                <p className="font-medium text-foreground">{pkg.revenue}</p>
                <p className="text-xs text-muted-foreground">Revenue</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
