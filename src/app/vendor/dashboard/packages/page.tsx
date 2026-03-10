import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";

export default function PackagesPage() {
  return (
    <DashboardPageLayout>
      <DashboardHeader
        title="My Packages"
        description="View and manage your service packages."
      />
    </DashboardPageLayout>
  );
}
