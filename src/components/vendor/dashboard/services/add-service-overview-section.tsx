"use client";

import type { UseFormReturn } from "react-hook-form";
import type { ServiceFormValues } from "@/schemas/service.schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type AddServiceOverviewSectionProps = {
  form: UseFormReturn<ServiceFormValues>;
  serviceCategories: string[];
  subcategories: string[];
  priceTypes: string[];
  eventTypes: string[];
  selectedEventTypes: string[];
  onToggleEventType: (type: string) => void;
};

export function AddServiceOverviewSection({
  form,
  serviceCategories,
  subcategories,
  priceTypes,
  eventTypes,
  selectedEventTypes,
  onToggleEventType,
}: AddServiceOverviewSectionProps) {
  return (
    <div className="space-y-8">
      {/* Service Title - Full Width Row */}
      <FormField
        control={form.control}
        name="serviceTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Service Title
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g. Professional Wedding Photography" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Category & Subcategory - Single Row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Category
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subcategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Subcategory
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value} disabled={subcategories.length === 0}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={subcategories.length ? "Select Subcategory" : "Select category first"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {subcategories.map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Price Type & Price - Single Row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="priceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Price Type
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Price Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {priceTypes.map((priceType) => (
                    <SelectItem key={priceType} value={priceType}>
                      {priceType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Enter Price (৳)
              </FormLabel>
              <FormControl>
                <Input type="number" placeholder="0.00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="eventTypes"
        render={() => (
          <FormItem>
            <FormLabel>
              Suitable for Event Types
            </FormLabel>
            <div className="flex flex-wrap gap-2 pt-1">
              {eventTypes.map((eventType) => {
                const selected = selectedEventTypes.includes(eventType);

                return (
                  <Badge
                    key={eventType}
                    variant={selected ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer px-4 py-2 text-sm transition-all",
                      selected ? "bg-primary text-primary-foreground border-primary" : "hover:border-primary/50"
                    )}
                    onClick={() => onToggleEventType(eventType)}
                  >
                    {eventType}
                    {selected && <X className="ml-2 size-3" />}
                  </Badge>
                );
              })}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              About the Service
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Briefly describe what you offer, your experience, and service quality..." 
                className="min-h-32 resize-none" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
