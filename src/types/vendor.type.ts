export interface Vendor {
  id: number | string
  name: string
  category: string
  rating: number
  reviews: number
  location: string
  price: string
  image: string
  verified?: boolean
  sponsored?: boolean
  description?: string
  services?: string[]
  packages?: VendorPackage[]
  contact?: VendorContact
  availability?: Record<string, 'available' | 'booked'>
}

export interface VendorPackage {
  id: string
  name: string
  price: string
  duration?: string
  description: string
  isPopular?: boolean
  features: string[]
}

export interface VendorContact {
  phone: string
  email: string
  whatsapp?: string
}
