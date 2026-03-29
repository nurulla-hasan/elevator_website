import { ArrowRight, CheckCircle2, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function VendorCTA() {
  const benefits = [
    "Get direct booking requests",
    "Showcase your portfolio",
    "Receive verified leads",
    "Boost visibility with promotions",
  ];

  return (
    <section className="w-full">
      <div className="relative overflow-hidden py-10 md:py-16">

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto lg:gap-20">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" />
              For Business
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight text-primary">
                Are You a Wedding Vendor?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Grow your business, get quality leads, and reach more customers with WePlan
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 max-w-xl mx-auto lg:mx-0">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-foreground/70 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary/60" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/become-vendor">
                <Button size="lg" className="h-12 px-6 text-sm font-bold shadow-md shadow-primary/10">
                  Join as Vendor
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/vendor-benefits">
                <Button variant="outline" size="lg" className="h-12 px-6 text-sm font-semibold border-primary/10 hover:bg-primary/5 transition-all">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Optional: Simple Visual Representation or Stats could go here */}
          <div className="hidden lg:block flex-1 max-w-sm w-full">
            <div className="relative aspect-square rounded-2xl bg-white shadow-lg border border-primary/5 p-6 flex flex-col justify-center gap-6">
               <div className="space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-primary/10" />
                  <div className="h-3 w-full rounded-full bg-slate-50" />
                  <div className="h-3 w-2/3 rounded-full bg-slate-50" />
               </div>
               <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl bg-primary/2 border border-primary/5 flex flex-col items-center justify-center gap-1.5">
                     <p className="text-xl font-bold text-primary/80">500+</p>
                     <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-semibold">New Leads</p>
                  </div>
                  <div className="h-20 rounded-xl bg-primary/2 border border-primary/5 flex flex-col items-center justify-center gap-1.5">
                     <p className="text-xl font-bold text-primary/80">৳ 2M+</p>
                     <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-semibold">Generated</p>
                  </div>
               </div>
               <div className="h-16 rounded-xl bg-primary/2 border border-primary/5 flex items-center gap-3 px-4">
                  <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary/60">
                     <Store className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                     <div className="h-1.5 w-16 rounded-full bg-primary/10" />
                     <div className="h-1 w-24 rounded-full bg-slate-50" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
