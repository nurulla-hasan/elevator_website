import { z } from "zod";

export const packageCheckoutSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  weddingDate: z.date({
    required_error: "Wedding date is required",
  }),
  weddingLocation: z.string().min(5, "Wedding location is required"),
  estimatedBudget: z.string().min(1, "Estimated budget is required"),
  expectedGuestCount: z.string().min(1, "Expected guest count is required"),
  notes: z.string().optional(),
});

export type PackageCheckoutValues = z.infer<typeof packageCheckoutSchema>;
