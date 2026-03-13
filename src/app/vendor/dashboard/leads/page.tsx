import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { SearchInput } from "@/components/ui/custom/search-input";
import { LeadStats } from "@/components/vendor/dashboard/leads/lead-stats";
import { LeadCard } from "@/components/vendor/dashboard/leads/lead-card";
import { Suspense } from "react";

const dummyLeads = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    status: "New" as const,
    priority: "High" as const,
    eventDate: "Aug 15, 2026",
    location: "Los Angeles, CA",
    budget: "PKR 50,000 - PKR 100,000",
    guests: 200,
    message:
      "Looking for a photographer for our outdoor wedding. We want both traditional and candid shots.",
    receivedDate: "February 18, 2026",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "mchen@email.com",
    phone: "+1 (555) 234-5678",
    status: "Quoted" as const,
    priority: "Medium" as const,
    eventDate: "Sep 20, 2026",
    location: "San Francisco, CA",
    budget: "PKR 50,000 - PKR 100,000",
    guests: 150,
    message: "Need photography services for our intimate garden wedding.",
    receivedDate: "February 17, 2026",
  },
  {
    id: "3",
    name: "David Park",
    email: "dpark@email.com",
    phone: "+1 (555) 456-7890",
    status: "Won" as const,
    priority: "Low" as const,
    eventDate: "Oct 5, 2026",
    location: "Santa Barbara, CA",
    budget: "PKR 50,000 - PKR 100,000",
    guests: 120,
    message:
      "Small destination wedding, looking for photography and videography.",
    receivedDate: "February 15, 2026",
  },
  {
    id: "4",
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    phone: "+1 (555) 567-8901",
    status: "Lost" as const,
    priority: "Low" as const,
    eventDate: "Jun 25, 2026",
    location: "Napa Valley, CA",
    budget: "PKR 50,000 - PKR 100,000",
    guests: 180,
    message:
      "Vineyard wedding, need experienced photographer familiar with outdoor settings.",
    receivedDate: "February 14, 2026",
  },
];

export default function LeadsPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="Leads & Inquiries"
          description="Manage your leads and send quotes to potential customers."
        />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput placeholder="Search leads..." />
        </Suspense>
      </div>

      <LeadStats />

      <div className="grid grid-cols-1 gap-6">
        {dummyLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </DashboardPageLayout>
  );
}
