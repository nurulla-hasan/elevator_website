"use client";

import Link from "next/link";
import { Heart, LogOut, Settings, LucideIcon, LayoutDashboard, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  navItems: { name: string; href: string; icon: LucideIcon }[];
  pathname: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export function DesktopNav({
  navItems,
  pathname,
  isLoggedIn,
  setIsLoggedIn,
}: DesktopNavProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm uppercase tracking-wider transition-colors hover:text-primary-foreground/80",
              pathname === item.href
                ? "text-white font-semibold"
                : "text-primary-foreground/90",
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-4 lg:flex">
        <ThemeToggle />
        {isLoggedIn ? (
          <>
            <Link href="/user/dashboard?tab=saved">
              <Button variant="ghost" size="icon-sm" className="rounded-full">
                <Heart />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer outline-none">
                  <Avatar className="h-9 w-9 border-2 border-white/20 transition-all hover:border-white/40">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
                      alt="Nurulla Hasan"
                    />
                    <AvatarFallback>NH</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60 p-2">
                <div className="flex flex-col space-y-1 p-2 mb-1">
                  <p className="text-sm font-semibold leading-none">Nurulla Hasan</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    nurulla@example.com
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="mt-1">
                  <DropdownMenuItem asChild>
                    <Link href="/user/dashboard">
                      <LayoutDashboard className="mr-2" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/chat">
                      <MessageSquare className="mr-2" />
                      <span>Messages</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/user/dashboard?tab=settings">
                      <Settings className="mr-2" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setIsLoggedIn(false)}
                  variant="destructive"
                >
                  <LogOut className="mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                // onClick={() => setIsLoggedIn(true)}
              >
                Login
              </Button>
            </Link>
            <Link href="/become-vendor">
              <Button variant="secondary" asChild>
                <span>Become a Vendor</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
