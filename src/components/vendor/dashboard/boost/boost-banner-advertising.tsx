"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, AlertTriangle, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

const BANNER_PRICING = [
  {
    category: "Homepage Banner",
    plans: [
      { id: "hp-7", duration: "7 Days", price: "PKR 8,000" },
      { id: "hp-30", duration: "30 Days", price: "PKR 25,000" },
    ],
  },
  {
    category: "Category Banner",
    plans: [
      { id: "cat-7", duration: "7 Days", price: "PKR 6,000" },
      { id: "cat-30", duration: "30 Days", price: "PKR 18,000" },
    ],
  },
];

export function BoostBannerAdvertising() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="p-2.5 bg-primary/10 rounded-xl">
          <Megaphone className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-semibold">Banner Advertising</CardTitle>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none text-[10px] font-semibold uppercase">
              Limited Slots
            </Badge>
          </div>
          <p className="text-sm font-medium text-primary/80 leading-none italic">Maximum brand exposure.</p>
          <p className="text-sm text-muted-foreground font-normal pt-1">
            Showcase your brand in high-visibility banner slots.
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BANNER_PRICING.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider px-1">
                {section.category}
              </h4>
              <div className="grid gap-3">
                {section.plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={cn(
                      "flex items-center justify-between p-4 border rounded-2xl transition-all relative overflow-hidden",
                      selectedPlan === plan.id
                        ? "bg-primary/5 border-primary shadow-sm ring-1 ring-primary/20"
                        : "bg-muted/30 border-border/40 hover:border-primary/30"
                    )}
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span className={cn(
                        "text-sm font-medium",
                        selectedPlan === plan.id ? "text-primary" : "text-muted-foreground"
                      )}>
                        {plan.duration}
                      </span>
                      <span className="text-lg font-semibold">{plan.price}</span>
                    </div>
                    {selectedPlan === plan.id && (
                      <div className="bg-primary/10 p-1.5 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scarcity Notice */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="text-sm font-semibold text-amber-900">Limited Slots Available</p>
            <p className="text-xs text-amber-800/80 font-normal">Only 2 per position. Book now to secure your spot.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button 
            disabled={!selectedPlan}
          >
            {selectedPlan ? "Book Selected Slot" : "Select a Plan"}
          </Button>
          <Button 
            variant="outline" 
            disabled={!selectedPlan}
          >
            <Calendar className="mr-2 h-4 w-4" /> Check Availability
          </Button>
          {/* <Button 
            variant="ghost" 
            disabled={!selectedPlan}
          >
            Join Waiting List
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}
