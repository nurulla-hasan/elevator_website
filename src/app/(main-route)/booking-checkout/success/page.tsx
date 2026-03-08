import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import PageLayout from "@/components/ui/custom/page-layout";

export default function BookingSuccessPage() {
  // Mock data for success page
  const mockVendor = { name: "Elegant Moments Photography" };
  const mockPackage = { name: "Complete Wedding Coverage", deposit: "PKR 1,050" };
  const email = "user@example.com";

  return (
    <PageLayout className="screen-height">
      <div className="max-w-2xl w-full mx-auto">
        <Card>
          <CardContent className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 size={48} />
            </div>
            
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Booking Confirmed!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your booking with <span className="font-semibold text-primary">{mockVendor.name}</span> has been confirmed. We&apos;ve sent a confirmation email to <span className="font-semibold text-primary">{email}</span>.
              </p>
            </div>

            <div className="w-full bg-muted/30 rounded-2xl p-8 space-y-6 border border-border/50">
              <h3 className="text-lg font-bold text-primary">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Vendor:</span>
                  <span className="font-semibold text-primary">{mockVendor.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Package:</span>
                  <span className="font-semibold text-primary">{mockPackage.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Booking ID:</span>
                  <span className="font-bold">#WH-80018</span>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-border">
                  <span className="text-muted-foreground">Total Paid:</span>
                  <span className="font-extrabold text-primary text-lg">{mockPackage.deposit}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <Button 
                asChild
                variant="outline"
                className="flex-1"
              >
                <Link href="/">Back to Home</Link>
              </Button>
              <Button 
                asChild
                className="flex-1"
              >
                <Link href="/vendors/vendor-profile/1">View Vendor</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
