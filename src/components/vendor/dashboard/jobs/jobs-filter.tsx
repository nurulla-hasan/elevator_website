import { SearchInput } from "@/components/ui/custom/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense } from "react";

export default function JobsFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Select defaultValue="all">
        <SelectTrigger className="md:w-45 w-fit">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Jobs</SelectItem>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="accepted">Accepted</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchInput placeholder="Search jobs..." />
      </Suspense>
    </div>
  );
}
