import { Navbar } from "@/components/common/navbar/navbar";
import type { ReactNode } from "react";
import { Footer } from "react-day-picker";

export default function MainRouteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
