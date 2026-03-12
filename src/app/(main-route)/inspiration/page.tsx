"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, PhoneCall } from "lucide-react";
import PageLayout from "@/components/ui/custom/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { inspirationItems } from "@/data/inspiration.data";

import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import { SearchInput } from "@/components/ui/custom/search-input";

export default function InspirationPage() {
  return (
    <PageLayout paddingSize="small">
      <div className="space-y-6">
        <CustomBreadcrumb
          links={[
            { name: "Home", href: "/" },
            { name: "Inspiration", isCurrent: true },
          ]}
        />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <PageHeader
            title="Inspiration and Ideas"
            description="Explore unique wedding ideas and connect with the vendors who bring them to life. Get inspired for your big day."
          />
          <SearchInput placeholder="Search for inspiration..." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {inspirationItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group pt-0 h-full flex flex-col"
            >
              <div className="relative aspect-5/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {item.price}
                </div>
              </div>
              <CardContent className="flex flex-col flex-1 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                      By
                    </span>
                    <span className="text-xs font-medium text-primary hover:underline cursor-pointer">
                      {item.vendorName}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs font-medium border-primary/20 hover:bg-primary/5 gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Contact Vendor
                  </Button>
                  <Button
                    size="sm"
                    className="w-full text-xs font-medium gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Contact WePlan Advisor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
