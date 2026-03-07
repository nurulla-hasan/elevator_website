import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/ui/custom/page-layout";
import { Clock, DollarSign, Star, Heart } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Focus on enjoying your engagement while we handle vendor booking.",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Exclusive deals and discounts negotiated on your behalf.",
  },
  {
    icon: Star,
    title: "Expert Advice",
    description: "Professional guidance on selection, contracts, and budget.",
  },
  {
    icon: Heart,
    title: "Stress-Free",
    description: "Every detail managed by a dedicated wedding professional.",
  },
];

export function PricingBenefits() {
  return (
    <PageLayout >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 items-center text-center">
          <h3 className="text-3xl font-bold text-primary">
            The WePlan Advantage
          </h3>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            Discover how we make your wedding planning experience seamless, cost-effective, and truly memorable.
          </p>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center text-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-primary">{benefit.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
