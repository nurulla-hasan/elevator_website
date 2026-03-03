"use client"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/ui/custom/page-header"
import { VendorCard } from "@/components/common/vendor-card"
import { Vendor } from "@/types/vendor.type"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import { cn } from "@/lib/utils"

const vendors: Vendor[] = [
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
    reviews: 85,
    location: "Banani, Dhaka",
    price: "$8,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Floral Dreams Design",
    category: "Decorators",
    rating: 4.9,
    reviews: 210,
    location: "Dhanmondi, Dhaka",
    price: "$2,000",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Glamour Makeup Studio",
    category: "Makeup Artists",
    rating: 4.7,
    reviews: 156,
    location: "Uttara, Dhaka",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Royal Catering Services",
    category: "Caterers",
    rating: 4.6,
    reviews: 94,
    location: "Mirpur, Dhaka",
    price: "$3,500",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Skyline DJ & Music",
    category: "DJ & Music",
    rating: 4.9,
    reviews: 72,
    location: "Mohakhali, Dhaka",
    price: "$1,500",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Cinematic Wedding Films",
    category: "Videographers",
    rating: 4.8,
    reviews: 112,
    location: "Bashundhara, Dhaka",
    price: "$4,000",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2076&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Modern Bride Couture",
    category: "Bridal Wear",
    rating: 4.7,
    reviews: 89,
    location: "Nikunja, Dhaka",
    price: "$5,000",
    image: "https://images.unsplash.com/photo-1546193430-c2d20e1cb9a1?q=80&w=2070&auto=format&fit=crop",
  }
]

export default function FeaturedVendors() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

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
          title="Featured Vendors" 
          description="Top-rated professionals for your special day"
        >
          <Button variant="link" className="hover:text-primary">
            View All <ChevronRight />
          </Button>
        </PageHeader>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
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
            {vendors.map((vendor) => (
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
                "h-2 rounded-full transition-all duration-300",
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
