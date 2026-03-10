"use client";

import { VendorCard } from "@/components/main-route/vendor/vendor-card";
import { Vendor } from "@/types/vendor.type";

const mockSavedVendors: Vendor[] = [
  {
    id: "v-1",
    name: "Block 9: WePlan Associate",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    category: "Venue",
    location: "Downtown, Dhaka",
    rating: 4.8,
    reviews: 124,
    price: "PKR 2,500",
    verified: true,
    sponsored: true,
  },
  {
    id: "v-2",
    name: "Elegant Decorators",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    category: "Decoration",
    location: "Gulshan, Dhaka",
    rating: 4.9,
    reviews: 86,
    price: "PKR 1,200",
    verified: true,
  },
  {
    id: "v-3",
    name: "Royal Catering Service",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    category: "Catering",
    location: "Banani, Dhaka",
    rating: 4.7,
    reviews: 210,
    price: "PKR 15/person",
    verified: false,
  },
];

export function SavedVendorList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockSavedVendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}
