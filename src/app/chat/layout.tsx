import { Navbar } from "@/components/common/navbar/navbar";
import type { ReactNode } from "react";

export default function ChatLayout({
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