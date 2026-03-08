import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import { VendorPortfolio } from "@/types/vendor.type";

interface VendorPortfolioProps {
  portfolio: VendorPortfolio;
}

export const VendorPortfolioSection = ({ portfolio }: VendorPortfolioProps) => {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Portfolio Videos */}
      {portfolio.videos && portfolio.videos.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">Portfolio Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {portfolio.videos.map((video, index) => (
                <div key={index} className="relative aspect-video w-full rounded-2xl overflow-hidden group cursor-pointer border border-border">
                  <Image
                    src={portfolio.images[index % portfolio.images.length] || "/placeholder-vendor.jpg"}
                    alt={`Portfolio Video ${index + 1} Thumbnail`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play size={24} className="text-white fill-current translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Portfolio Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">Portfolio Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {portfolio.images.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-border"
              >
                <Image
                  src={image}
                  alt={`Portfolio Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};