/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Search,
  MapPin,
  SlidersHorizontal,
  Banknote,
  Star,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { LocationInput } from "@/components/ui/custom/location-input";
import {
  QuickBudgetFilter,
  QuickCapacityFilter,
} from "@/components/main-route/vendor/quick-filters";
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
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { categories } from "@/data/categories.data";

export default function VendorFilter() {
  const [isRefineOpen, setIsRefineOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
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

      <Card className="hidden md:block">
        <CardContent className="md:flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsRefineOpen(!isRefineOpen)}
            className="rounded-full font-normal"
          >
            <SlidersHorizontal
              className={cn(
                "transition-transform duration-300",
                isRefineOpen && "rotate-180",
              )}
            />
            {isRefineOpen ? "Hide Filters" : "Filters"}
          </Button>
          <QuickBudgetFilter max={20000} step={100} />
          <QuickCapacityFilter />
        </CardContent>
      </Card>
      
      {/* Mobile view filters */}
      <div className="md:hidden bg-card p-4 rounded-xl flex justify-between flex-nowrap items-center gap-2 overflow-x-auto scrollbar-hide">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsRefineOpen(!isRefineOpen)}
          className="rounded-full font-normal text-xs"
        >
          <SlidersHorizontal />
          {isRefineOpen ? "Hide" : "Filters"}
        </Button>
        <QuickBudgetFilter max={20000} step={100} />
        <QuickCapacityFilter />
      </div>

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
                  <LocationInput
                    placeholder="Area or City"
                    value={location}
                    onChange={(val) => {
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
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-muted-foreground">
                        ${budget[0]}
                      </span>
                      <span className="text-primary font-semibold">
                        ${budget[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <LayoutGrid className="h-4 w-4" />
                    Category
                  </Label>
                  <Popover
                    open={isCategoriesOpen}
                    onOpenChange={setIsCategoriesOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-between font-normal",
                          !getFilter("category") && "text-muted-foreground",
                        )}
                      >
                        {getFilter("category") || "Select a category"}
                        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0" align="start">
                      <ScrollArea className="h-80">
                        <div className="p-2 space-y-1">
                          {categories.map((category) => {
                            const hasSubcategories =
                              category.subcategories &&
                              category.subcategories.length > 0;
                            const isCatSelected =
                              getFilter("category") === category.name;

                            if (hasSubcategories) {
                              return (
                                <Collapsible
                                  key={category.name}
                                  className="w-full"
                                >
                                  <CollapsibleTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      className="w-full justify-between hover:bg-accent px-3 py-2.5 text-sm font-normal group"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="text-lg">
                                          {category.emoji}
                                        </span>
                                        <span>{category.name}</span>
                                      </div>
                                      <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                    </Button>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent className="pl-4 space-y-1 mt-1 border-l ml-4 border-muted">
                                    {category.subcategories?.map((sub) => {
                                      const isSubSelected =
                                        getFilter("category") === sub.name;
                                      return (
                                        <Button
                                          key={sub.name}
                                          variant="ghost"
                                          size="sm"
                                          className={cn(
                                            "w-full justify-start font-normal px-2 py-1.5 h-auto hover:bg-accent",
                                            isSubSelected &&
                                              "bg-primary/10 text-primary font-medium",
                                          )}
                                          onClick={() => {
                                            updateFilter("category", sub.name);
                                            setIsCategoriesOpen(false);
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
                                  "w-full justify-start font-normal px-3 py-2.5 h-auto hover:bg-accent",
                                  isCatSelected &&
                                    "bg-primary/10 text-primary font-medium",
                                )}
                                onClick={() => {
                                  updateFilter("category", category.name);
                                  setIsCategoriesOpen(false);
                                }}
                              >
                                <span className="mr-2 text-lg">
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

              <Separator className="opacity-50" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Rating & Verified */}
                <div className="flex flex-wrap items-center gap-10">
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
                      <span className="text-xs font-semibold text-muted-foreground min-w-12.5">
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

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Button
                    variant="outline"
                    onClick={() => clearAll()}
                    className={cn("flex-1 md:flex-none uppercase", !isFilterActive() && "hidden")}
                    size="sm"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={() => setIsRefineOpen(false)}
                    className="flex-1 md:flex-none uppercase"
                    size="sm"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </CardContent>
          </ScrollArea>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}
