export type BookingStatus = "review" | "process" | "accepted" | "completed";

export interface IBooking {
  id: string;
  vendorName: string;
  vendorImage: string;
  eventType: string;
  eventDate: string;
  location: string;
  price: string;
  status: BookingStatus;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
}
