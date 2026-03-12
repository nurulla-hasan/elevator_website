import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function AppDownload() {
  return (
    <section id="app-download" className="w-full scroll-mt-24">
      <div className="bg-primary/5 rounded-2xl overflow-hidden border border-primary/10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-16">
          {/* Content Side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              Coming Soon
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-primary leading-tight">
              Get the <span className="text-primary/70">WePlan</span> app
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              Search, compare and book wedding services faster in one app. Your personal wedding planner in your pocket.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="#" className="transition-transform hover:scale-105 active:scale-95">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  width={160} 
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="transition-transform hover:scale-105 active:scale-95">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  width={140} 
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Visual Side (Optional - can add an app mockup image here if available) */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="relative w-64 h-125 bg-white rounded-[3rem] border-8 border-primary/20 shadow-2xl overflow-hidden">
               {/* Mockup Content */}
               <div className="absolute top-0 left-0 w-full h-full bg-primary/5 flex items-center justify-center p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-primary/40" />
                    </div>
                    <p className="text-xs font-medium text-primary/30 uppercase tracking-widest">
                      App Preview
                    </p>
                  </div>
               </div>
               {/* Phone Speaker/Camera notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary/20 rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
