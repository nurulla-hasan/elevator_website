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
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b pb-2">
        <Save className="size-5 text-primary" />
        <h3 className="text-lg font-medium">Core Features</h3>
      </div>

      <div className="space-y-4">
        {!category ? (
          <Card className="border-dashed bg-muted/50 p-8 text-center shadow-none">
            <p className="text-sm text-muted-foreground">Select a category above to see features.</p>
          </Card>
        ) : !subcategory ? (
          <Card className="border-dashed bg-muted/50 p-8 text-center shadow-none">
            <p className="text-sm text-muted-foreground">Select a subcategory above to see features.</p>
          </Card>
        ) : coreFeatures.length === 0 ? (
          <Card className="border-dashed bg-muted/50 p-8 text-center shadow-none">
            <p className="text-sm text-muted-foreground">No specific features for this subcategory.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {coreFeatures.map((feature) => {
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
                  <span className="flex-1 text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {feature.name}
                  </span>
                </Label>
              );
            })}
          </div>
        )}
      </div>

      {subcategory && (
        <div className="space-y-3 border-t pt-4">
          <FormLabel className="text-base">Add Additional Features (Optional)</FormLabel>
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
              className="max-w-md"
            />
            <Button type="button" onClick={onAddCustomFeature} variant="secondary">
              Add Feature
            </Button>
          </div>
          {customFeatures.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {customFeatures.map((feature, index) => (
                <Badge key={`${feature}-${index}`} variant="secondary" className="gap-1 px-2 py-1.5 text-sm font-normal">
                  {feature}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    className="ml-1 size-4 hover:bg-transparent"
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
