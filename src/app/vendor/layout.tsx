
import type { ReactNode } from "react";
import MainLayout from "@/components/vendor/layout/main-layout";

export default function VendorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
