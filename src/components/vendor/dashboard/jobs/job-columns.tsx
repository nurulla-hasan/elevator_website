"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, CheckCircle2, XCircle } from "lucide-react";
import { JobDetailsModal } from "./job-details-modal";

export type Job = {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  eventType: string;
  eventDate: string;
  preferredTime: string;
  guestCount: number;
  location: string;
  packageName: string;
  budget: string;
  status: "new" | "accepted" | "in-progress" | "completed" | "rejected";
  requestedAt: string;
};

export const jobColumns: ColumnDef<Job>[] = [
  {
    accessorKey: "id",
    header: "Job ID",
    cell: ({ row }) => (
      <span>#{row.getValue("id")}</span>
    ),
  },
  {
    accessorKey: "clientName",
    header: "Client",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span>
          {row.original.clientName}
        </span>
        <span className="text-xs">
          {row.original.clientEmail}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "eventType",
    header: "Event Type",
    cell: ({ row }) => (
      <span>{row.getValue("eventType")}</span>
    ),
  },
  {
    accessorKey: "eventDate",
    header: "Event Date",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-4 w-4" />
        <span>{row.getValue("eventDate")}</span>
      </div>
    ),
  },
  {
    accessorKey: "packageName",
    header: "Package",
    cell: ({ row }) => (
      <span>{row.getValue("packageName")}</span>
    ),
  },
  {
    accessorKey: "budget",
    header: "Budget",
    cell: ({ row }) => (
      <span>{row.getValue("budget")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Job["status"];
      const Icon = status === "rejected" ? XCircle : (status === "new" || status === "in-progress" ? Clock : CheckCircle2);
      
      return (
        <Badge
          variant={
            status === "new" ? "info" : 
            status === "accepted" ? "accepted" : 
            status === "in-progress" ? "progress" : 
            status === "completed" ? "success" : 
            "rejected"
          }
          className="rounded-full px-3 py-1 font-medium flex items-center gap-1.5 w-fit capitalize"
        >
          <Icon className="h-3.5 w-3.5" />
          {status === "in-progress" ? "In Progress" : status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-end">Actions</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-end">
        <JobDetailsModal job={row.original} />
      </div>
    ),
  },
];
