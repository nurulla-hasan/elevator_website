"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { House, Store, MapPin, LayoutGrid, ClipboardList } from "lucide-react"
import { NavLogo } from "./nav-logo"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { name: "Home", href: "/", icon: House },
  { name: "Categories", href: "/category", icon: LayoutGrid },
  { name: "Vendors", href: "/vendors", icon: Store },
  { name: "Venue Finder", href: "/venues", icon: MapPin },
  { name: "Post Request", href: "/post-request", icon: ClipboardList },
]

export function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Mocked state for now

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <NavLogo />
        <DesktopNav 
          navItems={navItems} 
          pathname={pathname} 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
        />
        <MobileNav 
          navItems={navItems} 
          pathname={pathname} 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
        />
      </div>
    </header>
  )
}
