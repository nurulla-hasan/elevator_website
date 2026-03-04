
import PageLayout from "@/components/ui/custom/page-layout";
import { VendorHero } from "@/components/main-route/vendor/details/vendor-hero";
import { VendorServices } from "@/components/main-route/vendor/details/vendor-services";
import { VendorPackages } from "@/components/main-route/vendor/details/vendor-packages";
import { VendorSidebar } from "@/components/main-route/vendor/details/vendor-sidebar";
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

export default function VendorDetailsPage() {
  return (
    <>
      <VendorHero vendor={mockVendorDetails} />
      <PageLayout paddingSize="none" className="screen-height">
        {/* Hero Section - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <VendorServices services={mockVendorDetails.services || []} />
            <VendorPackages packages={mockVendorDetails.packages || []} />
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
    </>
  );
}
