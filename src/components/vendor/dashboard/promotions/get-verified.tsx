"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import Image from "next/image";

export function GetVerified() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <div className="p-2 bg-muted rounded-lg">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-none">Get Verified</CardTitle>
          <p className="text-sm text-muted-foreground font-normal">Build trust with the verified badge</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border border-primary/30 rounded-2xl p-6 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-6 flex-1">
              <div className="space-y-1">
                <div className="flex items-center justify-between sm:justify-start gap-4">
                  <h4 className="text-xl font-semibold">Annual Verification Plan</h4>
                  <div className="relative h-8 w-16">
                    <Image 
                      src="/home/v.png" 
                      alt="Verified" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="text-3xl font-semibold text-primary leading-none">PKR 20,000</p>
                  <p className="text-sm text-muted-foreground font-normal">per year</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Verified Badge on your profile",
                  "Visibility in 'Verified' filter",
                  "Build customer trust and credibility",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-sm text-muted-foreground font-normal">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed font-normal">
                  <span className="font-semibold">Note:</span> Manual document review required before approval. Our team will contact you within 2-3 business days.
                </p>
              </div>

              <Button className="w-full md:w-auto">
                Apply for Verification
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
