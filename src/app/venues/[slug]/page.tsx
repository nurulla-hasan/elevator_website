import PageLayout from "@/components/ui/custom/page-layout";
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import { Venue } from "@/types/venue.type";
import { TParams } from "@/types/global.types";
import { VenueFeatureHighlights } from "@/components/main-route/venues/details/venue-feature-highlights";
import { VenueDetails } from "@/components/main-route/venues/details/venue-details-card";

// Mock data (matching the pattern of vendor page)
const mockVenue: Venue = {
  id: 1,
  name: "Grand Ballroom Palace",
  location: "DHA Phase 6, Karachi",
  capacity: "500-1000 guests",
  price: "5,000",
  rating: 4.8,
  reviews: 156,
  image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
  description: "Grand Ballroom Palace is the pinnacle of luxury in Karachi. With state-of-the-art facilities, breathtaking architecture, and exceptional service, we provide the perfect backdrop for your wedding, corporate event, or grand celebration.",
  services: [
    "Full Air Conditioning",
    "Professional Sound System",
    "Stage Decoration",
    "Complimentary Valet",
    "Bridal Suite",
    "24/7 Security"
  ],
  contact: {
    phone: "+92 21 34567890",
    email: "events@grandballroom.com",
    whatsapp: "+923001234567"
  }
};

export default async function VenueDetailsPage({
  params,
}: { 
  params: TParams;
}) {
  const { slug } = await params;
  
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <div className="space-y-6">
        <CustomBreadcrumb
          links={[
            { name: "Home", href: "/" },
            { name: "Venues", href: "/venues" },
            { name: mockVenue.name, isCurrent: true },
          ]}
        />

        {/* Main Details Card */}
        <VenueDetails venue={mockVenue} slug={slug} />

        {/* Feature Highlights */}
        <VenueFeatureHighlights />
      </div>
    </PageLayout>
  );
}