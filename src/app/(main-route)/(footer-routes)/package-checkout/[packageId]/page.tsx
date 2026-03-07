"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  packageCheckoutSchema,
  PackageCheckoutValues,
} from "@/schemas/package-checkout.schema";
import { PricingBookingForm } from "@/components/main-route/booking-checkout/pricing-booking-form";
import PageLayout from "@/components/ui/custom/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";

// Mock Data for pricing plans
const plans = {
  starter: {
    name: "Starter Support",
    price: "999",
  },
  concierge: {
    name: "Personal Concierge",
    price: "2499",
  },
  elite: {
    name: "Elite Experience",
    price: "4999",
  },
};

export default function PackageCheckoutPage() {
  const router = useRouter();
  const params = useParams();
  const packageId = params.packageId as string;
  const currentPlan = plans[packageId as keyof typeof plans] || plans.starter;

  const form = useForm<PackageCheckoutValues>({
    resolver: zodResolver(packageCheckoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      weddingLocation: "",
      estimatedBudget: "",
      expectedGuestCount: "",
      notes: "",
    },
  });

  const onSubmit = async (values: PackageCheckoutValues) => {
    console.log("Form values:", values);
    router.push("/booking-checkout/success");
  };

  return (
    <PageLayout paddingSize="small">
      <div className="max-w-4xl mx-auto space-y-8">
        <CustomBreadcrumb
          links={[
            { name: "Home", href: "/" },
            { name: "Pricing", href: "/pricing" },
            { name: "Checkout", isCurrent: true },
          ]}
        />
        <PageHeader
          title="Complete Your Booking"
          description="Fill in your details to hire your WePlan Associate and start your wedding journey."
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <PricingBookingForm
              form={form}
              packageName={currentPlan.name}
              packagePrice={currentPlan.price}
            />
          </form>
        </Form>
      </div>
    </PageLayout>
  );
}
