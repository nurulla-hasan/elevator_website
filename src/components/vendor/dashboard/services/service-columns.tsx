"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import Image from "next/image";

export type Service = {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  verified: boolean;
  description: string;
};

export const serviceColumns: ColumnDef<Service>[] = [
  {
    accessorKey: "name",
    header: "Service Details",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-lg">
          <Image
            src={row.original.image}
            alt={row.original.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{row.original.name}</span>
          <span className="text-xs text-muted-foreground">{row.original.category}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <span className="text-sm">{row.getValue("location")}</span>,
  },
  {
    accessorKey: "price",
    header: "Starting Price",
    cell: ({ row }) => <span className="font-medium text-primary">{row.getValue("price")}</span>,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">{row.original.rating}</span>
        <span className="text-xs text-muted-foreground">({row.original.reviews} reviews)</span>
      </div>
    ),
  },
  {
    accessorKey: "verified",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.verified ? "accepted" : "progress"}>
        {row.original.verified ? "Verified" : "Pending"}
      </Badge>
    ),
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
