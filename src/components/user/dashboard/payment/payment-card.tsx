"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { IPayment } from "@/types/payment";
import { PaymentDetailsModal } from "./payment-details-modal";

interface PaymentCardProps {
  payment: IPayment;
}

export function PaymentCard({ payment }: PaymentCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Vendor Image */}
          <div className="relative w-full sm:w-32 h-24 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            {payment.vendorImage ? (
              <Image
                src={payment.vendorImage}
                alt={payment.vendorName}
                fill
                className="object-cover"
              />
            ) : (
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            )}
          </div>

          {/* Details */}
          <div className="flex-1 space-y-3 w-full">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <h3 className="font-semibold">{payment.vendorName}</h3>
                <p className="text-sm text-muted-foreground">{payment.serviceName}</p>
              </div>
              <Badge 
                variant={payment.status === "completed" ? "success" : "warning"} 
                className="capitalize"
              >
                {payment.status}
              </Badge>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{payment.date}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-semibold">{payment.amount}</span>
                <PaymentDetailsModal payment={payment} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
