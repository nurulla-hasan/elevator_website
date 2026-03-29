import Banner from "@/components/home/banner";
import BudgetVendors from "@/components/home/budget-vendors";
import Categories from "@/components/home/categories";
import EventTypes from "@/components/home/event-types";
import FeaturedVendors from "@/components/home/featured-vendors";
import Hero from "@/components/home/hero";
import PostRequirement from "@/components/home/post-requirement";
import RecentlyAddedVendors from "@/components/home/recently-added";
import InspirationSection from "@/components/home/inspiration-section";
import VenuePreview from "@/components/home/vanue-preview";
import VendorCTA from "@/components/home/vendor-cta";
import WePlanEventAdvisor from "@/components/home/we-plan-event-advisor";
import HomeStats from "@/components/home/home-stats";
import AppDownload from "@/components/home/app-download";
import NewsletterFeedback from "@/components/home/newsletter-feedback";
import WhyChoose from "@/components/home/why-choose";
import PageLayout from "@/components/ui/custom/page-layout";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="pb-12 lg:pb-18">
          <Hero />
        </div>

        <PageLayout paddingSize="small">
          <Categories />
        </PageLayout>

        <div className="bg-primary py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <Banner />
          </PageLayout>
        </div>

        <div className="py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <FeaturedVendors />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <EventTypes />
          </PageLayout>
        </div>

        <div className="py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <VenuePreview />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <BudgetVendors />
          </PageLayout>
        </div>

        <div className="py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <PostRequirement />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <WePlanEventAdvisor />
          </PageLayout>
        </div>

        <div className="py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <RecentlyAddedVendors />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <InspirationSection />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <WhyChoose />
          </PageLayout>
        </div>

        <div className="py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <HomeStats />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <AppDownload />
          </PageLayout>
        </div>

        <div className="py-10 md:py-16">
          <PageLayout paddingSize="zero">
            <NewsletterFeedback />
          </PageLayout>
        </div>

        <div className="bg-card py-10 md:py-16">
          <VendorCTA />
        </div>
      </main>
    </>
  );
}
