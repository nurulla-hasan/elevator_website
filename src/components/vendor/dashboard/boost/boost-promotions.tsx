"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Crown, Share2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromotionPlanProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const planStyles: Record<
  string,
  {
    color: string;
    button: string;
    iconBg: string;
    border?: string;
  }
> = {
  "Featured Listing": {
    color: "text-[#F97316]",
    button: "bg-[#F97316] hover:bg-[#EA580C] text-white",
    iconBg: "bg-orange-50",
  },
  "Premium Placement": {
    color: "text-[#8B5CF6]",
    button: "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white",
    iconBg: "bg-purple-50",
    border: "border-[#8B5CF6]",
  },
  "Sponsored Posts": {
    color: "text-[#1D4ED8]",
    button: "bg-[#1D4ED8] hover:bg-[#1E40AF] text-white",
    iconBg: "bg-blue-50",
  },
};

function PromotionPlan({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
  isPopular,
}: PromotionPlanProps) {
  const styles = planStyles[title] || {
    color: "text-primary",
    button: "bg-primary text-primary-foreground",
    iconBg: "bg-primary/10",
  };

  return (
    <div className="relative h-full">
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#7C2D12] text-white text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}
      <Card
        className={cn(
          "h-full flex flex-col",
          isPopular && styles.border ? styles.border : "",
        )}
      >
        <CardHeader className="space-y-4">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              styles.iconBg,
            )}
          >
            <Icon className={cn("h-6 w-6", styles.color)} />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl font-medium text-foreground">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col space-y-6">
          <ul className="space-y-3 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className={cn("h-4 w-4 mt-0.5 shrink-0", styles.color)}
                />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className={cn(
              "w-full flex items-center justify-center gap-2 font-medium transition-colors hover:text-background",
              styles.button,
            )}
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function BoostPromotions() {
  const plans = [
    {
      icon: Star,
      title: "Featured Listing",
      description: "Appear in the featured vendors section on homepage",
      features: [
        "Homepage featured section placement",
        "Category page top banner",
        "Enhanced profile styling",
        "Priority in search results",
      ],
      buttonText: "View Plans",
    },
    {
      icon: Crown,
      title: "Premium Placement",
      description: "Top position in all search results and category listings",
      features: [
        "All Featured Listing benefits",
        "Guaranteed top 3 search position",
        "Premium vendor badge",
        "Advanced analytics dashboard",
        "Priority customer support",
      ],
      buttonText: "View Plans",
      isPopular: true,
    },
    {
      icon: Share2,
      title: "Sponsored Posts",
      description: "Promote specific packages or offers to targeted audience",
      features: [
        "Highlight special packages",
        "Targeted promotion to couples",
        "Social media integration",
        "Performance tracking",
      ],
      buttonText: "View Plans",
    },
  ];

  return (
    <Card>
      <CardContent className="space-y-4">
        <h1 className="text-2xl font-medium text-foreground">
          Choose Your Promotion Type
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PromotionPlan key={index} {...plan} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
