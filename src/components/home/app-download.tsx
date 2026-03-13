import { Smartphone, QrCode, CheckCircle2 } from "lucide-react";
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
            <h2 className="text-2xl font-semibold text-white md:text-4xl lg:leading-[1.1]">
              Your dream wedding, <br />
              <span className="opacity-80 text-xl md:text-3xl">one tap away.</span>
            </h2>
            <p className="max-w-md text-sm md:text-base leading-relaxed text-white/80">
              Manage vendors, track your budget, and collaborate with your partner—all from the palm of your hand.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-sm">
            {[
              "Real-time vendor chat",
              "Smart budget tracker",
              "Guest list management",
              "Instant booking alerts"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-[13px] text-white/90">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex gap-2">
              <Link href="#" className="transition-transform hover:-translate-y-0.5">
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
        <div className="relative mt-12 flex-1 lg:mt-0 lg:flex lg:justify-center">
          <div className="relative h-100 w-52.5 md:h-120 md:w-60">
            {/* Main Phone Mockup */}
            <div className="absolute inset-0 rounded-[2.5rem] border-[6px] border-white/10 bg-white/5 shadow-2xl overflow-hidden backdrop-blur-sm ring-1 ring-white/20">
              {/* Screen Content */}
              <div className="h-full w-full bg-linear-to-b from-white/10 to-white/5 p-4">
                <div className="space-y-4 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-16 rounded-full bg-white/20" />
                    <div className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-24 rounded-full bg-white/10" />
                    <div className="h-1.5 w-16 rounded-full bg-white/10" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-xl bg-white/20 flex flex-col items-center justify-center gap-1.5 border border-white/10 animate-pulse">
                       <div className="h-4 w-4 rounded-full bg-white/20" />
                       <div className="h-1 w-6 rounded-full bg-white/20" />
                    </div>
                    <div className="h-16 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5">
                       <div className="h-4 w-4 rounded-full bg-white/20" />
                       <div className="h-1 w-6 rounded-full bg-white/20" />
                    </div>
                    <div className="h-24 col-span-2 rounded-xl bg-white/5 border border-white/10 p-3 space-y-2">
                       <div className="h-1.5 w-1/3 rounded-full bg-white/20" />
                       <div className="space-y-1">
                         <div className="h-1 w-full rounded-full bg-white/10" />
                         <div className="h-1 w-full rounded-full bg-white/10" />
                         <div className="h-1 w-2/3 rounded-full bg-white/10" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-white/10" />
            </div>
            
            {/* Floating Card 1 */}
            <div className="absolute -left-8 top-16 hidden animate-bounce md:block md:animate-[bounce_4s_infinite]">
              <div className="rounded-xl border border-white/20 bg-white/90 p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-900 leading-tight">Booking Confirmed!</p>
                    <p className="text-[8px] text-slate-500">Karachi Ballroom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-10 bottom-24 hidden animate-bounce md:block md:animate-[bounce_5s_infinite]">
              <div className="rounded-xl border border-white/20 bg-white/90 p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-900 leading-tight">Budget Updated</p>
                    <p className="text-[8px] text-slate-500">Left: PKR 50k</p>
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
