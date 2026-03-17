"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { mockVendors } from "@/data/vendors.data";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";

// Use mockVendors as the source for services
const VENDOR_SERVICES: Option[] = mockVendors.map(vendor => ({
  value: String(vendor.id),
  label: vendor.name
}));

interface PackageFormProps {
  type: string;
}

export default function PackageForm({ type }: PackageFormProps) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Title & Description */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <Label className="uppercase">
                Package Title ({type})
              </Label>
              <Input
                placeholder={`e.g., ${type} Wedding Package`}
              />
            </div>

            <div className="space-y-2">
              <Label className="uppercase">
                Description
              </Label>
              <Textarea
                placeholder="Detailed description of your package..."
                className="min-h-40"
              />
            </div>
          </div>

          {/* Right Column: Price & Services */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <Label className="uppercase">
                Price ($)
              </Label>
              <Input
                type="number"
                defaultValue={0}
              />
            </div>

            <div className="space-y-2">
              <Label className="uppercase">
                Vendor Services
              </Label>
              <MultipleSelector
                defaultOptions={VENDOR_SERVICES}
                placeholder="Search and select services..."
                emptyIndicator={
                  <p className="text-center text-sm py-4 text-muted-foreground">
                    No services found.
                  </p>
                }
                commandProps={{
                  label: "Select services",
                }}
              />
              <p className="text-[10px] text-muted-foreground px-1 italic">
                * You can select multiple services for this package.
              </p>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="col-span-full pt-4 border-t mt-2 flex justify-end items-center gap-4">
            <p className="text-xs text-muted-foreground hidden sm:block">
              Make sure to save your changes before leaving this tab.
            </p>
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              Save {type} Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
