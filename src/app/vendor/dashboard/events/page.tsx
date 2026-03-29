"use client";

import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import { eventColumns } from "@/components/vendor/dashboard/events/event-columns";
import { Event } from "@/types/event";

export const Events: Event[] = [
  {
    id: "EV-2026-001",
    title: "Sarah & John Wedding",
    client: "Sarah Johnson",
    clientEmail: "sarah.j@example.com",
    date: "3/15/2026",
    time: "10:00 AM",
    location: "Grand Ballroom, New York, NY",
    type: "Wedding",
    status: "upcoming",
  },
  {
    id: "EV-2026-002",
    title: "Michael & Lisa Engagement",
    client: "Michael Chen",
    clientEmail: "michael.c@example.com",
    date: "3/20/2026",
    time: "4:00 PM",
    location: "Central Park, New York, NY",
    type: "Engagement",
    status: "upcoming",
  },
  {
    id: "EV-2026-003",
    title: "Emily & Tom Wedding",
    client: "Emily Rodriguez",
    clientEmail: "emily.r@example.com",
    date: "3/25/2026",
    time: "2:00 PM",
    location: "Riverside Venue, New York, NY",
    type: "Wedding",
    status: "upcoming",
  },
  {
    id: "EV-2026-004",
    title: "Tech Conference 2026",
    client: "Robert Martinez",
    clientEmail: "robert.m@example.com",
    date: "2/20/2026",
    time: "9:00 AM",
    location: "Convention Center, NY",
    type: "Corporate",
    status: "completed",
  },
];

const meta = {
  page: 1,
  limit: 10,
  total: 4,
  totalPages: 1,
};

export default function EventsPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="All Events"
          description="View and manage all your scheduled events"
        />
      </div>

      <div className="space-y-6">
        <DataTable columns={eventColumns} data={Events} meta={meta} />
      </div>
    </DashboardPageLayout>
  );
}
