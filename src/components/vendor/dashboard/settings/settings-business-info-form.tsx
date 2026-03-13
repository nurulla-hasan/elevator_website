"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SuccessToast } from "@/lib/utils";

const businessInfoSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  category: z.string().min(1, "Please select a category"),
  subCategory: z.string().min(1, "Please select a sub category"),
  description: z.string().optional(),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  location: z.string().min(1, "Location is required"),
  serviceAreas: z.array(z.string()).min(1, "Select at least one service area"),
});

type BusinessInfoFormValues = z.infer<typeof businessInfoSchema>;

const SERVICE_AREAS = [
  "Dhaka", "Gulshan", "Banani", "Dhanmondi", 
  "Mirpur", "Uttara", "Chittagong", "Sylhet"
];

export function SettingsBusinessInfoForm() {
  const form = useForm<BusinessInfoFormValues>({
    resolver: zodResolver(businessInfoSchema),
    defaultValues: {
      businessName: "Royal Wedding Photography",
      category: "",
      subCategory: "",
      description: "",
      phone: "+880 1712-345678",
      email: "info@royalphoto.com",
      website: "www.royalphoto.com",
      location: "Gulshan, Dhaka",
      serviceAreas: ["Dhaka", "Gulshan", "Banani", "Dhanmondi"],
    },
  });

  function onSubmit(data: BusinessInfoFormValues) {
    console.log(data);
    SuccessToast("Business information updated successfully");
  }

  const toggleServiceArea = (area: string) => {
    const current = form.getValues("serviceAreas");
    const updated = current.includes(area)
      ? current.filter((a) => a !== area)
      : [...current, area];
    form.setValue("serviceAreas", updated, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Business Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter business name" {...field} />
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
                    <FormLabel>Category *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="videography">Videography</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sub category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your business" 
                      className="min-h-30 resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
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
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter website URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Areas * (Select multiple)</FormLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {SERVICE_AREAS.map((area) => (
                      <Button
                        key={area}
                        type="button"
                        variant={field.value.includes(area) ? "default" : "outline"}
                        className="w-full h-9 font-normal"
                        onClick={() => toggleServiceArea(area)}
                      >
                        {area}
                      </Button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              <Save />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
