"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import DashboardHeader from "@/components/ui/custom/dashboard-header";
import { BoostPlanSelection, defaultThemes } from "@/components/vendor/dashboard/boost/boost-plan-selection";

export default function VerifiedVendorPage() {
  const router = useRouter();

  const features = [
    "Official verified badge on profile",
    "Appear in 'Verified Only' filters",
    "Build higher trust with clients",
    "Improved conversion rates",
    "Priority in vendor comparisons",
  ];

  return (
    <DashboardPageLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => router.push("/vendor/dashboard/boost")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Promotions
          </button>
          
          <DashboardHeader 
            title="Verified Vendor Plans"
            description="Build trust and stand out with an official verified badge."
          />
        </div>

        <BoostPlanSelection
          planType="Verified Vendor"
          theme={defaultThemes.purple}
          features={features}
        />
      </div>
    </DashboardPageLayout>
  );
}
