import React from "react";
import { Smile, Users, ShieldCheck, Heart } from "lucide-react";

interface StatItem {
  id: number;
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: Smile,
    value: "500,000+",
    label: "Happy Users",
  },
  {
    id: 2,
    icon: Users,
    value: "600+",
    label: "Verified Vendors",
  },
  {
    id: 3,
    icon: ShieldCheck,
    value: "100%",
    label: "Secure Payment",
  },
  {
    id: 4,
    icon: Heart,
    value: "30,000+",
    label: "Weddings Planned",
  },
];

export default function HomeStats() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 p-8 md:p-12 bg-primary rounded-2xl shadow-lg shadow-primary/10">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 flex-1 px-4">
              <div className="flex items-center gap-3 mb-1">
                <stat.icon className="w-5 h-5 text-primary-foreground/70" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-foreground tracking-tight">
                  {stat.value}
                </h3>
              </div>
              <p className="text-sm md:text-base text-primary-foreground/80 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
