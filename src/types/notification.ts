export type NotificationType = "quote" | "booking" | "payment" | "general";

export interface INotification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}
