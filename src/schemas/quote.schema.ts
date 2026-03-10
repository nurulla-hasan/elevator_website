import * as z from "zod";

export const quoteItemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  description: z.string().optional(),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  unitPrice: z.number().min(0, "Price cannot be negative"),
});

export const quoteSchema = z.object({
  packageName: z.string().min(1, "Package name is required"),
  validUntil: z.string().min(1, "Validity date is required"),
  items: z.array(quoteItemSchema).min(1, "At least one item is required"),
  notes: z.string().optional(),
  terms: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
export type QuoteItemValues = z.infer<typeof quoteItemSchema>;
