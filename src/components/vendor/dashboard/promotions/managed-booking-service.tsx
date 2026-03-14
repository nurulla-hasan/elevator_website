"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const BOOKING_OPTIONS = [
  {
    option: "Option A",
    price: "PKR 4,000",
    description: "Flat Fee per Month",
    content: "Pay a fixed monthly fee and get dedicated booking management support for all your leads and bookings.",
    isPopular: false,
  },
  {
    option: "Option B",
    price: "5-10%",
    description: "Commission per Booking",
    content: "Pay only when you get confirmed bookings. Commission ranges from 5% to 10% based on booking value.",
    isPopular: true,
  },
];

export function ManagedBookingService() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div className="p-2 bg-muted rounded-lg">
          <Headphones className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-none">Managed Booking Service</CardTitle>
          <p className="text-sm text-muted-foreground font-normal">Let our associates handle your bookings</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BOOKING_OPTIONS.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center p-8 border rounded-2xl transition-all",
                item.isPopular ? "border-primary" : "border-border/60"
              )}
            >
              <div className="text-center space-y-1 mb-6">
                <p className="text-sm text-muted-foreground font-normal">{item.option}</p>
                <p className="text-3xl font-semibold text-primary">{item.price}</p>
                <p className="text-sm text-muted-foreground font-normal">{item.description}</p>
              </div>

              <div className="bg-muted/30 p-4 rounded-xl mb-8 flex-1">
                <p className="text-sm text-muted-foreground font-normal leading-relaxed text-center">
                  {item.content}
                </p>
              </div>

              <Button className="w-full">
                Request Associate Support
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
