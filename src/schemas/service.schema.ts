import * as z from "zod";

export const serviceFormSchema = z.object({
  serviceTitle: z.string().min(3, "Service title must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  priceType: z.string().min(1, "Please select a price type"),
  price: z.string().min(1, "Price is required"),
  eventTypes: z.array(z.string()).min(1, "Select at least one event type"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  isAcrossCity: z.boolean().default(false),
  area: z.string().optional(),
  availableDates: z.array(z.date()).optional(),
  features: z.array(z.string()).default([]),
  customFeatures: z.array(z.string()).default([]),
  policies: z.string().optional(),
});

export type ServiceFormValues = z.infer<typeof serviceFormSchema>;
