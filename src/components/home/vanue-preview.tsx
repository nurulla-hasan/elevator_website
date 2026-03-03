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
import { VenueCard } from "@/components/common/venue-card"
import { Venue } from "@/types/venue.type"
import { ArrowRight } from "lucide-react"

const venues: Venue[] = [
  {
    id: 1,
    name: "Grand Ballroom Palace",
    location: "Downtown, Dhaka",
    capacity: "500-1000 guests",
    price: "$5,000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Riverside Garden Venue",
    location: "Riverside, Dhaka",
    capacity: "200-400 guests",
    price: "$3,500",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Skyline Rooftop Venue",
    location: "Midtown, Dhaka",
    capacity: "100-250 guests",
    price: "$7,500",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Historic Heritage Hall",
    location: "Uptown, Dhaka",
    capacity: "300-600 guests",
    price: "$4,200",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Emerald Lake Resort",
    location: "Lakeside, Dhaka",
    capacity: "400-800 guests",
    price: "$6,500",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Crystal Garden Marquee",
    location: "Gulshan, Dhaka",
    capacity: "600-1200 guests",
    price: "$8,000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "The Royal Orchid Hall",
    location: "Banani, Dhaka",
    capacity: "250-500 guests",
    price: "$5,500",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Sunset Beach Resort",
    location: "Purbachal, Dhaka",
    capacity: "1000-2000 guests",
    price: "$10,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop",
  },
]

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
                {venues.map((venue) => (
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
