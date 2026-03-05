"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { checkoutSchema, CheckoutValues } from "@/schemas/checkout.schema";
import { DetailsForm } from "@/components/main-route/booking-checkout/details-form";
import { BookingSummary } from "@/components/main-route/booking-checkout/booking-summary";
import PageLayout from "@/components/ui/custom/page-layout";

// Mock Data for demonstration
const mockVendor = {
  name: "Elegant Moments Photography",
};

const mockPackage = {
  id: "pkg-1",
  name: "Complete Wedding Coverage",
  price: "$3,500",
  duration: "10 hours",
  serviceFee: "$0",
  total: "$3,500",
  deposit: "$1,050",
};

export default function BookingCheckoutPage() {
  const router = useRouter();

  const form = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventLocation: "",
      expectedGuestCount: "150",
      notes: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (values: CheckoutValues) => {
    // In real scenario, values would be sent to server to create Stripe session
    console.log("Form values:", values);
    
    // Simulate redirect to success page (In real scenario, this would go to Stripe)
    router.push("/booking-checkout/success");
  };

  return (
    <PageLayout paddingSize="small">
      <div className="max-w-6xl mx-auto">
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            
            {/* Main Form Area */}
            <div className="lg:col-span-2 space-y-6">
              <DetailsForm form={form} />
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <BookingSummary vendor={mockVendor} pkg={mockPackage} />
            </div>
          </form>
        </Form>
      </div>
    </PageLayout>
  );
}
