import React from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight } from "lucide-react"

export default function PostRequirement() {
  return (
    <section>
      <div className="bg-primary/5 rounded-[32px] p-12 md:p-20 flex flex-col items-center text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-background shadow-lg shadow-primary/20">
          <TrendingUp className="w-8 h-8" />
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Let Vendors Come to You
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Post your wedding requirements and receive competitive quotes from
            verified vendors. Our reverse marketplace makes vendor hunting
            effortless!
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button 
            className="group transition-all duration-200"
            size="lg"
          >
            Post Your Requirement
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
