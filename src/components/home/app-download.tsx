import { QrCode, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppDownload() {
  return (
    <section id="app-download" className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-primary px-8 py-10 md:px-12 md:py-14 lg:flex lg:items-center lg:gap-12">
        {/* Background Decorative Circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/10 blur-[80px]" />
        
        <div className="relative z-10 flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-medium text-white uppercase tracking-wider">
            <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Mobile App Beta
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white md:text-5xl lg:leading-[1.1]">
              Your Dream Wedding, <br />
              <span className="text-white/80">One Tap Away</span>
            </h2>
            <p className="max-w-md text-base md:text-lg leading-relaxed text-white/90">
              Plan, compare, and book vendors anytime, anywhere with the WePlan app
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 lg:max-w-md">
            {[
              "Browse vendors",
              "Get instant quotes",
              "Chat with vendors",
              "Track your bookings"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-[14px] md:text-base text-white font-medium">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white fill-white/10" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex gap-2">
              <Link href="#" className="transition-transform hover:-translate-y-0.5 bg-white">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  width={120} 
                  height={36}
                  className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="#" className="transition-transform hover:-translate-y-0.5">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  width={110} 
                  height={36}
                  className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
            
            <div className="hidden items-center gap-3 border-l border-white/20 pl-6 md:flex">
              <div className="rounded-lg bg-white p-1.5">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
              <div className="text-[10px] text-white/80">
                <p className="font-semibold text-white">Scan to download</p>
                <p>iOS & Android</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mockup Side */}
        <div className="relative mt-12 flex-1 lg:mt-0 lg:flex lg:justify-center hidden md:flex">
          <div className="relative h-100 w-52.5 md:h-125 md:w-62.5">
            {/* Main Phone Mockup */}
            <div className="absolute inset-0 rounded-[3rem] border-8 border-white/20 bg-slate-950 shadow-2xl overflow-hidden ring-1 ring-white/30">
              {/* Screen Content - Mocking Vendor Listing/Chat/Venue */}
              <div className="h-full w-full bg-white p-4 pt-10 space-y-4">
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="h-2.5 w-20 rounded-full bg-slate-100" />
                  <div className="h-6 w-6 rounded-full bg-slate-100" />
                </div>
                
                {/* Listing Screen Mockup */}
                <div className="space-y-3">
                  <div className="h-32 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden relative">
                    <div className="absolute bottom-3 left-3 space-y-1">
                      <div className="h-2 w-24 rounded-full bg-slate-200" />
                      <div className="h-1.5 w-16 rounded-full bg-slate-100" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 rounded-xl bg-slate-50 border border-slate-100" />
                    <div className="h-20 rounded-xl bg-slate-50 border border-slate-100" />
                  </div>
                </div>

                {/* Chat Bubble Mockup */}
                <div className="pt-2 space-y-2">
                  <div className="flex justify-end">
                    <div className="h-8 w-2/3 rounded-2xl rounded-tr-none bg-primary/10 border border-primary/5" />
                  </div>
                  <div className="flex justify-start">
                    <div className="h-8 w-1/2 rounded-2xl rounded-tl-none bg-slate-100 border border-slate-200" />
                  </div>
                </div>
              </div>
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-950 flex items-center justify-center gap-1.5">
                <div className="h-1 w-1 rounded-full bg-white/20" />
                <div className="h-1.5 w-8 rounded-full bg-white/10" />
              </div>
            </div>
            
            {/* Floating Card 1 - Venue Finder */}
            <div className="absolute -left-12 top-20 animate-[bounce_4s_infinite]">
              <div className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <QrCode className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Venue Finder</p>
                    <p className="text-[10px] text-slate-500">Nearby: Gulshan 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Instant Quote */}
            <div className="absolute -right-12 bottom-32 animate-[bounce_5s_infinite]">
              <div className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Instant Quote</p>
                    <p className="text-[10px] text-slate-500">৳ 25,000 Received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
