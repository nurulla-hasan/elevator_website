import { mockVenues } from "@/data/venues.data";
import { VenueFilters } from "@/components/main-route/venues/venue-filters";
import { VenueMap } from "@/components/main-route/venues/venue-map";
import { VenueBottomSheet } from "@/components/main-route/venues/venue-bottom-sheet";
import { Suspense } from "react";

export default function BrowseVenuesPage() {
  return (
    <div className="relative screen-height w-full overflow-hidden flex flex-col">
      {/* Main Content: Full Screen Map & Bottom Sheet */}
      <div className="flex-1 relative w-full overflow-hidden">
        {/* Floating Filters Modal (Top Right) */}
        <Suspense fallback={<div>Loading filters...</div>}>
          <VenueFilters />
        </Suspense>

        <VenueMap venues={mockVenues} />
        <VenueBottomSheet venues={mockVenues} />
      </div>
    </div>
  );
}
