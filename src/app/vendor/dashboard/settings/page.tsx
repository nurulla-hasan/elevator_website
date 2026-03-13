import DashboardHeader from "@/components/ui/custom/dashboard-header";
import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  DollarSign,
  Tag,
  Camera,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { SettingsBusinessInfoForm } from "@/components/vendor/dashboard/settings/settings-business-info-form";
import { SettingsPricingPackagesForm } from "@/components/vendor/dashboard/settings/settings-pricing-packages-form";
import { SettingsServicesForm } from "@/components/vendor/dashboard/settings/settings-services-form";
import { SettingsPortfolioForm } from "@/components/vendor/dashboard/settings/settings-portfolio-form";
import { SettingsSponsoredAds } from "@/components/vendor/dashboard/settings/settings-sponsored-ads";
import { SettingsAvailability } from "@/components/vendor/dashboard/settings/settings-availability";
import { TSearchParams } from "@/types/global.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const SETTINGS_TABS = [
  {
    value: "business",
    label: "Business Info",
    icon: Globe,
    component: SettingsBusinessInfoForm,
  },
  {
    value: "pricing",
    label: "Pricing & Packages",
    icon: DollarSign,
    component: SettingsPricingPackagesForm,
  },
  {
    value: "services",
    label: "Services",
    icon: Tag,
    component: SettingsServicesForm,
  },
  {
    value: "portfolio",
    label: "Portfolio",
    icon: Camera,
    component: SettingsPortfolioForm,
  },
  {
    value: "availability",
    label: "Availability",
    icon: Calendar,
    component: SettingsAvailability,
  },
  {
    value: "sponsored",
    label: "Sponsored Ads",
    icon: TrendingUp,
    component: SettingsSponsoredAds,
  },
];

interface PageProps {
  searchParams: TSearchParams;
}

export default async function SettingsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const activeTab = (params.tab as string) || "business";

  return (
    <DashboardPageLayout>
      <DashboardHeader
        title="Settings"
        description="Manage your account settings and preferences."
      />

      <Tabs value={activeTab}>
        <ScrollArea className="w-[calc(100vw-40px)]">
          <TabsList variant="line" className="w-full justify-start">
            {SETTINGS_TABS.map((tab) => (
              <Link key={tab.value} href={`?tab=${tab.value}`} scroll={false}>
                <TabsTrigger value={tab.value} className="rounded-none whitespace-nowrap">
                  <tab.icon />
                  {tab.label}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="mt-8">
          {SETTINGS_TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <tab.component />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </DashboardPageLayout>
  );
}
