"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { serviceFormSchema, type ServiceFormValues } from "@/schemas/service.schema";
import {
  EVENT_TYPES,
  FEATURES_BY_CATEGORY,
  PRICE_TYPES,
  SERVICE_CATEGORIES,
  SUBCATEGORIES_BY_CATEGORY,
} from "./add-service-form.constants";
import { AddServiceOverviewSection } from "./add-service-overview-section";
import { AddServiceCoreFeaturesSection } from "./add-service-core-features-section";
import { AddServiceLogisticsMediaSection } from "./add-service-logistics-media-section";
import { AddServiceFormActions } from "./add-service-form-actions";

export function AddServiceForm() {
  const [newCustomFeature, setNewCustomFeature] = useState("");

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      serviceTitle: "",
      category: "",
      subcategory: "",
      priceType: "",
      price: "",
      eventTypes: [],
      description: "",
      isAcrossCity: false,
      area: "",
      availableDates: [],
      features: [],
      customFeatures: [],
      policies: "",
    },
  });

  const category = useWatch({ control: form.control, name: "category" });
  const subcategory = useWatch({ control: form.control, name: "subcategory" });
  const selectedFeatures = useWatch({ control: form.control, name: "features" }) || [];
  const customFeatures = useWatch({ control: form.control, name: "customFeatures" }) || [];
  const eventTypes = useWatch({ control: form.control, name: "eventTypes" }) || [];
  const isAcrossCity = useWatch({ control: form.control, name: "isAcrossCity" });

  useEffect(() => {
    form.setValue("features", []);
    form.setValue("customFeatures", []);
    form.setValue("subcategory", "");
  }, [category, form]);

  useEffect(() => {
    const availableSubcategories = category ? SUBCATEGORIES_BY_CATEGORY[category] || [] : [];
    if (!subcategory) {
      return;
    }
    if (!availableSubcategories.includes(subcategory)) {
      form.setValue("subcategory", "");
    }
  }, [category, form, subcategory]);

  const toggleFeature = (id: string) => {
    const updated = selectedFeatures.includes(id)
      ? selectedFeatures.filter((item) => item !== id)
      : [...selectedFeatures, id];
    form.setValue("features", updated);
  };

  const toggleEventType = (type: string) => {
    const updated = eventTypes.includes(type)
      ? eventTypes.filter((item) => item !== type)
      : [...eventTypes, type];
    form.setValue("eventTypes", updated);
  };

  const addCustomFeature = () => {
    const value = newCustomFeature.trim();
    if (!value) {
      return;
    }

    form.setValue("customFeatures", [...customFeatures, value]);
    setNewCustomFeature("");
  };

  const removeCustomFeature = (index: number) => {
    form.setValue(
      "customFeatures",
      customFeatures.filter((_, currentIndex) => currentIndex !== index)
    );
  };

  const coreFeatures = category ? FEATURES_BY_CATEGORY[category] || [] : [];
  const subcategories = category ? SUBCATEGORIES_BY_CATEGORY[category] || [] : [];

  const onSubmit = (values: ServiceFormValues) => {
    console.log("Final Form Data:", values);
    alert("Service listing created successfully!");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>List Your Service</CardTitle>
        <CardDescription>Complete the fields below to publish your service listing.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <AddServiceOverviewSection
              form={form}
              serviceCategories={SERVICE_CATEGORIES}
              subcategories={subcategories}
              priceTypes={PRICE_TYPES}
              eventTypes={EVENT_TYPES}
              selectedEventTypes={eventTypes}
              onToggleEventType={toggleEventType}
            />
            <AddServiceCoreFeaturesSection
              category={category}
              coreFeatures={coreFeatures}
              selectedFeatures={selectedFeatures}
              customFeatures={customFeatures}
              newCustomFeature={newCustomFeature}
              onNewCustomFeatureChange={setNewCustomFeature}
              onToggleFeature={toggleFeature}
              onAddCustomFeature={addCustomFeature}
              onRemoveCustomFeature={removeCustomFeature}
            />
            <AddServiceLogisticsMediaSection form={form} isAcrossCity={isAcrossCity} />
            <AddServiceFormActions onReset={() => form.reset()} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
