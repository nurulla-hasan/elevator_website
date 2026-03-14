
"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Settings,
  LogOut,
  ChevronDown,
  LayoutGrid,
  Briefcase,
  Mail,
  Calendar,
  Package,
  Star,
  BarChart3,
  TrendingUp,
  User,
  LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavItemType {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface NavItemProps {
  item: NavItemType;
  isSubItem?: boolean;
}

const MAIN_NAV_ITEMS: NavItemType[] = [
  { name: "Overview", icon: LayoutGrid, href: "/vendor/dashboard" },
];

const BUSINESS_SUB_ITEMS: NavItemType[] = [
  { name: "Leads", icon: Mail, href: "/vendor/dashboard/leads" },
  { name: "My Packages", icon: Package, href: "/vendor/dashboard/packages" },
  { name: "All Jobs", icon: Briefcase, href: "/vendor/dashboard/jobs" },
  { name: "Bookings", icon: Calendar, href: "/vendor/dashboard/bookings" },
];

const INSIGHTS_SUB_ITEMS: NavItemType[] = [
  { name: "Reviews", icon: Star, href: "/vendor/dashboard/reviews" },
  { name: "Analytics", icon: BarChart3, href: "/vendor/dashboard/analytics" },
  { name: "Boost Visibility", icon: TrendingUp, href: "/vendor/dashboard/boost" },
];

const ACCOUNT_SUB_ITEMS: NavItemType[] = [
  { name: "Promote", icon: TrendingUp, href: "/vendor/dashboard/promote" },
  { name: "Profile", icon: User, href: "/vendor/dashboard/profile" },
  { name: "Settings", icon: Settings, href: "/vendor/dashboard/settings" },
];

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}) => {
  const pathname = usePathname();
  
  const isBusinessPath = ["leads", "packages", "jobs", "bookings"].some(p => pathname.includes(`/vendor/dashboard/${p}`));
  const isInsightsPath = ["reviews", "analytics", "boost"].some(p => pathname.includes(`/vendor/dashboard/${p}`));
  const isAccountPath = ["billing", "profile", "settings"].some(p => pathname.includes(`/vendor/dashboard/${p}`));

  const [isBusinessOpen, setIsBusinessOpen] = useState<boolean>(isBusinessPath || true);
  const [isInsightsOpen, setIsInsightsOpen] = useState<boolean>(isInsightsPath || true);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(isAccountPath || true);

  // Auto-expand sections when navigating to them, without using useEffect to avoid cascading renders
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isBusinessPath) setIsBusinessOpen(true);
    if (isInsightsPath) setIsInsightsOpen(true);
    if (isAccountPath) setIsAccountOpen(true);
  }

  useEffect(() => {
    // Close sidebar on mobile when pathname changes
    setIsSidebarOpen(false);
  }, [pathname, setIsSidebarOpen]);

  const handleLogout = () => {
    console.log("Logged out");
  };

  const NavItem = ({ item, isSubItem = false }: NavItemProps) => {
    const isActive = pathname === item.href;
    
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center justify-start p-2 rounded-sm text-sm font-medium transition-colors duration-200",
          isActive
            ? "bg-primary text-primary-foreground"
            : "hover:bg-accent hover:text-accent-foreground",
          isSubItem && "w-[90%] ml-5"
        )}
      >
        <div className="flex items-center text-sm px-2">
          <item.icon className="mr-2 h-4 w-4" />
          {item.name}
        </div>
      </Link>
    );
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-sidebar w-64 transition-transform duration-300 ease-in-out transform flex flex-col border-r",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0"
      )}
    >
      {/* Brand */}
      <div className="flex flex-col items-start justify-center pl-8 border-b h-20">
        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/logo-2.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Main Navigation */}
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
          {MAIN_NAV_ITEMS.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}

          {/* Business group */}
          <Collapsible
            open={isBusinessOpen}
            onOpenChange={setIsBusinessOpen}
          >
            <CollapsibleTrigger
              className={cn(
                "w-full mb-2 flex items-center justify-between p-2 rounded-sm text-base font-medium cursor-pointer transition-colors duration-200",
                isBusinessPath
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <div className="flex items-center text-sm px-2">
                <Briefcase className="mr-2 h-4 w-4" />
                Business
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isBusinessOpen && "-rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              {BUSINESS_SUB_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} isSubItem />
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Insights group */}
          <Collapsible
            open={isInsightsOpen}
            onOpenChange={setIsInsightsOpen}
          >
            <CollapsibleTrigger
              className={cn(
                "w-full mb-2 flex items-center justify-between p-2 rounded-sm text-base font-medium cursor-pointer transition-colors duration-200",
                isInsightsPath
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <div className="flex items-center text-sm px-2">
                <BarChart3 className="mr-2 h-4 w-4" />
                Insights
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isInsightsOpen && "-rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              {INSIGHTS_SUB_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} isSubItem />
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Account group */}
          <Collapsible open={isAccountOpen} onOpenChange={setIsAccountOpen}>
            <CollapsibleTrigger
              className={cn(
                "w-full mb-2 flex items-center justify-between p-2 rounded-sm text-base font-medium cursor-pointer transition-colors duration-200",
                isAccountPath
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <div className="flex items-center text-sm px-2">
                <User className="mr-2 h-4 w-4" />
                Account
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isAccountOpen && "-rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              {ACCOUNT_SUB_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} isSubItem />
              ))}
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </ScrollArea>

      {/* Logout Button */}
      <div className="border-t p-4">
        <Button
          variant="outline"
          className="justify-start w-full text-primary"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
