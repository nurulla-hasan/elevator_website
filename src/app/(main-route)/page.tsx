
import BudgetVendors from "@/components/home/budget-vendors";
import Categories from "@/components/home/categories";
import EventTypes from "@/components/home/event-types";
import FeaturedVendors from "@/components/home/featured-vendors";
import Hero from "@/components/home/hero";
import PostRequirement from "@/components/home/post-requirement";
import RecentlyAddedVendors from "@/components/home/recently-added";
import VendorCTA from "@/components/home/vendor-cta";
import WePlanAssociate from "@/components/home/we-plan-associate";
import PageLayout from "@/components/ui/custom/page-layout"

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-6 lg:gap-10">
        <Hero />

        <PageLayout paddingSize="small">
          <Categories />
        </PageLayout>

        <PageLayout paddingSize="small">
          <FeaturedVendors />
        </PageLayout>

        <PageLayout paddingSize="small">
          <EventTypes />
        </PageLayout>

        <PageLayout paddingSize="small">
          <BudgetVendors />
        </PageLayout>

        <PageLayout paddingSize="small">
          <PostRequirement />
        </PageLayout>

        <PageLayout paddingSize="small">
          <WePlanAssociate />
        </PageLayout>

        <PageLayout paddingSize="small">
          <RecentlyAddedVendors />
        </PageLayout>

        <PageLayout paddingSize="small">
          <VendorCTA />
        </PageLayout>
      </main>
    </>
  );
}
