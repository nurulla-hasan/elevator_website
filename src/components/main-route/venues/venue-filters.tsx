/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Search,
  SlidersHorizontal,
  MapPin,
  Users,
  Banknote,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSmartFilter } from "@/hooks/useSmartFilter";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/ui/custom/star-rating";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LocationInput } from "@/components/ui/custom/location-input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function VenueFilters() {
  const {
    updateFilter,
    getFilter,
    updateBatch,
    isSelected,
    clearAll,
    getActiveCount,
  } = useSmartFilter();

  const [isOpen, setIsOpen] = useState(false);

  // Local states for instant UI feedback
  const [search, setSearch] = useState(getFilter("searchTerm") || "");
  const [location, setLocation] = useState(getFilter("location") || "");
  const [budget, setBudget] = useState([
    Number(getFilter("min")) || 0,
    Number(getFilter("max")) || 50000,
  ]);

  // Sync local state when filters are cleared or updated externally
  useEffect(() => {
    setSearch(getFilter("searchTerm") || "");
    setLocation(getFilter("location") || "");
    setBudget([
      Number(getFilter("min")) || 0,
      Number(getFilter("max")) || 50000,
    ]);
  }, [
    getFilter("searchTerm"),
    getFilter("location"),
    getFilter("min"),
    getFilter("max"),
  ]);

  const activeCount = getActiveCount();

  const filterTrigger = (
    <Button className="hover:bg-primary/80 hover:text-foreground">
      Filters
      <Separator orientation="vertical" className="h-4" />
      <SlidersHorizontal size={18} />
    </Button>
  );

  return (
    <div className="absolute top-6 right-6 z-30">
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerTrigger asChild>{filterTrigger}</DrawerTrigger>
        <DrawerContent className="h-full w-full sm:max-w-md">
          <div className="flex flex-col h-full">
            <DrawerHeader className="flex flex-row items-center justify-between border-b">
              <div className="flex flex-col gap-1">
                <DrawerTitle className="flex items-center gap-2">
                  <SlidersHorizontal size={18} />
                  Filters
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X size={18} />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-8 p-6">
                {/* Search Section */}
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2">
                      <Search size={14} />
                      Venue Name
                    </Label>
                    <Input
                      placeholder="Search venues..."
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        updateFilter("searchTerm", e.target.value, {
                          debounce: 500,
                        });
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2">
                      <MapPin size={14} />
                      Location
                    </Label>
                    <LocationInput
                      placeholder="Area in Karachi"
                      value={location}
                      onChange={(val) => {
                        setLocation(val);
                        updateFilter("location", val, {
                          debounce: 300,
                        });
                      }}
                    />
                  </div>
                </div>

                <Separator />

                {/* Budget Section */}
                <div className="grid gap-4">
                  <Label className="flex items-center gap-2">
                    <Banknote size={14} />
                    Budget Range (PKR)
                  </Label>
                  <div className="grid gap-6 px-2">
                    <Slider
                      value={budget}
                      max={50000}
                      step={1000}
                      onValueChange={(values) => {
                        setBudget(values);
                        updateBatch(
                          {
                            min: String(values[0]),
                            max: String(values[1]),
                          },
                          { debounce: 500 },
                        );
                      }}
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>PKR {budget[0].toLocaleString()}</span>
                      <span className="font-semibold">
                        PKR {budget[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Capacity Section */}
                <div className="grid gap-4">
                  <Label className="flex items-center gap-2">
                    <Users size={14} />
                    Guest Capacity
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["0-100", "100-300", "300-500", "500-1000", "1000+"].map(
                      (item) => (
                        <Button
                          key={item}
                          size="sm"
                          variant={
                            isSelected("capacity", item) ? "default" : "outline"
                          }
                          onClick={() => updateFilter("capacity", item)}
                        >
                          {item}
                        </Button>
                      ),
                    )}
                  </div>
                </div>

                <Separator />

                {/* Rating Section */}
                <div className="grid gap-4">
                  <Label className="flex items-center gap-2">
                    <Star size={14} />
                    Minimum Rating
                  </Label>
                  <div className="flex items-center gap-4">
                    <StarRating
                      rating={Number(getFilter("rating")) || 0}
                      totalStars={5}
                      size={20}
                      onRate={(rating) =>
                        updateFilter(
                          "rating",
                          rating > 0 ? String(rating) : null,
                        )
                      }
                    />
                    <span className="text-sm text-muted-foreground">
                      {getFilter("rating")
                        ? `${getFilter("rating")} Stars & Up`
                        : "Any Rating"}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="p-6 border-t flex items-center justify-between gap-4">
              <Button
                variant="outline"
                className={cn(activeCount === 0 && "hidden")}
                onClick={() => clearAll()}
              >
                Reset All
              </Button>
              <Button className="flex-1" onClick={() => setIsOpen(false)}>
                Show Venues
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
