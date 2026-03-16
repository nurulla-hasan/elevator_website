"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  UserCheck,
  Handshake,
  Sparkles,
  ArrowRight
} from "lucide-react";

const STEPS = [
  {
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    title: "Tell Us Your Requirements",
    description: "Share your budget, event type, and preferences."
  },
  {
    icon: <UserCheck className="h-5 w-5 text-primary" />,
    title: "We Shortlist Best Vendors",
    description: "We find affordable, trusted vendors that match your needs."
  },
  {
    icon: <Handshake className="h-5 w-5 text-primary" />,
    title: "We Coordinate & Finalize",
    description: "We handle discussions and negotiations until you confirm the booking."
  }
];

const BENEFITS = [
  "Dedicated WePlan Representative",
  "Budget-friendly vendor matching",
  "Negotiation support",
  "Time-saving coordination",
  "Verified & reliable vendors",
  "Zero stress experience"
];

const TRUST_BUILDERS = [
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Professional handling" },
  { icon: <Users className="h-3.5 w-3.5" />, label: "Real human support" },
  { icon: <MessageSquare className="h-3.5 w-3.5" />, label: "Direct communication" },
  { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Better vendor deals" }
];

export function WePlanAssociateService() {

  return (
    <Card className="overflow-hidden border-primary/20 shadow-sm">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <div className="p-2.5 bg-primary/10 rounded-xl">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold">WePlan Associate Service</CardTitle>
          <p className="text-sm font-medium text-primary/80 italic">We plan. We negotiate. You relax.</p>
          <p className="text-sm text-muted-foreground font-normal pt-1 max-w-2xl">
            Our event experts handle vendor selection, negotiation, and coordination until your booking is finalized.
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-8 pt-6">
        {/* How It Works */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider px-1 text-primary/70">How It Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="flex flex-col items-center text-center space-y-3 p-4 bg-muted/30 rounded-2xl border border-border/40 group-hover:border-primary/30 transition-colors">
                  <div className="p-2.5 bg-background rounded-xl shadow-sm border border-border/50">
                    {step.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-semibold">{step.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefits List */}
          <div className="space-y-4 p-6 bg-muted/20 border border-border/50 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary/70">What You Get</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="bg-primary/10 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" className="w-full">
                Let WePlan Handle It
              </Button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest">Simple & Clear</p>
              <h5 className="text-lg font-semibold">Associate Handling Fee</h5>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-primary">PKR 4,000</span>
                <span className="text-sm text-muted-foreground font-medium">(One-Time)</span>
              </div>
              <p className="text-xs text-muted-foreground italic">No hidden charges, pay once for complete support.</p>
            </div>
            <Button className="w-full">
              Get Dedicated Associate
            </Button>
          </div>
        </div>

        {/* Trust Builder Strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 px-6 bg-muted/40 rounded-2xl border border-border/50">
          {TRUST_BUILDERS.map((trust, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground/80">
              <div className="text-primary/60">{trust.icon}</div>
              <span className="text-xs font-medium whitespace-nowrap">{trust.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
