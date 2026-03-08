"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/custom/page-header";
import { VenueCard } from "@/components/main-route/venues/venue-card";
import { mockVenues } from "@/data/venues.data";
import Link from "next/link";
import { VenueMap } from "@/components/main-route/venues/venue-map";

export default function VenuePreview() {
  return (
    <section>
      <div className="mb-8">
        <PageHeader 
          title="Find Your Perfect Venue" 
          description="Explore our curated list of top-rated venues with an interactive map."
        >
        </PageHeader>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Side: Interactive Map Preview */}
        <div className="relative rounded-2xl overflow-hidden min-h-100 lg:min-h-full">
          <VenueMap venues={mockVenues} />
        </div>

        {/* Right Side: Horizontal Cards and Button */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            {mockVenues.slice(0, 3).map((venue) => (
              <VenueCard key={venue.id} venue={venue} variant="horizontal" />
            ))}
          </div>
          <Button>
            <Link href="/venues" className="w-full">
              Open Venue Finder
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
