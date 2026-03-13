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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SuccessToast } from "@/lib/utils";

const servicesSchema = z.object({
  services: z.array(z.object({
    value: z.string().min(1, "Service name cannot be empty")
  })).min(1, "At least one service is required"),
});

type ServicesFormValues = z.infer<typeof servicesSchema>;

export function SettingsServicesForm() {
  const form = useForm<ServicesFormValues>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      services: [
        { value: "Wedding Photography" },
        { value: "Candid Photography" },
        { value: "Traditional Photography" },
        { value: "Pre-wedding Shoots" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "services",
  });

  function onSubmit(data: ServicesFormValues) {
    console.log(data);
    SuccessToast("Services updated successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-primary">Services Offered</CardTitle>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => append({ value: "" })}
            >
              <Plus />
              Add Service
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <FormField
                    control={form.control}
                    name={`services.${index}.value`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input placeholder="Enter service name" {...field} />
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
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full">
              <Save />
              Save Services
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
