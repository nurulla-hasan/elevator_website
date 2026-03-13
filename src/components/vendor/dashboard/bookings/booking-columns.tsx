"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { BookingDetailsModal } from "./booking-details-modal";

export type Booking = {
  id: string;
  client: string;
  clientEmail: string;
  clientPhone: string;
  package: string;
  date: string;
  time: string;
  location: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  amount: string;
  bookedOn: string;
  paymentStatus: "paid" | "pending" | "failed";
};

export const bookingColumns: ColumnDef<Booking>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "Booking ID",
    cell: ({ row }) => <span>{row.getValue("id")}</span>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-foreground">{row.original.client}</span>
        <span className="text-xs ">{row.original.clientEmail}</span>
      </div>
    ),
  },
  {
    accessorKey: "package",
    header: "Package",
    cell: ({ row }) => <span className="">{row.getValue("package")}</span>,
  },
  {
    accessorKey: "date",
    header: "Date & Time",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span>{row.original.date}</span>
        <span className="text-xs ">{row.original.time}</span>
      </div>
    ),
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <span>{row.getValue("amount")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Booking["status"];
      return (
        <Badge
          variant={
            status === "confirmed"
              ? "accepted"
              : status === "pending"
                ? "progress"
                : status === "completed"
                  ? "info"
                  : "rejected"
          }
          className="capitalize"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-end">Actions</div>,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className="flex items-center justify-end gap-2">
          <BookingDetailsModal booking={row.original} />
          {status === "pending" && (
            <>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-green-600 hover:text-green-700 hover:bg-green-50"
              >
                <CheckCircle2 className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <XCircle className="size-4" />
              </Button>
            </>
          )}
        </div>
      );
    },
  },
];
