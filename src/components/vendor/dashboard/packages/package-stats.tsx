import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageStatProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const PackageStat = ({ label, value, icon, iconBg, iconColor }: PackageStatProps) => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
          <span className="text-3xl font-semibold text-primary">
            {value}
          </span>
        </div>
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg", iconBg)}>
          <div className={iconColor}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PackageStats() {
  const stats = [
    {
      label: "Total Packages",
      value: "5",
      icon: <DollarSign className="h-6 w-6" />,
      iconBg: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      label: "Active Packages",
      value: "4",
      icon: <Eye className="h-6 w-6" />,
      iconBg: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-500 dark:text-green-400",
    },
    {
      label: "Total Bookings",
      value: "233",
      icon: <DollarSign className="h-6 w-6" />,
      iconBg: "bg-pink-50 dark:bg-pink-950/30",
      iconColor: "text-pink-500 dark:text-pink-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <PackageStat key={stat.label} {...stat} />
      ))}
    </div>
  );
}
