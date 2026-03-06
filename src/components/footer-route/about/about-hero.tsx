import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative h-100 md:h-125 w-full flex items-center justify-center overflow-hidden">
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
      <div className="container mx-auto relative z-20 text-center space-y-6 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white/90">Our Journey</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          About <span className="text-primary italic font-serif">WeddingHub</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 drop-shadow-md">
          Connecting couples with the perfect wedding vendors since 2020. 
          We believe every love story deserves a perfect celebration.
        </p>
      </div>
    </section>
  );
}
