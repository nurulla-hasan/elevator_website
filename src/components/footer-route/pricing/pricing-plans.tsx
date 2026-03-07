import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Support",
    price: "999",
    description:
      "Perfect for couples who need a head start with vendor selection.",
    features: [
      "Budget-based vendor shortlisting",
      "Quality & availability verification",
      "Initial vendor introductions",
      "Email coordination support",
      "Planning checklist & timeline",
    ],
    recommended: false,
    buttonText: "Start Planning",
  },
  {
    name: "Personal Concierge",
    price: "2499",
    description:
      "Our most popular plan for comprehensive support from start to finish.",
    features: [
      "Everything in Starter Support",
      "Dedicated associate assigned",
      "Vendor negotiation support",
      "In-app / WhatsApp Coordination",
      "Contract review & guidance",
      "Final curated booking package",
    ],
    recommended: true,
    buttonText: "Hire Associate Now",
  },
  {
    name: "Elite Experience",
    price: "4999",
    description:
      "Ultimate luxury planning with full-service management and on-site support.",
    features: [
      "Everything in Personal Concierge",
      "Priority 24/7 VIP support",
      "Unlimited vendor consultations",
      "On-site wedding day coordination",
      "RSVP & guest list management",
      "Post-wedding wrap-up services",
    ],
    recommended: false,
    buttonText: "Go Elite",
  },
];

export function PricingPlans() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 items-center text-center">
        <h3 className="text-3xl font-bold text-primary">
          Simple, Transparent Pricing
        </h3>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          Choose the perfect plan for your special day. No hidden fees, just
          expert support when you need it most.
        </p>
        <div className="h-1.5 w-16 bg-primary/20 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="relative group h-full">
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <Badge className="px-4 py-1 bg-primary text-xs text-primary-foreground font-bold shadow-xl shadow-primary/30 border-none">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  MOST POPULAR
                </Badge>
              </div>
            )}
            <Card
              className={cn(
                "h-full flex flex-col border transition-all duration-300 shadow-sm hover:shadow-md",
                plan.recommended
                  ? "border-primary shadow-primary/10 ring-1 ring-primary/20"
                  : "border-border",
              )}
            >
              <CardHeader className="space-y-4 text-center">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-sm min-h-12 leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-semibold">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">/event</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <div className="flex flex-col gap-4 w-full">
                  <Button
                    variant={plan.recommended ? "default" : "outline"}
                    size="lg"
                    className={cn(
                      "w-full uppercase group",
                      plan.recommended && "shadow-lg shadow-primary/20",
                    )}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground opacity-70">
                    Transparent pricing • No hidden fees
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
