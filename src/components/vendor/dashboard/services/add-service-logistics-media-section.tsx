"use client";

import type { UseFormReturn } from "react-hook-form";
import type { ServiceFormValues } from "@/schemas/service.schema";
import { MapPin, Upload, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

type AddServiceLogisticsMediaSectionProps = {
  form: UseFormReturn<ServiceFormValues>;
  isAcrossCity: boolean;
};

export function AddServiceLogisticsMediaSection({
  form,
  isAcrossCity,
}: AddServiceLogisticsMediaSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b pb-2">
        <MapPin className="size-5 text-primary" />
        <h3 className="text-lg">Logistics & Media</h3>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div className="space-y-3">
            <FormLabel>Service Location</FormLabel>
            <FormField
              control={form.control}
              name="isAcrossCity"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0 border p-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Available across entire city</FormLabel>
                </FormItem>
              )}
            />
            {!isAcrossCity && (
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Specific area (e.g. Dhanmondi)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <FormField
            control={form.control}
            name="availableDates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Availability & Dates</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !field.value?.length && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value?.length ? `${field.value.length} dates selected` : <span>Select dates</span>}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="multiple"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <FormLabel>Portfolio Images</FormLabel>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed p-6 text-muted-foreground hover:bg-accent">
              <Upload className="size-6" />
              <span className="text-xs">Click to upload (Max 10)</span>
            </div>
          </div>

          <FormField
            control={form.control}
            name="policies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Policies & Terms</FormLabel>
                <FormControl>
                  <Textarea placeholder="Cancellation rules, terms..." className="min-h-24" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
