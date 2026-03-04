import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/custom/star-rating";
import { Vendor } from "@/types/vendor.type";
import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

interface VendorHeroProps {
  vendor: Vendor;
}

export const VendorHero = ({ vendor }: VendorHeroProps) => {
  return (
    <div className="relative w-full h-100 md:h-125 mb-24 md:mb-32">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Floating Info Card */}
      <div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{vendor.name}</h1>
              <div className="flex items-center gap-2">
                {vendor.verified && (
                  <Badge>
                    <ShieldCheck size={14} /> Verified
                  </Badge>
                )}
                {vendor.sponsored && (
                  <Badge variant="warning">
                    <Sparkles size={14} /> Sponsored
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin size={18} className="text-muted-foreground/60" />
                <span className="text-sm md:text-base">{vendor.location}</span>
              </div>
              <div className="flex items-center gap-2 border-l pl-4 border-border">
                <StarRating rating={vendor.rating} totalStars={5} size={18} />
                <span className="font-semibold text-foreground">{vendor.rating}</span>
                <span className="text-sm text-muted-foreground">({vendor.reviews} reviews)</span>
              </div>
              <Badge variant="outline">
                {vendor.category}
              </Badge>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {vendor.description}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-8 border-border">
            <span className="text-sm text-muted-foreground font-medium">Starting from</span>
            <span className="text-3xl md:text-4xl font-bold text-primary">{vendor.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
