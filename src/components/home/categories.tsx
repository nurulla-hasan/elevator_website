"use client"
import * as React from "react"
import { 
  ChevronRight
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/ui/custom/page-header"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const categories = [
  {
    name: "Photographers",
    count: "245",
    emoji: "📷",
  },
  {
    name: "Venues",
    count: "189",
    emoji: "🏛️",
  },
  {
    name: "Caterers",
    count: "312",
    emoji: "🍴",
  },
  {
    name: "Decorators",
    count: "156",
    emoji: "🎨",
  },
  {
    name: "Makeup Artists",
    count: "278",
    emoji: "💄",
  },
  {
    name: "DJ & Music",
    count: "134",
    emoji: "🎵",
  },
  {
    name: "Videographers",
    count: "198",
    emoji: "🎥",
  }
]

export default function Categories() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <section className="w-full">
      <div className="mb-8">
        <PageHeader 
          title="Browse by Category" 
          description="Find the best wedding professionals by category"
        >
          <Button variant="ghost" className="hidden md:flex items-center gap-1">
            View all categories <ChevronRight />
          </Button>
        </PageHeader>
      </div>
      
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4 p-1">
          {categories.map((category) => (
            <CarouselItem key={category.name} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
              <Card 
                className="group cursor-pointer transition-all duration-300"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <span className="text-3xl">{category.emoji}</span>
                  </div>
                  
                  <h3 className="mb-1 text-sm font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground">
                    {category.count} Vendors
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </div>
      </Carousel>
      
      <div className="mt-8 md:hidden">
        <Button variant="outline" className="w-full">
          View all categories
        </Button>
      </div>
    </section>
  )
}
