"use client";

import { useRouter } from "next/navigation";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { BoostPlanSelection, defaultThemes } from "@/components/vendor/dashboard/boost/boost-plan-selection";

export default function SponsoredListingPage() {
  const router = useRouter();

  return (
    <DashboardPageLayout>
      <BoostPlanSelection
        planType="Sponsored Listing"
        onBack={() => router.push("/vendor/dashboard/boost")}
        theme={defaultThemes.orange}
      />
    </DashboardPageLayout>
  );
}
