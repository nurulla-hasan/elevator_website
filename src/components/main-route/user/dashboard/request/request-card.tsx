"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { IRequest } from "@/types/booking";

interface RequestCardProps {
  request: IRequest;
}

export function RequestCard({ request }: RequestCardProps) {
  return (
    <Card>
      <CardContent className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-primary">{request.eventName}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Posted: {request.postedDate}</span>
              <span>•</span>
              <span>{request.quotesCount} quotes received</span>
            </div>
          </div>
          <Badge variant={request.status === "active" ? "success" : "muted"} className="capitalize">
            {request.status}
          </Badge>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Budget</p>
            <p className="font-bold text-primary">{request.budget}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Guests</p>
            <p className="font-bold text-primary">{request.guests}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Area</p>
            <p className="font-bold text-primary">{request.area}</p>
          </div>
        </div>

        {/* Quotes Section */}
        {request.quotes.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Recent Quotes</h4>
            <div className="space-y-3">
              {request.quotes.map((quote) => (
                <div 
                  key={quote.id} 
                  className="p-4 rounded-xl border border-border/50 bg-background/50 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-primary">{quote.vendorName}</h5>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                          <Star className="w-3 h-3 fill-current" />
                          {quote.rating}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{quote.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">Valid until: {quote.validUntil}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="text-xl font-bold text-primary">{quote.price}</p>
                      <Button size="xs">
                        Accept Quote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
