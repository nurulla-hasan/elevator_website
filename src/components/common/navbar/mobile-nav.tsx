"use client"

import * as React from "react"
import Link from "next/link"
import { Heart, Menu, User, LogOut, LucideIcon, Settings, LayoutDashboard, MessageSquare, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  navItems: { name: string; href: string; icon: LucideIcon }[]
  pathname: string
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

export function MobileNav({ navItems, pathname, isLoggedIn, setIsLoggedIn }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <ThemeToggle />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-primary border-none p-0 text-primary-foreground">
          <div className="flex h-full flex-col px-4 py-6">
            {/* Header / User Profile Section */}
            <div className="mb-6 flex flex-col space-y-4">
              <div className="flex items-center justify-between px-2">
                <SheetTitle className="text-lg font-semibold tracking-tight text-primary-foreground">
                  Menu
                </SheetTitle>
              </div>
              {isLoggedIn && (
                <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10">
                    <User className="size-4 text-primary-foreground/80" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wider font-medium">Account</span>
                    <span className="text-sm font-semibold">John Doe</span>
                  </div>
                </div>
              )}
            </div>
            
            <nav className="flex flex-col space-y-0.5">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all active:scale-95",
                      pathname === item.href 
                        ? "bg-primary-foreground text-primary shadow-sm" 
                        : "text-primary-foreground/80 hover:bg-primary-foreground/5"
                    )}
                  >
                    <Icon className={cn("size-4.5", pathname === item.href ? "text-primary" : "text-primary-foreground/60")} />
                    {item.name}
                  </Link>
                )
              })}

              <div className="my-3 h-px bg-primary-foreground/5 mx-2" />

              {isLoggedIn ? (
                <div className="flex flex-col space-y-0.5">
                  <Link
                    href="http://localhost:3000/user/dashboard?tab=saved"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-primary-foreground/5 active:scale-95"
                  >
                    <Heart className="size-4.5 text-primary-foreground/50" /> Wishlist
                  </Link>
                  <Link
                    href="/user/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-primary-foreground/5 active:scale-95"
                  >
                    <LayoutDashboard className="size-4.5 text-primary-foreground/50" /> Dashboard
                  </Link>
                  <Link
                    href="/chat"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-primary-foreground/5 active:scale-95"
                  >
                    <MessageSquare className="size-4.5 text-primary-foreground/50" /> Messages
                  </Link>
                  <Link
                    href="/user/dashboard?tab=settings"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-primary-foreground/5 active:scale-95"
                  >
                    <Settings className="size-4.5 text-primary-foreground/50" /> Settings
                  </Link>
                  <div className="my-2 h-px bg-primary-foreground/5 mx-2" />
                  <Link
                    href="/become-vendor"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95 bg-primary-foreground/5"
                  >
                    <Store className="size-4.5 text-primary-foreground/70" /> Become a Vendor
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-0.5">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-primary-foreground/5 active:scale-95 text-left"
                  >
                    <User className="size-4.5 text-primary-foreground/50" /> Login
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-primary-foreground/5 active:scale-95 text-left"
                  >
                    <User className="size-4.5 text-primary-foreground/50" /> Register
                  </Link>
                </div>
              )}
            </nav>

            <div className="mt-auto pt-6 px-2">
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-10 text-xs font-medium bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  onClick={() => {
                    setIsLoggedIn(false)
                    setIsOpen(false)
                  }}
                >
                  <LogOut className="mr-2 size-4" /> Logout
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full h-10 text-xs font-bold uppercase tracking-wider"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/auth/register">Join Now</Link>
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
