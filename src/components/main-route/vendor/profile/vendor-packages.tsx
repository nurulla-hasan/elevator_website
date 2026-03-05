import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VendorPackage } from "@/types/vendor.type";
import { Check, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

interface VendorPackagesProps {
  packages: VendorPackage[];
}

export const VendorPackages = ({ packages }: VendorPackagesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-bold text-foreground">Packages</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col md:flex-row gap-8 rounded-2xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-md ${
              pkg.isPopular ? "border-primary/20 ring-1 ring-primary/10" : "border-border"
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-4 left-6">
                <Badge className="flex items-center gap-2">
                  <Sparkles size={14} className="fill-current" />
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                <div className="flex flex-col items-start md:items-end">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-primary">{pkg.price}</span>
                  </div>
                  {pkg.duration && (
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium mt-1">
                      <Clock size={14} />
                      {pkg.duration}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-2xl">{pkg.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4 border-t border-border">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <Button size="lg" className="w-full" asChild>
                <Link href={`/booking-checkout/${pkg.id}`}>
                  Book This Package
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
