import React from "react"
import PageHeader from "@/components/ui/custom/page-header"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <PageHeader 
        title="Privacy Policy" 
        description="Learn how we protect and handle your personal information."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-primary mb-4">1. Data Collection</h2>
          <p>Detailed privacy policy content will be added here...</p>
        </section>
      </div>
    </div>
  )
}
