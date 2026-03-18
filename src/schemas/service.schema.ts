import * as z from "zod";

export const serviceFormSchema = z.object({
  name: z.string().min(3, "Service name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  minPrice: z.coerce.number().min(0, "Minimum price must be a positive number"),
  maxPrice: z.coerce.number().optional(),
  images: z.array(z.string()).optional(),
  features: z.array(z.string()).min(1, "Select at least one feature"),
});

export type ServiceFormValues = z.infer<typeof serviceFormSchema>;
