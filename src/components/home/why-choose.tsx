"use client";

import React from "react";
import { ShieldCheck, Zap, Heart, HeadphonesIcon } from "lucide-react";

export default function WhyChoose() {
  const trustItems = [
    {
      title: "Verified Vendors",
      description: "Thoroughly vetted professionals for your peace of mind.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Best Price Guarantee",
      description: "Get competitive pricing and exclusive deals.",
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      title: "Personalized Support",
      description: "Expert guidance at every step of your journey.",
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      title: "24/7 Expert Advice",
      description: "Talk to our wedding experts whenever you need help.",
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="w-full">
      <div className="py-16 px-6 md:px-12 rounded-4xl bg-muted/20 border border-primary/10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            Trusted by 5,000+ Couples
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary tracking-tight leading-tight">
              Why Choose WePlan
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
              Everything you need to plan your wedding with confidence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
