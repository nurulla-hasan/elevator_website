import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/ui/custom/page-layout";
import { Clock, DollarSign, Star, Heart, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Focus on enjoying your engagement while we handle vendor booking.",
    highlighted: false,
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Exclusive deals and discounts negotiated on your behalf.",
    highlighted: true,
  },
  {
    icon: Star,
    title: "Expert Advice",
    description: "Professional guidance on selection, contracts, and budget.",
    highlighted: false,
  },
  {
    icon: Heart,
    title: "Stress-Free",
    description: "Every detail managed by a dedicated wedding professional.",
    highlighted: false,
  },
];

export function PricingBenefits() {
  return (
    <PageLayout >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary">
            The WePlan Advantage
          </h3>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            Discover how we make your wedding planning experience seamless, cost-effective, and truly memorable.
          </p>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              {benefit.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge>
                    <TrendingDown className="h-3 w-3" />
                    BEST VALUE
                  </Badge>
                </div>
              )}
              <Card 
                className={cn(
                  "transition-all duration-300 h-full",
                  benefit.highlighted 
                    ? "border-primary/50 shadow-xl shadow-primary/5 bg-primary/2 ring-1 ring-primary/20 scale-105" 
                    : "hover:border-primary/30"
                )}
              >
                <CardContent className="flex flex-col items-center text-center gap-3 p-6">
                  <div className={cn(
                    "p-2.5 rounded-lg transition-all shadow-sm",
                    benefit.highlighted 
                      ? "bg-primary text-primary-foreground shadow-primary/20" 
                      : "bg-primary/10 text-primary"
                  )}>
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={cn(
                      "font-bold",
                      benefit.highlighted ? "text-primary text-base" : "text-primary/90 text-sm"
                    )}>
                      {benefit.title}
                    </h4>
                    <p className={cn(
                      "text-xs font-medium leading-relaxed",
                      benefit.highlighted ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
