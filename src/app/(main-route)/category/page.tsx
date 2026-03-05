import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";

export default function CategoryPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/category", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Wedding Categories" 
        description="Find the perfect vendors and services for every aspect of your big day." 
      />
    </PageLayout>
  );
}
