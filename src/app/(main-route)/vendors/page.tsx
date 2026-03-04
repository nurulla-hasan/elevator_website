import { Suspense } from 'react'
import PageHeader from '@/components/ui/custom/page-header'
import PageLayout from '@/components/ui/custom/page-layout'
import VendorFilter from '@/components/main-route/vendor/vendor-filter'
import { VendorCard } from '@/components/common/vendor-card'
import { Vendor } from '@/types/vendor.type'
import CustomBreadcrumb from '@/components/ui/custom/custom-breadcrumb'

// Mock data for vendors
const mockVendors: Vendor[] = [
  {
    id: "1",
    name: "Grand Palace Hotel",
    category: "Venue",
    location: "Gulshan, Dhaka",
    rating: 4.8,
    reviews: 124,
    price: "$5,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "2",
    name: "Candid Moments Photography",
    category: "Photographer",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 86,
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "3",
    name: "Royal Garden Banquet",
    category: "Venue",
    location: "Banani, Dhaka",
    rating: 4.7,
    reviews: 210,
    price: "$3,500",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    verified: false
  },
  {
    id: "4",
    name: "Glamour Makeup Studio",
    category: "Makeup Artist",
    location: "Uttara, Dhaka",
    rating: 4.6,
    reviews: 45,
    price: "$500",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "5",
    name: "Elite Catering Services",
    category: "Caterer",
    location: "Mirpur, Dhaka",
    rating: 4.5,
    reviews: 156,
    price: "$2,000",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "6",
    name: "Bloom & Petal Decor",
    category: "Decorator",
    location: "Mohakhali, Dhaka",
    rating: 4.8,
    reviews: 67,
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    verified: false
  }
];

export default function VendorsPage() {
  return (
    <PageLayout paddingSize='small' className='min-h-screen'>
      <CustomBreadcrumb 
        links={[
          { name: "Home", href: "/" },
          { name: "Vendors", isCurrent: true }
        ]} 
      />
      <PageHeader
          title="Find Your Perfect Vendors"
          description="Browse verified wedding professionals to make your big day special."
        />

        <div className="sticky top-16 z-30 backdrop-blur-md pb-4 pt-8 rounded-xl -mx-4 px-4">
          <Suspense fallback={<div>Loading filters...</div>}>
            <VendorFilter />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
    </PageLayout>
  )
}
