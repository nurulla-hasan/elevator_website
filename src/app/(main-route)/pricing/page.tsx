import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Pricing Plans" 
        description="Transparent and competitive pricing options for all wedding vendors."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Flexible subscription and commission-based plans coming soon...</p>
      </div>
    </div>
  )
}
