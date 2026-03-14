"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const BOOST_PLANS = [
  {
    price: "PKR 3,500",
    duration: "7 Days",
    features: [
      "Top listing placement",
      "Higher search ranking",
      "Priority in similar vendors",
      "Auto-expiry after duration",
    ],
    isPopular: false,
  },
  {
    price: "PKR 7,000",
    duration: "30 Days",
    features: [
      "Top listing placement",
      "Higher search ranking",
      "Priority in similar vendors",
      "Auto-expiry after duration",
    ],
    isPopular: true,
  },
  {
    price: "PKR 18,000",
    duration: "90 Days",
    features: [
      "Top listing placement",
      "Higher search ranking",
      "Priority in similar vendors",
      "Auto-expiry after duration",
    ],
    isPopular: false,
  },
];

export function SponsoredVisibilityBoost() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div className="p-2 bg-muted rounded-lg">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-none">Sponsored Visibility Boost</CardTitle>
          <p className="text-sm text-muted-foreground font-normal">Get top placement and higher search ranking</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOOST_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative flex flex-col items-center p-6 border rounded-2xl transition-all",
                plan.isPopular 
                  ? "border-primary shadow-[0_0_0_1px_rgba(var(--primary),1)] scale-[1.02] z-10" 
                  : "border-border/60"
              )}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary px-4 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center space-y-1 mb-6">
                <p className="text-2xl font-bold text-primary">{plan.price}</p>
                <p className="text-sm text-muted-foreground font-normal">{plan.duration}</p>
              </div>

              <div className="w-full space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-sm text-muted-foreground font-normal leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? "default" : "secondary"} 
                className={cn("w-full rounded-xl font-bold", !plan.isPopular && "bg-muted hover:bg-muted/80")}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
