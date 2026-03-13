"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { StarRating } from "@/components/ui/custom/star-rating";

interface RatingRowProps {
  rating: number;
  count: number;
  total: number;
}

function RatingRow({ rating, count, total }: RatingRowProps) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-4 group">
      <div className="flex items-center gap-1 w-6">
        <span className="text-sm font-medium text-muted-foreground">{rating}</span>
        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
      </div>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground w-8 text-right">
        {count}
      </span>
    </div>
  );
}

export function ReviewStats() {
  const ratings = [
    { rating: 5, count: 142 },
    { rating: 4, count: 12 },
    { rating: 3, count: 2 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ];

  const totalReviews = ratings.reduce((acc, curr) => acc + curr.count, 0);
  const averageRating = 4.9;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Average Rating Card */}
      <Card className="flex flex-col items-center justify-center">
        <CardContent className="flex flex-col items-center gap-3">
          <h2 className="text-6xl font-medium text-foreground">{averageRating}</h2>
          <StarRating rating={averageRating} totalStars={5} size={20} gap={1} />
          <p className="text-sm text-muted-foreground">Based on {totalReviews} reviews</p>
        </CardContent>
      </Card>

      {/* Rating Distribution Card */}
      <Card className="md:col-span-2">
        <CardContent className="space-y-4">
          <h3 className="text-lg font-medium text-primary">Rating Distribution</h3>
          <div className="space-y-3">
            {ratings.map((item) => (
              <RatingRow
                key={item.rating}
                rating={item.rating}
                count={item.count}
                total={totalReviews}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
