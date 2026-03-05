export interface Venue {
  id: number
  name: string
  location: string
  capacity: string
  price: string
  rating: number
  image: string
  lat?: number
  lng?: number
  reviews?: number
  verified?: boolean
  sponsored?: boolean
  description?: string
  services?: string[]
  contact?: {
    phone: string
    email: string
    whatsapp: string
  }
}
