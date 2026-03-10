import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Privacy Policy" 
        description="Learn how we protect and handle your personal information."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">1. Data Collection</h2>
          <p>Detailed privacy policy content will be added here...</p>
        </section>
      </div>
    </PageLayout>
  )
}
