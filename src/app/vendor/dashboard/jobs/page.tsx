import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import JobStats from "@/components/vendor/dashboard/jobs/job-stats";
import JobsFilter from "@/components/vendor/dashboard/jobs/jobs-filter";
import { DataTable } from "@/components/ui/custom/data-table";
import { jobColumns, Job } from "@/components/vendor/dashboard/jobs/job-columns";

const data: Job[] = [
  {
    id: "0001",
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientPhone: "+1 (555) 123-4567",
    eventType: "Wedding",
    eventDate: "Friday, May 15, 2026",
    preferredTime: "2:00 PM",
    guestCount: 150,
    location: "Grand Ballroom, New York",
    packageName: "Premium Wedding Package",
    budget: "PKR 3,500",
    status: "new",
    requestedAt: "2/20/2026",
  },
  {
    id: "0002",
    clientName: "Michael Chen",
    clientEmail: "michael.chen@email.com",
    clientPhone: "+1 (555) 987-6543",
    eventType: "Engagement",
    eventDate: "Saturday, March 28, 2026",
    preferredTime: "4:00 PM",
    guestCount: 50,
    location: "Central Park, New York",
    packageName: "Engagement Shoot",
    budget: "PKR 3,500",
    status: "accepted",
    requestedAt: "1/15/2026",
  },
  {
    id: "0003",
    clientName: "Emily Rodriguez",
    clientEmail: "emily.r@email.com",
    clientPhone: "+1 (555) 456-7890",
    eventType: "Wedding",
    eventDate: "Wednesday, June 10, 2026",
    preferredTime: "11:00 AM",
    guestCount: 200,
    location: "Skyline Garden, New Jersey",
    packageName: "Full Day Coverage",
    budget: "PKR 3,500",
    status: "in-progress",
    requestedAt: "2/05/2026",
  },
  {
    id: "0004",
    clientName: "David Kim",
    clientEmail: "david.kim@email.com",
    clientPhone: "+1 (555) 321-0987",
    eventType: "Wedding",
    eventDate: "Monday, April 20, 2026",
    preferredTime: "3:00 PM",
    guestCount: 120,
    location: "The Plaza, New York",
    packageName: "Basic Package",
    budget: "PKR 3,500",
    status: "completed",
    requestedAt: "12/10/2025",
  },
  {
    id: "0005",
    clientName: "Jessica Taylor",
    clientEmail: "jessica.t@email.com",
    clientPhone: "+1 (555) 654-3210",
    eventType: "Wedding",
    eventDate: "Sunday, July 5, 2026",
    preferredTime: "5:00 PM",
    guestCount: 180,
    location: "Beachfront Resort, Florida",
    packageName: "Deluxe Wedding",
    budget: "PKR 3,500",
    status: "new",
    requestedAt: "3/01/2026",
  },
  {
    id: "0006",
    clientName: "Robert Martinez",
    clientEmail: "robert.m@email.com",
    clientPhone: "+1 (555) 789-0123",
    eventType: "Corporate Event",
    eventDate: "Sunday, March 15, 2026",
    preferredTime: "9:00 AM",
    guestCount: 300,
    location: "Convention Center, Chicago",
    packageName: "Corporate Package",
    budget: "PKR 3,500",
    status: "rejected",
    requestedAt: "1/20/2026",
  },
];

const meta = {
  page: 1,
  limit: 10,
  total: 20,
  totalPages: 4,
};

export default function JobsPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="All Jobs"
          description="Manage all your job requests and bookings"
        />
        <JobsFilter />
      </div>

      <div className="space-y-6">
        <JobStats />
        <DataTable columns={jobColumns} data={data} meta={meta} />
      </div>
    </DashboardPageLayout>
  );
}
