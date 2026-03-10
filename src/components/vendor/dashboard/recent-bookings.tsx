"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/custom/data-table";
import { bookingColumns, Booking } from "./bookings/booking-columns";

const data: Booking[] = [
  {
    id: "1",
    client: "Sarah Johnson",
    package: "Premium Wedding Package",
    date: "3/15/2026",
    status: "confirmed",
    amount: "PKR 3,500",
  },
  {
    id: "2",
    client: "Michael Chen",
    package: "Engagement Shoot",
    date: "3/20/2026",
    status: "pending",
    amount: "PKR 3,500",
  },
  {
    id: "3",
    client: "Emily Rodriguez",
    package: "Full Day Coverage",
    date: "3/25/2026",
    status: "confirmed",
    amount: "PKR 3,500",
  },
  {
    id: "4",
    client: "David Kim",
    package: "Basic Package",
    date: "4/1/2026",
    status: "pending",
    amount: "PKR 3,500",
  },
  {
    id: "5",
    client: "Jessica Taylor",
    package: "Deluxe Wedding",
    date: "4/10/2026",
    status: "confirmed",
    amount: "PKR 3,500",
  },
  {
    id: "6",
    client: "Alex Rivera",
    package: "Birthday Shoot",
    date: "4/15/2026",
    status: "pending",
    amount: "PKR 2,000",
  },
  {
    id: "7",
    client: "Sophia Brown",
    package: "Corporate Event",
    date: "4/20/2026",
    status: "confirmed",
    amount: "PKR 5,000",
  },
  {
    id: "8",
    client: "James Wilson",
    package: "Family Portrait",
    date: "4/25/2026",
    status: "pending",
    amount: "PKR 1,500",
  },
  {
    id: "9",
    client: "Olivia Martinez",
    package: "Product Shoot",
    date: "5/1/2026",
    status: "confirmed",
    amount: "PKR 4,200",
  },
  {
    id: "10",
    client: "Ethan Hunt",
    package: "Cinematic Wedding",
    date: "5/10/2026",
    status: "confirmed",
    amount: "PKR 8,500",
  },
];

export default function RecentBookings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Recent Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={bookingColumns} data={data} />
      </CardContent>
    </Card>
  );
}
