"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Crown, Share2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

interface PromotionPlanProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  slug: string;
  tag?: string;
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
  "Sponsored Listing": {
    color: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700 text-white",
    iconBg: "bg-orange-50",
  },
  "🛡 Verified Vendor": {
    color: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700 text-white",
    iconBg: "bg-purple-50",
    border: "border-purple-600",
  },
  "Featured Placement": {
    color: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    iconBg: "bg-blue-50",
  },
};

function PromotionPlan({
  icon: Icon,
  title,
  description,
  features,
  buttonText,
  slug,
  tag,
  isPopular,
}: PromotionPlanProps) {
  const router = useRouter();
  const styles = planStyles[title] || {
    color: "text-primary",
    button: "bg-primary text-primary-foreground",
    iconBg: "bg-primary/10",
  };

  return (
    <div className="relative h-full">
      {(isPopular || tag) && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <span className="bg-orange-900 text-white text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider">
            {tag || "Most Popular"}
          </span>
        </div>
      )}
      <Card
        className={cn(
          "h-full flex flex-col",
          styles.border ? styles.border : "",
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
            onClick={() => router.push(`/vendor/dashboard/boost/${slug}`)}
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
      title: "Sponsored Listing",
      slug: "sponsored-listing",
      description:
        "Get seen first. Get booked faster. Boost your ranking in listings, search results, and similar vendors.",
      features: [
        "Top placement",
        "Search priority",
        "Auto-expiry",
        "Higher visibility than regular vendors",
        "7 Days – PKR 3,500",
        "30 Days – PKR 7,000",
        "90 Days – PKR 18,000",
      ],
      buttonText: "Boost My Visibility",
      tag: "Most Popular",
    },
    {
      icon: Crown,
      title: "🛡 Verified Vendor",
      slug: "verified-vendor",
      description:
        "Build trust. Increase bookings. Stand out with an official verified badge and appear in verified filters.",
      features: [
        "Verified badge on profile",
        "Appears in “Verified” filter",
        "Higher client trust",
        "Better conversion rate",
        "Annual Plan – PKR 20,000",
      ],
      buttonText: "Get Verified",
      tag: "High Trust",
    },
    {
      icon: Share2,
      title: "Featured Placement",
      slug: "featured-placement",
      description:
        "Premium spotlight position. Appear in premium sections on homepage or category pages.",
      features: [
        "Homepage spotlight",
        "Category page premium section",
        "Select placement",
        "Premium Spot",
        "Homepage: 7 Days – PKR 5,000",
        "Homepage: 30 Days – PKR 15,000",
        "Category: 7 Days – PKR 3,000",
        "Category: 30 Days – PKR 10,000",
      ],
      buttonText: "Feature Me Now",
      tag: "Premium Spot",
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
            <PromotionPlan
              key={index}
              {...plan}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
