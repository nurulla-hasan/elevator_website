import React from "react";
import { ShieldCheck, MessageSquareText, LayoutPanelLeft, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Verified & Trusted Vendors",
    description: "Only approved vendors with real portfolios and reviews",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    icon: MessageSquareText,
    title: "Compare Quotes Easily",
    description: "Get multiple quotes and choose what fits your budget",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: 3,
    icon: LayoutPanelLeft,
    title: "Smart Wedding Planning Tools",
    description: "Filters, budget tools, and event-based discovery",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: 4,
    icon: Headphones,
    title: "Expert Help Available",
    description: "Hire a WePlan Associate for stress-free planning",
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
            className="group relative p-8 bg-white rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                stat.bgColor
              )}>
                <stat.icon className={cn("w-7 h-7", stat.color)} strokeWidth={2} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors">
                  {stat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-border/30 group-hover:bg-primary/30 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
