"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Save, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SuccessToast } from "@/lib/utils";

const packageSchema = z.object({
  name: z.string().min(2, "Package name is required"),
  price: z.string().min(1, "Price is required"),
  features: z.array(z.object({
    value: z.string().min(1, "Feature cannot be empty")
  })).min(1, "At least one feature is required"),
});

const pricingSchema = z.object({
  packages: z.array(packageSchema),
});

type PricingFormValues = z.infer<typeof pricingSchema>;

export function SettingsPricingPackagesForm() {
  const form = useForm<PricingFormValues>({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      packages: [
        {
          name: "Silver Package",
          price: "35,000",
          features: [
            { value: "Half day coverage" },
            { value: "300 edited photos" },
            { value: "1 photographer" },
            { value: "Online gallery" },
          ],
        },
        {
          name: "Gold Package",
          price: "50,000",
          features: [
            { value: "Full day coverage" },
            { value: "500 edited photos" },
            { value: "2 photographers" },
            { value: "Online gallery" },
            { value: "Photo album" },
          ],
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "packages",
  });

  function onSubmit(data: PricingFormValues) {
    console.log(data);
    SuccessToast("Pricing and packages updated successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-primary">Packages</CardTitle>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => append({ name: "", price: "", features: [{ value: "" }] })}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Package
            </Button>
          </CardHeader>
          <CardContent className="space-y-8">
            {fields.map((field, index) => (
              <PackageItem
                key={field.id}
                index={index}
                form={form}
                onRemove={() => remove(index)}
              />
            ))}

            <Button type="submit" className="w-full">
              <Save />
              Save Packages
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PackageItem({ index, form, onRemove }: { index: number; form: any; onRemove: () => void }) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `packages.${index}.features`,
  });

  return (
    <div className="space-y-4 p-4 border rounded-lg relative bg-muted/10">
      <div className="flex justify-end">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive"
          onClick={onRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name={`packages.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Package Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter package name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`packages.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (৳) *</FormLabel>
              <FormControl>
                <Input placeholder="Enter price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <FormLabel className="text-sm font-medium">Features</FormLabel>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-primary h-auto p-0 hover:bg-transparent"
            onClick={() => append({ value: "" })}
          >
            <Plus className="h-3 w-3 mr-1" />
            Add Feature
          </Button>
        </div>
        
        <div className="space-y-2">
          {fields.map((featureField, featureIndex) => (
            <div key={featureField.id} className="flex gap-2">
              <FormField
                control={form.control}
                name={`packages.${index}.features.${featureIndex}.value`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Enter feature" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-destructive"
                onClick={() => remove(featureIndex)}
                disabled={fields.length === 1}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
