
import PageLayout from "@/components/ui/custom/page-layout";
import { VendorHero } from "@/components/main-route/vendor/profile/vendor-hero";
import { VendorServices } from "@/components/main-route/vendor/profile/vendor-services";
import { VendorPackages } from "@/components/main-route/vendor/profile/vendor-packages";
import { VendorPortfolioSection } from "@/components/main-route/vendor/profile/vendor-portfolio";
import { VendorReviews } from "@/components/main-route/vendor/profile/vendor-reviews";
import { VendorSidebar } from "@/components/main-route/vendor/profile/vendor-sidebar";
import { Vendor } from "@/types/vendor.type";

// Mock data for a single vendor detail
const mockVendorDetails: Vendor = {
  id: "1",
  name: "Royal Palace Events",
  category: "Venues",
  location: "Clifton, Karachi",
  rating: 4.9,
  reviews: 245,
  price: "$2,500",
  image:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  verified: true,
  sponsored: true,
  description:
    "Royal Palace Events is Karachi's premier wedding venue, offering luxurious halls and impeccable service for your special day. With over 10 years of experience, we've hosted thousands of memorable celebrations.",
  services: [
    "Wedding Photography",
    "Engagement Shoots",
    "Pre-wedding Sessions",
    "Album Design",
  ],
  packages: [
    {
      id: "pkg-1",
      name: "Complete Wedding Coverage",
      price: "$3,500",
      duration: "10 hours",
      description:
        "Full day photography coverage with two photographers, engagement session, and premium album.",
      isPopular: true,
      features: [
        "Two professional photographers",
        "Pre-wedding consultation",
        "Engagement photo session",
        "10 hours of coverage",
        "500+ edited photos",
        "Premium wedding album",
        "Online gallery",
        "Print rights",
      ],
    },
    {
      id: "pkg-2",
      name: "Essential Package",
      price: "$2,500",
      duration: "6 hours",
      description:
        "Perfect for intimate weddings with single photographer coverage.",
      features: [
        "One professional photographer",
        "Pre-wedding consultation",
        "6 hours of coverage",
        "300+ edited photos",
        "Online gallery",
        "Print rights",
      ],
    },
  ],
  portfolio: {
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    ]
  },
  reviewList: [
    {
      id: "rev-1",
      userName: "Sarah & Michael",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely amazing service! They exceeded all our expectations and made our wedding day truly special. Highly recommended!"
    },
    {
      id: "rev-2",
      userName: "Emily & David",
      rating: 4.8,
      date: "1 month ago",
      comment: "The venue was beautiful and the staff was incredibly helpful throughout the planning process. Everything went smoothly on our big day."
    },
    {
      id: "rev-3",
      userName: "Jessica & Robert",
      rating: 5,
      date: "2 months ago",
      comment: "Exceptional quality and professionalism. The attention to detail was remarkable. We couldn't have asked for a better experience."
    }
  ],
  contact: {
    phone: "+92 300 1234567",
    email: "info@royalpalace.com",
    whatsapp: "+923001234567",
  },
  availability: {
    [new Date(2026, 1, 23).toDateString()]: "booked",
    [new Date(2026, 1, 24).toDateString()]: "available",
  },
};

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
              contact={mockVendorDetails.contact!}
              availability={mockVendorDetails.availability || {}}
            />
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
