"use client";

import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { PromoteYourBusiness } from "@/components/vendor/dashboard/promotions/promote-your-business";
import { SponsoredVisibilityBoost } from "@/components/vendor/dashboard/promotions/sponsored-visibility-boost";
import { GetVerified } from "@/components/vendor/dashboard/promotions/get-verified";
import { PremiumPlacement } from "@/components/vendor/dashboard/promotions/premium-placement";
import { BannerAdvertising } from "@/components/vendor/dashboard/promotions/banner-advertising";
import { ManagedBookingService } from "@/components/vendor/dashboard/promotions/managed-booking-service";
import { NeedHelpChoosing } from "@/components/vendor/dashboard/promotions/need-help-choosing";

export default function PromotionsPage() {
  return (
    <DashboardPageLayout>
      <DashboardHeader
        title="Promotions"
        description="Create and manage discount coupons and promotional offers."
      />
      <PromoteYourBusiness />
      <SponsoredVisibilityBoost />
      <GetVerified />
      <PremiumPlacement />
      <BannerAdvertising />
      <ManagedBookingService />
      <NeedHelpChoosing />
    </DashboardPageLayout>
  );
}
