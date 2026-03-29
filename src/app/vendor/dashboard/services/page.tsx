"use client";

import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  Service,
  serviceColumns,
} from "@/components/vendor/dashboard/services/service-columns";
import ServicesFilter from "@/components/vendor/dashboard/services/services-filter";

const MOCK_SERVICES: Service[] = [
  {
    id: "1",
    name: "Grand Palace Hotel",
    category: "Venue",
    location: "Gulshan, Dhaka",
    rating: 4.8,
    reviews: 124,
    price: "PKR 5,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    verified: true,
    description: "Experience luxury and elegance at the Grand Palace Hotel. Our spacious banquet halls and premium catering services make it the perfect choice for your grand wedding celebrations in the heart of the city."
  },
  {
    id: "2",
    name: "Golden Tulip Banquet",
    category: "Venue",
    location: "Banani, Dhaka",
    rating: 4.5,
    reviews: 89,
    price: "PKR 4,200",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    verified: true,
    description: "A beautiful venue with modern amenities and exceptional service, perfect for mid-sized events."
  },
  {
    id: "3",
    name: "Elite Photography",
    category: "Photography",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 56,
    price: "PKR 2,500",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    verified: false,
    description: "Capturing your precious moments with creativity and professionalism."
  }
];

const meta = {
  page: 1,
  limit: 10,
  total: 3,
  totalPages: 1,
};

export default function ServicesPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="My Services"
          description="Manage all your services and vendor profiles"
        />
        <ServicesFilter />
      </div>
 
      <div className="space-y-6">
        <DataTable columns={serviceColumns} data={MOCK_SERVICES} meta={meta} />
      </div>
    </DashboardPageLayout>
  );
}
