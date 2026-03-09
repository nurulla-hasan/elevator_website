import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const SuccessScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[83vh] w-full animate-in fade-in zoom-in duration-500">
      <Card className="max-w-md w-full">
        <CardContent className="flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <div className="bg-primary/5 rounded-full p-6 flex items-center justify-center">
              <Clock className="w-12 h-12 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1.5 shadow-sm ring-2 ring-background">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary">
              Application Received
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed px-4">
              Thank you for applying to WePlan! Our team will review your details shortly.
            </p>
          </div>

          <div className="w-full bg-muted/30 rounded-2xl p-5 text-left space-y-4">
            <h3 className="font-semibold text-sm text-primary">Next Steps:</h3>
            <ul className="space-y-3">
              {[
                "Review within 24-48 hours",
                "Email notification on status",
                "Dashboard access once approved"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <Link href="/" className="w-full">
              <Button className="w-full">
                View Status
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
