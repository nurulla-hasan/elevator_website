"use client";
import React from "react";
import PageHeader from "@/components/ui/custom/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import CategoryCard from "../main-route/category/category-card";

const events = [
  {
    id: 1,
    name: "Mehndi",
    count: "145",
    emoji: "🎨",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Baraat",
    count: "189",
    emoji: "🎊",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Walima",
    count: "234",
    emoji: "⛪",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Combined",
    count: "167",
    emoji: "✨",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Engagement",
    count: "98",
    emoji: "💍",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Reception",
    count: "156",
    emoji: "🥂",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400&h=400&auto=format&fit=crop",
  },
];

export default function EventTypes() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
              <CarouselItem
                key={event.id}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <CategoryCard {...event} filterParam="eventType" />
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
                  : "w-2 bg-primary/20 hover:bg-primary/40",
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>


      <div className="mt-8 md:hidden">
        <Link href="/vendor">
          <Button className="w-full">View all vendors</Button>
        </Link>
      </div>
    </section>
  );
}
