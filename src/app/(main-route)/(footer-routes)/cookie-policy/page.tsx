import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Cookie Policy" 
        description="Information about our use of cookies to improve your experience."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">What are Cookies?</h2>
          <p>Detailed cookie policy information will be added here...</p>
        </section>
      </div>
    </div>
  )
}
