"use client";

import { CheckCircle2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SettingsSponsoredAds() {
  const benefits = [
    "Priority listing in search results",
    "Featured on homepage banner",
    "Highlighted vendor badge",
    "Increased profile views",
  ];

  const stats = [
    { label: "Active Days", value: "0" },
    { label: "Additional Views", value: "0" },
    { label: "Extra Leads", value: "0" },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Banner Section */}
      <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative shadow-none">
        <CardContent className="p-8 space-y-6 relative z-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium">Boost Your Visibility</h2>
            <p className="text-primary-foreground/90 text-lg font-normal">
              Get featured on homepage and reach 10x more customers
            </p>
          </div>

          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-primary-foreground/90 font-normal">
                <CheckCircle2 className="h-5 w-5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <Button variant="secondary" size="lg">
            Upgrade to Sponsored
          </Button>
        </CardContent>
        
        {/* Background Icon Decoration */}
        <TrendingUp className="absolute -right-5 -bottom-5 h-64 w-64 text-white/10 -rotate-12 z-0" />
      </Card>

      {/* Ad Status Section */}
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-primary font-medium">Current Ad Status</CardTitle>
          <div className="flex flex-col space-y-4">
            <div>
              <Badge variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted font-normal px-3 py-1 text-sm rounded-full">
                Not Active
              </Badge>
            </div>
            <p className="text-muted-foreground text-base font-normal">
              You currently don&apos;t have any active sponsored ads. Upgrade now to increase your visibility and get more leads.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-none border-border/50">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-3xl font-medium text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground font-normal">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
