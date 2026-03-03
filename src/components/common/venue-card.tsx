
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/custom/star-rating"
import { Venue } from "@/types/venue.type"
import { cn } from "@/lib/utils"

interface VenueCardProps {
  venue: Venue
  className?: string
}

export function VenueCard({ venue, className }: VenueCardProps) {
  return (
    <Card className={cn("pt-0 overflow-hidden", className)}>
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-primary line-clamp-1 group-hover:opacity-80 transition-opacity">
            {venue.name}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <StarRating rating={venue.rating} totalStars={1} size={16} />
            <span className="text-sm font-bold">{venue.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs">{venue.location}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">Starting from</p>
            <span className="text-lg font-bold text-primary">{venue.price}</span>
          </div>
          <Button size="sm" className="rounded-full">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
