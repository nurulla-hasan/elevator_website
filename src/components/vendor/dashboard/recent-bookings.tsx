"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/custom/data-table";
import { bookingColumns } from "./bookings/booking-columns";
import { Bookings } from "@/app/vendor/dashboard/bookings/page";

export default function RecentBookings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Recent Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={bookingColumns.filter(col => col.id !== "actions" && col.id !== "id" && col.id !== "amount")} data={Bookings} />
      </CardContent>
    </Card>
  );
}
