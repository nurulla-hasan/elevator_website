import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VendorPackage } from "@/types/vendor.type";
import { Check, Sparkles, Gift, MapPin, Flame, Heart } from "lucide-react";
import Link from "next/link";
import { StarRating } from "@/components/ui/custom/star-rating";

interface VendorPackageCardProps {
  pkg: VendorPackage;
}

export const VendorPackageCard = ({ pkg }: VendorPackageCardProps) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-lg group`}
    >
      {/* ${
        pkg.isPopular
          ? "border-primary/30 bg-primary/5 ring-1 ring-primary/10"
          : "border-border bg-card"
      } */}
      {/* Left Pricing Section */}
      <div
        className={`flex flex-col items-center justify-center p-6 md:w-52 shrink-0 text-center space-y-3 bg-primary text-primary-foreground`} // ${pkg.isPopular ? "bg-primary text-primary-foreground" : "bg-muted/50"}
      >
        <div className="flex flex-wrap justify-center gap-1.5">
          {pkg.sponsored && (
            <Badge variant="secondary">
              <Flame size={10} className="fill-current" />
              Sponsored
            </Badge>
          )}
        </div>

        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold opacity-80 uppercase tracking-widest">
            Starts from
          </span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-semibold">{pkg.price}</span>
          </div>
        </div>

        {pkg.rating && (
          <div className="flex items-center justify-center gap-1 text-[11px] font-semibold">
            <StarRating rating={pkg.rating} totalStars={1} size={10} />
            <span>{pkg.rating}</span>
            <span className="opacity-70 font-medium">({pkg.reviews})</span>
          </div>
        )}

        <div className="pt-1 w-full">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            asChild
          >
            <Link href={`/booking-checkout/${pkg.id}`}>Book Now</Link>
          </Button>
        </div>
      </div>

      {/* Right Details Section */}
      <div className="flex-1 p-6 md:p-8 space-y-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {pkg.category && (
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-none text-[10px] h-5"
                >
                  {pkg.category}
                </Badge>
              )}
              {pkg.isPopular && (
                <Sparkles size={16} className="text-primary animate-pulse" />
              )}
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-primary/10 text-primary"
            >
              <Heart size={16} />
            </Button>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {pkg.name}
            </h3>

            {pkg.location && (
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <MapPin size={12} className="text-primary" />
                {pkg.location}
              </div>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
            {pkg.description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Gift size={14} className="text-primary" />
            What&apos;s Included
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {pkg.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-start gap-2 group/feature">
                <Check size={12} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80 text-[11px] font-medium leading-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border/50 flex items-center gap-3 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-10 shrink-0">
              <Image
                src="/home/v.png"
                alt="Verified"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-1 w-1 rounded-full bg-border" />
            Secure Booking
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div>Free Cancellation (T&C apply)</div>
        </div>
      </div>
    </div>
  );
};
