"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/ui/custom/page-header"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { VenueCard } from "@/components/main-route/venues/venue-card"
import { ArrowRight } from "lucide-react"
import { mockVenues } from "@/data/venues.data"

export default function VenuePreview() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section>
      <div className="mb-8">
        <PageHeader 
          title="Top Rated Wedding Venues" 
          description="Discover the most beautiful spaces for your unforgettable moments"
        >
          <Button variant="link" className="hover:text-primary">
            Explore All Venues <ArrowRight />
          </Button>
        </PageHeader>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 p-1">
            {mockVenues.map((venue) => (
              <CarouselItem key={venue.id} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                <VenueCard venue={venue} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === index 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-primary/20 hover:bg-primary/40"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
