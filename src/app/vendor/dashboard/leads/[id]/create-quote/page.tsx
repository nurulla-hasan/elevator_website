"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BackButton from "@/components/ui/custom/back-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Plus,
  Trash2,
  Send,
  Eye,
  Calendar,
  MapPin,
  User,
  Mail,
} from "lucide-react";
import DashboardHeader from "@/components/ui/custom/dashboard-header";
import { quoteSchema, type QuoteFormValues } from "@/schemas/quote.schema";

export default function CreateQuotePage() {
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      packageName: "",
      validUntil: "",
      notes: "",
      terms: "",
      items: [
        {
          name: "",
          description: "",
          quantity: 1,
          unitPrice: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const watchedItems = useWatch({
    control: form.control,
    name: "items",
  });

  const subtotal =
    watchedItems?.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.unitPrice || 0),
      0,
    ) || 0;

  const taxRate = 0.0875;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  const onSubmit = (data: QuoteFormValues) => {
    console.log("Form submitted:", data);
  };

  const lead = {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    eventDate: "August 15, 2026",
    location: "Los Angeles, CA",
  };

  return (
    <DashboardPageLayout>
      <div>
        <BackButton label="Back to Lead Details" variant="outline" />
      </div>

      <div>
        <DashboardHeader
          title={`Create Quote for ${lead.name}`}
          description="Build and send a professional quote for this inquiry"
        />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Column: Form Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote Details Card */}
            <Card>
              <CardContent className="space-y-6">
                <h2 className="text-xl font-semibold text-primary">
                  Quote Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="packageName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-semibold">
                          Package Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., Premium Wedding Package"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="validUntil"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Valid Until</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Services & Items Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  Services & Items
                </h2>
                <Button
                  type="button"
                  onClick={() =>
                    append({
                      name: "",
                      description: "",
                      quantity: 1,
                      unitPrice: 0,
                    })
                  }
                  size="sm"
                >
                  <Plus />
                  Add Item
                </Button>
              </div>

              {fields.length > 0 ? (
                fields.map((field, index) => (
                  <Card key={field.id}>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Item {index + 1}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => remove(index)}
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/5 h-8 w-8"
                        >
                          <Trash2 />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name={`items.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input {...field} placeholder="Item Name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`items.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder="Description"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-6 pt-2">
                          <FormField
                            control={form.control}
                            name={`items.${index}.quantity`}
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="text-xs text-muted-foreground font-semibold uppercase">
                                  Quantity
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="number"
                                    onChange={(e) =>
                                      field.onChange(
                                        parseInt(e.target.value) || 0,
                                      )
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`items.${index}.unitPrice`}
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="text-xs text-muted-foreground font-semibold uppercase">
                                  Unit Price ($)
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="number"
                                    onChange={(e) =>
                                      field.onChange(
                                        parseInt(e.target.value) || 0,
                                      )
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Item Total:
                          </span>
                          <span className="text-lg font-semibold text-foreground">
                            PKR{" "}
                            {(
                              watchedItems?.[index]?.quantity *
                                watchedItems?.[index]?.unitPrice || 0
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                      <div className="p-4 bg-muted rounded-full">
                        <Plus className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">
                          No items added yet
                        </p>
                        <p className="text-sm text-muted-foreground max-w-62.5">
                          Add at least one service or item to your quote to see
                          the summary.
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          append({
                            name: "",
                            description: "",
                            quantity: 1,
                            unitPrice: 0,
                          })
                        }
                      >
                        <Plus />
                        Add First Item
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Additional Information Card */}
            <Card>
              <CardContent className="space-y-6">
                <h2 className="text-xl font-semibold text-primary">
                  Additional Information
                </h2>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Notes to Client (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Add any special notes, instructions, or customization details..."
                            className="min-h-30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Terms & Conditions</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Enter your terms and conditions..."
                            className="min-h-30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Summary & Info */}
          <div className="space-y-6">
            {/* Quote Summary Card */}
            <Card>
              <CardContent className="space-y-6">
                <h2 className="text-lg font-semibold text-foreground">
                  Quote Summary
                </h2>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-foreground">
                      PKR {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (8.75%):</span>
                    <span className="font-semibold text-foreground">
                      PKR{" "}
                      {taxAmount.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-base font-semibold text-foreground">
                      Total:
                    </span>
                    <span className="text-2xl font-semibold text-primary">
                      PKR{" "}
                      {total.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-4">
                  <Button type="button" variant="outline" className="w-full">
                    <Eye />
                    Preview Quote
                  </Button>
                  <Button type="submit" className="w-full">
                    <Send />
                    Send Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sending To Card */}
            <Card>
              <CardContent className="space-y-6">
                <h2 className="text-lg font-semibold text-primary">
                  Sending To
                </h2>

                <div className="space-y-5">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">
                      Client Name
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-primary/70" />
                      {lead.name}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">
                      Email
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary/70" />
                      {lead.email}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">
                      Event Date
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary/70" />
                      {lead.eventDate}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">
                      Location
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary/70" />
                      {lead.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </DashboardPageLayout>
  );
}
