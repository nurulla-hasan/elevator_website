"use client"
import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import PackageStats from "@/components/vendor/dashboard/packages/package-stats";
import PackageCard from "@/components/vendor/dashboard/packages/package-card";
import { PackageModal } from "@/components/vendor/dashboard/packages/package-modal";

// Mock data for packages
const MOCK_PACKAGES = [
  {
    id: "1",
    title: "Basic Wedding Package",
    type: "Basic",
    price: 150,
    description: "Ideal for small intimate gatherings and basic service requirements.",
    services: ["Venue Rental", "Basic Decoration", "Sound System", "Security Service"]
  },
  {
    id: "2",
    title: "Standard Event Package",
    type: "Standard",
    price: 450,
    description: "Our most popular package for mid-sized events with comprehensive services.",
    services: ["Venue Rental", "Floral Decoration", "Catering Service", "Photography", "Waitstaff"]
  },
  {
    id: "3",
    title: "Premium Luxury Package",
    type: "Premium",
    price: 850,
    description: "Full-service luxury experience with every detail meticulously handled.",
    services: ["Luxury Venue", "Premium Decor", "Buffet Dinner", "Cinematography", "Live Band", "Event Manager"]
  }
];

export default function PackagesPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <DashboardHeader
          title="My Packages"
          description="Manage your service packages and pricing"
        />

        <div className="flex gap-2">
          <PackageModal mode="add" />
        </div>
      </div>

      <div className="space-y-6">
        <PackageStats />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PACKAGES.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              packageData={pkg} 
            />
          ))}
        </div>
      </div>
    </DashboardPageLayout>
  );
}

