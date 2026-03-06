"use client";

import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Package,
  CreditCard,
  Heart,
  Bell,
  Settings,
} from "lucide-react";
import { BookingList } from "@/components/main-route/user/dashboard/booking/booking-list";
import { RequestList } from "@/components/main-route/user/dashboard/request/request-list";
import { PaymentList } from "@/components/main-route/user/dashboard/payment/payment-list";
import { SavedVendorList } from "@/components/main-route/user/dashboard/saved/saved-vendor-list";
import { NotificationList } from "@/components/main-route/user/dashboard/notification/notification-list";
import { SettingsList } from "@/components/main-route/user/dashboard/settings/settings-list";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useSmartFilter } from "@/hooks/useSmartFilter";

export default function DashboardPage() {
  const { getFilter, updateFilter } = useSmartFilter();

  const activeTab = getFilter("tab") || "bookings";

  const handleTabChange = (value: string) => {
    updateFilter("tab", value, { resetPage: false });
  };

  const tabs = [
    { id: "bookings", label: "My Bookings", icon: Calendar },
    { id: "requests", label: "My Requests", icon: Package },
    { id: "payments", label: "Payment History", icon: CreditCard },
    { id: "saved", label: "Saved Vendors", icon: Heart },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Dashboard", isCurrent: true },
        ]}
      />
      <div className="flex flex-col gap-8">
        <PageHeader
          title="My Dashboard"
          description="Manage your bookings, requests, and vendors"
        />

        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <ScrollArea className="w-full">
            <TabsList variant="line" className="w-full justify-start">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  <tab.icon />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="mt-8">
            <TabsContent value="bookings">
              <BookingList />
            </TabsContent>
            <TabsContent value="requests">
              <RequestList />
            </TabsContent>
            <TabsContent value="payments">
              <PaymentList />
            </TabsContent>
            <TabsContent value="saved">
              <SavedVendorList />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationList />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsList />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PageLayout>
  );
}
