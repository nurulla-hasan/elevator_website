"use client";

import { Card, CardContent } from "@/components/ui/card";

interface BookingSummaryProps {
  vendor: { name: string };
  pkg: { 
    name: string; 
    price: string; 
    duration: string; 
    serviceFee: string; 
    total: string; 
    deposit: string;
  };
}

export function BookingSummary({ vendor, pkg }: BookingSummaryProps) {
  return (
    <Card className="sticky top-24">
      <CardContent className="space-y-6">
        <h3 className="text-xl font-bold text-primary">Booking Summary</h3>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Vendor</span>
            <p className="font-semibold text-primary">{vendor.name}</p>
          </div>
          
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Package</span>
            <p className="font-semibold text-primary">{pkg.name}</p>
          </div>
          
          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price ({pkg.duration})</span>
              <span className="font-bold">{pkg.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service Fee</span>
              <span className="font-bold">{pkg.serviceFee}</span>
            </div>
            <div className="flex justify-between text-lg pt-2 border-t border-border">
              <span className="font-bold text-primary">Total</span>
              <span className="font-extrabold text-primary">{pkg.total}</span>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-4 space-y-2 border border-primary/10">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-primary">Due Now (Deposit)</span>
              <span className="text-xl font-extrabold text-primary">{pkg.deposit}</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-tight">
              A 30% non-refundable deposit is required to secure your booking. The remaining balance will be due according to the vendor&apos;s payment schedule.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
