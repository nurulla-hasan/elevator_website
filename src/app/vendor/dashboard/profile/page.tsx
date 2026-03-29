// import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { ProfilePhotoSection } from "@/components/vendor/dashboard/profile/profile-photo-section";
import { VendorProfileForm } from "@/components/vendor/dashboard/profile/vendor-profile-form";
import { ProfileCompletionScore } from "@/components/vendor/dashboard/profile/profile-completion-score";

export default function ProfilePage() {
  return (
    <DashboardPageLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProfilePhotoSection />
          </div>
          <div className="lg:col-span-2">
            <ProfileCompletionScore score={75} />
          </div>
        </div>
        <VendorProfileForm />
      </div>
    </DashboardPageLayout>
  );
}
