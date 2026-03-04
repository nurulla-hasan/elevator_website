"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VendorContact } from "@/types/vendor.type";
import { CalendarDays, Info, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";

interface VendorSidebarProps {
  contact: VendorContact;
  availability: Record<string, 'available' | 'booked'>;
}

export const VendorSidebar = ({ contact }: VendorSidebarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8 sticky top-24">
      {/* Availability Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <CalendarDays size={20} />
            Check Availability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-xl border border-border p-3 mx-auto"
          />
          
          <div className="mt-6 space-y-4 pt-4 border-t border-border">
            <div className="bg-muted rounded-xl p-4 flex flex-col gap-1.5 border border-border/50">
              <span className="text-sm font-bold text-foreground flex items-center gap-2">
                <Info size={14} className="text-muted-foreground" />
                {date ? date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Select a date'}
              </span>
              <p className="text-xs text-muted-foreground font-medium">No availability information for this date.</p>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-semibold px-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                <span className="text-emerald-600 dark:text-emerald-400">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/20 border border-destructive/30" />
                <span className="text-destructive">Booked</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <MessageSquare size={20} />
            Contact Vendor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button size="lg" className="w-full flex items-center gap-3">
            <MessageSquare size={20} className="fill-current" />
            WhatsApp
          </Button>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <MessageSquare size={18} />
              Message
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Phone size={18} />
              Call Now
            </Button>
          </div>

          <Button variant="outline" size="lg" className="w-full flex items-center gap-3 group">
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Send Quote
          </Button>

          <div className="pt-6 space-y-4 border-t border-border">
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-medium">Phone Number</span>
                <span className="text-sm font-bold text-foreground">{contact.phone}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-medium">Email Address</span>
                <span className="text-sm font-bold text-foreground">{contact.email}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
