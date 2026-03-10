import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function BlogPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">  
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Wedding Blog" 
        description="Tips, trends, and inspiration for planning your wedding."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Latest articles and wedding inspiration coming soon...</p>
      </div>
    </PageLayout>
  )
}
