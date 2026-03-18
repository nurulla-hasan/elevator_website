"use client";

import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Save, X } from "lucide-react";
import type { FeatureOption } from "./add-service-form.constants";

type AddServiceCoreFeaturesSectionProps = {
  category: string;
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
  coreFeatures,
  selectedFeatures,
  customFeatures,
  newCustomFeature,
  onNewCustomFeatureChange,
  onToggleFeature,
  onAddCustomFeature,
  onRemoveCustomFeature,
}: AddServiceCoreFeaturesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b pb-2">
        <Save className="size-5 text-primary" />
        <h3 className="text-lg">Core Features</h3>
      </div>

      <div className="space-y-4">
        {!category ? (
          <div className="border border-dashed bg-muted/50 p-8 text-center">
            <p className="text-sm text-muted-foreground">Select a category above to see features.</p>
          </div>
        ) : coreFeatures.length === 0 ? (
          <div className="border border-dashed bg-muted/50 p-8 text-center">
            <p className="text-sm text-muted-foreground">No specific features for this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {coreFeatures.map((feature) => {
              const isSelected = selectedFeatures.includes(feature.id);

              return (
                <div
                  key={feature.id}
                  onClick={() => onToggleFeature(feature.id)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 border p-4 transition-all",
                    isSelected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
                  )}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isSelected ? "border-primary bg-primary text-white" : "border-muted-foreground/30"
                    )}
                  >
                    {isSelected && <Check className="size-3 stroke-3" />}
                  </div>
                  <span className="flex-1 text-base leading-none">{feature.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {category && (
        <div className="space-y-3 border-t pt-4">
          <FormLabel>Add Additional Features (Optional)</FormLabel>
          <div className="flex gap-2">
            <Input
              placeholder="e.g. Drone Photography, Same Day Delivery"
              value={newCustomFeature}
              onChange={(event) => onNewCustomFeatureChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onAddCustomFeature();
                }
              }}
            />
            <Button type="button" onClick={onAddCustomFeature} variant="secondary">
              Add
            </Button>
          </div>
          {customFeatures.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {customFeatures.map((feature, index) => (
                <Badge key={`${feature}-${index}`} variant="secondary" className="gap-2 px-2 py-1">
                  {feature}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => onRemoveCustomFeature(index)}
                    aria-label="Remove custom feature"
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
