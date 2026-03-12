/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Users,
  Banknote,
  MapPin,
  PartyPopper,
  LayoutPanelLeft,
  ChevronDownIcon,
  Upload,
  X,
  Image as ImageIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CustomCalendar from "@/components/ui/custom/custom-calender";
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/data/categories.data";
import {
  postRequestSchema,
  type PostRequestValues,
} from "@/schemas/post-request.schema";
import { toast } from "sonner";

export function PostRequestForm() {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const form = useForm<PostRequestValues>({
    resolver: zodResolver(postRequestSchema),
    defaultValues: {
      eventType: "",
      eventDate: undefined,
      guestCount: "",
      budgetRange: "",
      location: "",
      services: "",
      additionalDetails: "",
      images: [],
    },
  });

  const [previews, setPreviews] = React.useState<string[]>([]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void,
  ) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newPreviews = files.map((file) =>
        URL.createObjectURL(file as Blob),
      );
      setPreviews((prev) => [...prev, ...newPreviews]);
      const currentImages = form.getValues("images") || [];
      onChange([...currentImages, ...files]);
    }
  };

  const removeImage = (index: number, onChange: (...event: any[]) => void) => {
    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);

    const currentImages = [...(form.getValues("images") || [])];
    currentImages.splice(index, 1);
    onChange(currentImages);
  };

  function onSubmit(values: PostRequestValues) {
    console.log(values);
    toast.success("Request submitted successfully!");
    setPreviews([]);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full p-6 bg-card rounded-xl shadow-sm border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Type */}
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <PartyPopper size={16} /> Event Type
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="mehndi">Mehndi</SelectItem>
                    <SelectItem value="baraat">Baraat</SelectItem>
                    <SelectItem value="valima">Valima</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
                <FormLabel>
                  <CalendarIcon size={16} /> Event Date
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
                    <CustomCalendar
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
                <FormLabel>
                  <Users size={16} /> Expected Guest Count
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
                <FormLabel>
                  <Banknote size={16} /> Budget Range (PKR)
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
                <FormLabel>
                  <MapPin size={16} /> Area/Location
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
              <FormItem className="flex flex-col">
                <FormLabel>
                  <LayoutPanelLeft size={16} /> Service Needed
                </FormLabel>
                <Popover open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-between font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value || "Select a service"}
                        <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-0" align="start">
                    <ScrollArea className="h-80">
                      <div className="p-2 space-y-1">
                        {categories.map((category) => {
                          const hasSubcategories =
                            category.subcategories &&
                            category.subcategories.length > 0;
                          const isSelected = field.value === category.name;

                          if (hasSubcategories) {
                            return (
                              <Collapsible
                                key={category.name}
                                className="w-full"
                              >
                                <CollapsibleTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-between hover:bg-accent px-3 py-2.5 text-sm font-normal group"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="text-lg">
                                        {category.emoji}
                                      </span>
                                      <span>{category.name}</span>
                                    </div>
                                    <ChevronDownIcon className="h-4 w-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                  </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pl-4 space-y-1 mt-1 border-l ml-4 border-muted">
                                  {category.subcategories?.map((sub) => {
                                    const isSubSelected =
                                      field.value === sub.name;
                                    return (
                                      <Button
                                        key={sub.name}
                                        variant="ghost"
                                        size="sm"
                                        className={cn(
                                          "w-full justify-start font-normal px-2 py-1.5 h-auto hover:bg-accent",
                                          isSubSelected &&
                                            "bg-primary/10 text-primary font-medium",
                                        )}
                                        onClick={() => {
                                          field.onChange(sub.name);
                                          setIsServicesOpen(false);
                                        }}
                                      >
                                        <span className="mr-2">
                                          {sub.emoji}
                                        </span>
                                        {sub.name}
                                      </Button>
                                    );
                                  })}
                                </CollapsibleContent>
                              </Collapsible>
                            );
                          }

                          return (
                            <Button
                              key={category.name}
                              variant="ghost"
                              className={cn(
                                "w-full justify-start font-normal px-3 py-2.5 h-auto hover:bg-accent",
                                isSelected &&
                                  "bg-primary/10 text-primary font-medium",
                              )}
                              onClick={() => {
                                field.onChange(category.name);
                                setIsServicesOpen(false);
                              }}
                            >
                              <span className="mr-2 text-lg">
                                {category.emoji}
                              </span>
                              {category.name}
                            </Button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Additional Details */}
        <FormField
          control={form.control}
          name="additionalDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details</FormLabel>
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

        {/* Image Upload */}
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <ImageIcon size={16} /> Reference Images
              </FormLabel>
              <FormControl>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    {previews.map((preview, index) => (
                      <div
                        key={index}
                        className="relative w-24 h-24 border rounded-lg overflow-hidden group"
                      >
                        <Image
                          src={preview}
                          alt={`preview ${index}`}
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index, field.onChange)}
                          className="absolute top-1 right-1 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                    <label className="w-24 h-24 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                      <Upload
                        size={20}
                        className="text-muted-foreground mb-1"
                      />
                      <span className="text-[10px] text-muted-foreground">
                        Upload
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageChange(e, field.onChange)}
                      />
                    </label>
                  </div>
                  <p className="text-[12px] text-muted-foreground">
                    Upload reference images to show vendors what exactly you
                    need.
                  </p>
                </div>
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
