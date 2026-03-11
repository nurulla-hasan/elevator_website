import * as z from "zod";

export const postRequestSchema = z.object({
  eventType: z.string({
    required_error: "Please select an event type.",
  }).min(1, "Please select an event type."),
  eventDate: z.date({
    required_error: "Event date is required.",
  }),
  guestCount: z.string().min(1, "Expected guest count is required."),
  budgetRange: z.string().min(1, "Budget range is required."),
  location: z.string().min(1, "Area/Location is required."),
  services: z.string().min(1, "Please select a service."),
  additionalDetails: z.string().optional(),
  images: z.array(z.any()).optional(),
});

export type PostRequestValues = z.infer<typeof postRequestSchema>;
