"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Venue } from "@/types/venue.type"
import { Map, Marker } from "pigeon-maps"

interface VenueMapProps {
  venues: Venue[]
}

export function VenueMap({ venues }: VenueMapProps) {
  // Karachi Center Coordinates
  const initialCenter: [number, number] = [24.8607, 67.0011]
  const [center, setCenter] = React.useState<[number, number]>(initialCenter)
  const [zoom, setZoom] = React.useState(12)

  return (
    <div className="absolute inset-0 w-full h-full bg-muted/20 map-container">
      <Map 
        center={center} 
        zoom={zoom}
        minZoom={10}
        maxZoom={20}
        metaWheelZoom={true}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center)
          setZoom(zoom)
        }}
        mouseEvents={true}
        touchEvents={true}
      >
        {venues.map((venue) => {
          if (!venue.lat || !venue.lng) return null;

          // Calculate scale based on zoom (base zoom 12 = scale 1)
          const scale = Math.max(0.6, Math.min(1.2, zoom / 12));

          return (
            <Marker 
              key={venue.id} 
              anchor={[venue.lat, venue.lng]} 
              payload={venue}
            >
              <Link 
                href={`/venues/${venue.id}`}
                className="relative cursor-pointer hover:z-20 group pointer-events-auto transition-all duration-200 block"
                style={{ 
                  transform: `translate(-50%, -100%) scale(${scale})`,
                  transformOrigin: 'bottom center'
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-card rounded-xl p-1 shadow-2xl border border-border flex items-center gap-3 group-hover:scale-105 transition-all duration-300">
                    <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0">
                      <Image src={venue.image} alt={venue.name} fill className="object-cover" />
                    </div>
                    <div className="pr-5 py-1.5">
                      <p className="text-[12px] font-bold text-primary leading-tight line-clamp-1 mb-0.5">{venue.name}</p>
                      <p className="text-base font-black text-foreground tracking-tight">{venue.price}</p>
                    </div>
                  </div>
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-12 border-t-card -mt-px drop-shadow-md"></div>
                </div>
              </Link>
            </Marker>
          )
        })}
      </Map>

      {/* Map Styling Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-primary/5 mix-blend-overlay"></div>
      
      <style jsx global>{`
        .map-container .pigeon-overlays {
          z-index: 10 !important;
        }
        .map-container .pigeon-layers {
          filter: grayscale(1) brightness(1.1) contrast(0.9);
        }
        .pigeon-attribution {
          display: none !important;
        }
      `}</style>
    </div>
  )
}
