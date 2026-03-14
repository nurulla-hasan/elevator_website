import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";

export default function PromotePage() {
  return (
    <DashboardPageLayout>
      <DashboardHeader
        title="Promote"
        description="Manage your subscriptions and invoices."
      />
    </DashboardPageLayout>
  );
}
