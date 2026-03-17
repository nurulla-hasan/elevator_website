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
  const { control, trigger } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger([
      "businessName",
      "ownerName",
      "phone",
      "whatsapp",
      "email",
      "city",
      "businessDescription",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your business name" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Owner Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter owner name" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter mobile number" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">WhatsApp Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter WhatsApp number" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email address" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">City (Location)</FormLabel>
                <FormControl>
                  <LocationInput
                    placeholder="Search city/location"
                    value={field.value || ""}
                    onChange={(val) => field.onChange(val)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="businessDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Business Details</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your business and services..." 
                  className="min-h-30 resize-none"
                  {...field} 
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Business Experience (Years)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 5" {...field} value={field.value || ""} />
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
