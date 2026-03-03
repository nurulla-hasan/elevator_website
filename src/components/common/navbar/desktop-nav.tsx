"use client";

import Link from "next/link";
import { Heart, User, LogOut, Settings, LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
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
              "text-sm font-medium transition-colors hover:text-primary-foreground/80 md:text-base",
              pathname === item.href
                ? "text-primary-foreground underline underline-offset-8 decoration-2"
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
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">
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
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/become-vendor">Become a Vendor</Link>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
