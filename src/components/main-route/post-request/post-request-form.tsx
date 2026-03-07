"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Users,
  DollarSign,
  MapPin,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  postRequestSchema,
  type PostRequestValues,
} from "@/schemas/post-request.schema";
import { toast } from "sonner";

const SERVICES = [
  "Venues",
  "Catering",
  "Photography",
  "Videography",
  "Makeup",
  "Decor",
  "DJ/Music",
  "Florist",
];

export function PostRequestForm() {
  const form = useForm<PostRequestValues>({
    resolver: zodResolver(postRequestSchema),
    defaultValues: {
      services: [],
      additionalDetails: "",
    },
  });

  function onSubmit(values: PostRequestValues) {
    console.log(values);
    toast.success("Request submitted successfully!");
    form.reset();
  }

  const toggleService = (service: string) => {
    const currentServices = form.getValues("services");
    if (currentServices.includes(service)) {
      form.setValue(
        "services",
        currentServices.filter((s) => s !== service),
        { shouldValidate: true },
      );
    } else {
      form.setValue("services", [...currentServices, service], {
        shouldValidate: true,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full p-6 bg-card rounded-xl shadow-sm border"
      >
        {/* Event Type */}
        <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">
                Event Type *
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selected" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="mehndi">Mehndi</SelectItem>
                  <SelectItem value="baraat">Baraat</SelectItem>
                  <SelectItem value="walima">Walima</SelectItem>
                  <SelectItem value="reception">Reception</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Date */}
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-primary font-semibold flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" /> Event Date *
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Guest Count */}
        <FormField
          control={form.control}
          name="guestCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" /> Expected Guest Count *
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g., 300" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Budget Range */}
        <FormField
          control={form.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Budget Range (USD) *
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g., 5000 - 10000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Area/Location *
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g., Downtown, Riverside" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Services Needed */}
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">
                Services Needed *
              </FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {SERVICES.map((service) => {
                  const isSelected = field.value.includes(service);
                  return (
                    <Button
                      key={service}
                      type="button"
                      variant={isSelected ? "default" : "outline"}
                      className={cn(
                        "w-full transition-all",
                        isSelected && "bg-primary text-primary-foreground",
                      )}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </Button>
                  );
                })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Additional Details */}
        <FormField
          control={form.control}
          name="additionalDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">
                Additional Details
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your requirements, preferences, or any specific needs..."
                  className="min-h-30 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="lg" type="submit" className="w-full">
          Post Requirement
        </Button>
      </form>
    </Form>
  );
}
