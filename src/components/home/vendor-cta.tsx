import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VendorCTA() {
  return (
    <section>
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary">
            Are You a Wedding Vendor?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed px-4 sm:px-0">
            Join thousands of vendors growing their business on WePlan. Reach
            more couples and manage bookings effortlessly.
          </p>
        </div>
        <Link href="/become-vendor">
          <Button className="group transition-all duration-200">
            Join as a Vendor
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
