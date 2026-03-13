"use client";

import { useRouter } from "next/navigation";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { BoostPlanSelection, defaultThemes } from "@/components/vendor/dashboard/boost/boost-plan-selection";

export default function FeaturedPlacementPage() {
  const router = useRouter();

  return (
    <DashboardPageLayout>
      <BoostPlanSelection
        planType="Featured Placement"
        onBack={() => router.push("/vendor/dashboard/boost")}
        theme={defaultThemes.blue}
      />
    </DashboardPageLayout>
  );
}
