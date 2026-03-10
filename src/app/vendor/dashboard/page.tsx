import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import DashboardStats from "@/components/vendor/dashboard/dashboard-stats";
import RecentBookings from "@/components/vendor/dashboard/recent-bookings";
import UpcomingEvents from "@/components/vendor/dashboard/upcoming-events";

export default function DashboardPage() {
  return (
    <DashboardPageLayout>
      <DashboardHeader
        title="Dashboard"
        description="Welcome back! Here's your business overview."
      />

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentBookings />
        </div>
        <div className="xl:col-span-1">
          <UpcomingEvents />
        </div>
      </div>
    </DashboardPageLayout>
  );
}
