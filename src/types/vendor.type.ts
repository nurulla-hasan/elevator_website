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
  portfolio?: VendorPortfolio
  reviewList?: VendorReview[]
}

export interface VendorPortfolio {
  videos?: string[]
  images: string[]
}

export interface VendorReview {
  id: string
  userName: string
  rating: number
  date: string
  comment: string
}

export interface VendorPackage {
  id: string;
  name: string;
  price: string;
  duration?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  // Adding fields to match VendorCard data
  category?: string;
  location?: string;
  rating?: number;
  reviews?: number;
  image?: string;
  verified?: boolean;
  sponsored?: boolean;
}

export interface VendorContact {
  phone: string
  email: string
  whatsapp?: string
}
