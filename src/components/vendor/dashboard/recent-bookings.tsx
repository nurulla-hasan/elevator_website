"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/custom/data-table";
import { bookingColumns } from "./bookings/booking-columns";
import { Bookings } from "@/app/vendor/dashboard/bookings/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function RecentBookings() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-xl font-semibold text-primary">Recent Bookings</CardTitle>
        <Button variant="link">
          <Link href="/vendor/dashboard/bookings">View All</Link>
          <ArrowRightIcon />
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable columns={bookingColumns.filter(col => col.id !== "actions" && col.id !== "id" && col.id !== "amount")} data={Bookings} />
      </CardContent>
    </Card>
  );
}
