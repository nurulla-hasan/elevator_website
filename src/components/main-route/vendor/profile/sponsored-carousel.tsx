
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { VendorCard } from "@/components/main-route/vendor/vendor-card";
import { Vendor } from "@/types/vendor.type";
import PageHeader from "@/components/ui/custom/page-header";

interface SponsoredCarouselProps {
  vendors: Vendor[];
}

export function SponsoredCarousel({ vendors }: SponsoredCarouselProps) {
  const sponsoredVendors = vendors.filter((v) => v.sponsored);

  if (sponsoredVendors.length === 0) return null;

  return (
    <div className="py-12 space-y-4">
      <PageHeader
        title="Sponsored Partners"
        description="Hand-picked premium vendors for your special day"
        // length={sponsoredVendors.length}
      />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {sponsoredVendors.map((vendor) => (
            <CarouselItem key={vendor.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <VendorCard vendor={vendor} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
