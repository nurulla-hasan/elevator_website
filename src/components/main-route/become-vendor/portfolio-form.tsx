import React from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioFormProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const PortfolioForm: React.FC<PortfolioFormProps> = ({ onNext, onPrevious }) => {
  const { control, trigger, setValue, watch } = useFormContext();
  const logo = watch("businessLogo");

  const handleNext = async () => {
    // Logo is optional in schema but we might want to check it here
    const isValid = await trigger(["businessLogo", "portfolioImages"]);
    if (isValid) onNext();
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("businessLogo", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-primary">Portfolio & Images</h2>
      </div>

      <div className="grid gap-6">
        <FormField
          control={control}
          name="businessLogo"
          render={() => (
            <FormItem>
              <FormLabel className="font-semibold text-foreground">Business Logo</FormLabel>
              <FormControl>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={cn(
                    "border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-4 transition-colors",
                    logo ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30"
                  )}>
                    {logo ? (
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden border">
                        <Image 
                          src={logo} 
                          alt="Business Logo" 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                    ) : (
                      <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-muted-foreground" />
                      </div>
                    )}
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Click to upload logo</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

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
