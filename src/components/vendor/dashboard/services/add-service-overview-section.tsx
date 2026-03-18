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
import { Info, X } from "lucide-react";

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
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b pb-2">
        <Info className="size-5 text-primary" />
        <h3 className="text-lg">Service Overview</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="serviceTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Service Title <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. Professional Wedding Photography" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Category <span className="text-destructive">*</span>
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
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="subcategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Subcategory <span className="text-destructive">*</span>
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
        <FormField
          control={form.control}
          name="priceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Price Type <span className="text-destructive">*</span>
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
                Base Price (৳) <span className="text-destructive">*</span>
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
              Suitable for Event Types <span className="text-destructive">*</span>
            </FormLabel>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((eventType) => {
                const selected = selectedEventTypes.includes(eventType);

                return (
                  <Badge
                    key={eventType}
                    variant={selected ? "default" : "secondary"}
                    className="cursor-pointer px-4 py-1.5"
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
              About the Service <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Textarea placeholder="Briefly describe what you offer..." className="min-h-24" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
