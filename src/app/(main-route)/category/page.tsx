import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import { SearchInput } from "@/components/ui/custom/search-input";
import { TSearchParams } from "@/types/global.types";
import { Suspense } from "react";
import CategoryCard from "@/components/main-route/category/category-card";
import { categories } from "@/data/categories.data";

export default async function CategoryPage({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const params = await searchParams;
  const search = (params?.searchTerm as string) || "";

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase()),
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
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput placeholder="Search categories..." />
        </Suspense>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {filteredCategories.map((category) => (
          <CategoryCard key={category.name} {...category} />
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
