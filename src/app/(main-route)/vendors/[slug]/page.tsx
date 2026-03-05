import PageLayout from "@/components/ui/custom/page-layout";
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import { Vendor } from "@/types/vendor.type";
import { TParams } from "@/types/global.types";
import { VendorFeatureHighlights } from "@/components/main-route/vendor/details/vendor-feature-highlights";
import { VendorDetails } from "@/components/main-route/vendor/details/vendor-details-card";

// Mock data (same as profile but for details card context)
const mockVendor: Vendor = {
  id: "1",
  name: "Royal Palace Events",
  category: "Photographers",
  location: "Clifton, Karachi",
  rating: 4.9,
  reviews: 245,
  price: "$2,500",
  image:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  verified: false,
  sponsored: true,
  description:
    "Royal Palace Events is Karachi's premier wedding venue, offering luxurious halls and impeccable service for your special day. Experience the grandeur and elegance of our venue, perfectly suited for grand celebrations and intimate gatherings alike.",
  services: [
    "Grand Ballroom Access",
    "Professional Catering",
    "Themed Decorations",
    "Complimentary Parking",
  ],
  contact: {
    phone: "+92 300 1234567",
    email: "info@royalpalace.com",
    whatsapp: "+923001234567",
  },
};

export default async function VendorDetailsPage({
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
            { name: "Vendors", href: "/vendors" },
            { name: mockVendor.name, isCurrent: true },
          ]}
        />

        {/* Main Details Card */}
        <VendorDetails vendor={mockVendor} slug={slug} />

        {/* Feature Highlights */}
        <VendorFeatureHighlights />
      </div>
    </PageLayout>
  );
}
