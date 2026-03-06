"use client";

import { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Button } from "@/components/ui/button";
import { IPayment } from "@/types/payment";
import {
  CheckCircle2,
  Download,
  Mail,
  Lightbulb,
  CreditCard,
  User,
  Package,
  CalendarDays,
  Hash,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PaymentDetailsModalProps {
  payment: IPayment;
}

export function PaymentDetailsModal({ payment }: PaymentDetailsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Payment Overview"
      actionTrigger={
        <Button variant="outline" size="sm" className="font-semibold">
          View Details
        </Button>
      }
    >
      <ScrollArea className="max-h-[70vh]">
        <div className="p-6 space-y-4">
          {/* Status Card */}
          <Card className="border-none shadow-none bg-primary/5">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-foreground">
                  Payment Successful
                </h4>
                <p className="text-xs text-muted-foreground">
                  Processed on {payment.date}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">
                  {payment.amount}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                  Total Paid
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Transaction Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Hash className="h-3 w-3" />
                  Transaction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Reference ID
                  </span>
                  <span className="text-sm font-semibold truncate">
                    TXN-{payment.id.toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Payment Date
                  </span>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <CalendarDays className="h-3 w-3 text-muted-foreground" />
                    {payment.date}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CreditCard className="h-3 w-3" />
                  Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Card Type
                  </span>
                  <span className="text-sm font-semibold">Credit Card</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Card Number
                  </span>
                  <span className="text-sm font-semibold">
                    **** **** **** 4532
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vendor & Service Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Package className="h-3 w-3" />
                Vendor & Package
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Provider
                  </span>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <User className="h-3 w-3 text-muted-foreground" />
                    {payment.vendorName}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Service
                  </span>
                  <span className="text-sm font-semibold">
                    {payment.serviceName}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Actions */}
          <Card className="shadow-none border-dashed border-primary/20 bg-primary/5">
            <CardContent className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-background flex items-center justify-center border border-border">
                  <Download className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Tax Invoice</span>
                  <span className="text-[10px] text-muted-foreground">
                    PDF Format (1.2 MB)
                  </span>
                </div>
              </div>
              <Button size="xs" variant="outline">
                Download
              </Button>
            </CardContent>
          </Card>

          {/* Support Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-muted/40 border border-border/40 flex items-start gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Receipt sent to your registered email.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-muted/40 border border-border/40 flex items-start gap-3">
              <Lightbulb className="h-4 w-4 text-primary shrink-0" />
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Need help? Contact our support.
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full flex-1"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <Button
              size="sm"
              className="w-full flex-1"
              onClick={() => setOpen(false)}
            >
              Save Details
            </Button>
          </div>
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
}
