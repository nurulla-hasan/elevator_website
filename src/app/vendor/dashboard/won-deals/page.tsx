import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { SearchInput } from "@/components/ui/custom/search-input";
import { LeadCard } from "@/components/vendor/dashboard/leads/lead-card";
import { dummyLeads } from "@/components/vendor/dashboard/leads/dummy-leads";
import { Suspense } from "react";

export default function WonDealsPage() {
  const wonDeals = dummyLeads.filter((lead) => lead.status === "Won");

  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="Won Deals"
          description="Confirmed bookings and successful deals with clients."
        />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput placeholder="Search won deals..." />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {wonDeals.length > 0 ? (
          wonDeals.map((lead) => <LeadCard key={lead.id} lead={lead} />)
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-muted/20 rounded-xl border-2 border-dashed">
            <p className="text-muted-foreground">No won deals yet. Keep sending quotes!</p>
          </div>
        )}
      </div>
    </DashboardPageLayout>
  );
}
