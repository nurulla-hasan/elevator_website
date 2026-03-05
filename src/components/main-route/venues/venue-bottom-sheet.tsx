"use client"

import { Button } from "@/components/ui/button"
import { VenueCard } from "@/components/common/venue-card"
import { Venue } from "@/types/venue.type"
import { cn } from "@/lib/utils"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import React from "react"

interface VenueBottomSheetProps {
  venues: Venue[]
}


export function VenueBottomSheet({ venues }: VenueBottomSheetProps) {

    const [isExpanded, setIsExpanded] = React.useState(false)
  
  return (
    <div 
      className={cn(
        "absolute bottom-0 left-0 right-0 z-20 transition-transform duration-500 ease-in-out",
        isExpanded ? "translate-y-0" : "translate-y-[calc(100%-140px)]"
      )}
    >
      <div className="bg-background/95 backdrop-blur-md rounded-t-3xl shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.15)] border-t border-border">
        {/* Handle for dragging feel */}
        <div 
          className="w-full pt-3 pb-2 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="w-12 h-1.5 bg-muted group-hover:bg-muted-foreground transition-colors rounded-full mx-auto"></div>
        </div>
        
        <div 
          className="px-8 pb-2 flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="font-bold text-foreground">{venues.length} Venues Found</h3>
          <Button 
            variant="link" 
            size="sm" 
            className="text-primary font-bold px-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Show Map" : "Show List"}
          </Button>
        </div>

        {/* Carousel for Venue Cards */}
        <div className="px-8 py-4 pb-10">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 p-1">
              {venues.map((venue) => (
                <CarouselItem key={venue.id} className="pl-4 basis-auto">
                  <div className="w-[320px]">
                    <VenueCard venue={venue} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
