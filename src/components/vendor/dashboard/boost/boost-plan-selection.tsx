"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import DashboardHeader from "@/components/ui/custom/dashboard-header";

interface PlanOption {
  id: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: string;
  dailyRate: string;
  isPopular?: boolean;
}

export interface BoostTheme {
  primary: string;
  hoverPrimary: string;
  secondary: string;
  bg: string;
  border: string;
  hoverBorder: string;
  text: string;
  light: string;
  muted: string;
  accent: string;
}

export interface BoostPlanSelectionProps {
  planType: string;
  onBack: () => void;
  theme: BoostTheme;
}

const plans: PlanOption[] = [
  {
    id: "1-week",
    duration: "1 Week",
    price: 199,
    originalPrice: 299,
    discount: "33% OFF",
    dailyRate: "$28.43/day",
  },
  {
    id: "1-month",
    duration: "1 Month",
    price: 599,
    originalPrice: 899,
    discount: "33% OFF",
    dailyRate: "$19.97/day",
    isPopular: true,
  },
  {
    id: "3-months",
    duration: "3 Months",
    price: 1599,
    originalPrice: 2399,
    discount: "33% OFF",
    dailyRate: "$17.77/day",
  },
  {
    id: "12-months",
    duration: "12 Months",
    price: 4999,
    originalPrice: 7999,
    discount: "38% OFF",
    dailyRate: "$13.70/day",
  },
];

const features = [
  "All Featured Listing benefits included",
  "Guaranteed top 3 search position",
  "Premium vendor badge and styling",
  "Advanced analytics with competitor insights",
  "Up to 5x more profile views",
  "Priority customer support (24/7)",
  "Lead generation tools",
  "Monthly performance reports",
  "Social media promotion kit",
];

const roiStats = [
  { label: "More Views", value: "+300%" },
  { label: "More Leads", value: "+250%" },
  { label: "More Bookings", value: "+180%" },
];

export const defaultThemes: Record<string, BoostTheme> = {
  orange: {
    primary: "bg-orange-600",
    hoverPrimary: "hover:bg-orange-700",
    secondary: "bg-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-600",
    text: "text-orange-600",
    light: "bg-orange-50/50",
    muted: "text-orange-800",
    accent: "bg-orange-100",
  },
  purple: {
    primary: "bg-purple-600",
    hoverPrimary: "hover:bg-purple-700",
    secondary: "bg-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    hoverBorder: "hover:border-purple-600",
    text: "text-purple-600",
    light: "bg-purple-50/50",
    muted: "text-purple-800",
    accent: "bg-purple-100",
  },
  blue: {
    primary: "bg-blue-600",
    hoverPrimary: "hover:bg-blue-700",
    secondary: "bg-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-600",
    text: "text-blue-600",
    light: "bg-blue-50/50",
    muted: "text-blue-800",
    accent: "bg-blue-100",
  },
};

export function BoostPlanSelection({ planType, onBack, theme }: BoostPlanSelectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanOption>(plans[1]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Promotions
        </button>
        
        <div className="flex items-center gap-4">
          <DashboardHeader 
            title={`${planType} Plans`}
            description="Choose the perfect plan to boost your visibility and grow your business"
          />
        </div>
      </div>

      {/* Offer Banner */}
      <div className={cn("border rounded-xl px-4 py-3 flex items-center gap-3 w-fit", theme.light, theme.border)}>
        <Zap className="h-4 w-4 text-orange-500 fill-orange-500" />
        <p className={cn("text-xs font-medium", theme.muted)}>
          Limited Time Offer: Save up to 50% on annual plans!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Plan Cards Grid */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-medium text-foreground">Select Your Plan Duration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div key={plan.id} className="relative group">
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className={cn("text-white text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider shadow-sm", theme.primary)}>
                      Most Popular
                    </span>
                  </div>
                )}
                <Card 
                  className={cn(
                    "cursor-pointer transition-all duration-300 border-2",
                    selectedPlan.id === plan.id 
                      ? cn(theme.border.replace("-200", "-600"), theme.light, "shadow-md") 
                      : "border-border/50 shadow-sm",
                    theme.hoverBorder
                  )}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Calendar className={cn("h-4 w-4", theme.text)} />
                        <span className="font-medium text-foreground">{plan.duration}</span>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none font-medium">
                        {plan.discount}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-medium text-foreground">${plan.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${plan.originalPrice}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{plan.dailyRate}</p>
                    </div>

                    {selectedPlan.id === plan.id && (
                      <div className={cn("flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-medium animate-in zoom-in-95 duration-200", theme.text, theme.light)}>
                        <CheckCircle2 className="h-4 w-4" />
                        Selected
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Features List */}
          <Card className="border border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-foreground">What&apos;s Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className={cn("h-5 w-5 shrink-0 mt-0.5", theme.text)} />
                    <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* ROI Section */}
          <Card className="border border-border/50 shadow-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-foreground">Expected ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {roiStats.map((stat, index) => (
                  <div key={index} className="text-center space-y-1">
                    <p className={cn("text-2xl font-medium", theme.text)}>{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary Sidebar */}
        <div className="space-y-6">
          <Card className="border border-border/50 shadow-lg sticky top-8 overflow-hidden">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-lg font-medium text-foreground">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Promotion Type</span>
                  <span className="font-medium text-foreground">{planType}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium text-foreground">{selectedPlan.duration}</span>
                </div>
                <div className="h-px bg-border/50" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Original Price</span>
                  <span className="text-foreground line-through">${selectedPlan.originalPrice}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Discount ({selectedPlan.discount})</span>
                  <span className="text-emerald-600 font-medium">-${selectedPlan.originalPrice - selectedPlan.price}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-foreground">Total</span>
                  <span className={cn("text-2xl font-medium", theme.text)}>${selectedPlan.price}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button variant="outline" className={cn("w-full text-background hover:text-background font-medium group", theme.primary, theme.hoverPrimary)}>
                  Continue to Payment
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  <ShieldCheck className="h-3 w-3" />
                  Secure payment • Cancel anytime
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
