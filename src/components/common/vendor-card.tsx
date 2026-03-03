import Image from "next/image"
import { MapPin, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/ui/custom/star-rating"
import { cn } from "@/lib/utils"
import { Vendor } from "@/types/vendor.type"

interface VendorCardProps {
  vendor: Vendor
  className?: string
}

export function VendorCard({ vendor, className }: VendorCardProps) {
  return (
    <Card className={cn("pt-0 overflow-hidden", className)}>
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-3 right-3">
          <Button size="icon" variant="secondary" className="rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary hover:text-destructive transition-colors">
            <Heart />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground border-none">
            {vendor.category}
          </Badge>
        </div>
      </div>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <StarRating rating={vendor.rating} totalStars={1} size={16} />
            <span className="text-sm font-bold">{vendor.rating}</span>
            <span className="text-xs text-muted-foreground">({vendor.reviews} reviews)</span>
          </div>
        </div>
        
        <h3 className="mb-2 text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {vendor.name}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs">{vendor.location}</span>
        </div>
        
        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">Starting from</p>
            <p className="text-lg font-bold text-primary">{vendor.price}</p>
          </div>
          <Button size="sm" className="rounded-full px-5 font-semibold">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
