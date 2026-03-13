"use client";

import * as React from "react";
import { ChevronDown, Banknote, MapPin, Users, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LocationInput } from "@/components/ui/custom/location-input";
import { useSmartFilter } from "@/hooks/useSmartFilter";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories.data";

interface QuickFilterProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
}

function QuickFilterDropdown({
  label,
  icon,
  children,
  active,
  open,
  onOpenChange,
  contentClassName,
}: QuickFilterProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant={active ? "default" : "outline"}
          size="sm"
          className={cn(
            "rounded-full font-normal text-xs max-w-32.5 md:max-w-50 overflow-hidden",
            active && "font-medium"
          )}
        >
          {icon}
          <span className="truncate">{label}</span>
          <ChevronDown className={cn("h-3 w-3 md:h-4 md:w-4 shrink-0 opacity-50", active && "opacity-100")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-80 p-4", contentClassName)}
        align="start"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

export function QuickBudgetFilter({ max = 50000, step = 1000 }: { max?: number; step?: number }) {
  const { getFilter, updateBatch } = useSmartFilter();
  const minVal = Number(getFilter("min")) || 0;
  const maxVal = Number(getFilter("max")) || max;
  const [localBudget, setLocalBudget] = React.useState([minVal, maxVal]);

  React.useEffect(() => {
    setLocalBudget([Number(getFilter("min")) || 0, Number(getFilter("max")) || max]);
  }, [getFilter, max]);

  const isActive = !!getFilter("min") || !!getFilter("max");

  return (
    <QuickFilterDropdown
      label={isActive ? `${localBudget[0]}-${localBudget[1]}` : "Budget"}
      icon={<Banknote className="h-3.5 w-3.5 md:h-4 md:w-4" />}
      active={isActive}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Budget Range (per person)</span>
          <span className="text-xs text-muted-foreground">PKR</span>
        </div>
        <Slider
          value={localBudget}
          max={max}
          step={step}
          onValueChange={(values) => {
            setLocalBudget(values);
            updateBatch(
              {
                min: String(values[0]),
                max: String(values[1]),
              },
              { debounce: 500 }
            );
          }}
        />
        <div className="flex items-center justify-between text-xs font-medium">
          <span>{localBudget[0].toLocaleString()}</span>
          <span>{localBudget[1].toLocaleString()}</span>
        </div>
      </div>
    </QuickFilterDropdown>
  );
}

export function QuickAreaFilter() {
  const { getFilter, updateFilter } = useSmartFilter();
  const location = getFilter("location") || "";
  const isActive = !!location;

  return (
    <QuickFilterDropdown
      label={location || "Area"}
      icon={<MapPin className="hidden md:block" />}
      active={isActive}
    >
      <div className="space-y-4">
        <span className="text-sm font-semibold block">Select Area</span>
        <LocationInput
          placeholder="Search area in Karachi..."
          value={location}
          onChange={(val) => updateFilter("location", val, { debounce: 300 })}
          hideIcon
        />
      </div>
    </QuickFilterDropdown>
  );
}

export function QuickCapacityFilter() {
  const { getFilter, updateFilter, isSelected } = useSmartFilter();
  const capacity = getFilter("capacity") || "";
  const isActive = !!capacity;

  const options = ["0-100", "100-300", "300-500", "500-1000", "1000+"];

  return (
    <QuickFilterDropdown
      label={capacity || "Capacity"}
      icon={<Users className="h-3.5 w-3.5 md:h-4 md:w-4" />}
      active={isActive}
    >
      <div className="space-y-4">
        <span className="text-sm font-semibold block">Guest Capacity</span>
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <Button
              key={option}
              variant={isSelected("capacity", option) ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs font-normal"
              onClick={() => updateFilter("capacity", isSelected("capacity", option) ? null : option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </QuickFilterDropdown>
  );
}

export function QuickCategoryFilter() {
  const { getFilter, updateFilter } = useSmartFilter();
  const activeCategory = getFilter("category") || "";
  const isActive = !!activeCategory;
  const [open, setOpen] = React.useState(false);

  return (
    <QuickFilterDropdown
      label={activeCategory || "Category"}
      icon={<LayoutGrid className="h-3.5 w-3.5 md:h-4 md:w-4" />}
      active={isActive}
      open={open}
      onOpenChange={setOpen}
      contentClassName="p-0"
    >
      <ScrollArea className="h-80">
        <div className="p-2 space-y-1">
          {categories.map((category) => {
            const hasSubcategories =
              category.subcategories && category.subcategories.length > 0;
            const isCatSelected = getFilter("category") === category.name;

            if (hasSubcategories) {
              return (
                <Collapsible key={category.name} className="w-full">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between hover:bg-accent px-3 py-2.5 text-sm font-normal group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.emoji}</span>
                        <span>{category.name}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-1 mt-1 border-l ml-4 border-muted">
                    {category.subcategories?.map((sub) => {
                      const isSubSelected = getFilter("category") === sub.name;
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
                            setOpen(false);
                          }}
                        >
                          <span className="mr-2">{sub.emoji}</span>
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
                  isCatSelected && "bg-primary/10 text-primary font-medium",
                )}
                onClick={() => {
                  updateFilter("category", category.name);
                  setOpen(false);
                }}
              >
                <span className="mr-2 text-lg">{category.emoji}</span>
                {category.name}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </QuickFilterDropdown>
  );
}


