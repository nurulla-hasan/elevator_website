"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { INotification } from "@/types/notification";
import { CheckCircle2, TrendingUp, CreditCard, Bell } from "lucide-react";

interface NotificationCardProps {
  notification: INotification;
}

const getIcon = (type: INotification["type"]) => {
  switch (type) {
    case "quote":
      return <TrendingUp className="w-5 h-5 text-white" />;
    case "booking":
      return <CheckCircle2 className="w-5 h-5 text-white" />;
    case "payment":
      return <CreditCard className="w-5 h-5 text-white" />;
    default:
      return <Bell className="w-5 h-5 text-white" />;
  }
};

export function NotificationCard({ notification }: NotificationCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md",
        !notification.isRead ? "bg-card ring-1 ring-primary/20" : "bg-card/50",
      )}
    >
      <CardContent className="flex items-start gap-4">
        {/* Decorative Side Bar for Unread */}
        {!notification.isRead && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        )}

        {/* Icon with Glass Effect */}
        <div
          className={cn(
            "shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300",
            !notification.isRead
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "bg-muted text-muted-foreground",
          )}
        >
          {getIcon(notification.type)}
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h4
              className={cn(
                "font-semibold text-base leading-tight transition-colors",
                !notification.isRead ? "text-primary" : "text-foreground",
              )}
            >
              {notification.title}
            </h4>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {notification.time}
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {notification.description}
          </p>

          <div className="pt-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  !notification.isRead
                    ? "bg-primary animate-pulse"
                    : "bg-muted-foreground/30",
                )}
              />
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                {notification.type}
              </span>
            </div>

            {!notification.isRead && (
              <button className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline">
                Mark as read
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
