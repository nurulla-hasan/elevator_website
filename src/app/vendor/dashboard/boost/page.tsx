import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { BoostStats } from "@/components/vendor/dashboard/boost/boost-stats";
import { BoostFeatures } from "@/components/vendor/dashboard/boost/boost-features";
import { BoostPromotions } from "@/components/vendor/dashboard/boost/boost-promotions";
import { BoostSuccessStories } from "@/components/vendor/dashboard/boost/boost-success-stories";
import { BoostCTA } from "@/components/vendor/dashboard/boost/boost-cta";
import { BoostBannerAdvertising } from "@/components/vendor/dashboard/boost/boost-banner-advertising";

export default function BoostPage() {
  return (
    <DashboardPageLayout>
      <DashboardHeader
        title="Boost Your Visibility"
        description="Grow your business with premium promotion options"
      />

      <div className="space-y-12 mt-8">
        <BoostStats />
        <BoostFeatures />
        <BoostPromotions />
        <BoostBannerAdvertising />
        <BoostSuccessStories />
        <BoostCTA />
      </div>
    </DashboardPageLayout>
  );
}
