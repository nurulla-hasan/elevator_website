import { Navbar } from "@/components/common/navbar/navbar";
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
    </>
  );
}