import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Resources for Vendors" 
        description="Helpful tools and guides to maximize your success on WE Plan."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Vendor training, marketing assets, and more coming soon...</p>
      </div>
    </div>
  )
}
