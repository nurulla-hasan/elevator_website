"use client";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/custom/page-header";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  },
];

export default function Categories() {
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
          title="Browse by Category"
          description="Find the best wedding professionals by category"
        >
          <Link href="/category">
            <Button variant="link" className="hover:text-primary">
              View all categories <ArrowRight />
            </Button>
          </Link>
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
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4 p-1">
            {categories.map((category) => (
              <CarouselItem
                key={category.name}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <Card className="group cursor-pointer transition-all duration-300 border-none overflow-hidden">
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
        <Link href="/category">
          <Button variant="outline" className="w-full">
            View all categories
          </Button>
        </Link>
      </div>
    </section>
  );
}
