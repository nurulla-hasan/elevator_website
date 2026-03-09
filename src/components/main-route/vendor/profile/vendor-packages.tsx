"use client";

import { Card, CardContent } from "@/components/ui/card";
import { VendorPackage, Vendor } from "@/types/vendor.type";
import { Zap, LayoutGrid } from "lucide-react";
import { VendorPackageCard } from "./vendor-package-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VendorCard } from "@/components/main-route/vendor/vendor-card";

interface VendorPackagesProps {
  packages: VendorPackage[];
  vendors?: Vendor[]; // Added for services/other vendors
}

export const VendorPackages = ({ packages, vendors = [] }: VendorPackagesProps) => {
  return (
    <Tabs defaultValue="packages">
      <TabsList variant="line" className="mb-4 w-full">
        <TabsTrigger 
          value="packages" 
        >
          <Zap size={16} className="fill-current" />
          Packages
        </TabsTrigger>
        <TabsTrigger 
          value="services" 
        >
          <LayoutGrid size={16} />
          Services
        </TabsTrigger>
      </TabsList>

      <TabsContent value="packages">
        <Card>
          <CardContent className="grid grid-cols-1 gap-6">
            {packages.map((pkg) => (
              <VendorPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="services">
        <Card>
          <CardContent className="grid grid-cols-1 gap-6">
              {vendors.length > 0 ? (
                vendors.map((vendor) => (
                  <VendorCard key={vendor.id} vendor={vendor} variant="horizontal" />
                ))
              ) : (
                <div className="col-span-full py-12 text-center border-2 border-dashed border-border rounded-2xl">
                  <p className="text-muted-foreground">No related services available at the moment.</p>
                </div>
              )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
