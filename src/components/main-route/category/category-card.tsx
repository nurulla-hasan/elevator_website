import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  count: string;
  emoji: string;
}

export default function CategoryCard({ name, count, emoji }: CategoryCardProps) {
  return (
    <Link href={`/vendors?category=${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="group cursor-pointer transition-all duration-300 border-none overflow-hidden hover:bg-primary">
        <CardContent className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
            <span className="text-3xl group-hover:filter group-hover:drop-shadow-sm">
              {emoji}
            </span>
          </div>

          <h3 className="mb-1 text-sm font-bold group-hover:text-primary-foreground transition-colors duration-300 line-clamp-1">
            {name}
          </h3>

          <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
            {count} Vendors
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}