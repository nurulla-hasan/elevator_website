import React from "react"
import Image from "next/image"
import { MapPin, Users, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
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
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-primary line-clamp-1 group-hover:opacity-80 transition-opacity">
            {venue.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold">{venue.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs">{venue.location}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-xs font-medium">{venue.capacity}</span>
          </div>
          <span className="text-lg font-bold text-primary">{venue.price}</span>
        </div>
      </CardContent>
    </Card>
  )
}
