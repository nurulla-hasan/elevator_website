"use client"
import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const events = [
  {
    id: 1,
    name: "Mehndi",
    count: 145,
    icon: "🎨",
  },
  {
    id: 2,
    name: "Baraat",
    count: 189,
    icon: "🎊",
  },
  {
    id: 3,
    name: "Walima",
    count: 234,
    icon: "⛪",
  },
  {
    id: 4,
    name: "Combined",
    count: 167,
    icon: "✨",
  },
  {
    id: 5,
    name: "Engagement",
    count: 98,
    icon: "💍",
  },
  {
    id: 6,
    name: "Reception",
    count: 156,
    icon: "🥂",
  },
]

export default function EventTypes() {
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
          title="Find Vendors by Event Type" 
          description="Plan your specific wedding events with the right professionals"
        />
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3500,
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
            {events.map((event) => (
              <CarouselItem key={event.id} className="pl-4 sm:basis-1/2 lg:basis-1/5">
                <Card 
                  className="group cursor-pointer border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="flex flex-col items-center justify-center p-8">
                    <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-125">
                      {event.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors text-center">
                      {event.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.count} vendors
                    </p>
                  </CardContent>
                </Card>
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
