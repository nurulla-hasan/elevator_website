import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/custom/star-rating";
import { Vendor } from "@/types/vendor.type";
import { MapPin, ShieldCheck, Flame } from "lucide-react";
import Image from "next/image";

interface VendorHeroProps {
  vendor: Vendor;
}

export const VendorHero = ({ vendor }: VendorHeroProps) => {
  return (
    <div className="relative w-full h-70 sm:h-87.5 md:h-125 mb-48 sm:mb-40 md:mb-32">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Floating Info Card */}
      <div className="absolute -bottom-40 sm:-bottom-32 md:-bottom-24 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl bg-card rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{vendor.name}</h1>
              <div className="flex items-center gap-2">
                {vendor.verified && (
                  <Badge className="bg-primary text-primary-foreground border-none hover:bg-primary/90 shrink-0">
                    <ShieldCheck size={14} className="mr-1" /> Verified
                  </Badge>
                )}
                {vendor.sponsored && (
                  <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 shrink-0">
                    <Flame size={14} className="mr-1 fill-current" /> Sponsored
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin size={18} className="text-primary/60" />
                <span className="text-sm md:text-base font-medium">{vendor.location}</span>
              </div>
              <div className="flex items-center gap-2 md:border-l md:pl-4 border-border">
                <StarRating rating={vendor.rating} totalStars={5} size={18} />
                <span className="font-bold text-foreground">{vendor.rating}</span>
                <span className="text-sm text-muted-foreground">({vendor.reviews} reviews)</span>
              </div>
              <Badge variant="secondary" className="font-semibold px-3">
                {vendor.category}
              </Badge>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl text-sm md:text-base line-clamp-3 md:line-clamp-none">
              {vendor.description}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-8 border-border">
            <span className="text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-wider">Starting from</span>
            <span className="text-3xl md:text-4xl font-extrabold text-primary">{vendor.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
