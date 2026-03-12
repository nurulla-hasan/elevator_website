"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  MessageCircle,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import PageHeader from "../ui/custom/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { inspirationItems } from "@/data/inspiration.data";

export default function InspirationSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <PageHeader
          title="Inspiration and Ideas"
          description="Explore unique wedding ideas and connect with the vendors who bring them to life."
        />
        <Link href="/inspiration" className="hidden md:block">
          <Button variant="link" className="hover:text-primary">
            View All <ArrowRight />
          </Button>
        </Link>
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
            {inspirationItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 sm:basis-1/2 lg:basis-1/4"
              >
                <Card className="overflow-hidden group pt-0">
                  <div className="relative aspect-5/3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {item.price}
                    </div>
                  </div>
                  <CardContent className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                          By
                        </span>
                        <span className="text-xs font-medium text-primary hover:underline cursor-pointer">
                          {item.vendorName}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs font-medium border-primary/20 hover:bg-primary/5 gap-2"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        Contact Vendor
                      </Button>
                      <Button
                        size="sm"
                        className="w-full text-[10px] sm:text-xs font-medium gap-1.5 px-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Contact WePlan Advisor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
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

      <div className="md:hidden mt-6">
        <Link href="/inspiration">
          <Button className="w-full">
            View More Ideas
            <ExternalLink />
          </Button>
        </Link>
      </div>
    </section>
  );
}
