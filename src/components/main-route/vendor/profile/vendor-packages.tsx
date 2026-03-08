import Image from "next/image";
  import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VendorPackage } from "@/types/vendor.type";
import { Check, Sparkles, Zap, Gift, MapPin, Flame, Heart } from "lucide-react";
import Link from "next/link";
import { StarRating } from "@/components/ui/custom/star-rating";

interface VendorPackagesProps {
  packages: VendorPackage[];
}

export const VendorPackages = ({ packages }: VendorPackagesProps) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground flex items-center gap-3">
          <Zap className="text-primary fill-primary/20" />
          Available Packages
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 grid grid-cols-1 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-lg group ${
              pkg.isPopular ? "border-primary/30 bg-primary/5 ring-1 ring-primary/10" : "border-border bg-card"
            }`}
          >
            {/* Left Pricing Section */}
            <div className={`flex flex-col items-center justify-center p-6 md:w-52 shrink-0 text-center space-y-3 ${
              pkg.isPopular ? "bg-primary text-primary-foreground" : "bg-muted/50"
            }`}>
              {/* Badges moved to left section for compactness */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {pkg.verified && (
                  <div className="relative h-4 w-16 shrink-0">
                    <Image
                      src="/home/v.png"
                      alt="Verified"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {pkg.sponsored && (
                  <Badge className={`${pkg.isPopular ? "bg-white/20 text-white" : "bg-primary/10 text-orange-600"} border-none flex items-center gap-1 py-0.5 px-2 h-5 shadow-none`}>
                    <Flame size={10} className="fill-current" />
                    <span className="text-[8px] font-semibold uppercase tracking-wider">Sponsored</span>
                  </Badge>
                )}
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] font-semibold opacity-80 uppercase tracking-widest">Starts from</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-semibold">{pkg.price}</span>
                </div>
              </div>

              {/* Rating moved to left section */}
              {pkg.rating && (
                <div className="flex items-center justify-center gap-1 text-[11px] font-semibold">
                  <StarRating rating={pkg.rating} totalStars={1} size={10} />
                  <span>{pkg.rating}</span>
                  <span className="opacity-70 font-medium">({pkg.reviews})</span>
                </div>
              )}

              <div className="pt-1 w-full">
                <Button 
                  size="sm" 
                  variant={pkg.isPopular ? "secondary" : "default"}
                  className="w-full" 
                  asChild
                >
                  <Link href={`/booking-checkout/${pkg.id}`}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Details Section */}
            <div className="flex-1 p-6 md:p-8 space-y-4">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pkg.category && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] h-5">
                        {pkg.category}
                      </Badge>
                    )}
                    {pkg.isPopular && <Sparkles size={16} className="text-primary animate-pulse" />}
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
                      <span className="text-foreground/80 text-[11px] font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50 flex items-center gap-3 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="relative h-8 w-10 shrink-0">
                    <Image
                      src="/home/v.png"
                      alt="Verified"
                      fill
                      className="object-contain"
                    />
                  </div>
                  Secure Booking
                </div>
                <div className="w-1 h-1 rounded-full bg-border" />
                <div>Free Cancellation (T&C apply)</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
