"use client"

import * as React from "react"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api"
import { Input } from "@/components/ui/input"
import { Loader2, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const LIBRARIES: ("places")[] = ["places"]

export interface LocationData {
  address: string
  city?: string
  state?: string
  country?: string
  postalCode?: string
  lat?: number
  lng?: number
}

interface LocationInputProps {
  value: string
  onChange: (value: string, data?: LocationData) => void
  placeholder?: string
  className?: string
  error?: boolean
  hideIcon?: boolean
}

export function LocationInput({
  value,
  onChange,
  placeholder = "Search location...",
  className,
  error,
  hideIcon = false,
}: LocationInputProps) {
  const [autocomplete, setAutocomplete] = React.useState<google.maps.places.Autocomplete | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: LIBRARIES,
  })

  const onLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance)
  }

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace()
      const address = place.formatted_address || ""
      
      const locationData: LocationData = {
        address,
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      }

      // Extract address components
      place.address_components?.forEach((component) => {
        const types = component.types
        if (types.includes("locality")) {
          locationData.city = component.long_name
        } else if (types.includes("administrative_area_level_1")) {
          locationData.state = component.long_name
        } else if (types.includes("country")) {
          locationData.country = component.long_name
        } else if (types.includes("postal_code")) {
          locationData.postalCode = component.long_name
        }
      })

      onChange(address, locationData)
    }
  }

  return (
    <div className="relative w-full">
      {isLoaded ? (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="relative">
            {!hideIcon && <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />}
            <Input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className={cn(!hideIcon && "pl-9", error && "border-destructive focus-visible:ring-destructive", className)}
            />
          </div>
        </Autocomplete>
      ) : (
        <div className="relative">
          {!hideIcon && <Loader2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />}
          <Input
            disabled
            placeholder="Loading maps..."
            className={cn(!hideIcon && "pl-9", "opacity-50", className)}
          />
        </div>
      )}
    </div>
  )
}
