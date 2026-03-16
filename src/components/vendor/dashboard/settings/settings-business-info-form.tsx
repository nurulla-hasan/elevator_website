"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, X } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SuccessToast } from "@/lib/utils";
import { LocationInput } from "@/components/ui/custom/location-input";

const businessInfoSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  category: z.string().min(1, "Please select a category"),
  subCategory: z.string().min(1, "Please select a sub category"),
  description: z.string().optional(),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().optional().or(z.literal("")),
  location: z.string().min(1, "Location is required"),
  serviceAreas: z.array(z.string()).min(1, "Select at least one service area"),
});

type BusinessInfoFormValues = z.infer<typeof businessInfoSchema>;

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
      location: "",
      serviceAreas: [],
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
                    <FormLabel>Business Name </FormLabel>
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
                    <FormLabel>Category</FormLabel>
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
                    <FormLabel>Phone Number</FormLabel>
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
                    <FormLabel>Email Address</FormLabel>
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
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <LocationInput
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        placeholder="Search location..."
                      />
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
                  <FormLabel>Service Areas (Select multiple)</FormLabel>
                  <div className="space-y-4">
                    <LocationInput
                      value=""
                      onChange={(value, data) => {
                        // Only add if 'data' is present (meaning a location was selected from the list)
                        if (data && value && !field.value.includes(value)) {
                          field.onChange([...field.value, value]);
                        }
                      }}
                      placeholder="Search and add a service area..."
                    />

                    <div className="flex flex-wrap gap-2 min-h-10 p-3 bg-muted/20 border border-border/50 rounded-xl">
                      {field.value.length === 0 ? (
                        <p className="text-xs text-muted-foreground italic">No service areas added yet.</p>
                      ) : (
                        field.value.map((area) => (
                          <Badge
                            key={area}
                            variant="secondary"
                            className="pl-2 pr-1 py-1 flex items-center gap-1 font-medium bg-background border-border/50 hover:bg-background"
                          >
                            {area}
                            <button
                              type="button"
                              onClick={() => toggleServiceArea(area)}
                              className="hover:bg-primary/10 rounded-full p-0.5 transition-colors"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))
                      )}
                    </div>
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
