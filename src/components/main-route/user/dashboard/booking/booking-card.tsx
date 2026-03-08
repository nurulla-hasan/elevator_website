import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, User } from "lucide-react";
import Image from "next/image";
import { IBooking, BookingStatus } from "@/types/booking";

interface BookingCardProps {
  booking: IBooking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const getStatusConfig = (status: BookingStatus) => {
    switch (status) {
      case "review":
        return { label: "In Review", variant: "info" as const };
      case "process":
        return { label: "In Process", variant: "warning" as const };
      case "accepted":
        return { label: "Accepted", variant: "success" as const };
      case "completed":
        return { label: "Completed", variant: "muted" as const };
      default:
        return { label: status, variant: "default" as const };
    }
  };

  const statusConfig = getStatusConfig(booking.status);

  return (
    <Card className="py-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Vendor Image */}
          <div className="relative w-full md:w-48 h-48 md:h-auto">
            <Image
              src={booking.vendorImage}
              alt={booking.vendorName}
              fill
              className="object-cover"
            />
          </div>

          {/* Booking Details */}
          <div className="flex-1 p-5 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{booking.vendorName}</h3>
                <p className="text-sm font-medium">{booking.eventType}</p>
              </div>
              <Badge variant={statusConfig.variant}>
                {statusConfig.label}
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{booking.eventDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{booking.location}</span>
              </div>
              {booking.customerName && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>{booking.customerName}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Total: {booking.price}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
              <Button variant="outline" size="xs">
                View Details
              </Button>
              {booking.status === "accepted" && (
                <Button size="xs">
                  Make Payment
                </Button>
              )}
              {booking.status === "review" && (
                <Button variant="destructive" size="xs">
                  Cancel Booking
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
