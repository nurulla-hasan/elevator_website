"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/custom/page-header";
import { VendorCard } from "@/components/main-route/vendor/vendor-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { cn } from "@/lib/utils";
import { mockVendors } from "@/data/vendors.data";
import Link from "next/link";

export default function FeaturedVendors() {
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
    <section>
      <div className="mb-8">
        <PageHeader
          title="Featured Vendors"
          description="Top-rated professionals for your special day"
        >
          <Link href="/vendors?category=featured" className="hidden md:block">
            <Button variant="link" className="hover:text-primary">
              View All <ArrowRight />
            </Button>
          </Link>
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
            {mockVendors.map((vendor) => (
              <CarouselItem
                key={vendor.id}
                className="pl-4 sm:basis-1/2 lg:basis-1/4"
              >
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
