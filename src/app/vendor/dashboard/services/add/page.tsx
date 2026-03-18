
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { AddServiceForm } from "@/components/vendor/dashboard/services/add-service-form";
import BackButton from "@/components/ui/custom/back-button";

export default function AddServicePage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <BackButton variant="outline"/>
        </div>

        <div className="max-w-7xl mx-auto">
          <AddServiceForm />
        </div>
      </div>
    </DashboardPageLayout>
  );
}
