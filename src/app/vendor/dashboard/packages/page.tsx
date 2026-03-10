import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import PackageStats from "@/components/vendor/dashboard/packages/package-stats";
import { DataTable } from "@/components/ui/custom/data-table";
import { packageColumns, Package } from "@/components/vendor/dashboard/packages/package-columns";
import AddPackageModal from "@/components/vendor/dashboard/packages/add-package-modal";

const data: Package[] = [
  {
    id: "1",
    name: "Premium Wedding Package",
    description: "Full day coverage with two photographers, engagement shoot, and premium album",
    price: "PKR 3,500",
    duration: "8 hours",
    bookings: 45,
    status: "active",
  },
  {
    id: "2",
    name: "Engagement Shoot",
    description: "Professional engagement photography session with digital photos",
    price: "PKR 3,500",
    duration: "2 hours",
    bookings: 67,
    status: "active",
  },
  {
    id: "3",
    name: "Full Day Coverage",
    description: "Complete wedding day coverage from preparation to reception",
    price: "PKR 3,500",
    duration: "12 hours",
    bookings: 32,
    status: "active",
  },
  {
    id: "4",
    name: "Basic Package",
    description: "Essential wedding photography with single photographer",
    price: "PKR 3,500",
    duration: "6 hours",
    bookings: 89,
    status: "active",
  },
  {
    id: "5",
    name: "Deluxe Wedding",
    description: "Premium package with videography, drone shots, and custom album",
    price: "PKR 3,500",
    duration: "10 hours",
    bookings: 0,
    status: "draft",
  },
];

const meta = {
  page: 1,
  limit: 10,
  total: data.length,
  totalPages: 5,
}

export default function PackagesPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <DashboardHeader
          title="My Packages"
          description="Manage your service packages and pricing"
        />
        <AddPackageModal />
      </div>

      <div className="space-y-6">
        <PackageStats />
        <DataTable columns={packageColumns} data={data} meta={meta} />
      </div>
    </DashboardPageLayout>
  );
}

