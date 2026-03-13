"use client";

import { Send, MessageSquareText, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function FeedbackSection() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white border border-primary/10 shadow-sm">
      {/* Decorative blobs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 items-center">
        {/* Left Side: Info */}
        <div className="lg:col-span-2 p-8 md:p-12 lg:pr-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
              <Zap className="w-3 h-3 fill-primary" />
              Community Driven
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight leading-tight">
                Got a brilliant <br />
                <span className="text-foreground">suggestion?</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                We&apos;re building this platform for you. Your feedback directly shapes our future features and updates.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-primary/5">
            <div className="flex items-center gap-3 text-sm font-medium text-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              Anonymous & Secure
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <MessageSquareText className="w-4 h-4 text-primary" />
              </div>
              Direct to Product Team
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-3 p-8 md:p-12 lg:pl-6">
          <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-primary/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
                  Your Message
                </label>
                <Textarea 
                  placeholder="What's on your mind? We'd love to hear your thoughts..." 
                  className="h-46"
                />
              </div>
              
              <Button 
                size="lg"
                className="w-full"
              >
                Submit Feedback
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

