import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function VendorCTA() {
  return (
    <section>
      <div>
        <div className="bg-primary/5 rounded-[32px] p-8 md:p-16 flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Are You a Wedding Vendor?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Join thousands of vendors growing their business on WePlan. Reach more couples and manage bookings effortlessly.
            </p>
          </div>

          <Button 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-xl text-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Join as a Vendor
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
