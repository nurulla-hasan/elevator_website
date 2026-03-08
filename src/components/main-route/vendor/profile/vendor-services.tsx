import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface VendorServicesProps {
  services: string[];
}

export const VendorServices = ({ services }: VendorServicesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">Services Offered</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Check size={14} className="text-primary" />
            </div>
            <span className="text-muted-foreground font-medium">{service}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
