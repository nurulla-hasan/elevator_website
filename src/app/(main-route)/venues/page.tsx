import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function BrowseVenuesPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Browse Venues" 
        description="Find the perfect setting for your dream wedding."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Venue listing and filtering coming soon...</p>
      </div>
    </div>
  )
}
