"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "@/components/ui/custom/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

export default function ServicesFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="md:w-45 w-fit">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Venue">Venue</SelectItem>
            <SelectItem value="Photography">Photography</SelectItem>
            <SelectItem value="Catering">Catering</SelectItem>
            <SelectItem value="Decoration">Decoration</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="md:w-45 w-fit">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="verified">Verified</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>

      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchInput placeholder="Search services..." />
      </Suspense>
      <Link href="/vendor/dashboard/services/add">
        <Button>
          <Plus />
          Add Service
        </Button>
      </Link>
    </div>
  );
}
