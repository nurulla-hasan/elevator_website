import { Suspense } from 'react'
import PageHeader from '@/components/ui/custom/page-header'
import PageLayout from '@/components/ui/custom/page-layout'
import VendorFilter from '@/components/main-route/vendor/vendor-filter'
import { VendorCard } from '@/components/common/vendor-card'
import { mockVendors } from '@/data/vendors.data'
import CustomBreadcrumb from '@/components/ui/custom/custom-breadcrumb'

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
