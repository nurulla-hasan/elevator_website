
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Headphones, CheckCircle2 } from "lucide-react"

export default function WePlanAssociate() {
  const features = [
    "Dedicated wedding planner",
    "Vendor negotiations & bookings",
    "Budget management",
    "Timeline coordination",
  ]

  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto bg-muted/40 rounded-[24px] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-6 md:p-10 lg:p-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20">
              <Headphones className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                WePlan Associate
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                Get personalized help from our expert wedding associates. We&apos;ll handle vendor coordination, negotiations, and all the details so you can enjoy planning your special day stress-free.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="space-y-0.5">
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Starting from</p>
              <p className="text-2xl font-bold text-primary">$999</p>
            </div>

            <Button>
              Hire an Associate
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:max-w-120">
            <div className="relative aspect-square rounded-[24px] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Wedding Planning Associate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
