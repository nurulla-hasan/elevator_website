import React from "react"
import { VendorCard } from "@/components/common/vendor-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Vendor } from "@/types/vendor.type"
import PageHeader from "@/components/ui/custom/page-header"

const RECENT_VENDORS: Vendor[] = [
  {
    id: "1",
    name: "Elegant Moments Photography",
    category: "Photographers",
    rating: 4.9,
    reviews: 156,
    location: "New York, NY",
    price: "$2,500",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Grand Ballroom Events",
    category: "Venues",
    rating: 4.8,
    reviews: 234,
    location: "Los Angeles, CA",
    price: "$8,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Gourmet Wedding Catering",
    category: "Caterers",
    rating: 4.7,
    reviews: 189,
    location: "Chicago, IL",
    price: "$3,500",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Floral Dreams Design",
    category: "Decorators",
    rating: 4.9,
    reviews: 142,
    location: "Miami, FL",
    price: "$2,000",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Glamour Makeup Studio",
    category: "Makeup Artists",
    rating: 5.0,
    reviews: 298,
    location: "San Francisco, CA",
    price: "$800",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
  }
]

export default function RecentlyAddedVendors() {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <PageHeader 
            title="Recently Added Vendors" 
            description="Explore our newest professional wedding vendors"
            length={RECENT_VENDORS.length}
          />
        </div>

        <div className="flex flex-col gap-4">
          {RECENT_VENDORS.map((vendor) => (
            <VendorCard 
              key={vendor.id} 
              vendor={vendor} 
              variant="horizontal" 
              className="hover:shadow-md transition-shadow duration-300"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline">
            View All Vendors
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
