import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoriesFormProps {
  onNext: () => void;
  onPrevious: () => void;
}

const CATEGORIES = [
  { id: "venue", label: "Venue", emoji: "🏰" },
  { id: "photographer", label: "Photographer", emoji: "📸" },
  { id: "videographer", label: "Videographer", emoji: "🎥" },
  { id: "makeup-artist", label: "Makeup Artist", emoji: "💄" },
  { id: "caterer", label: "Caterer", emoji: "🍱" },
  { id: "decorator", label: "Decorator", emoji: "🎈" },
  { id: "planner", label: "Wedding Planner", emoji: "📋" },
  { id: "dj-music", label: "DJ & Music", emoji: "🎧" },
  { id: "mehndi-artist", label: "Mehndi Artist", emoji: "🎨" },
  { id: "invitation", label: "Invitation Cards", emoji: "💌" },
  { id: "jewelry", label: "Jewelry", emoji: "💎" },
  { id: "transport", label: "Transport/Car Rental", emoji: "🚗" },
];

export const CategoriesForm: React.FC<CategoriesFormProps> = ({ onNext, onPrevious }) => {
  const { control, trigger } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger(["categories"]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-primary">Business Categories</h2>
        <p className="text-sm text-muted-foreground">Select one or more categories that apply to your business</p>
      </div>

      <FormField
        control={control}
        name="categories"
        render={({ field }) => (
          <FormItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {CATEGORIES.map((category) => {
                const isSelected = field.value?.includes(category.label);
                
                const toggleCategory = () => {
                  const currentValues = field.value || [];
                  const newValue = currentValues.includes(category.label)
                    ? currentValues.filter((v: string) => v !== category.label)
                    : [...currentValues, category.label];
                  field.onChange(newValue);
                };

                return (
                  <div
                    key={category.id}
                    className={cn(
                      "flex flex-row items-center space-x-3 rounded-xl border p-4 transition-all hover:border-primary/50 cursor-pointer",
                      isSelected 
                        ? "border-primary bg-primary/5 shadow-sm" 
                        : "border-border"
                    )}
                    onClick={toggleCategory}
                  >
                    <Checkbox
                      id={category.id}
                      checked={isSelected}
                      onCheckedChange={toggleCategory}
                      onClick={(e) => e.stopPropagation()} // Prevent double trigger
                    />
                    <span className="font-medium cursor-pointer flex-1 py-1 select-none flex items-center gap-2">
                      <span className="text-lg">{category.emoji}</span>
                      {category.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between items-center pt-4">
        <Button 
          variant="outline" 
          type="button" 
          onClick={onPrevious}
        >
          <ChevronLeft /> Previous
        </Button>
        <Button 
          type="button" 
          onClick={handleNext}
        >
          Next Step <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
