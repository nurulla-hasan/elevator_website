import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JobStatProps {
  label: string;
  value: string | number;
  valueColor: string;
}

const JobStat = ({ label, value, valueColor }: JobStatProps) => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {label}
          </span>
          <span className={cn("text-3xl font-bold", valueColor)}>
            {value}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function JobStats() {
  const stats = [
    {
      label: "Total Jobs",
      value: "8",
      valueColor: "text-pink-600",
    },
    {
      label: "New Requests",
      value: "3",
      valueColor: "text-blue-600",
    },
    {
      label: "Accepted",
      value: "2",
      valueColor: "text-green-600",
    },
    {
      label: "In Progress",
      value: "1",
      valueColor: "text-amber-600",
    },
    {
      label: "Completed",
      value: "1",
      valueColor: "text-slate-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <JobStat key={stat.label} {...stat} />
      ))}
    </div>
  );
}
