
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";

export default function TermsPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms", isCurrent: true },
        ]}
      />
      <PageHeader
        title="Terms of Service"
        description="Our guidelines and terms for using the WE Plan platform."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">
            1. Acceptance of Terms
          </h2>
          <p>Detailed terms and conditions will be added here...</p>
        </section>
      </div>
    </PageLayout>
  );
}
