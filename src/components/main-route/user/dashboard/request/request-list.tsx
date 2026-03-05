
import { RequestCard } from "./request-card";
import { IRequest } from "@/types/request";
import { Button } from "@/components/ui/button";

const mockRequests: IRequest[] = [
  {
    id: "req-1",
    eventName: "Walima Event",
    postedDate: "2/10/2026",
    quotesCount: 12,
    status: "active",
    budget: "$100k-$200k",
    guests: 400,
    area: "Downtown",
    quotes: [
      {
        id: "q-1",
        vendorName: "Elegant Caterers",
        description: "Complete catering service for 400 guests including setup and staff",
        rating: 4.8,
        price: "$15,000",
        validUntil: "3/15/2026",
      },
      {
        id: "q-2",
        vendorName: "Royal Decor Services",
        description: "Full venue decoration with floral arrangements and lighting",
        rating: 4.9,
        price: "$8,500",
        validUntil: "3/10/2026",
      },
    ],
  },
  {
    id: "req-2",
    eventName: "Mehndi Event",
    postedDate: "1/25/2026",
    quotesCount: 8,
    status: "closed",
    budget: "$50k-$100k",
    guests: 200,
    area: "Riverside",
    quotes: [],
  },
];

export function RequestList() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {mockRequests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
      
      <Button size="lg" className="w-full">
        Post New Requirement
      </Button>
    </div>
  );
}
