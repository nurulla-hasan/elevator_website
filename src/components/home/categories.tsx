"use client";
import * as React from "react";
import { ArrowRight } from "lucide-react";
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
import CategoryCard from "../main-route/category/category-card";
import { categories, Category } from "@/data/categories.data";

export default function Categories() {
  const [activeCategory, setActiveCategory] = React.useState<Category>(categories[0]);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Mouse drag to scroll logic
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Reset carousel when category changes
  React.useEffect(() => {
    if (api) {
      api.scrollTo(0);
      setCount(api.scrollSnapList().length);
      setCurrent(0);
    }
  }, [activeCategory, api]);

  const displayItems = React.useMemo(() => {
    if (activeCategory.subcategories && activeCategory.subcategories.length > 0) {
      return activeCategory.subcategories;
    }
    return [activeCategory];
  }, [activeCategory]);

  return (
    <section>
      <div className="mb-6 sm:mb-8">
        <PageHeader
          title="Browse by Category"
          description="Find the best wedding professionals by category"
        >
          <Link href="/category" className="hidden md:block">
            <Button variant="link" className="hover:text-primary">
              View all categories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </PageHeader>
      </div>

      {/* Categories Tabs */}
      <div className="relative mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={cn(
            "w-full overflow-x-auto pb-2 no-scrollbar touch-pan-x select-none",
            !isDragging && "scroll-smooth",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex shrink-0 gap-2 sm:gap-3 w-max min-w-full">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  if (!isDragging) {
                    setActiveCategory(category);
                  }
                }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full border whitespace-nowrap transition-all duration-300 text-xs font-medium shrink-0",
                  activeCategory.name === category.name
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:bg-primary/5"
                )}
              >
                <span className="text-base">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Subtle Fade Effect for Scroll Indication */}
        <div className="absolute right-0 top-0 bottom-2 w-10 bg-linear-to-l from-background to-transparent pointer-events-none sm:block hidden" />
        <div className="absolute left-0 top-0 bottom-2 w-10 bg-linear-to-r from-background to-transparent pointer-events-none sm:block hidden" />
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
            loop: displayItems.length > 4,
          }}
          key={activeCategory.name}
        >
          <CarouselContent className="-ml-4 p-1">
            {displayItems.map((item) => (
              <CarouselItem
                key={item.name}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <CategoryCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicators */}
        {count > 1 && (
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
        )}
      </div>

      <div className="mt-8 md:hidden">
        <Link href="/category">
          <Button className="w-full">
            View all categories
          </Button>
        </Link>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
