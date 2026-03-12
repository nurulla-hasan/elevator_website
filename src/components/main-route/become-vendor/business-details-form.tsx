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
import { LocationInput } from "@/components/ui/custom/location-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface BusinessDetailsFormProps {
  onNext: () => void;
}

export const BusinessDetailsForm: React.FC<BusinessDetailsFormProps> = ({ onNext }) => {
  const { control, trigger, setValue } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger([
      "businessName",
      "businessDescription",
      "businessAddress",
      "city",
      "state",
      "website",
      "yearsOfExperience",
    ]);
    if (isValid) onNext();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-primary">Business Details</h2>
      </div>

      <div className="grid gap-6">
        <FormField
          control={control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your business name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="businessDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Business Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your business and services..." 
                  className="min-h-30 resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location */}

        <FormField
          control={control}
          name="businessAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Business Address</FormLabel>
              <FormControl>
                <LocationInput
                  placeholder="Street address"
                  value={field.value}
                  onChange={(val, data) => {
                    field.onChange(val);
                    if (data?.city) setValue("city", data.city, { shouldValidate: true });
                    if (data?.state) setValue("state", data.state, { shouldValidate: true });
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
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
                  <Input placeholder="https://yourbusiness.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Years of Experience</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" type="button" disabled className="opacity-50">
          Previous
        </Button>
        <Button 
          type="button" 
          onClick={handleNext}
        >
          Next Step <ChevronRight/>
        </Button>
      </div>
    </div>
  );
};
