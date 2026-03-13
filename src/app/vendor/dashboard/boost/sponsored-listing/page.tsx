"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import DashboardHeader from "@/components/ui/custom/dashboard-header";
import { BoostPlanSelection, defaultThemes } from "@/components/vendor/dashboard/boost/boost-plan-selection";

export default function SponsoredListingPage() {
  const router = useRouter();

  const features = [
    "Top placement in search results",
    "Priority visibility over regular vendors",
    "Auto-expiry for hassle-free management",
    "Higher click-through rate guaranteed",
    "Search priority in category listings",
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
            title="Sponsored Listing Plans"
            description="Boost your ranking in listings, search results, and similar vendors."
          />
        </div>

        <BoostPlanSelection
          planType="Sponsored Listing"
          theme={defaultThemes.orange}
          features={features}
        />
      </div>
    </DashboardPageLayout>
  );
}
