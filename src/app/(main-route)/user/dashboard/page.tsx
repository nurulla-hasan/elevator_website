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

export default function DashboardPage() {
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

        <Tabs defaultValue="bookings">
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
            <TabsContent value="bookings" className="mt-0">
              <BookingList />
            </TabsContent>
            <TabsContent value="requests" className="mt-0">
              <RequestList />
            </TabsContent>
            <TabsContent value="payments" className="mt-0">
              <PaymentList />
            </TabsContent>
            <TabsContent value="saved" className="mt-0">
              <SavedVendorList />
            </TabsContent>
            <TabsContent value="notifications" className="mt-0">
              <NotificationList />
            </TabsContent>
            <TabsContent value="settings" className="mt-0">
              <SettingsList />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PageLayout>
  );
}
