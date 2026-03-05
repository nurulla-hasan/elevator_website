
import Image from "next/image"
import { MapPin, Star, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Venue } from "@/types/venue.type"
import Link from "next/link"

interface VenueCardProps {
  venue: Venue
  className?: string
}

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <Link href={`/venues/${venue.id}`}>
      <Card className="pt-0 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-primary line-clamp-1 leading-tight">
              {venue.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 ml-2 mt-1">
              <Star size={18} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-foreground">{venue.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-sm font-medium">{venue.location}</span>
          </div>

          <div className="border-t border-border pt-4 mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={18} />
              <span className="text-sm font-medium">{venue.capacity}</span>
            </div>
            <span className="text-xl font-bold text-primary">
              {venue.price}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
