"use client";

import {
  CalendarIcon,
  Mail,
  Phone,
  User,
  MapPin,
  Users,
  DollarSign,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import { PackageCheckoutValues } from "@/schemas/package-checkout.schema";
import Link from "next/link";

interface PricingBookingFormProps {
  form: UseFormReturn<PackageCheckoutValues>;
  packageName: string;
  packagePrice: string;
}

export function PricingBookingForm({
  form,
  packageName,
  packagePrice,
}: PricingBookingFormProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-8">
        {/* Selected Package */}
        <div className="bg-primary/5 rounded-xl p-6 flex justify-between items-center border border-primary/10">
          <div className="space-y-1">
            <span className="text-primary uppercase text-xs font-semibold opacity-70">
              Selected Package
            </span>
            <h3 className="text-xl font-bold text-primary">{packageName}</h3>
          </div>
          <span className="text-3xl font-bold text-primary">
            ${packagePrice}
          </span>
        </div>

        {/* Personal Information */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold text-primary">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Enter your full name"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="your@email.com"
                        className="pl-10"
                        type="email"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="+1 (555) 000-0000"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weddingDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Wedding Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
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
          </div>
        </div>

        {/* Wedding Details */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold text-primary">Wedding Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="weddingLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wedding Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="City, State"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="estimatedBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Budget</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Budget"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="expectedGuestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Guest Count</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Number of guests"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Additional Notes */}
        <div className="flex flex-col gap-4">
          <FormLabel>Additional Notes (Optional)</FormLabel>
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your vision, specific requirements, or any questions you have..."
                    className="min-h-25"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pt-6 border-t border-border">
          <div className="flex flex-col gap-1 mb-6">
            <span className="text-muted-foreground font-medium">
              Total Amount
            </span>
            <span className="text-4xl font-bold text-primary">
              ${packagePrice}
            </span>
            <p className="text-[10px] text-muted-foreground">
              Payment will be processed after consultation
            </p>
          </div>
          <Link href="/package-checkout/success">
            <Button type="submit" size="lg" className="w-full">
              Confirm Booking
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
