import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VendorCTA() {
  return (
    <section>
      <div className="bg-muted p-8 md:p-16 flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Are You a Wedding Vendor?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Join thousands of vendors growing their business on WePlan. Reach
            more couples and manage bookings effortlessly.
          </p>
        </div>
        <Link href="/auth/become-vendor">
          <Button className="group transition-all duration-200" size="lg">
            Join as a Vendor
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
