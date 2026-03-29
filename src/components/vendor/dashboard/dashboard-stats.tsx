import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string | number;
}

const StatsCard = ({ label, value }: StatsCardProps) => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-semibold text-primary">{value}</span>
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function DashboardStats() {
  const stats = [
    { label: "Leads", value: "142" },
    { label: "Quote", value: "17" },
    { label: "Confirm", value: "21" },
    { label: "Rating", value: "31" },
    { label: "View", value: "142K" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <StatsCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
}
