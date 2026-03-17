import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Instagram, Facebook, Globe, Link } from "lucide-react";

interface PortfolioFormProps {
  onNext: () => void;
  onPrevious: () => void;
}

export const PortfolioForm: React.FC<PortfolioFormProps> = ({ onNext, onPrevious }) => {
  const { control, trigger } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger(["instagram", "facebook", "website", "portfolioDrive"]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-primary">Portfolio & Links</h2>
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Instagram Link</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="https://instagram.com/yourname" 
                      className="pl-9" 
                      {...field} 
                      value={field.value || ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="facebook"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Facebook Page Link</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Facebook className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="https://facebook.com/yourpage" 
                      className="pl-9" 
                      {...field} 
                      value={field.value || ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Website (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="https://yourwebsite.com" 
                      className="pl-9" 
                      {...field} 
                      value={field.value || ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="portfolioDrive"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Google Drive Portfolio Link</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="https://drive.google.com/..." 
                      className="pl-9" 
                      {...field} 
                      value={field.value || ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
