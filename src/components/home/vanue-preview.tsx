"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/custom/page-header";
import { VenueCard } from "@/components/main-route/venues/venue-card";
import { ArrowRight, MapPin } from "lucide-react";
import { mockVenues } from "@/data/venues.data";
import Link from "next/link";

export default function VenuePreview() {
  return (
    <section>
      <div className="mb-8">
        <PageHeader
          title="Find Your Perfect Venue"
          description="Explore our curated list of top-rated venues with an interactive map."
        >
          <Button variant="link" className="hover:text-primary">
            Explore All Venues <ArrowRight />
          </Button>
        </PageHeader>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Side: Interactive Map Preview */}
        <div className="bg-muted/50 rounded-2xl flex flex-col items-center justify-center min-h-100 border border-border/50 text-muted-foreground gap-4">
          <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-sm border border-border/10">
            <MapPin size={32} className="text-muted-foreground/60" />
          </div>
          <p className="text-lg font-medium">Interactive Map Preview</p>
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
