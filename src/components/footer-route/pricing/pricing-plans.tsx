import Link from "next/link";
import {
  Card,
} from "@/components/ui/card";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PricingPlans() {
  const features = [
    "Budget-based vendor shortlisting",
    "Quality & availability verification",
    "Dedicated personal concierge",
    "Vendor negotiation support",
    "Contract review & guidance",
    "On-site wedding day coordination",
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2.5 items-center text-center">
        <h3 className="text-2xl font-semibold text-primary tracking-tight">
          Simple, Fixed Pricing
        </h3>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          Get full-service wedding management with our dedicated WePlan associates at a flat rate.
        </p>
        <div className="h-1 w-12 bg-primary/20 rounded-full mt-1" />
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="relative group">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <Badge className="px-4 py-1 bg-primary text-[10px] text-primary-foreground font-medium shadow-lg shadow-primary/20 border-none tracking-widest uppercase">
              <Sparkles className="h-3 w-3 mr-1.5 animate-pulse" />
              Most Popular Choice
            </Badge>
          </div>
          
          <Card className="border border-primary/30 shadow-xl shadow-primary/5 ring-0 overflow-hidden py-0">
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Price Side */}
              <div className="md:col-span-2 bg-primary/3 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-primary/10">
                <h4 className="text-lg font-medium text-foreground/90 mb-1">WePlan Associate</h4>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-semibold text-primary tracking-tighter">PKR 4,999</span>
                  <span className="text-xs text-muted-foreground font-medium">/event</span>
                </div>
                <Link href="/package-checkout/concierge" className="w-full max-w-50">
                  <Button size="sm" className="w-full font-medium shadow-md shadow-primary/20 group py-5">
                    GET STARTED NOW
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="mt-3 text-xs text-muted-foreground font-normal">
                  Transparent pricing • No hidden fees
                </p>
              </div>

              {/* Features Side */}
              <div className="md:col-span-3 p-6 bg-card">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="bg-primary/10 p-1 rounded-full mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-foreground/70 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-border/40">
                  <p className="text-[11px] text-muted-foreground/80 italic leading-relaxed text-center md:text-left">
                    &quot;Our goal is to make your wedding planning stress-free and perfect. Your dedicated associate will handle everything from start to finish.&quot;
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
