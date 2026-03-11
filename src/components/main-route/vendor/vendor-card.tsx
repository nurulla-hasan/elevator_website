"use client";
import Image from "next/image";
import { MapPin, Heart, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/custom/star-rating";
import { cn } from "@/lib/utils";
import { Vendor } from "@/types/vendor.type";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface VendorCardProps {
  vendor: Vendor;
  className?: string;
  variant?: "vertical" | "horizontal";
  showSponsored?: boolean;
}

export function VendorCard({
  vendor,
  className,
  variant = "vertical",
  showSponsored = true,
}: VendorCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={`/vendors/1`}>
        <Card className={cn("overflow-hidden p-3 group relative", className)}>
          <div className="flex gap-4 items-center">
            {/* Image */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={vendor.image}
                alt={vendor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Primary Linear Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
              {vendor.sponsored && showSponsored && (
                <div className="absolute top-1 left-1 z-10">
                  <Badge
                    variant="secondary"
                    className="bg-primary/90 backdrop-blur-sm text-white border-none flex items-center gap-1 py-0.5 px-1.5 shadow-lg w-fit text-[8px] h-4"
                  >
                    <Flame className="h-2.5 w-2.5 fill-current" />
                    <span className="tracking-wider">
                      Sponsored
                    </span>
                  </Badge>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/15 border-none text-[10px] h-5 px-2"
                  >
                    {vendor.category}
                  </Badge>
                  {vendor.verified && (
                    <div className="relative h-4 w-10">
                      <Image
                        src="/home/v.png"
                        alt="Verified"
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-base font-semibold truncate">
                  {vendor.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-1">
                  <MapPin className="h-3 w-3" />
                  <span className="text-[11px]">{vendor.location}</span>
                </div>
                {vendor.description && (
                  <p className="text-[10px] text-muted-foreground line-clamp-1 border-l border-primary/20 pl-1.5 mb-1">
                    {vendor.description}
                  </p>
                )}
                <div className="flex items-center gap-1">
                  <StarRating rating={vendor.rating} totalStars={1} size={12} />
                  <span className="text-[11px] font-semibold">{vendor.rating}</span>
                  <span className="text-[11px] text-muted-foreground">
                    ({vendor.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Action & Price */}
            <div className="flex flex-col items-end justify-between self-stretch">
              <Button
                size="icon-sm"
                variant="outline"
                className="rounded-full bg-primary/10 text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart />
              </Button>
              <div className="text-right">
                <span className="text-[10px] text-muted-foreground">
                  Starting at
                </span>
                <p className="text-sm font-semibold">{vendor.price}</p>
              </div>
            </div>
          </div>
        </Card>
      </Link>
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
        {/* Primary Linear Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {vendor.sponsored && showSponsored && (
            <Badge
              variant="secondary"
              className="bg-primary/90 backdrop-blur-sm text-white border-none flex items-center gap-1 py-1 px-2.5 shadow-lg w-fit"
            >
              <Flame className="h-3.5 w-3.5 fill-current" />
              <span className="text-[10px] tracking-wider">
                Sponsored
              </span>
            </Badge>
          )}
        </div>
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
            <span className="text-sm font-semibold">{vendor.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({vendor.reviews} reviews)
            </span>
          </div>
          {vendor.verified && (
            <div className="relative h-4 w-10">
              <Image
                src="/home/v.png"
                alt="Verified"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>

        <h3 className="mb-1 text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {vendor.name}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs">{vendor.location}</span>
        </div>

        {vendor.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed border-l-2 border-primary/20 pl-2">
            {vendor.description}
          </p>
        )}

        <Separator className="my-4" />

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">
              Starting from
            </p>
            <p className="text-base font-semibold">{vendor.price}</p>
          </div>
          <Link href={`/vendors/1`} className="block">
            <Button variant="link" size="xs">Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
