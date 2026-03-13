"use client";

import * as React from "react";
import { format, addDays, isSameDay } from "date-fns";
import { Info, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export function SettingsAvailability() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  
  // Mock booked dates for demonstration
  const bookedDates = [
    addDays(new Date(), 2),
    addDays(new Date(), 5),
    addDays(new Date(), 12),
    addDays(new Date(), 15),
    addDays(new Date(), 22),
  ];

  const isBooked = (date: Date) => {
    return bookedDates.some(bookedDate => isSameDay(bookedDate, date));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-primary font-medium text-lg">Availability Calendar</CardTitle>
            <p className="text-sm text-muted-foreground font-normal max-w-xs">Manage your booking schedule and mark dates as booked or available.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] sm:text-xs font-normal text-muted-foreground uppercase tracking-wider">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-destructive" />
              <span className="text-[10px] sm:text-xs font-normal text-muted-foreground uppercase tracking-wider">Booked</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row gap-6">
          {/* Main Calendar Container */}
          <div className="flex-1 flex justify-center border rounded-2xl p-2 sm:p-4 bg-white overflow-hidden">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border p-1 sm:p-4 w-full max-w-full"
              classNames={{
                month: "space-y-2 sm:space-y-4 w-full",
                week: "flex w-full gap-0.5 sm:gap-2 mt-1 sm:mt-3",
                weekdays: "flex w-full gap-0.5 sm:gap-2",
                day: "flex-1 h-8 sm:h-12 flex items-center justify-center",
                day_button: "h-full w-full flex items-center justify-center rounded-md sm:rounded-xl text-[10px] sm:text-sm",
              }}
              modifiers={{
                booked: bookedDates,
                available: (date) => !isBooked(date) && date >= new Date(new Date().setHours(0, 0, 0, 0)),
              }}
              modifiersClassNames={{
                booked: "border-2 border-destructive bg-destructive/5 rounded-md",
                available: "border-2 border-emerald-500 bg-emerald-50 rounded-md",
              }}
            />
          </div>

          {/* Sidebar / Details Container */}
          <div className="w-full lg:w-72 space-y-6">
            <div className="bg-muted/30 rounded-2xl p-6 space-y-6">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-normal">Selected Date</p>
                <p className="text-xl font-medium text-primary">
                  {selectedDate ? format(selectedDate, "MMMM do, yyyy") : "No date selected"}
                </p>
              </div>

              <div className="pt-2">
                {selectedDate && isBooked(selectedDate) ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-destructive bg-destructive/5 py-2 px-3 rounded-lg border border-destructive/10">
                      <XCircle className="h-4 w-4" />
                      <span className="text-sm font-normal">Date is currently booked</span>
                    </div>
                    <Button variant="outline" className="w-full border-destructive text-destructive hover:bg-destructive/5 font-normal h-11 text-sm">
                      Mark as Available
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 py-2 px-3 rounded-lg border border-emerald-100">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm font-normal">Date is available</span>
                    </div>
                    <Button variant="default" className="w-full">
                      Mark as Booked
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 px-2">
              <div className="flex items-center gap-2 text-primary">
                <Info className="h-4 w-4" />
                <p className="text-sm font-normal">Quick Tips</p>
              </div>
              <ul className="space-y-3">
                <li className="text-xs text-muted-foreground leading-relaxed font-normal list-none">
                  • Click on a date to see details or change its status.
                </li>
                <li className="text-xs text-muted-foreground leading-relaxed font-normal list-none">
                  • Red highlighted dates indicate you have a confirmed booking.
                </li>
                <li className="text-xs text-muted-foreground leading-relaxed font-normal list-none">
                  • Keep your calendar updated to avoid double bookings.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
