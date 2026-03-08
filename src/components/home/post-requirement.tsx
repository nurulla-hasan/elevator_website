import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PostRequirement() {
  return (
    <section>
      <div className="bg-primary rounded-[32px] p-12 md:p-20 flex flex-col items-center text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg">
          <TrendingUp className="w-8 h-8" />
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-2xl text-white">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let Vendors Come to You
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Post your wedding requirements and receive competitive quotes from
            verified vendors. Our reverse marketplace makes vendor hunting
            effortless!
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link href="/post-request">
            <Button variant="outline" className="group transition-all duration-200 bg-white text-primary hover:bg-white/90 border-none" size="lg">
              Post Your Requirement
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
