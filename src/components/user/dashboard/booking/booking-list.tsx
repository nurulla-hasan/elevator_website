

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingCard } from "./booking-card";
import { IBooking } from "@/types/booking";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const mockBookings: IBooking[] = [
  {
    id: "1",
    vendorName: "Grand Palace Hotel",
    vendorImage:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    eventType: "Baraat",
    eventDate: "March 15, 2026",
    location: "Gulshan, Dhaka",
    price: "PKR 5,000",
    status: "review" as const,
    customerName: "Md. Ubaid Kazmi",
  },
  {
    id: "2",
    vendorName: "Candid Moments Photography",
    vendorImage:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80",
    eventType: "Engagement",
    eventDate: "March 20, 2026",
    location: "Dhanmondi, Dhaka",
    price: "PKR 1,200",
    status: "process" as const,
    customerName: "Md. Ubaid Kazmi",
  },
  {
    id: "3",
    vendorName: "Royal Garden Banquet",
    vendorImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    eventType: "Walima",
    eventDate: "April 10, 2026",
    location: "Banani, Dhaka",
    price: "PKR 3,500",
    status: "accepted" as const,
    customerName: "Md. Ubaid Kazmi",
  },
  {
    id: "4",
    vendorName: "Elite Catering Service",
    vendorImage:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    eventType: "Reception",
    eventDate: "February 20, 2026",
    location: "Uttara, Dhaka",
    price: "PKR 2,800",
    status: "completed" as const,
    customerName: "Md. Ubaid Kazmi",
  },
];

export function BookingList() {
  const counts = {
    review: mockBookings.filter((b) => b.status === "review").length,
    process: mockBookings.filter((b) => b.status === "process").length,
    accepted: mockBookings.filter((b) => b.status === "accepted").length,
    completed: mockBookings.filter((b) => b.status === "completed").length,
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="review" className="space-y-4">
        <ScrollArea className="w-full">
          <TabsList className="justify-start">
            <TabsTrigger value="review">
              In Review ({counts.review})
            </TabsTrigger>
            <TabsTrigger value="process">
              In Process ({counts.process})
            </TabsTrigger>
            <TabsTrigger value="accepted">
              Accepted ({counts.accepted})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({counts.completed})
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div>
          <TabsContent
            value="review"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {mockBookings.filter((b) => b.status === "review").length > 0 ? (
              mockBookings
                .filter((b) => b.status === "review")
                .map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
            ) : (
              <div className="p-12 border-2 border-dashed rounded-xl text-center text-muted-foreground">
                No bookings in review.
              </div>
            )}
          </TabsContent>

          <TabsContent
            value="process"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {mockBookings.filter((b) => b.status === "process").length > 0 ? (
              mockBookings
                .filter((b) => b.status === "process")
                .map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
            ) : (
              <div className="p-12 border-2 border-dashed rounded-xl text-center text-muted-foreground">
                No bookings in process.
              </div>
            )}
          </TabsContent>

          <TabsContent
            value="accepted"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {mockBookings.filter((b) => b.status === "accepted").length > 0 ? (
              mockBookings
                .filter((b) => b.status === "accepted")
                .map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
            ) : (
              <div className="p-12 border-2 border-dashed rounded-xl text-center text-muted-foreground">
                No accepted bookings.
              </div>
            )}
          </TabsContent>

          <TabsContent
            value="completed"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {mockBookings.filter((b) => b.status === "completed").length > 0 ? (
              mockBookings
                .filter((b) => b.status === "completed")
                .map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
            ) : (
              <div className="p-12 border-2 border-dashed rounded-xl text-center text-muted-foreground">
                No completed bookings.
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
