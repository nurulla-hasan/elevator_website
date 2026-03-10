
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function ResourcesPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">    
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Resources for Vendors" 
        description="Helpful tools and guides to maximize your success on WE Plan."
      />
      <div className="mt-12 text-center text-muted-foreground">
        <p>Vendor training, marketing assets, and more coming soon...</p>
      </div>
    </PageLayout>
  )
}
