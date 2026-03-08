import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import PageLayout from "@/components/ui/custom/page-layout";

export default function PackageSuccessPage() {
  // Mock data for success page
  const userName = "sdgrth";
  const packageDetails = {
    name: "Premium Planning",
    price: "PKR 2499",
    weddingDate: "December 12, 2026",
  };
  const email = "you@gmail.com";

  return (
    <PageLayout className="screen-height flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto">
        <Card>
          <CardContent className="flex flex-col items-center space-y-6">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                <Check size={24} className="stroke-[3px]" />
              </div>
            </div>
            
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold text-primary">Booking Confirmed!</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thank you, {userName}! Your WePlan Associate booking has been received.
              </p>
            </div>

            {/* Booking Details */}
            <div className="w-full bg-muted rounded-xl p-6 space-y-4">
              <h3 className="text-base font-bold text-primary">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Package:</span>
                  <span className="font-medium text-primary">{packageDetails.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-medium text-primary">{packageDetails.price}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Wedding Date:</span>
                  <span className="font-medium text-primary">{packageDetails.weddingDate}</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="w-full rounded-xl p-4 border">
              <p className="text-[11px] text-center leading-relaxed text-primary">
                <span className="font-bold">Next Steps:</span>{" "}
                <span className="font-medium">
                  Our team will contact you within 24 hours at{" "}
                  <span className="font-bold">{email}</span> to schedule your initial consultation.
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 w-full">
              <Button 
                asChild
                variant="outline"
                className="flex-1 "
              >
                <Link href="/">Back to Home</Link>
              </Button>
              <Button 
                asChild
                className="flex-1 "
              >
                <Link href="/user/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
