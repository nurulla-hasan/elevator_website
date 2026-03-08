"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { House, Store, MapPin, LayoutGrid, ClipboardList } from "lucide-react"
import { NavLogo } from "./nav-logo"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { cn } from "@/lib/utils"

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // If scrolling down and scrolled more than 100px, hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        // If scrolling up or near the top, show navbar
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-primary text-primary-foreground transition-transform duration-500 ease-in-out",
      !isVisible ? "-translate-y-full" : "translate-y-0"
    )}>
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:h-20">
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
