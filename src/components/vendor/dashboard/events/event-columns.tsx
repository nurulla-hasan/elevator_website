"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Event } from "@/types/event";

export const eventColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "title",
    header: "Event Name",
    cell: ({ row }) => <span className="font-medium text-primary">{row.getValue("title")}</span>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-foreground">{row.original.client}</span>
        <span className="text-xs text-muted-foreground">{row.original.clientEmail}</span>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date & Time",
    cell: ({ row }) => (
      <div className="flex flex-col text-sm">
        <span>{row.original.date}</span>
        <span className="text-xs text-muted-foreground">{row.original.time}</span>
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <span className="text-sm line-clamp-1">{row.getValue("location")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Event["status"];
      return (
        <Badge
          variant={
            status === "upcoming"
              ? "progress"
              : status === "completed"
                ? "success"
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
    cell: () => {
      return (
        <div className="flex items-center justify-end">
          <Button variant="ghost" size="icon-sm" className="text-primary hover:text-primary hover:bg-primary/5">
            <Eye className="size-4" />
          </Button>
        </div>
      );
    },
  },
];
