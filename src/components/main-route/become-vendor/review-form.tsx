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
            <span className="text-muted-foreground font-medium">Owner Name:</span>
            <span className="font-semibold">{values.ownerName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Mobile Number:</span>
            <span className="font-semibold">{values.phone}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">WhatsApp:</span>
            <span className="font-semibold">{values.whatsapp}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Email:</span>
            <span className="font-semibold">{values.email}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Location:</span>
            <span className="font-semibold">{values.city}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Experience:</span>
            <span className="font-semibold">{values.yearsOfExperience} years</span>
          </div>
          <div className="flex flex-col gap-1 py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Business Details:</span>
            <span className="text-xs line-clamp-3">{values.businessDescription}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Instagram:</span>
            <span className="font-semibold truncate max-w-50">{values.instagram}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Facebook:</span>
            <span className="font-semibold truncate max-w-50">{values.facebook}</span>
          </div>
          {values.website && (
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground font-medium">Website:</span>
              <span className="font-semibold truncate max-w-50">{values.website}</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-muted-foreground font-medium">Portfolio Drive:</span>
            <span className="font-semibold truncate max-w-50">{values.portfolioDrive}</span>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <span className="text-muted-foreground font-medium">Categories:</span>
            <div className="flex flex-wrap gap-2">
              {values.categories.map((cat, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold border border-primary/20"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 space-y-4">
        <h3 className="font-bold text-lg flex items-center gap-2">
          📜 Agreement Details
        </h3>
        <div className="text-xs sm:text-sm text-muted-foreground space-y-3 leading-relaxed">
          <p>
            By joining WePlan as a vendor, you agree to provide high-quality service and maintain professional behavior with all clients.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate information about your services and pricing.</li>
            <li>Respond to client inquiries in a timely manner.</li>
            <li>Follow the platform&apos;s booking and cancellation policies.</li>
            <li>Ensure the privacy and security of client data.</li>
          </ul>
        </div>

        <FormField
          control={control}
          name="agreedToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border p-4 shadow-sm bg-primary/5 transition-colors hover:bg-primary/10">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs sm:text-sm font-semibold cursor-pointer select-none">
                  I have read and agree to WePlan&apos;s{" "}
                  <span className="text-primary hover:underline">Terms & Conditions</span> and{" "}
                  <span className="text-primary hover:underline">Vendor Privacy Policy</span>.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </div>

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
