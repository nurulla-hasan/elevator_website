"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Ribbon } from "lucide-react";

interface StoryProps {
  initial: string;
  name: string;
  stat: string;
  content: string;
}

function SuccessStoryCard({ initial, name, stat, content }: StoryProps) {
  return (
    <Card className="border-none shadow-none bg-pink-50/50 rounded-xl">
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-medium">
            {initial}
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-medium text-foreground">{name}</h4>
            <p className="text-xs text-pink-600 font-medium">{stat}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground italic leading-relaxed">
          &quot;{content}&quot;
        </p>
      </CardContent>
    </Card>
  );
}

export function BoostSuccessStories() {
  const stories = [
    {
      initial: "E",
      name: "Elegant Moments Photography",
      stat: "+300% bookings",
      content: "Since upgrading to Premium, our bookings increased by 300%. Best investment we made!",
    },
    {
      initial: "B",
      name: "Blooming Designs Florist",
      stat: "+500% leads",
      content: "Featured placement helped us reach couples we never could before. Worth every penny.",
    },
    {
      initial: "D",
      name: "Dream Venues LA",
      stat: "$150K revenue",
      content: "The ROI on premium placement is incredible. We booked our entire season in 2 months.",
    },
  ];

  return (
    <Card>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-3">
          <Ribbon className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-medium text-foreground">Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <SuccessStoryCard key={index} {...story} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
