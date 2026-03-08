import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  name: string;
  count: string;
  emoji: string;
  image?: string; // Add optional image property
}

export default function CategoryCard({ name, count, image }: CategoryCardProps) {
  // Using a representative placeholder if no image is provided.
  const displayImage = image || `https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&h=400&auto=format&fit=crop`;

  return (
    <Link 
      href={`/vendors?category=${name.toLowerCase().replace(/\s+/g, "-")}`} 
      className="group block w-full transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Image Container with Rounded Corners as per reference */}
        <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-muted shadow-sm group-hover:shadow-md transition-all duration-300">
          <Image
            src={displayImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
          />
          {/* Subtle Pink Overlay on Hover to match Monet Theme */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Category Info */}
        <div className="text-center px-1">
          <h3 className="text-sm md:text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary leading-tight">
            {name}
          </h3>
          <p className="text-[10px] md:text-[11px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5">
            {count} Vendors
          </p>
        </div>
      </div>
    </Link>
  );
}
