/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Search,
  MapPin,
  SlidersHorizontal,
  Users,
  Banknote,
  Star,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSmartFilter } from "@/hooks/useSmartFilter";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { StarRating } from "@/components/ui/custom/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function VendorFilter() {
  const [isRefineOpen, setIsRefineOpen] = useState(false);
  const {
    updateFilter,
    getFilter,
    toggleFilter,
    updateBatch,
    isSelected,
    clearAll,
    isFilterActive,
  } = useSmartFilter();

  // Local states for instant UI feedback (only for inputs and sliders)
  const [search, setSearch] = useState(getFilter("searchTerm") || "");
  const [location, setLocation] = useState(getFilter("location") || "");
  const [budget, setBudget] = useState([
    Number(getFilter("min")) || 0,
    Number(getFilter("max")) || 20000,
  ]);

  // Sync local state when filters are cleared or updated externally
  useEffect(() => {
    setSearch(getFilter("searchTerm") || "");
    setLocation(getFilter("location") || "");
    setBudget([
      Number(getFilter("min")) || 1000,
      Number(getFilter("max")) || 10000,
    ]);
  }, [
    getFilter("searchTerm"),
    getFilter("location"),
    getFilter("min"),
    getFilter("max"),
  ]);

  return (
    <Collapsible
      open={isRefineOpen}
      onOpenChange={setIsRefineOpen}
      className="w-full space-y-4"
    >
      {/* Simplified Main Bar */}
      <Card>
        <CardContent>
          <div className="flex flex-row items-center justify-between gap-4">
            <Button
              variant={isRefineOpen ? "secondary" : "outline"}
              size="sm"
              onClick={() => setIsRefineOpen(!isRefineOpen)}
            >
              <SlidersHorizontal
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isRefineOpen && "rotate-180",
                )}
              />
              {isRefineOpen ? "Hide Filters" : "Search & Filter"}
            </Button>

            {isFilterActive() && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => clearAll()}
                className="text-xs text-muted-foreground uppercase hover:text-destructive"
              >
                Reset All
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Refine Your Search - Expanded Panel */}
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <Card className="overflow-hidden">
          <ScrollArea className="h-[50vh] md:max-h-fit">
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Search Keyword */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Keyword
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search vendors..."
                    value={search}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSearch(val);
                      updateFilter("searchTerm", val, { debounce: 300 });
                    }}
                    className="bg-muted/50"
                  />
                </div>

                {/* Location Filter */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </Label>
                  <Input
                    type="text"
                    placeholder="Area or City"
                    value={location}
                    onChange={(e) => {
                      const val = e.target.value;
                      setLocation(val);
                      updateFilter("location", val, { debounce: 300 });
                    }}
                  />
                </div>

                {/* Budget Filter */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Banknote className="h-4 w-4" />
                    Budget
                  </Label>
                  <div className="space-y-5 pt-1">
                    <Slider
                      value={budget}
                      max={20000}
                      step={100}
                      onValueChange={(values) => {
                        setBudget(values);
                        updateBatch(
                          {
                            min: String(values[0]),
                            max: String(values[1]),
                          },
                          { debounce: 300 },
                        );
                      }}
                    />
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-muted-foreground">
                        ${budget[0]}
                      </span>
                      <span className="text-primary font-bold">
                        ${budget[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Guest Count */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Capacity
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["0-50", "50-100", "100-200", "200+"].map((item) => (
                      <Button
                        key={item}
                        size="sm"
                        variant={
                          getFilter("guests") === item ? "default" : "outline"
                        }
                        onClick={() =>
                          updateFilter("guests", getFilter("guests") === item ? null : item)
                        }
                        className="h-8 text-xs font-semibold"
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="opacity-50" />

              <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                {/* Rating & Verified */}
                <div className="flex flex-wrap items-end gap-10">
                  <div className="space-y-3">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Minimum Rating
                    </Label>
                    <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-md border border-border">
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
                      <span className="text-xs font-bold text-muted-foreground min-w-12.5">
                        {getFilter("rating")
                          ? `${getFilter("rating")} & up`
                          : "Any"}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => toggleFilter("verified", "true")}
                  >
                    <Checkbox
                      id="verified-only"
                      checked={isSelected("verified", "true")}
                      onCheckedChange={() => toggleFilter("verified", "true")}
                    />
                    <div className="grid gap-1 leading-none">
                      <Label className="text-sm font-semibold cursor-pointer">
                        Verified Only
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Show only trusted professionals
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setIsRefineOpen(false)}
                  className="w-full md:w-auto px-10 font-bold"
                >
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </ScrollArea>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}
