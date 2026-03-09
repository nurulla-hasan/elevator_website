import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { VendorRegistrationData } from "@/types/vendor-registration.type";

interface ReviewFormProps {
  onPrevious: () => void;
  onSubmit: (data: VendorRegistrationData) => void;
  isLoading: boolean;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onPrevious, onSubmit, isLoading }) => {
  const { control, handleSubmit, getValues } = useFormContext<VendorRegistrationData>();
  const values = getValues();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-primary">Review & Submit</h2>
      </div>

      <div className="rounded-2xl border bg-muted/30 p-6 space-y-6">
        <h3 className="font-bold text-lg">Application Summary</h3>
        
        <div className="grid gap-4 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Business Name:</span>
            <span className="font-semibold">{values.businessName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Location:</span>
            <span className="font-semibold">{values.city}, {values.state}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Experience:</span>
            <span className="font-semibold">{values.yearsOfExperience} years</span>
          </div>
          {values.website && (
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground font-medium">Website:</span>
              <span className="font-semibold break-all text-right">{values.website}</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground font-medium">Portfolio Images:</span>
            <span className="font-semibold">
              {values.businessLogo ? "1 logo" : "0"} images
            </span>
          </div>
        </div>
      </div>

      <FormField
        control={control}
        name="agreedToTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-card">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-xs sm:text-sm font-medium">
                I confirm that all the information provided is accurate and I agree to WePlan&apos;s{" "}
                <span className="text-primary hover:underline cursor-pointer">Terms & Conditions</span> and{" "}
                <span className="text-primary hover:underline cursor-pointer">Vendor Policy</span>.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      <div className="flex justify-between items-center pt-4">
        <Button 
          variant="outline" 
          type="button" 
          onClick={onPrevious}
          disabled={isLoading}
        >
          <ChevronLeft /> Previous
        </Button>
        <Button 
          type="button" 
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : (
            <>Submit Application <CheckCircle2  /></>
          )}
        </Button>
      </div>
    </div>
  );
};
