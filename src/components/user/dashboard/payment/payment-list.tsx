
import { PaymentCard } from "./payment-card";
import { IPayment } from "@/types/payment";

const mockPayments: IPayment[] = [
  {
    id: "pay-1",
    vendorName: "Block 9: WePlan Associate",
    vendorImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    serviceName: "Concierge info",
    date: "2/15/2026",
    amount: "PKR 2,500",
    status: "completed",
  },
  {
    id: "pay-2",
    vendorName: "WePlan Associate",
    vendorImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    serviceName: "Bridal Makeup Package",
    date: "2/10/2026",
    amount: "PKR 500",
    status: "pending",
  },
  {
    id: "pay-3",
    vendorName: "Block 9: WePlan Associate",
    vendorImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    serviceName: "Concierge info",
    date: "2/15/2026",
    amount: "PKR 2,500",
    status: "completed",
  },
];

export function PaymentList() {
  return (
    <div className="space-y-4">
      {mockPayments.map((payment) => (
        <PaymentCard key={payment.id} payment={payment} />
      ))}
    </div>
  );
}
