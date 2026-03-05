export interface IPayment {
  id: string;
  vendorName: string;
  vendorImage?: string;
  serviceName: string;
  date: string;
  amount: string;
  status: "completed" | "pending";
}
