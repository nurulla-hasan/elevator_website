"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import DashboardHeader from "@/components/ui/custom/dashboard-header";
import { BoostPlanSelection, defaultThemes } from "@/components/vendor/dashboard/boost/boost-plan-selection";

export default function FeaturedPlacementPage() {
  const router = useRouter();

  const features = [
    "Homepage spotlight position",
    "Category page premium section placement",
    "Select specific placement spots",
    "Premium visibility for top conversion",
    "Exclusive placement limited to few vendors",
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
            title="Featured Placement Plans"
            description="Premium spotlight position on homepage or category pages."
          />
        </div>

        <BoostPlanSelection
          planType="Featured Placement"
          theme={defaultThemes.blue}
          features={features}
        />
      </div>
    </DashboardPageLayout>
  );
}
