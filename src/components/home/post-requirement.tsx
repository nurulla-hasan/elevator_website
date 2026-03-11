import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PostRequirement() {
  return (
    <section>
      <div className="bg-primary rounded-2xl p-8 md:p-18 flex flex-col items-center text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg">
          <TrendingUp className="w-8 h-8" />
        </div>

        {/* Text Content */}
        <div className="space-y-4 md:max-w-2xl text-white">
          <h2 className="text-xl md:text-4xl font-semibold">
            Let Vendors Come to You
          </h2>
          <p className="text-white/80 text-sm md:text-lg leading-relaxed">
            Post your wedding requirements and receive competitive quotes from
            verified vendors. Our reverse marketplace makes vendor hunting
            effortless!
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link href="/post-request">
            <Button
              variant="secondary"
              className="group transition-all duration-200"
              size="lg"
            >
              Post Your Requirement
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
