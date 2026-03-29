import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { SearchInput } from "@/components/ui/custom/search-input";
import { LeadCard } from "@/components/vendor/dashboard/leads/lead-card";
import { dummyLeads } from "@/components/vendor/dashboard/leads/dummy-leads";
import { Suspense } from "react";

export default function QuotationsPage() {
  const quotations = dummyLeads.filter((lead) => lead.status === "Quoted");

  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="Quotations Sent"
          description="Track all price estimates and proposals sent to customers."
        />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput placeholder="Search quotations..." />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {quotations.length > 0 ? (
          quotations.map((lead) => <LeadCard key={lead.id} lead={lead} />)
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-muted/20 rounded-xl border-2 border-dashed">
            <p className="text-muted-foreground">No active quotations found.</p>
          </div>
        )}
      </div>
    </DashboardPageLayout>
  );
}
