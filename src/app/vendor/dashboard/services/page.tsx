"use client";

import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  Service,
  serviceColumns,
} from "@/components/vendor/dashboard/services/service-columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const MOCK_SERVICES: Service[] = [
  {
    id: "SRV-001",
    name: "Grand Palace Hotel",
    category: "Venue",
    subcategory: "Convention Hall",
    location: "Gulshan, Dhaka",
    rating: 4.8,
    reviews: 124,
    price: "PKR 5,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    status: "active",
    description: "Experience luxury and elegance at the Grand Palace Hotel."
  },
  {
    id: "SRV-002",
    name: "Golden Tulip Banquet",
    category: "Venue",
    subcategory: "Community Center",
    location: "Banani, Dhaka",
    rating: 4.5,
    reviews: 89,
    price: "PKR 4,200",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    status: "active",
    description: "A beautiful venue with modern amenities."
  },
  {
    id: "SRV-003",
    name: "Elite Photography",
    category: "Photography",
    subcategory: "Wedding Photography",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 56,
    price: "PKR 2,500",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    status: "draft",
    description: "Capturing your precious moments."
  }
];

const meta = {
  page: 1,
  limit: 10,
  total: 3,
  totalPages: 1,
};

export default function ServicesPage() {
  const activeServices = MOCK_SERVICES.filter(s => s.status === "active");
  const draftServices = MOCK_SERVICES.filter(s => s.status === "draft");
  const deletedServices = MOCK_SERVICES.filter(s => s.status === "deleted");

  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="My Services"
          description="Manage and monitor all your listed services"
        />
        <Button asChild className="flex items-center gap-2">
          <Link href="/vendor/dashboard/services/add">
            <Plus className="h-4 w-4" />
            Add New Service
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full space-y-6">
        <TabsList variant="line">
          <TabsTrigger 
            value="active" 
          >
            Active ({activeServices.length})
          </TabsTrigger>
          <TabsTrigger 
            value="draft"
          >
            Draft ({draftServices.length})
          </TabsTrigger>
          <TabsTrigger 
            value="deleted"
          >
            Trash ({deletedServices.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="m-0">
          <div className="space-y-6">
            <DataTable columns={serviceColumns} data={activeServices} meta={meta} />
          </div>
        </TabsContent>

        <TabsContent value="draft" className="m-0">
          <div className="space-y-6">
            <DataTable columns={serviceColumns} data={draftServices} meta={meta} />
          </div>
        </TabsContent>

        <TabsContent value="deleted" className="m-0">
          <div className="space-y-6">
            <DataTable columns={serviceColumns} data={deletedServices} meta={meta} />
          </div>
        </TabsContent>
      </Tabs>
    </DashboardPageLayout>
  );
}
