import React from "react";
import { Star, Building2, MapPin, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    id: 1,
    icon: Building2,
    value: "1,200+",
    label: "Partner Venues",
    subLabel: "Across Pakistan",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    icon: Star,
    value: "4.8/5",
    label: "User Rating",
    subLabel: "Based on 10k+ reviews",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    id: 3,
    icon: MapPin,
    value: "25+",
    label: "Cities Covered",
    subLabel: "Expanding nationwide",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    id: 4,
    icon: BadgeCheck,
    value: "100%",
    label: "Verified Vendors",
    subLabel: "Strict quality check",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
];

export default function HomeStats() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="group relative p-6 bg-white rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex flex-col gap-4">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-360",
                stat.bgColor
              )}>
                <stat.icon className={cn("w-6 h-6", stat.color)} strokeWidth={2} />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </h3>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-foreground/90 uppercase tracking-tight">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {stat.subLabel}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
