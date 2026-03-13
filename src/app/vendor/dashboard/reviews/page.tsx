import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { ReviewStats } from "@/components/vendor/dashboard/reviews/review-stats";
import { ReviewList } from "@/components/vendor/dashboard/reviews/review-list";

export default function ReviewsPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="Reviews & Ratings"
          description="See what your clients are saying about you"
        />
      </div>

      <div className="space-y-12">
        <ReviewStats />
        <ReviewList />
      </div>
    </DashboardPageLayout>
  );
}
