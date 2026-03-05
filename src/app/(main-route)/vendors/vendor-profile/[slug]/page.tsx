
import PageLayout from "@/components/ui/custom/page-layout";
import { VendorHero } from "@/components/main-route/vendor/profile/vendor-hero";
import { VendorServices } from "@/components/main-route/vendor/profile/vendor-services";
import { VendorPackages } from "@/components/main-route/vendor/profile/vendor-packages";
import { VendorPortfolioSection } from "@/components/main-route/vendor/profile/vendor-portfolio";
import { VendorReviews } from "@/components/main-route/vendor/profile/vendor-reviews";
import { VendorSidebar } from "@/components/main-route/vendor/profile/vendor-sidebar";
import { SponsoredCarousel } from "@/components/main-route/vendor/profile/sponsored-carousel";
import { mockVendorDetails, mockVendors } from "@/data/vendors.data";

export default function VendorProfilePage() {
  return (
    <div className="pt-20 md:pt-0">
      <VendorHero vendor={mockVendorDetails} />
      <PageLayout paddingSize="none" className="screen-height">
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <VendorServices services={mockVendorDetails.services || []} />
            <VendorPackages packages={mockVendorDetails.packages || []} />
            
            {mockVendorDetails.portfolio && (
              <VendorPortfolioSection portfolio={mockVendorDetails.portfolio} />
            )}

            {mockVendorDetails.reviewList && (
              <VendorReviews 
                reviews={mockVendorDetails.reviewList} 
                totalReviews={mockVendorDetails.reviews} 
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <VendorSidebar
              vendor={mockVendorDetails}
            />
          </div>
        </div>

        {/* Sponsored Carousel Section */}
        <SponsoredCarousel vendors={mockVendors} />
      </PageLayout>
    </div>
  );
}
