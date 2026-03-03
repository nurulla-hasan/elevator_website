import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar/navbar";
import type { ReactNode } from "react";

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
