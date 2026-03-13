import { Navbar } from "@/components/common/navbar/navbar";
import { MobileBottomNav } from "@/components/ui/custom/mobile-bottom-nav";
import type { ReactNode } from "react";

export default function UserLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <MobileBottomNav />
    </>
  );
}
