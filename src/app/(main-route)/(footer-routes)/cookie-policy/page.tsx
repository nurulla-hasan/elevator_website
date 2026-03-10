import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function CookiePolicyPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Cookie Policy", href: "/cookie-policy", isCurrent: true },
        ]}
      />
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
    </PageLayout>
  )
}
