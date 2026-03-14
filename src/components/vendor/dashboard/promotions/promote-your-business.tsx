"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function PromoteYourBusiness() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <div className="space-y-1 pt-1">
          <CardTitle className="text-xl font-semibold leading-none">Promote Your Business</CardTitle>
          <p className="text-sm text-muted-foreground font-normal">Boost your visibility and get more bookings</p>
        </div>
      </CardHeader>
    </Card>
  );
}
