import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Venue } from "@/types/venue.type";
import Link from "next/link";
import { StarRating } from "@/components/ui/custom/star-rating";

interface VenueCardProps {
  venue: Venue;
  className?: string;
  variant?: "vertical" | "horizontal";
}

export function VenueCard({
  venue,
  className,
  variant = "vertical",
}: VenueCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={`/venues/${venue.id}`} className={className}>
        <Card className="overflow-hidden p-3 hover:shadow-md transition-all duration-300 border border-border/50 group relative">
          <div className="flex gap-4 items-center">
            {/* Image */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                // sizes="96px"
              />
              {/* Primary Linear Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
              <div className="space-y-1">
                <h3 className="text-base font-semibold truncate leading-tight">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin size={14} className="shrink-0" />
                  <span className="text-[11px] font-medium line-clamp-1">
                    {venue.location}
                  </span>
                </div>
                {venue.description && (
                  <p className="text-[10px] text-muted-foreground line-clamp-1 border-l border-primary/20 pl-1.5 mt-1">
                    {venue.description}
                  </p>
                )}
                <div className="flex items-center gap-1 mt-1">
                  <StarRating rating={venue.rating} totalStars={1} size={12} />
                  <span className="text-[11px] font-semibold text-foreground">
                    {venue.rating}
                  </span>
                  {venue.reviews && (
                    <span className="text-[11px] text-muted-foreground">
                      ({venue.reviews} reviews)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action & Price */}
            <div className="flex flex-col items-end justify-between self-stretch">
              {venue.distance && (
                <div className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  <span className="text-[10px] font-bold whitespace-nowrap">
                    {venue.distance}
                  </span>
                </div>
              )}
              <div className="text-right">
                <p className="font-semibold text-sm">{venue.price}</p>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/venues/${venue.id}`} className={className}>
      <Card className="pt-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Primary Linear Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
          
          {venue.distance && (
            <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
              {venue.distance}
            </div>
          )}
        </div>
        <CardContent>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold truncate line-clamp-1">
              {venue.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 ml-2 mt-1">
              <StarRating rating={venue.rating} totalStars={1} size={16} />
              <span className="text-sm font-semibold text-foreground">
                {venue.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-sm font-medium truncate line-clamp-1">{venue.location}</span>
          </div>

          {venue.description && (
            <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed border-l-2 border-primary/20 pl-2">
              {venue.description}
            </p>
          )}

          <div className="border-t border-border pt-4 mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={18} />
              <span className="text-sm font-medium">{venue.capacity}</span>
            </div>
            <span className="text-sm font-semibold">
              {venue.price}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
