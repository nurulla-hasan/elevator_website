
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
      <div className="mt-12 max-w-4xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">1. Introduction</h2>
          <p>
            By using the WePlan platform, you agree to comply with and be bound by the following terms 
            of service. Please review these terms carefully.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">2. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information. 
            All activities that occur under your account are your responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">3. Marketplace Conduct</h2>
          <p>
            Our marketplace is for legitimate wedding planning and service bookings. 
            Any fraudulent or abusive activity is strictly prohibited and will result in account termination.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">4. Payments and Bookings</h2>
          <p>
            Payments are processed securely through our platform. Bookings are subject to the 
            specific cancellation and refund policies of individual vendors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">5. Limitation of Liability</h2>
          <p>
            WePlan is a platform connecting users and vendors. We are not liable for the 
            quality or delivery of services provided by independent vendors.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
