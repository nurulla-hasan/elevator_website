import { z } from "zod";

export const vendorRegistrationSchema = z.object({
  // Step 1: Business Details
  businessName: z.string().min(2, "Business name is required"),
  businessDescription: z.string().min(10, "Business description must be at least 10 characters"),
  businessAddress: z.string().min(5, "Business address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  yearsOfExperience: z.string().min(1, "Years of experience is required"),

  // Step 2: Portfolio & Images
  businessLogo: z.string().optional(), // Base64 or URL
  portfolioImages: z.array(z.string()).optional(),

  // Step 3: Terms
  agreedToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export type VendorRegistrationData = z.infer<typeof vendorRegistrationSchema>;

export type RegistrationStep = "details" | "portfolio" | "review" | "success";
