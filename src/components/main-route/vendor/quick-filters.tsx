"use client";

import * as React from "react";
import { ChevronDown, Banknote, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { LocationInput } from "@/components/ui/custom/location-input";
import { useSmartFilter } from "@/hooks/useSmartFilter";
import { cn } from "@/lib/utils";

interface QuickFilterProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  children: React.ReactNode;
}

function QuickFilterDropdown({ label, icon, children }: QuickFilterProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full font-normal text-xs max-w-32.5 md:max-w-50 overflow-hidden",
          )}
        >
          {icon}
          <span className="truncate">{label}</span>
          <ChevronDown className={"h-3 w-3 md:h-4 md:w-4 shrink-0 opacity-50"} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
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
