"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorCard } from "@/components/main-route/vendor/vendor-card"
import PageHeader from "@/components/ui/custom/page-header"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { mockVendors } from "@/data/vendors.data"

const budgetGroups = {
  under200k: "Under 200k",
  "200k-500k": "200k-500k",
  "500k+": "500k+",
}

export default function BudgetVendors() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState("under200k")

  const getVendorsByBudget = (group: string) => {
    if (group === "under200k") return mockVendors.slice(0, 3)
    if (group === "200k-500k") return mockVendors.slice(3, 6)
    return mockVendors.slice(6)
  }

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api, activeTab])

  return (
    <section>
      <div className="mb-4 md:mb-6">
        <PageHeader 
          title="Find Vendors by Budget" 
          description="Plan your wedding without overspending"
        />
      </div>

      <Tabs 
        defaultValue="under200k" 
        className="gap-4"
        onValueChange={setActiveTab}
      >
        <TabsList variant="line">
          {Object.entries(budgetGroups).map(([key, label]) => (
            <TabsTrigger 
              key={key}
              value={key} 
              className="px-6 py-3"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {Object.keys(budgetGroups).map((key) => (
          <TabsContent key={key} value={key}>
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
                  {getVendorsByBudget(key).map((vendor) => (
                    <CarouselItem key={vendor.id} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                      <VendorCard vendor={vendor} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
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
