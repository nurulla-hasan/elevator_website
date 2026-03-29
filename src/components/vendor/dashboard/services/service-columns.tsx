"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import Image from "next/image";

export type ServiceStatus = "active" | "draft" | "deleted";

export type Service = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  status: ServiceStatus;
  description: string;
};

export const serviceColumns: ColumnDef<Service>[] = [
  {
    accessorKey: "name",
    header: "Service Details",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-lg border">
          <Image
            src={row.original.image}
            alt={row.original.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{row.original.name}</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <Badge variant="secondary" className="w-fit font-normal text-[11px]">
          {row.original.category}
        </Badge>
        <span className="text-[10px] text-muted-foreground pl-1">{row.original.subcategory}</span>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Starting Price",
    cell: ({ row }) => <span className="font-semibold text-primary">{row.getValue("price")}</span>,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">{row.original.rating}</span>
        <span className="text-[11px] text-muted-foreground">({row.original.reviews})</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge 
          variant={
            status === "active" 
              ? "success" 
              : status === "draft" 
                ? "warning" 
                : "rejected"
          }
          className="capitalize min-w-17.5 justify-center"
        >
          {status === "active" ? "Active" : status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-end">Actions</div>,
    cell: () => (
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost" size="icon-sm">
          <Eye className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Edit className="size-4 text-blue-600" />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </div>
    ),
  },
];
