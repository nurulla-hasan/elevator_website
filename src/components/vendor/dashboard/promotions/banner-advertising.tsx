"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";

const BANNER_ITEMS = [
  {
    title: "Homepage Top Banner",
    plans: [
      { duration: "7 Days", price: "PKR 8,000", tag: "Only 2 Slots Available" },
      { duration: "30 Days", price: "PKR 25,000", tag: "Only 2 Slots Available" },
    ],
  },
  {
    title: "Category Page Banner",
    plans: [
      { duration: "7 Days", price: "PKR 6,000", tag: "Only 2 Slots Available" },
      { duration: "30 Days", price: "PKR 18,000", tag: "Only 2 Slots Available" },
    ],
  },
];

export function BannerAdvertising() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div className="p-2 bg-muted rounded-lg">
          <Megaphone className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-none">Banner Advertising</CardTitle>
          <p className="text-sm text-muted-foreground font-normal">Premium banner placement for maximum visibility</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BANNER_ITEMS.map((item, index) => (
            <Card key={index} className="shadow-none border-border/40 bg-muted/10">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.plans.map((plan, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-4 bg-background border border-border/40 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-normal">{plan.duration}</p>
                        <p className="text-lg font-semibold text-primary">{plan.price}</p>
                      </div>
                      <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded">
                        {plan.tag}
                      </span>
                    </div>
                    <Button size="sm" className="w-full rounded-lg h-9 font-semibold">Buy Now</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
