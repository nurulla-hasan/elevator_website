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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    title: "Make Your Dream Wedding a Reality",
    description: "From stunning venues to expert vendors — everything you need, all in one place.",
    buttonText: "Start Planning",
    buttonLink: "/plan",
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",

  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
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
              <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-21/9 md:aspect-4/1 rounded-2xl">
                <Image
                  src={image.url}
                  alt={"Banner Image"}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                {/* Dark Romantic Overlay */}
                {/* <div className="absolute inset-0 bg-black/50 bg-linear-to-t from-black/40 via-black/20 to-black/10" /> */}

                {/* Content */}
                {(image.title || image.description) && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-10 md:px-16 lg:px-24 space-y-3 md:space-y-6 text-white z-10 text-center">
                    {image.title && (
                      <h2 className="text-xl md:text-4xl lg:text-5xl font-semibold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {image.title}
                      </h2>
                    )}
                    {image.description && (
                      <p className="text-xs md:text-lg lg:text-xl max-w-2xl text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        {image.description}
                      </p>
                    )}
                    {image.buttonText && (
                      <div className="pt-2 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                        <Button asChild size="sm" className="md:hidden rounded-full px-6">
                          <Link href={image.buttonLink || "#"}>
                            {image.buttonText}
                          </Link>
                        </Button>
                        <Button asChild size="lg" className="hidden md:flex rounded-full px-8">
                          <Link href={image.buttonLink || "#"}>
                            {image.buttonText}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
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
