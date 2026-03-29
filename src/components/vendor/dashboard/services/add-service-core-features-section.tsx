"use client";

import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Save, X } from "lucide-react";
import type { FeatureOption } from "./add-service-form.constants";

type AddServiceCoreFeaturesSectionProps = {
  category: string;
  subcategory: string;
  coreFeatures: FeatureOption[];
  selectedFeatures: string[];
  customFeatures: string[];
  newCustomFeature: string;
  onNewCustomFeatureChange: (value: string) => void;
  onToggleFeature: (id: string) => void;
  onAddCustomFeature: () => void;
  onRemoveCustomFeature: (index: number) => void;
};

export function AddServiceCoreFeaturesSection({
  category,
  subcategory,
  coreFeatures,
  selectedFeatures,
  customFeatures,
  newCustomFeature,
  onNewCustomFeatureChange,
  onToggleFeature,
  onAddCustomFeature,
  onRemoveCustomFeature,
}: AddServiceCoreFeaturesSectionProps) {
  // Take up to 6 core features as requested
  const displayFeatures = coreFeatures.slice(0, 6);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b pb-2">
        <Save className="size-5 text-primary" />
        <h3 className="text-lg font-medium tracking-tight">What's Included</h3>
      </div>

      <div className="space-y-4">
        {!category ? (
          <Card className="border-dashed bg-muted/50 p-8 text-center shadow-none">
            <p className="text-sm text-muted-foreground italic">Select a category above to see included features.</p>
          </Card>
        ) : !subcategory ? (
          <Card className="border-dashed bg-muted/50 p-8 text-center shadow-none">
            <p className="text-sm text-muted-foreground italic">Select a subcategory above to see included features.</p>
          </Card>
        ) : coreFeatures.length === 0 ? (
          <Card className="border-dashed bg-muted/50 p-8 text-center shadow-none">
            <p className="text-sm text-muted-foreground italic">No specific features for this subcategory.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {displayFeatures.map((feature) => {
              const isSelected = selectedFeatures.includes(feature.id);

              return (
                <Label
                  key={feature.id}
                  htmlFor={feature.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all hover:bg-accent/50",
                    isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
                  )}
                >
                  <Checkbox
                    id={feature.id}
                    checked={isSelected}
                    onCheckedChange={() => onToggleFeature(feature.id)}
                    className="size-5"
                  />
                  <span className="flex-1 text-sm font-normal leading-none">
                    {feature.name}
                  </span>
                </Label>
              );
            })}
          </div>
        )}
      </div>

      {subcategory && (
        <div className="space-y-3 pt-2">
          <div className="flex gap-2">
            <Input
              placeholder="Add extra feature (e.g. Drone Photography, Express Delivery)"
              value={newCustomFeature}
              onChange={(event) => onNewCustomFeatureChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onAddCustomFeature();
                }
              }}
              className="max-w-md h-11"
            />
            <Button type="button" onClick={onAddCustomFeature} variant="secondary" className="h-11">
              Add Feature
            </Button>
          </div>
          {customFeatures.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {customFeatures.map((feature, index) => (
                <Badge key={`${feature}-${index}`} variant="secondary" className="gap-1 px-3 py-2 text-sm font-normal">
                  {feature}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    className="ml-1 size-4 hover:bg-transparent"
                    onClick={() => onRemoveCustomFeature(index)}
                    aria-label="Remove feature"
                  >
                    <X className="size-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
