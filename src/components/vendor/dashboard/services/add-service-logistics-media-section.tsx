"use client";

import type { UseFormReturn } from "react-hook-form";
import type { ServiceFormValues } from "@/schemas/service.schema";
import { MapPin, Upload } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LocationInput } from "@/components/ui/custom/location-input";
import React from "react";

type AddServiceLogisticsMediaSectionProps = {
  form: UseFormReturn<ServiceFormValues>;
  isAcrossCity: boolean;
};

export function AddServiceLogisticsMediaSection({
  form,
  isAcrossCity,
}: AddServiceLogisticsMediaSectionProps) {
  return (
    <div className="space-y-10">
      {/* Service Area Redesign */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b pb-2">
          <MapPin className="size-5 text-primary" />
          <h3 className="text-lg font-medium tracking-tight">Add Service Area</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-start">
          <FormField
            control={form.control}
            name="isAcrossCity"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 border rounded-lg p-4 bg-card transition-colors hover:bg-accent/50">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} className="size-5" />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">Available across entire city</FormLabel>
                  <p className="text-xs text-muted-foreground text-wrap">Select this if you provide service anywhere in the city.</p>
                </div>
              </FormItem>
            )}
          />
          {!isAcrossCity && (
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <LocationInput
                      placeholder="Select or search service area..."
                      value={field.value || ""}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
      </div>

      {/* Portfolio Images Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b pb-2">
          <Upload className="size-5 text-primary" />
          <h3 className="text-lg font-medium tracking-tight">Portfolio Images</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          <div className="flex cursor-pointer flex-col items-center justify-center gap-2 border-2 rounded-xl border-dashed p-4 text-muted-foreground hover:bg-accent hover:border-primary/50 transition-all aspect-square">
            <Upload className="size-6 text-primary/60" />
            <div className="text-center">
              <span className="text-xs font-medium block">Click to upload</span>
              <span className="text-[10px] uppercase tracking-wider">Max 10 images</span>
            </div>
          </div>
          {/* Portfolio image placeholders can go here */}
        </div>
      </div>

      {/* Terms and Conditions - Full Width */}
      <div className="space-y-4 pt-4">
        <FormField
          control={form.control}
          name="policies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terms and Condition (If Any)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="e.g. Booking cancellation rules, payment terms, or any specific requirements..." 
                  className="min-h-32 resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
