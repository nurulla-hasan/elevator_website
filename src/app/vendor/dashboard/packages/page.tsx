import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import PackageStats from "@/components/vendor/dashboard/packages/package-stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PackageForm from "@/components/vendor/dashboard/packages/package-form";

export default function PackagesPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="My Packages"
          description="Manage your service packages and pricing"
        />
      </div>

      <div className="space-y-6">
        <PackageStats />

        <Tabs defaultValue="basic" className="w-full">
          <TabsList variant="line" className="w-full justify-start border-b border-border mb-4">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <PackageForm type="Basic" />
          </TabsContent>

          <TabsContent value="standard">
            <PackageForm type="Standard" />
          </TabsContent>

          <TabsContent value="premium">
            <PackageForm type="Premium" />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardPageLayout>
  );
}

