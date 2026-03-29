import React from "react"
import { VendorCard } from "@/components/main-route/vendor/vendor-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/ui/custom/page-header"
import { mockVendors } from "@/data/vendors.data"
import Link from "next/link"

export default function RecentlyAddedVendors() {

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <PageHeader
            title="Recently Added Vendors"
            description="Discover the newest wedding service providers in Karachi"
          />
          <Link href="/vendors" className="hidden md:block">
            <Button variant="link">
              View All <ArrowRight />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              variant="horizontal"
              className="hover:shadow-md transition-shadow duration-300"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link href="/vendors">
            <Button>
              View All
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
