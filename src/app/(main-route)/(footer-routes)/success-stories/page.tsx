import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function SuccessStoriesPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">    
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Success Stories", href: "/success-stories", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Success Stories" 
        description="See how vendors have grown their business on WE Plan."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Featured vendor spotlights and case studies coming soon...</p>
      </div>
    </PageLayout>
  )
}
