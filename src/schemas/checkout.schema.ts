import { z } from "zod";

export const checkoutSchema = z.object({
  // Step 1: Details
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  eventDate: z.date({
    required_error: "Event date is required",
  }),
  eventLocation: z.string().min(5, "Event location is required"),
  expectedGuestCount: z.string().optional(),
  notes: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;
