"use client"

import { VenueCard } from "@/components/main-route/venues/venue-card"
import { Venue } from "@/types/venue.type"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface VenueBottomSheetProps {
  venues: Venue[]
}


export function VenueBottomSheet({ venues }: VenueBottomSheetProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="px-4 py-4 bg-background/20 backdrop-blur-xs rounded-t-2xl">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            dragFree: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {venues.map((venue) => (
              <CarouselItem key={venue.id} className="pl-2 md:pl-4 basis-full sm:basis-[50%] md:basis-[50%] lg:basis-[40%] xl:basis-[25%]">
                <div className="group h-full">
                  <VenueCard 
                    venue={venue} 
                    variant="horizontal" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
