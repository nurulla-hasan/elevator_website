
import type { ReactNode } from "react";
import MainLayout from "@/components/vendor/layout/main-layout";
import { VendorStatus } from "@/components/main-route/become-vendor/vendor-status";

export default function VendorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const isApproved = false;

  if (!isApproved) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <VendorStatus />
      </div>
    );
  }


  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
