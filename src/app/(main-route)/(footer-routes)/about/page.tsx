import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="About Us" 
        description="Learn more about WE Plan and our mission to simplify wedding planning."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
        <p>
          WE Plan is your dedicated platform for connecting couples with the finest wedding professionals. 
          Our mission is to take the stress out of wedding planning by providing a seamless marketplace 
          where you can discover, compare, and book everything from photographers to the perfect venue.
        </p>
      </div>
    </div>
  )
}
