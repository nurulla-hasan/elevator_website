"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export type Booking = {
  id: string;
  client: string;
  package: string;
  date: string;
  status: "confirmed" | "pending";
  amount: string;
};

export const bookingColumns: ColumnDef<Booking>[] = [
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <span className="text-foreground">
        {row.getValue("client")}
      </span>
    ),
  },
  {
    accessorKey: "package",
    header: "Package",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {row.getValue("package")}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {row.getValue("date")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={status === "confirmed" ? "success" : "warning"}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="text-primary">
        {row.getValue("amount")}
      </span>
    ),
  },
];
