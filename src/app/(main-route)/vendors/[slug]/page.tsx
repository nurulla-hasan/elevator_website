import PageLayout from "@/components/ui/custom/page-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import {
  MapPin,
  Star,
  ShieldCheck,
  Share2,
  Heart,
  Phone,
  Mail,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Vendor } from "@/types/vendor.type";
import { TParams } from "@/types/global.types";

// Mock data (same as profile but for details card context)
const mockVendor: Vendor = {
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

export default async function VendorDetailsCardPage({
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
        <Card className="overflow-hidden p-0">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Image Section - 5 columns */}
            <div className="md:col-span-5 relative aspect-square md:aspect-auto h-80 md:h-full">
              <Image
                src={mockVendor.image}
                alt={mockVendor.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Share2 size={18} />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-pink-600"
                >
                  <Heart size={18} />
                </Button>
              </div>
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {mockVendor.verified && (
                  <Badge
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm text-emerald-600 border-emerald-100 gap-1 px-3"
                  >
                    <ShieldCheck size={14} />
                    Verified
                  </Badge>
                )}
                {mockVendor.sponsored && (
                  <Badge className="bg-primary text-primary-foreground px-3">
                    Featured
                  </Badge>
                )}
              </div>
            </div>

            {/* Content Section - 7 columns */}
            <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {mockVendor.category}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {mockVendor.name}
                  </h1>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} className="text-muted-foreground" />
                    <span className="text-sm">{mockVendor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-100">
                      <Star
                        size={16}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-sm font-bold text-yellow-700">
                        {mockVendor.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({mockVendor.reviews} reviews)
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">
                      Starting from
                    </span>
                    <span className="text-3xl font-bold text-foreground">
                      {mockVendor.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {mockVendor.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mockVendor.services?.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 font-bold h-12">
                  <Calendar className="mr-2" size={18} />
                  Book Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 font-bold h-12"
                >
                  <Phone className="mr-2" size={18} />
                  Contact Vendor
                </Button>
                <Link
                  href={`/vendor-profile/${slug}`}
                  className="flex items-center justify-center p-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="p-2 rounded-full bg-background border border-border">
                <ShieldCheck className="text-emerald-600" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Verified Vendor</h4>
                <p className="text-xs text-muted-foreground">
                  Trusted professional service provider.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="p-2 rounded-full bg-background border border-border">
                <Mail className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Quick Response</h4>
                <p className="text-xs text-muted-foreground">
                Usually responds within 24 hours.
              </p>
            </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="p-2 rounded-full bg-background border border-border">
                <Heart className="text-pink-600" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Top Rated</h4>
                <p className="text-xs text-muted-foreground">
                Consistently high customer satisfaction.
              </p>
            </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
