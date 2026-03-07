import React from "react"
import { VendorCard } from "@/components/main-route/vendor/vendor-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/ui/custom/page-header"
import { mockVendors } from "@/data/vendors.data"
import Link from "next/link"

export default function RecentlyAddedVendors() {
  const recentVendors = mockVendors.slice(0, 5)

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <PageHeader 
            title="Recently Added Vendors" 
            description="Explore our newest professional wedding vendors"
            length={recentVendors.length}
          />
        </div>

        <div className="flex flex-col gap-4">
          {recentVendors.map((vendor) => (
            <VendorCard 
              key={vendor.id} 
              vendor={vendor} 
              variant="horizontal" 
              className="hover:shadow-md transition-shadow duration-300"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/vendors">
            <Button variant="outline">
              View All Vendors
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
