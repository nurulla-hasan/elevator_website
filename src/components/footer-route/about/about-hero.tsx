import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  const stats = [
    { label: "Happy Couples", value: "10,000+" },
    { label: "Verified Vendors", value: "5,000+" },
    { label: "Cities", value: "50+" },
    { label: "Average Rating", value: "4.9/5" },
  ];

  return (
    <section className="relative h-137.5 md:h-162.5 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding background"
          fill
          className="object-cover scale-105 transition-transform duration-1000"
          priority
        />
        {/* Pinkish Gradient Overlay matching main Hero */}
        <div className="absolute inset-0 bg-primary/10 bg-linear-to-tr from-primary/20 via-black/50 to-primary/10 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Subtle Pink Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] z-10 animate-pulse delay-700" />

      {/* Content */}
      <div className="container mx-auto relative z-20 text-center space-y-6 px-4 pt-10 pb-32 md:pt-0 md:pb-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2 md:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-white/90">Our Journey</span>
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          About <span className="text-primary italic font-serif">WeddingHub</span>
        </h1>
        
        <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 drop-shadow-md">
          Connecting couples with the perfect wedding vendors since 2020. 
          We believe every love story deserves a perfect celebration.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-8 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-1 group md:border-r border-white/10 last:border-none">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white transition-transform group-hover:scale-105 duration-300">
                {stat.value}
              </h3>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
