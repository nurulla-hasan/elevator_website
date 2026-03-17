import { z } from "zod";

export const vendorRegistrationSchema = z.object({
  // Step 1: Business Details
  businessName: z.string().min(2, "Business name is required"),
  ownerName: z.string().min(2, "Owner name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  whatsapp: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(1, "Location is required"),
  businessDescription: z.string().min(10, "Business description must be at least 10 characters"),
  yearsOfExperience: z.string().min(1, "Years of experience is required"),

  // Step 2: Portfolio & Links
  instagram: z.string().url("Invalid Instagram link").min(1, "Instagram link is required"),
  facebook: z.string().url("Invalid Facebook link").min(1, "Facebook link is required"),
  website: z.string().url("Invalid website link").optional().or(z.literal("")),
  portfolioDrive: z.string().url("Invalid Google Drive link").min(1, "Portfolio link is required"),

  // Step 3: Categories
  categories: z.array(z.string()).min(1, "Please select at least one category"),

  // Step 4: Terms
  agreedToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export type VendorRegistrationData = z.infer<typeof vendorRegistrationSchema>;

export type RegistrationStep = "details" | "portfolio" | "categories" | "review" | "success";
