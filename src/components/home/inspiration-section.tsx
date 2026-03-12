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

interface InspirationItem {
  id: string;
  title: string;
  description: string;
  price: string;
  vendorName: string;
  image: string;
}

const inspirationItems: InspirationItem[] = [
  {
    id: "1",
    title: "Minimalist Outdoor Stage",
    description:
      "Elegant and modern minimalist stage setup for outdoor weddings. Includes floral arrangements and ambient lighting.",
    price: "PKR 45,000",
    vendorName: "Deco Dreams",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Traditional Floral Mandap",
    description:
      "Beautifully crafted traditional mandap with fresh marigold and rose decorations. Perfect for cultural ceremonies.",
    price: "PKR 65,000",
    vendorName: "Royal Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Boho Chic Wedding Lounge",
    description:
      "Relaxed boho-style seating area for guests. Features rugs, floor cushions, and fairy lights for a cozy vibe.",
    price: "PKR 35,000",
    vendorName: "The Event Stylists",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Vintage Car Decor",
    description:
      "Classic vintage car decoration with seasonal flowers and ribbons for the perfect grand exit.",
    price: "PKR 15,000",
    vendorName: "Elite Motors",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Gold Table Setting",
    description:
      "Modern table setting featuring gold cutlery, silk napkins, and crystal glassware for a luxury dinner experience.",
    price: "PKR 2,500/guest",
    vendorName: "Crystal Catering",
    image:
      "https://images.unsplash.com/photo-1522673607200-164883eede4a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Fairy Light Pathway",
    description:
      "Magical entrance walkway decorated with thousands of fairy lights and hanging crystals.",
    price: "PKR 25,000",
    vendorName: "Light Magic",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Elegant Peony Bouquet",
    description:
      "Hand-tied bridal bouquet with premium pink peonies, white roses, and eucalyptus leaves.",
    price: "PKR 8,500",
    vendorName: "Flora Boutique",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Royal Velvet Stage",
    description:
      "Grand wedding stage with deep red velvet drapes, antique furniture, and royal chandeliers.",
    price: "PKR 120,000",
    vendorName: "Majestic Decors",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Poolside Mehendi Setup",
    description:
      "Vibrant and colorful Mehendi setup by the pool with traditional umbrellas and marigold hangings.",
    price: "PKR 40,000",
    vendorName: "Color Blast Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Rustic Photo Booth",
    description:
      "Rustic wooden backdrop for photo booth decorated with vintage frames and wildflower jars.",
    price: "PKR 12,000",
    vendorName: "Vintage Vibes",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
];

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
