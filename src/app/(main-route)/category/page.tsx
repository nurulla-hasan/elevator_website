import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { SearchInput } from "@/components/ui/custom/search-input";
import { TSearchParams } from "@/types/global.types";

const allCategories = [
  { name: "Photographers", count: "245", emoji: "📷" },
  { name: "Venues", count: "189", emoji: "🏛️" },
  { name: "Caterers", count: "312", emoji: "🍴" },
  { name: "Decorators", count: "156", emoji: "🎨" },
  { name: "Makeup Artists", count: "278", emoji: "💄" },
  { name: "DJ & Music", count: "134", emoji: "🎵" },
  { name: "Videographers", count: "198", emoji: "🎥" },
  { name: "Florists", count: "167", emoji: "💐" },
  { name: "Wedding Planners", count: "95", emoji: "📅" },
  { name: "Jewelry", count: "142", emoji: "💎" },
  { name: "Bridal Wear", count: "215", emoji: "👗" },
  { name: "Transport", count: "78", emoji: "🚗" },
  { name: "Invitations", count: "112", emoji: "💌" },
  { name: "Cakes", count: "86", emoji: "🎂" },
  { name: "Mehndi Artists", count: "154", emoji: "🌿" },
  { name: "Groom Wear", count: "98", emoji: "🤵" },
  { name: "Honeymoon", count: "45", emoji: "✈️" },
  { name: "Gift Items", count: "123", emoji: "🎁" },
  { name: "Sound & Lighting", count: "67", emoji: "💡" },
  { name: "Wedding Cards", count: "89", emoji: "🧧" },
  { name: "Security", count: "34", emoji: "🛡️" },
  { name: "Valet Parking", count: "28", emoji: "🅿️" },
  { name: "Pandit/Kazi", count: "56", emoji: "📜" },
  { name: "Fireworks", count: "22", emoji: "🎆" },
];

export default async function CategoryPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const params = await searchParams;
  const search = (params?.searchTerm as string) || "";

  const filteredCategories = allCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageLayout paddingSize="small" className="min-h-screen">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/category", isCurrent: true },
        ]}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <PageHeader
          title="Wedding Categories"
          description="Find the perfect vendors and services for every aspect of your big day."
        />
        <SearchInput
          placeholder="Search categories..."
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {filteredCategories.map((category) => (
          <Link
            key={category.name}
            href={`/vendors/?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <Card className="group cursor-pointer transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 rounded-2xl overflow-hidden h-full">
              <CardContent className="flex flex-col items-center justify-center text-center h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">{category.emoji}</span>
                </div>

                <h3 className="mb-1 text-sm font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                  {category.name}
                </h3>

                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                  {category.count} Vendors
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No categories found matching your search.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
