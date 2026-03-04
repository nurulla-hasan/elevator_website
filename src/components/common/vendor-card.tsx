import Image from "next/image";
import { MapPin, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/custom/star-rating";
import { cn } from "@/lib/utils";
import { Vendor } from "@/types/vendor.type";
import Link from "next/link";

interface VendorCardProps {
  vendor: Vendor;
  className?: string;
  variant?: "vertical" | "horizontal";
}

export function VendorCard({
  vendor,
  className,
  variant = "vertical",
}: VendorCardProps) {
  if (variant === "horizontal") {
    return (
      <Card className={cn("overflow-hidden p-3", className)}>
        <div className="flex gap-4 items-center">
          {/* Image */}
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={vendor.image}
              alt={vendor.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
            <div className="space-y-1">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/15 border-none text-[10px] h-5 px-2"
              >
                {vendor.category}
              </Badge>
              <h3 className="text-base font-bold text-primary truncate">
                {vendor.name}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="text-[11px]">{vendor.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <StarRating rating={vendor.rating} totalStars={1} size={12} />
                <span className="text-[11px] font-bold">{vendor.rating}</span>
                <span className="text-[11px] text-muted-foreground">
                  ({vendor.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Action & Price */}
          <div className="flex flex-col items-end justify-between self-stretch">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full text-muted-foreground hover:text-primary"
            >
              <Heart />
            </Button>
            <div className="text-right">
              <span className="text-[10px] text-muted-foreground">
                Starting at
              </span>
              <p className="text-lg font-bold text-primary">{vendor.price}</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("pt-0 overflow-hidden group relative", className)}>
      <div className="relative aspect-5/3 w-full overflow-hidden">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {vendor.verified && (
          <div className="absolute top-3 left-3 z-10">
            <Badge
              variant="secondary"
              className="bg-green-500/90 backdrop-blur-sm text-white border-none flex items-center gap-1 py-1 px-2.5 shadow-lg"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Verified
              </span>
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary hover:text-destructive transition-colors"
          >
            <Heart />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge
            variant="secondary"
            className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground border-none"
          >
            {vendor.category}
          </Badge>
        </div>
      </div>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <StarRating rating={vendor.rating} totalStars={1} size={16} />
            <span className="text-sm font-bold">{vendor.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({vendor.reviews} reviews)
            </span>
          </div>
        </div>

        <h3 className="mb-2 text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {vendor.name}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs">{vendor.location}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
              Starting from
            </p>
            <p className="text-lg font-bold text-primary">{vendor.price}</p>
          </div>
          <Link href={`/vendors/1`} className="block">
            <Button size="sm" className="rounded-full px-5 font-semibold">
              Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
