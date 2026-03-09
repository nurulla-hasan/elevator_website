"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  vendorRegistrationSchema,
  VendorRegistrationData,
  RegistrationStep,
} from "@/types/vendor-registration.type";
import { StepIndicator } from "@/components/main-route/become-vendor/step-indicator";
import { BusinessDetailsForm } from "@/components/main-route/become-vendor/business-details-form";
import { PortfolioForm } from "@/components/main-route/become-vendor/portfolio-form";
import { ReviewForm } from "@/components/main-route/become-vendor/review-form";
import { SuccessScreen } from "@/components/main-route/become-vendor/success-screen";
import PageLayout from "@/components/ui/custom/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function BecomeVendorPage() {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>("details");
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<VendorRegistrationData>({
    resolver: zodResolver(vendorRegistrationSchema),
    defaultValues: {
      businessName: "",
      businessDescription: "",
      businessAddress: "",
      city: "",
      state: "",
      website: "",
      yearsOfExperience: "",
      businessLogo: "",
      portfolioImages: [],
      agreedToTerms: false,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: VendorRegistrationData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      console.log("Submitting registration data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCurrentStep("success");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const stepToNumber = (step: RegistrationStep): number => {
    switch (step) {
      case "details":
        return 1;
      case "portfolio":
        return 2;
      case "review":
        return 3;
      case "success":
        return 4;
      default:
        return 1;
    }
  };

  return (
    <PageLayout paddingSize="small" className="max-w-5xl">
      {currentStep !== "success" && (
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
            Become a Vendor
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            Join WePlan and grow your wedding business
          </p>
        </div>
      )}

      <div className="mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {currentStep !== "success" && (
          <StepIndicator currentStep={stepToNumber(currentStep)} />
        )}

        <Card className={cn(currentStep === "success" && "border-none bg-transparent shadow-none")}>
          <CardContent className={cn(currentStep === "success" && "p-0")}>
            <FormProvider {...methods}>
              {currentStep === "details" && (
                <BusinessDetailsForm
                  onNext={() => setCurrentStep("portfolio")}
                />
              )}
              {currentStep === "portfolio" && (
                <PortfolioForm
                  onNext={() => setCurrentStep("review")}
                  onPrevious={() => setCurrentStep("details")}
                />
              )}
              {currentStep === "review" && (
                <ReviewForm
                  onPrevious={() => setCurrentStep("portfolio")}
                  onSubmit={onSubmit}
                  isLoading={isLoading}
                />
              )}
              {currentStep === "success" && <SuccessScreen />}
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
