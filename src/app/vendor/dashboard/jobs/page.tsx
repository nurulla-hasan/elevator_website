import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import JobStats from "@/components/vendor/dashboard/jobs/job-stats";
import JobsFilter from "@/components/vendor/dashboard/jobs/jobs-filter";

export default function JobsPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="All Jobs"
          description="Manage all your job requests and bookings"
        />
        <JobsFilter />
      </div>

      <div className="space-y-6">
        <JobStats />
      </div>
    </DashboardPageLayout>
  );
}
