import PageLayout from "@/components/ui/custom/page-layout";
import { PricingHero } from "@/components/footer-route/pricing/pricing-hero";
import { PricingPlans } from "@/components/footer-route/pricing/pricing-plans";
import { PricingBenefits } from "@/components/footer-route/pricing/pricing-benefits";
import { PricingTestimonials } from "@/components/footer-route/pricing/pricing-testimonials";

export default function PricingPage() {
  return (
    <div className="screen-height">
      <div className="bg-muted">
        <PricingHero />
      </div>
      <PageLayout>
        <PricingPlans />
      </PageLayout>
      <div className="bg-muted">
        <PricingBenefits />
      </div>
      <PageLayout>
        <PricingTestimonials />
      </PageLayout>
    </div>
  );
}
