import React from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Hero() {
  return (
    <section className="pink-overlay relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/hero.png')`,
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-tight">
          Find Your Perfect <br className="md:hidden" /> Wedding Vendors
        </h1>
        <p className="mb-6 max-w-2xl text-base opacity-90 md:text-xl px-2">
          Connect with the best wedding professionals and create your dream celebration
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-4xl flex-col gap-2 rounded-xl bg-white p-2 shadow-2xl md:flex-row md:items-center md:gap-0">
          <div className="flex flex-1 items-center px-3 py-1 md:py-0 md:px-4">
            <Search className="mr-2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0" />
            <Input 
              type="text" 
              placeholder="Search venues, caterers, photo" 
              className="h-9 md:h-12 border-none bg-transparent text-sm md:text-base text-black focus-visible:ring-0 placeholder:text-muted-foreground/70"
            />
          </div>
          
          <Separator orientation="vertical" className="hidden h-8 md:block" />

          <div className="flex flex-1 items-center px-3 py-1 md:py-0 md:px-4 border-t border-border md:border-none">
            <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0" />
            <Input 
              type="text" 
              placeholder="Location" 
              className="h-9 md:h-12 border-none bg-transparent text-sm md:text-base text-black focus-visible:ring-0 placeholder:text-muted-foreground/70"
            />
          </div>

          <Button className="h-10 md:h-12 w-full md:w-auto px-8 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 transition-colors">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
