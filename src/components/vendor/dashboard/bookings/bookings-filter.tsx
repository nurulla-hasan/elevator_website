import { SearchInput } from "@/components/ui/custom/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense } from "react";

export default function BookingsFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Select defaultValue="all">
        <SelectTrigger className="md:w-45 w-fit">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Bookings</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="confirmed">Confirmed</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>
      
      <Suspense fallback={<div>Loading...</div>}>
        <SearchInput placeholder="Search bookings..." />
      </Suspense>
    </div>
  );
}
