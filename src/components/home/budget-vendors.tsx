"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorCard } from "@/components/common/vendor-card"
import { Vendor } from "@/types/vendor.type"
import PageHeader from "@/components/ui/custom/page-header"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const vendors: Record<string, Vendor[]> = {
  under200k: [
    {
      id: 1,
      name: "Elegant Moments Photography",
      category: "Photographers",
      rating: 4.9,
      reviews: 128,
      location: "Gulshan, Dhaka",
      price: "$2,500",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Grand Ballroom Events",
      category: "Venues",
      rating: 4.8,
      reviews: 95,
      location: "Downtown, Dhaka",
      price: "$8,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Gourmet Wedding Catering",
      category: "Caterers",
      rating: 4.7,
      reviews: 210,
      location: "Banani, Dhaka",
      price: "$3,500",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  "200k-500k": [
    {
      id: 4,
      name: "Royal Bloom Decorators",
      category: "Decorators",
      rating: 4.6,
      reviews: 84,
      location: "Uttara, Dhaka",
      price: "$4,500",
      image: "https://images.unsplash.com/photo-1519225421980-715bd0215aed?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Luxe Bridal Makeup",
      category: "Makeup Artists",
      rating: 4.9,
      reviews: 156,
      location: "Dhanmondi, Dhaka",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Cinematic Wedding Films",
      category: "Videographers",
      rating: 4.8,
      reviews: 112,
      location: "Gulshan, Dhaka",
      price: "$3,000",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2076&auto=format&fit=crop",
    },
  ],
  "500k+": [
    {
      id: 7,
      name: "Crystal Palace Marquee",
      category: "Venues",
      rating: 4.9,
      reviews: 184,
      location: "Gulshan, Dhaka",
      price: "$12,000",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "The Grand Catering Service",
      category: "Caterers",
      rating: 4.8,
      reviews: 320,
      location: "Banani, Dhaka",
      price: "$9,500",
      image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Elite Event Planning",
      category: "Event Planners",
      rating: 4.7,
      reviews: 67,
      location: "Baridhara, Dhaka",
      price: "$5,000",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    },
  ],
}

export default function BudgetVendors() {
  const [activeTab] = React.useState("under200k")
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
  }, [api, activeTab]) // Reset when tab changes

  return (
    <section className="w-full">
      <div className="mb-8">
        <PageHeader 
          title="Find Vendors by Budget" 
          description="Plan your wedding within your financial comfort zone"
        />
      </div>

      <Tabs defaultValue="under200k" className="gap-4">
        <TabsList className="h-auto flex justify-start gap-6 bg-transparent">
          <TabsTrigger 
            value="under200k" 
            className="rounded-none data-[state=active]:border-b-2 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none border-t-0 border-x-0 data-[state=active]:border-primary"
          >
            Under 200k
          </TabsTrigger>
          <TabsTrigger 
            value="200k-500k" 
            className="rounded-none data-[state=active]:border-b-2 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none border-t-0 border-x-0 data-[state=active]:border-primary"
          >
            200k-500k
          </TabsTrigger>
          <TabsTrigger 
            value="500k+" 
            className="rounded-none data-[state=active]:border-b-2 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none border-t-0 border-x-0 data-[state=active]:border-primary"
          >
            500k+
          </TabsTrigger>
        </TabsList>
        
        {Object.entries(vendors).map(([key, vendorList]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="relative">
              <Carousel
                setApi={setApi}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                  }),
                ]}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-4 p-1">
                  {vendorList.map((vendor) => (
                    <CarouselItem key={vendor.id} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                      <VendorCard vendor={vendor} className="group" />
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
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
