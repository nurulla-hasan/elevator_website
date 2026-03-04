import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating } from "@/components/ui/custom/star-rating";
import { VendorReview } from "@/types/vendor.type";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface VendorReviewsProps {
  reviews: VendorReview[];
  totalReviews: number;
}

export const VendorReviews = ({ reviews, totalReviews }: VendorReviewsProps) => {
  // Calculate average rating (mock logic for summary)
  const averageRating = 4.9;
  const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="space-y-6">
      {/* Rating Summary Card */}
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Average Rating */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-2 border-border md:border-r">
              <span className="text-5xl font-black text-foreground">{averageRating}</span>
              <StarRating totalStars={5} rating={averageRating} size={20} />
              <p className="text-xs font-medium text-muted-foreground">Based on {totalReviews} reviews</p>
            </div>

            {/* Breakdown Bars */}
            <div className="md:col-span-8 space-y-2.5">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-foreground min-w-12">{item.stars} Stars</span>
                  {/* Simple Progress Bar using Tailwind */}
                  <div className="h-1.5 flex-1 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground min-w-10 text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center">
            User Reviews
            <Badge variant="secondary" className="text-xs ml-2">
              {totalReviews}
            </Badge>
          </CardTitle>
        <Separator />
        </CardHeader>
        {reviews.map((review) => (
          <CardContent key={review.id} className="space-y-3">
            <div className="space-y-3">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border border-border">
                    <AvatarFallback className="bg-muted text-foreground text-xs font-bold">
                      {review.userName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-foreground text-sm leading-none">{review.userName}</h4>
                    <div className="flex items-center gap-2">
                      <StarRating totalStars={5} rating={review.rating} size={11} />
                      <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {review.comment}
              </p>
            </div>
            <Separator />
          </CardContent>
        ))}
      </Card>
    </div>
  );
};