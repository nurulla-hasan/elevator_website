"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VendorPackage } from "@/types/vendor.type";
import { Zap } from "lucide-react";
import { VendorPackageCard } from "./vendor-package-card";

interface VendorPackagesProps {
  packages: VendorPackage[];
}

export const VendorPackages = ({ packages }: VendorPackagesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-3">
          <Zap className="text-primary fill-primary/20" />
          Available Packages
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6">
        {packages.map((pkg) => (
          <VendorPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </CardContent>
    </Card>
  );
};
