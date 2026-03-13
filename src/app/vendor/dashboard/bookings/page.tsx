import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  Booking,
  bookingColumns,
} from "@/components/vendor/dashboard/bookings/booking-columns";
import BookingsFilter from "@/components/vendor/dashboard/bookings/bookings-filter";

export const Bookings: Booking[] = [
  {
    id: "BK-2026-001",
    client: "Sarah Johnson",
    clientEmail: "sarah.j@example.com",
    clientPhone: "+1 234 567 8900",
    package: "Premium Wedding Package",
    date: "3/15/2026",
    time: "10:00 AM",
    location: "Grand Ballroom, New York, NY",
    status: "confirmed",
    amount: "PKR 3,500",
    bookedOn: "2/10/2026",
    paymentStatus: "paid",
  },
  {
    id: "BK-2026-002",
    client: "Michael Chen",
    clientEmail: "michael.c@example.com",
    clientPhone: "+1 234 567 8901",
    package: "Engagement Shoot",
    date: "3/20/2026",
    time: "4:00 PM",
    location: "Central Park, New York, NY",
    status: "pending",
    amount: "PKR 3,500",
    bookedOn: "2/15/2026",
    paymentStatus: "pending",
  },
  {
    id: "BK-2026-003",
    client: "Emily Rodriguez",
    clientEmail: "emily.r@example.com",
    clientPhone: "+1 234 567 8902",
    package: "Full Day Coverage",
    date: "3/25/2026",
    time: "2:00 PM",
    location: "The Pierre, New York, NY",
    status: "confirmed",
    amount: "PKR 3,500",
    bookedOn: "2/20/2026",
    paymentStatus: "paid",
  },
  {
    id: "BK-2026-004",
    client: "David Kim",
    clientEmail: "david.k@example.com",
    clientPhone: "+1 234 567 8903",
    package: "Basic Package",
    date: "4/1/2026",
    time: "11:00 AM",
    location: "Brooklyn Bridge Park, NY",
    status: "pending",
    amount: "PKR 3,500",
    bookedOn: "2/25/2026",
    paymentStatus: "pending",
  },
  {
    id: "BK-2026-005",
    client: "Jessica Taylor",
    clientEmail: "jessica.t@example.com",
    clientPhone: "+1 234 567 8904",
    package: "Deluxe Wedding",
    date: "4/10/2026",
    time: "1:00 PM",
    location: "St. Patrick's Cathedral, NY",
    status: "confirmed",
    amount: "PKR 3,500",
    bookedOn: "3/1/2026",
    paymentStatus: "paid",
  },
  {
    id: "BK-2026-006",
    client: "Robert Martinez",
    clientEmail: "robert.m@example.com",
    clientPhone: "+1 234 567 8905",
    package: "Premium Wedding Package",
    date: "2/20/2026",
    time: "3:00 PM",
    location: "The Plaza Hotel, New York, NY",
    status: "completed",
    amount: "PKR 3,500",
    bookedOn: "1/15/2026",
    paymentStatus: "paid",
  },
  {
    id: "BK-2026-007",
    client: "Amanda Lee",
    clientEmail: "amanda.l@example.com",
    clientPhone: "+1 234 567 8906",
    package: "Engagement Shoot",
    date: "2/5/2026",
    time: "5:00 PM",
    location: "High Line, New York, NY",
    status: "cancelled",
    amount: "PKR 3,500",
    bookedOn: "1/10/2026",
    paymentStatus: "failed",
  },
];

const meta = {
  page: 1,
  limit: 10,
  total: 20,
  totalPages: 4,
};

export default function BookingsPage() {
  return (
    <DashboardPageLayout>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <DashboardHeader
          title="All Bookings"
          description="Manage all your job requests and bookings"
        />
        <BookingsFilter />
      </div>

      <div className="space-y-6">
        <DataTable columns={bookingColumns} data={Bookings} meta={meta} />
      </div>
    </DashboardPageLayout>
  );
}
