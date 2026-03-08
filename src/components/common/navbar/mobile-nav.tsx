"use client"

import * as React from "react"
import Link from "next/link"
import { Heart, Menu, User, LogOut, LucideIcon, Settings, LayoutDashboard, MessageSquare } from "lucide-react"

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
          <div className="flex h-full flex-col px-6 py-8">
            {/* Header / User Profile Section */}
            <div className="mb-8 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-xl font-semibold tracking-tight text-primary-foreground">
                  Menu
                </SheetTitle>
              </div>
              {isLoggedIn && (
                <div className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                    <User className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Welcome Back!</span>
                    <span className="text-xs text-primary-foreground/70">John Doe</span>
                  </div>
                </div>
              )}
            </div>
            
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium transition-all active:scale-95",
                      pathname === item.href 
                        ? "bg-primary-foreground text-primary shadow-sm" 
                        : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                    )}
                  >
                    <Icon className={cn("size-5", pathname === item.href ? "text-primary" : "text-primary-foreground/70")} />
                    {item.name}
                  </Link>
                )
              })}

              <div className="my-4 h-px bg-primary-foreground/10" />

              {isLoggedIn ? (
                <div className="flex flex-col space-y-1">
                  {/* <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95"
                  >
                    <LayoutDashboard className="size-5 text-primary-foreground/70" /> Dashboard
                  </Link> */}
                  <Link
                    href="/wishlist"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95"
                  >
                    <Heart className="size-5 text-primary-foreground/70" /> Wishlist
                  </Link>
                  <Link
                    href="/user/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95"
                  >
                    <LayoutDashboard className="size-5 text-primary-foreground/70" /> Dashboard
                  </Link>
                  <Link
                    href="/chat"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95"
                  >
                    <MessageSquare className="size-5 text-primary-foreground/70" /> Messages
                  </Link>
                  <Link
                    href="/settings"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95"
                  >
                    <Settings className="size-5 text-primary-foreground/70" /> Settings
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-1">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95 text-left"
                  >
                    <User className="size-5 text-primary-foreground/70" /> Login
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 active:scale-95 text-left"
                  >
                    <User className="size-5 text-primary-foreground/70" /> Register
                  </Link>
                </div>
              )}
            </nav>

            <div className="mt-auto pt-6">
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-semibold bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                  onClick={() => {
                    setIsLoggedIn(false)
                    setIsOpen(false)
                  }}
                >
                  <LogOut className="mr-2 size-5" /> Logout
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="w-full h-12 text-base font-semibold"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/auth/become-vendor">Become a Vendor</Link>
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
