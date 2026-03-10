"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

export type Package = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  bookings: number;
  status: "active" | "draft";
};

export const packageColumns: ColumnDef<Package>[] = [
  {
    accessorKey: "name",
    header: "Package",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium text-foreground">{row.getValue("name")}</span>
        <span className="text-xs text-muted-foreground line-clamp-1 max-w-100">
          {row.original.description}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <span className="text-foreground">
        {row.getValue("price")}
      </span>
    ),
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {row.getValue("duration")}
      </span>
    ),
  },
  {
    accessorKey: "bookings",
    header: "Bookings",
    cell: ({ row }) => (
      <span className="text-muted-foreground pl-4">
        {row.getValue("bookings")}
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
          variant={status === "active" ? "success" : "muted"}
          className="rounded-full capitalize"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: ()=> <div className="text-end">Actions</div>,
    cell: () => (
      <div className="flex items-center justify-end">
        <Button variant="ghost" size="icon-sm" className="text-blue-500 hover:text-blue-600 hover:bg-blue-50">
          <Edit />
        </Button>
        <Button variant="ghost" size="icon-sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
          <Trash2 />
        </Button>
      </div>
    ),
  },
];
