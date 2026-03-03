import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function SuccessStoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Success Stories" 
        description="See how vendors have grown their business on WE Plan."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Featured vendor spotlights and case studies coming soon...</p>
      </div>
    </div>
  )
}
