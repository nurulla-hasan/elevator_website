"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    title: "Luxury Event Venues",
    description: "Discover the most stunning locations for your dream wedding and special events.",
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    title: "Dream Wedding Decorations",
    description: "Transform your celebration with our expert floral and theme decorators.",
  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    title: "Professional Photography",
    description: "Capture every precious moment with the best wedding photographers in the city.",
  },
];

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

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
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {bannerImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-21/9 w-full overflow-hidden md:aspect-4/1 rounded-2xl">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                {/* Overlay for better text and indicator visibility */}
                <div className="absolute inset-0 bg-black/40 bg-linear-to-r from-black/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 space-y-2 md:space-y-4 text-white z-10">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-in fade-in slide-in-from-left-8 duration-700">
                    {image.title}
                  </h2>
                  <p className="text-sm text-center md:text-lg lg:text-xl max-w-lg text-white/90 leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                    {image.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Indicators (Dots) */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80",
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
