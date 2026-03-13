import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { AnalyticsStats } from "@/components/vendor/dashboard/analytics/analytics-stats";
import { AnalyticsCharts } from "@/components/vendor/dashboard/analytics/analytics-charts";
import { TopPackages } from "@/components/vendor/dashboard/analytics/top-packages";

export default function AnalyticsPage() {
  return (
    <DashboardPageLayout>
        <DashboardHeader
          title="Analytics"
          description="Track your business performance and insights"
        />

        <div className="space-y-6">
          <AnalyticsStats />
          <AnalyticsCharts />
          <TopPackages />
        </div>
    </DashboardPageLayout>
  );
}
