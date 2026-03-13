"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating } from "@/components/ui/custom/star-rating";
import { MessageCircle } from "lucide-react";

interface ReviewResponse {
  author: string;
  content: string;
}

interface Review {
  id: string;
  userName: string;
  userInitials: string;
  date: string;
  rating: number;
  content: string;
  packageName: string;
  response?: ReviewResponse;
}

const reviews: Review[] = [
  {
    id: "1",
    userName: "Sarah Johnson",
    userInitials: "SJ",
    date: "2/10/2026",
    rating: 5,
    content: "Absolutely amazing experience! The photographer was professional, creative, and captured every special moment perfectly. Our wedding photos are stunning and we couldn't be happier!",
    packageName: "Premium Wedding Package",
  },
  {
    id: "2",
    userName: "Michael Chen",
    userInitials: "MC",
    date: "2/8/2026",
    rating: 5,
    content: "Professional and friendly service. Made us feel comfortable during the shoot and delivered beautiful photos ahead of schedule.",
    packageName: "Engagement Shoot",
    response: {
      author: "Vendor Response",
      content: "Thank you so much for your kind words! It was a pleasure working with you both.",
    },
  },
  {
    id: "3",
    userName: "Emily Rodriguez",
    userInitials: "ER",
    date: "2/5/2026",
    rating: 4,
    content: "Great photographer with excellent technical skills. Very happy with the results. Only minor issue was a slight delay in delivery, but the quality made up for it.",
    packageName: "Full Day Coverage",
  },
  {
    id: "4",
    userName: "David Kim",
    userInitials: "DK",
    date: "1/28/2026",
    rating: 5,
    content: "Exceeded all our expectations! Beautiful photos, professional service, and great value for money.",
    packageName: "Basic Package",
    response: {
      author: "Vendor Response",
      content: "We're thrilled you loved your photos! Thank you for choosing us.",
    },
  },
];

export function ReviewList() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-primary">Recent Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b last:border-0 pb-8 last:pb-0 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-primary/10">
                  <AvatarFallback className="bg-primary text-white font-medium">
                    {review.userInitials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <h4 className="font-medium text-foreground">{review.userName}</h4>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <Badge variant="muted" className="font-normal text-muted-foreground rounded-full border-muted-foreground/20 px-3">
                {review.packageName}
              </Badge>
            </div>

            <StarRating rating={review.rating} totalStars={5} size={14} gap={1} />

            <p className="text-sm text-muted-foreground leading-relaxed">
              {review.content}
            </p>

            {!review.response ? (
              <Button variant="ghost" size="sm" className="h-auto p-0 text-primary hover:text-primary/80 hover:bg-transparent flex items-center gap-2 text-xs font-medium">
                <MessageCircle className="h-3.5 w-3.5" />
                Respond
              </Button>
            ) : (
              <div className="bg-muted/30 rounded-xl p-4 space-y-2 border border-muted/50">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                    V
                  </div>
                  <span className="text-xs font-medium text-foreground">{review.response.author}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-8">
                  {review.response.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
