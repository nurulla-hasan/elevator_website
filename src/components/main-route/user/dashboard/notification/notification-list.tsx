"use client";

import { NotificationCard } from "./notification-card";
import { INotification } from "@/types/notification";
import { Button } from "@/components/ui/button";

const mockNotifications: INotification[] = [
  {
    id: "n-1",
    type: "quote",
    title: "New quote received",
    description: "Elegant Caterers sent you a quote for your Walima event",
    time: "2 hours ago",
    isRead: false,
  },
  {
    id: "n-2",
    type: "booking",
    title: "Booking confirmed",
    description: "Your booking with Elite Photography Studio has been confirmed",
    time: "1 day ago",
    isRead: true,
  },
  {
    id: "n-3",
    type: "payment",
    title: "Payment successful",
    description: "Your payment of PKR 2,500 for Block 9: WePlan Associate was successful",
    time: "3 days ago",
    isRead: true,
  },
  {
    id: "n-4",
    type: "general",
    title: "Profile updated",
    description: "Your profile information has been successfully updated",
    time: "5 days ago",
    isRead: true,
  },
  {
    id: "n-5",
    type: "quote",
    title: "New quote received",
    description: "Royal Decor Services sent you a quote for your Walima event",
    time: "1 week ago",
    isRead: true,
  },
];

export function NotificationList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl font-bold text-primary">Recent Notifications</h3>
        <Button variant="ghost" size="sm" className="text-xs font-bold text-primary hover:text-primary hover:bg-primary/5">
          Mark all as read
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
      
      <div className="pt-2 text-center">
        <Button variant="outline" className="w-full sm:w-auto px-12 h-11 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300">
          Load More Notifications
        </Button>
      </div>
    </div>
  );
}
