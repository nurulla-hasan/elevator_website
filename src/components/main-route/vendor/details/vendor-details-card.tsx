import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Star,
  ShieldCheck,
  Share2,
  Heart,
  Phone,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Vendor } from "@/types/vendor.type";

interface VendorDetailsProps {
  vendor: Vendor;
  slug: string;
}

export const VendorDetails = ({ vendor, slug }: VendorDetailsProps) => {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Image Section - 5 columns */}
        <div className="md:col-span-5 relative aspect-square md:aspect-auto h-80 md:h-full">
          <Image
            src={vendor.image}
            alt={vendor.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
            >
              <Share2 size={18} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full backdrop-blur-sm text-primary"
            >
              <Heart size={18} />
            </Button>
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {vendor.verified && (
              <Badge
                variant="success"
              >
                <ShieldCheck size={14} />
                Verified
              </Badge>
            )}
            {vendor.sponsored && (
              <Badge>
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
                {vendor.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {vendor.name}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-muted-foreground" />
                <span className="text-sm">{vendor.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-100">
                  <Star
                    size={16}
                    className="text-yellow-500 fill-yellow-500"
                  />
                  <span className="text-sm font-bold text-yellow-700">
                    {vendor.rating}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({vendor.reviews} reviews)
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
                  {vendor.price}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {vendor.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vendor.services?.map((service, i) => (
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
  );
};
