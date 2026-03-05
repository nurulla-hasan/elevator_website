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

export interface IRequestQuote {
  id: string;
  vendorName: string;
  description: string;
  rating: number;
  price: string;
  validUntil: string;
}

export interface IRequest {
  id: string;
  eventName: string;
  postedDate: string;
  quotesCount: number;
  status: "active" | "closed";
  budget: string;
  guests: number;
  area: string;
  quotes: IRequestQuote[];
}
