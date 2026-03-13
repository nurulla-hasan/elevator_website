"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MessageSquare, Star, Target } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  badgeText: string;
}

function FeatureCard({ icon: Icon, title, description, badgeText }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardContent className="space-y-6 flex flex-col items-center">
        <div className="p-4 bg-pink-50 rounded-full">
          <Icon className="h-6 w-6 text-pink-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <Badge variant="secondary" className="bg-pink-50 text-pink-600 hover:bg-pink-100 border-none font-medium px-4 py-1">
          {badgeText}
        </Badge>
      </CardContent>
    </Card>
  );
}

export function BoostFeatures() {
  const features = [
    {
      icon: Eye,
      title: "Increase Profile Views",
      description: "Get up to 5x more profile views with featured placement",
      badgeText: "+400% visibility",
    },
    {
      icon: MessageSquare,
      title: "More Inquiries",
      description: "Receive higher quality leads from engaged couples",
      badgeText: "+250% leads",
    },
    {
      icon: Star,
      title: "Priority Ranking",
      description: "Appear at the top of search results in your category",
      badgeText: "Top 3 position",
    },
    {
      icon: Target,
      title: "Featured Badge",
      description: "Stand out with exclusive featured vendor badges",
      badgeText: "Premium badge",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}
