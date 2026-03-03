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
import { VendorCard } from "@/components/common/vendor-card"
import { Vendor } from "@/types/vendor.type"

const venues: Vendor[] = [
  {
    id: 1,
    name: "Grand Ballroom Palace",
    category: "Venues",
    rating: 4.8,
    reviews: 156,
    location: "Downtown, Dhaka",
    price: "$5,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Riverside Garden Venue",
    category: "Venues",
    rating: 4.9,
    reviews: 210,
    location: "Riverside, Dhaka",
    price: "$3,500",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Skyline Rooftop Venue",
    category: "Venues",
    rating: 4.7,
    reviews: 89,
    location: "Midtown, Dhaka",
    price: "$7,500",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Historic Heritage Hall",
    category: "Venues",
    rating: 4.6,
    reviews: 124,
    location: "Uptown, Dhaka",
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Emerald Lake Resort",
    category: "Venues",
    rating: 4.9,
    reviews: 178,
    location: "Lakeside, Dhaka",
    price: "$6,500",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Crystal Garden Marquee",
    category: "Venues",
    rating: 4.8,
    reviews: 320,
    location: "Gulshan, Dhaka",
    price: "$8,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "The Royal Orchid Hall",
    category: "Venues",
    rating: 4.7,
    reviews: 95,
    location: "Banani, Dhaka",
    price: "$5,500",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Sunset Beach Resort",
    category: "Venues",
    rating: 4.9,
    reviews: 450,
    location: "Purbachal, Dhaka",
    price: "$10,000",
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
    <section className="w-full">
      <div className="mb-8">
        <PageHeader 
          title="Top Rated Wedding Venues" 
          description="Discover the most beautiful spaces for your unforgettable moments"
        >
          <Button variant="link" className="hover:text-primary">
            Explore All Venues
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
                {venues.map((vendor) => (
                  <CarouselItem key={vendor.id} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                    <VendorCard vendor={vendor} />
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
