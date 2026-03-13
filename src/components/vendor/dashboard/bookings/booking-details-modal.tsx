"use client";

import React, { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { Booking } from "./booking-columns";

interface BookingDetailsModalProps {
  booking: Booking;
}

export function BookingDetailsModal({ booking }: BookingDetailsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={booking.id}
      description="View detailed information about this booking"
      actionTrigger={
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <Eye className="size-4" />
        </Button>
      }
      showClose
    >
      <div className="relative p-8 space-y-8 bg-card rounded-lg">
        {/* Header Section */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-primary">Booking Details</h2>
          </div>
          <p className="text-muted-foreground font-medium">{booking.id}</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          {/* Client Name */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Client Name</p>
            <p className="font-medium">{booking.client}</p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Email</p>
            <p className="font-medium">{booking.clientEmail}</p>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Phone</p>
            <p className="font-medium">{booking.clientPhone}</p>
          </div>

          {/* Package */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Package</p>
            <p className="font-medium">{booking.package}</p>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Date</p>
            <p className="font-medium">{booking.date}</p>
          </div>

          {/* Time */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Time</p>
            <p className="font-medium">{booking.time}</p>
          </div>

          {/* Location */}
          <div className="col-span-2 space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Location</p>
            <p className="font-medium">{booking.location}</p>
          </div>

          {/* Amount */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Amount</p>
            <p className="text-primary font-medium">{booking.amount}</p>
          </div>

          {/* Booked On */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Booked On</p>
            <p className="font-medium">{booking.bookedOn}</p>
          </div>

          {/* Booking Status */}
          <div className="space-y-1.5">
            <p className="text-sm text-muted-foreground font-medium">Booking Status</p>
            <Badge
              variant={
                booking.status === "confirmed" ? "accepted" : 
                booking.status === "pending" ? "progress" : 
                booking.status === "completed" ? "info" : 
                "rejected"
              }
              className="rounded-full px-4 py-0.5 font-medium capitalize"
            >
              {booking.status}
            </Badge>
          </div>

          {/* Payment Status */}
          <div className="space-y-1.5">
            <p className="text-sm text-muted-foreground font-medium">Payment Status</p>
            <Badge
              variant={
                booking.paymentStatus === "paid" ? "accepted" : 
                booking.paymentStatus === "pending" ? "progress" : 
                "rejected"
              }
              className="rounded-full px-4 py-0.5 font-medium capitalize"
            >
              {booking.paymentStatus}
            </Badge>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
