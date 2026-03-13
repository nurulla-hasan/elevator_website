"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export function BoostCTA() {
  return (
    <Card className="border-none bg-linear-to-r from-primary to-pink-600 overflow-hidden">
      <CardContent className="p-12 flex flex-col items-center text-center space-y-6">
        <div className="p-3 bg-white/20 rounded-full">
          <TrendingUp className="h-8 w-8 text-white" />
        </div>
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl font-medium text-white">Ready to Grow Your Business?</h2>
          <p className="text-lg text-white/90 font-light leading-relaxed">
            Join thousands of successful vendors who have boosted their visibility and 
            increased bookings with our premium promotion options.
          </p>
        </div>
        <Button 
          variant="secondary" 
        >
          View All Plans
        </Button>
      </CardContent>
    </Card>
  );
}
