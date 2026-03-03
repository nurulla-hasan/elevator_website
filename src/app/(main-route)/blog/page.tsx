import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Wedding Blog" 
        description="Tips, trends, and inspiration for planning your wedding."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Latest articles and wedding inspiration coming soon...</p>
      </div>
    </div>
  )
}
