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
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";

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
    <Button>
      <div className="relative flex flex-row items-center justify-center">
        <Search/>
        {activeCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-primary text-xs h-4 w-4 rounded-full flex flex-row items-center justify-center">
            {activeCount}
          </span>
        )}
      </div>
      <span>Search & Filters</span>
      <Separator orientation="vertical" className="bg-white" />
      <SlidersHorizontal />
    </Button>
  );

  return (
    <div className="absolute top-6 right-6 z-30">
      <ModalWrapper
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Filters"
        actionTrigger={filterTrigger}
      >
        <div className="flex flex-col min-h-0">
          <ScrollArea className="max-h-[70vh]">
            <div className="flex flex-col gap-6 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="flex flex-row items-center gap-2 text-muted-foreground">
                    <Search className="h-3.5 w-3.5" />
                    Venue Name
                  </Label>
                  <Input
                    placeholder="Search venues..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      updateFilter("searchTerm", e.target.value, { debounce: 500 });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="flex flex-row items-center gap-2 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Location
                  </Label>
                  <Input
                    placeholder="Area in Karachi"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      updateFilter("location", e.target.value, { debounce: 500 });
                    }}
                  />
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <Label className="flex flex-row items-center gap-2 text-muted-foreground">
                  <Banknote className="h-3.5 w-3.5" />
                  Budget Range (PKR)
                </Label>
                <div className="flex flex-col gap-4">
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
                        { debounce: 500 }
                      );
                    }}
                  />
                  <div className="flex flex-row items-center justify-between text-sm">
                    <span>PKR {budget[0].toLocaleString()}</span>
                    <span className="text-primary">PKR {budget[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <Label className="flex flex-row items-center gap-2 text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  Guest Capacity
                </Label>
                <div className="flex flex-row flex-wrap gap-2">
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
                    )
                  )}
                </div> 
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <Label className="flex flex-row items-center gap-2 text-muted-foreground">
                  <Star className="h-3.5 w-3.5" />
                  Minimum Rating
                </Label>
                <div className="flex flex-row items-center gap-4">
                  <StarRating
                    rating={Number(getFilter("rating")) || 0}
                    totalStars={5}
                    size={16}
                    onRate={(rating) =>
                      updateFilter("rating", rating > 0 ? String(rating) : null)
                    }
                  />
                  <span className="text-xs uppercase">
                    {getFilter("rating") ? `${getFilter("rating")} Stars & Up` : "Any Rating"}
                  </span>
                </div>
              </div>
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t bg-muted/10 flex flex-row items-center justify-between gap-4">
            <Button 
              variant="outline" 
              className={activeCount > 0 ? "visible" : "invisible"}
              onClick={() => clearAll()}
            >
              Reset All
            </Button>
            <Button className="flex-1" onClick={() => setIsOpen(false)}>
              Show Venues
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
}
