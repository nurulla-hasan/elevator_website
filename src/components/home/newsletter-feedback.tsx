"use client";

import React from "react";
import { Send, MessageSquareText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewsletterFeedback() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Newsletter Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Stay Updated
            </h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest wedding trends, tips, and exclusive vendor offers.
            </p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white border-primary/10 focus-visible:ring-primary"
            />
            <Button className="w-full text-base font-medium transition-all hover:scale-[1.02]">
              Subscribe Now
            </Button>
          </form>
        </div>

        {/* Feedback Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-lg shadow-primary/10 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
              <MessageSquareText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              Got suggestions?
            </h2>
            <p className="text-primary-foreground/70">
              Help us improve your experience. Share your thoughts or suggestions with our team.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Textarea 
              placeholder="Type your message here..." 
              className="min-h-30 bg-primary-foreground/10 border-2 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/40 resize-none shadow-sm"
            />
            <Button 
              variant="secondary"
              className="w-full text-base font-medium bg-white text-primary hover:bg-primary-foreground/90 transition-all hover:scale-[1.02]"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
