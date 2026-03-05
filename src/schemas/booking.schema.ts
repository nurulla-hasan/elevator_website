import { z } from "zod";

export const bookingSchema = z.object({
  serviceId: z.string({
    required_error: "Please select a service or package",
  }),
  eventType: z.string({
    required_error: "Please select an event type",
  }),
  eventDate: z.date({
    required_error: "Please select an event date",
  }),
  notes: z.string().optional(),
});

export type BookingValues = z.infer<typeof bookingSchema>;
