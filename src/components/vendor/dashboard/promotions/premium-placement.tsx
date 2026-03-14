"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const PREMIUM_ITEMS = [
  {
    title: "Homepage Featured",
    plans: [
      { duration: "7 Days", price: "PKR 5,000", tag: "Limited Slots" },
      { duration: "30 Days", price: "PKR 15,000", tag: "Limited Slots" },
    ],
  },
  {
    title: "Category Featured",
    plans: [
      { duration: "7 Days", price: "PKR 3,000", tag: "Limited Slots" },
      { duration: "30 Days", price: "PKR 10,000", tag: "Limited Slots" },
    ],
  },
];

export function PremiumPlacement() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div className="p-2 bg-muted rounded-lg">
          <Star className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-none">Premium Placement</CardTitle>
          <p className="text-sm text-muted-foreground font-normal">Featured positioning on key pages</p>
        </div>
      </CardHeader>
      <CardContent> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PREMIUM_ITEMS.map((item, index) => (
            <Card key={index} className="shadow-none border-border/40 bg-muted/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.plans.map((plan, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-background border border-border/40 rounded-xl">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-normal">{plan.duration}</p>
                      <p className="text-lg font-semibold text-primary">{plan.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        {plan.tag}
                      </span>
                      <Button size="xs">Buy Now</Button>
                    </div>
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
