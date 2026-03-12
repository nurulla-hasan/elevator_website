"use client"
import * as React from "react";
import { Search, MapPin, Sparkles, ChevronDownIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories.data";

const karachiAreas = [
  "DHA Phase 1-8",
  "Clifton",
  "Gulshan-e-Iqbal",
  "North Nazimabad",
  "Bahria Town",
  "Saddar",
  "Malir",
  "Karsaz",
  "PECHS",
  "Tariq Road",
  "Gulistan-e-Jauhar",
  "Federal B Area",
  "Nazimabad",
  "Garden",
  "Defense View"
];

export default function Hero() {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isLocationOpen, setIsLocationOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState("");

  return (
    <section className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image with Subtle Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-110 animate-subtle-zoom"
        style={{
          backgroundImage: `url('/home/hero2.jpg')`,
        }}
      />
      {/* Pinkish Gradient Overlay for Client Requirement */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-primary z-10" />
      
      {/* Subtle Pink Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-primary/15 rounded-full blur-[180px] z-0 animate-pulse delay-1000" />

      {/* Content */}
      <div className="container mx-auto relative z-20 flex h-full flex-col items-center justify-center pb-24 md:pb-32 lg:pb-40 px-4 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-[10px] sm:text-sm font-medium tracking-wide uppercase">Start Your Journey Together</span>
        </div>

        <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wider sm:tracking-widest leading-[1.15] sm:leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Crafting Your Perfect <br className="hidden sm:block" /> 
          <span className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl">Wedding Story</span>
        </h1>
        
        <p className="mb-8 sm:mb-10 max-w-2xl text-xs sm:text-sm font-medium text-white/95 md:text-lg px-2 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 drop-shadow-md">
          Connect with the finest wedding vendors and venues. From intimate ceremonies 
          to grand celebrations, we help you find the best professionals for your big day.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-5xl flex-col gap-1 rounded-2xl bg-background backdrop-blur-sm p-2 sm:p-3 shadow-2xl md:flex-row md:items-center md:gap-0 animate-in fade-in zoom-in-95 duration-1000 delay-700 border border-border/50 text-foreground">
          <div className="flex flex-[1.2] items-center px-3 py-1.5 md:py-0">
            <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[8px] sm:text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mb-0.5 ml-1">Looking for</span>
              <Popover open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal h-7 sm:h-8 px-1 shadow-none text-xs sm:text-sm hover:bg-transparent focus-visible:ring-0",
                      !selectedService && "text-muted-foreground"
                    )}
                  >
                    <span className="truncate">{selectedService || "Venues, Photographers..."}</span>
                    <ChevronDownIcon className="ml-auto h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 sm:w-80 p-0" align="start">
                  <ScrollArea className="h-64 sm:h-80">
                    <div className="p-2 space-y-1">
                      {categories.map((category) => {
                        const hasSubcategories =
                          category.subcategories &&
                          category.subcategories.length > 0;
                        const isSelected = selectedService === category.name;

                        if (hasSubcategories) {
                          return (
                            <Collapsible key={category.name} className="w-full">
                              <CollapsibleTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-between hover:bg-accent px-3 py-2 text-sm font-normal group"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-base sm:text-lg">
                                      {category.emoji}
                                    </span>
                                    <span className="text-xs sm:text-sm max-w-40 overflow-hidden">{category.name}</span>
                                  </div>
                                  <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="pl-4 space-y-1 mt-1 border-l ml-4 border-muted">
                                {category.subcategories?.map((sub) => {
                                  const isSubSelected = selectedService === sub.name;
                                  return (
                                    <Button
                                      key={sub.name}
                                      variant="ghost"
                                      size="sm"
                                      className={cn(
                                        "w-full justify-start font-normal px-2 py-1.5 h-auto hover:bg-accent text-xs sm:text-sm",
                                        isSubSelected &&
                                          "bg-primary/10 text-primary font-medium",
                                      )}
                                      onClick={() => {
                                        setSelectedService(sub.name);
                                        setIsServicesOpen(false);
                                      }}
                                    >
                                      <span className="mr-2">
                                        {sub.emoji}
                                      </span>
                                      {sub.name}
                                    </Button>
                                  );
                                })}
                              </CollapsibleContent>
                            </Collapsible>
                          );
                        }

                        return (
                          <Button
                            key={category.name}
                            variant="ghost"
                            className={cn(
                              "w-full justify-start font-normal px-3 py-2 h-auto hover:bg-accent text-xs sm:text-sm",
                              isSelected &&
                                "bg-primary/10 text-primary font-medium",
                            )}
                            onClick={() => {
                              setSelectedService(category.name);
                              setIsServicesOpen(false);
                            }}
                          >
                            <span className="mr-2 text-base sm:text-lg">
                              {category.emoji}
                            </span>
                            {category.name}
                          </Button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Separator orientation="vertical" className="hidden h-10 md:block bg-border" />

          <div className="flex flex-1 items-center px-3 py-1.5 md:py-0 border-t border-border md:border-none">
            <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[8px] sm:text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mb-0.5 ml-1">Location</span>
              <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal h-7 sm:h-8 px-1 shadow-none text-xs sm:text-sm hover:bg-transparent focus-visible:ring-0",
                      !selectedLocation && "text-muted-foreground"
                    )}
                  >
                    <span className="truncate">{selectedLocation || "Where in Karachi?"}</span>
                    <ChevronDownIcon className="ml-auto h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 sm:w-64 p-0" align="start">
                  <ScrollArea className="h-64 sm:h-80">
                    <div className="p-2 space-y-1">
                      {karachiAreas.map((area) => (
                        <Button
                          key={area}
                          variant="ghost"
                          className={cn(
                            "w-full justify-start font-normal px-3 py-2 h-auto hover:bg-accent text-xs sm:text-sm",
                            selectedLocation === area && "bg-primary/10 text-primary font-medium"
                          )}
                          onClick={() => {
                            setSelectedLocation(area);
                            setIsLocationOpen(false);
                          }}
                        >
                          <MapPin className="mr-2 h-3 w-3 sm:h-4 sm:w-4 opacity-50" />
                          {area}
                          {selectedLocation === area && <Check className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button className="h-10 sm:h-12 rounded-xl">
            Explore Now
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.2); }
        }
        .animate-subtle-zoom { animation: subtle-zoom 20s linear infinite alternate; }
      `}</style>
    </section>
  );
}
