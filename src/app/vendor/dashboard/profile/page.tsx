// import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { ProfilePhotoSection } from "@/components/vendor/dashboard/profile/profile-photo-section";
import { VendorProfileForm } from "@/components/vendor/dashboard/profile/vendor-profile-form";

export default function ProfilePage() {
  return (
    <DashboardPageLayout>
      <div className="space-y-6">
        <ProfilePhotoSection />
        <VendorProfileForm />
      </div>
    </DashboardPageLayout>
  );
}
