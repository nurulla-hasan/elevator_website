import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Terms of Service" 
        description="Our guidelines and terms for using the WE Plan platform."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
          <p>Detailed terms and conditions will be added here...</p>
        </section>
      </div>
    </div>
  )
}
