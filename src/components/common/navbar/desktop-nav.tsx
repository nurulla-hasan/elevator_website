"use client";

import Link from "next/link";
import { Heart, User, LogOut, Settings, LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Avatar className="h-10 w-10 border-2">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
                      alt="Nurulla Hasan"
                    />
                    <AvatarFallback>NH</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {"Nurulla Hasan"}
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
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
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                // onClick={() => setIsLoggedIn(true)}
              >
                Login
              </Button>
            </Link>
            <Link href="/auth/become-vendor">
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
