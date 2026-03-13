"use client";

import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterFeedback() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-white border border-primary/10 px-6 py-12 md:px-12 md:py-16 text-center shadow-sm">
        {/* Decorative elements */}
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Newsletter
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary">
              Stay in the loop with <br className="hidden md:block" />
              <span className="text-foreground">wedding trends</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
              Get exclusive vendor offers, planning tips, and inspiration delivered directly to your inbox every week.
            </p>
          </div>
          
          <form 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="pl-10"
              />
            </div>
            <Button>
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}

