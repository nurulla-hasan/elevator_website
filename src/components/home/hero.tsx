
import { Search, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/home/hero.jpg')`,
        }}
      />
      {/* Pinkish Gradient Overlay for Client Requirement */}
      <div className="absolute inset-0 bg-primary/10 bg-linear-to-tr from-primary/10 via-black/40 to-primary/20 z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Subtle Pink Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-primary/15 rounded-full blur-[180px] z-0 animate-pulse delay-1000" />

      {/* Content */}
      <div className="container mx-auto relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium tracking-wide uppercase">Start Your Journey Together</span>
        </div>

        <h1 className="mb-6 text-4xl font-semibold tracking-widest md:text-6xl lg:text-7xl leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Crafting Your Perfect <br /> 
          <span className="text-primary italic font-serif drop-shadow-[0_2px_10px_rgba(var(--primary),0.3)]">Wedding Story</span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg font-medium text-white/95 md:text-xl px-2 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 drop-shadow-md">
          Connect with the finest wedding vendors and venues. From intimate ceremonies 
          to grand celebrations, we help you find the best professionals for your big day.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-5xl flex-col gap-2 rounded-2xl bg-card/95 backdrop-blur-sm p-3 shadow-2xl md:flex-row md:items-center md:gap-0 animate-in fade-in zoom-in-95 duration-1000 delay-700 border border-border/50">
          <div className="flex flex-[1.2] items-center px-4 py-2 md:py-0">
            <Search className="mr-3 h-5 w-5 text-primary shrink-0" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1 ml-1">Looking for</span>
              <Input
                type="text"
                placeholder="Venues, Photographers..."
                className="border-none h-8 shadow-none"
              />
            </div>
          </div>

          <Separator orientation="vertical" className="hidden h-10 md:block bg-border" />

          <div className="flex flex-1 items-center px-4 py-2 md:py-0 border-t border-border md:border-none">
            <MapPin className="mr-3 h-5 w-5 text-primary shrink-0" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1 ml-1">Location</span>
              <Input
                type="text"
                placeholder="Where in the city?"
                className="border-none h-8 shadow-none"
              />
            </div>
          </div>

          <Button className="h-12 w-full md:w-auto transition-all shadow-lg hover:shadow-primary/20 md:ml-2 text-primary-foreground">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}
