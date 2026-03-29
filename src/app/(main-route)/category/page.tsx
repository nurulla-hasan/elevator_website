import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import { SearchInput } from "@/components/ui/custom/search-input";
import { TSearchParams } from "@/types/global.types";
import { Suspense } from "react";
import CategoryCard from "@/components/main-route/category/category-card";
import { categories } from "@/data/categories.data";
import Link from "next/link";

export default async function CategoryPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const params = await searchParams;
  const search = (params?.searchTerm as string) || "";

  const filteredCategories = categories.filter((category) => {
    const mainMatches = category.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const subMatches = category.subcategories?.some((sub) =>
      sub.name.toLowerCase().includes(search.toLowerCase()),
    );
    return mainMatches || subMatches;
  });

  const standaloneCategories = filteredCategories.filter(
    (cat) => !cat.subcategories || cat.subcategories.length === 0,
  );
  const groupedCategories = filteredCategories.filter(
    (cat) => cat.subcategories && cat.subcategories.length > 0,
  );

  return (
    <PageLayout paddingSize="small" className="min-h-screen">
      <div className="space-y-6">
        <CustomBreadcrumb
          links={[
            { name: "Home", href: "/" },
            { name: "Categories", href: "/category", isCurrent: true },
          ]}
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 ">
          <PageHeader
            title="Browse by Category"
            description="Find the perfect vendors for every part of your wedding"
          />
          <Suspense fallback={<div>Loading...</div>}>
            <SearchInput placeholder="Search categories..." />
          </Suspense>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Sidebar Navigation - Sticky on Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Quick Navigation
                </h3>
                <nav className="flex flex-col gap-1">
                  {standaloneCategories.length > 0 && (
                    <Link
                      href="#all-categories"
                      className="text-sm font-medium py-2 px-3 rounded-md hover:bg-primary/20 hover:pl-5 transition-all duration-300"
                    >
                      Main Categories
                    </Link>
                  )}
                  {groupedCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`#${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-medium py-2 px-3 rounded-md hover:bg-primary/20 hover:pl-5 transition-all duration-300 flex items-center gap-2"
                    >
                      <span>{cat.emoji}</span>
                      {cat.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-20">
            {/* Standalone Categories Section */}
            {standaloneCategories.length > 0 && (
              <section
                id="all-categories"
                className="scroll-mt-28 space-y-10 animate-fade-in-up"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-xl md:text-2xl font-medium text-foreground shrink-0 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full hidden md:block" />
                    Main Categories
                  </h2>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
                  {standaloneCategories.map((category) => (
                    <CategoryCard key={category.name} {...category} />
                  ))}
                </div>
              </section>
            )}

            {/* Grouped Categories Sections */}
            {groupedCategories.map((category) => (
              <section
                key={category.name}
                id={category.name.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-28 space-y-10 animate-fade-in-up"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-xl md:text-2xl font-medium text-foreground shrink-0 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full hidden md:block" />
                    {category.name}
                  </h2>
                  <div className="h-px flex-1 bg-border/60" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
                  {category.subcategories?.map((sub) => (
                    <CategoryCard key={sub.name} {...sub} />
                  ))}
                </div>
              </section>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                <p className="text-muted-foreground font-medium">
                  No categories found matching &quot;{search}&quot;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
