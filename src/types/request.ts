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
