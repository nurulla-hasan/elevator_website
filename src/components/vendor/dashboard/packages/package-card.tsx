"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  packageData: {
    id: string;
    title: string;
    type: string;
    price: number;
    description: string;
    services: string[];
  };
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function PackageCard({ packageData, onEdit, onDelete }: PackageCardProps) {
  const { title, type, price, description, services } = packageData;

  return (
    <Card className="flex flex-col h-full group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant="outline" 
            className={cn(
              "uppercase",
              type.toLowerCase() === 'basic' && "bg-blue-50 text-blue-600 border-blue-200",
              type.toLowerCase() === 'standard' && "bg-purple-50 text-purple-600 border-purple-200",
              type.toLowerCase() === 'premium' && "bg-amber-50 text-amber-600 border-amber-200"
            )}
          >
            {type}
          </Badge>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onEdit?.(packageData.id)}
            >
              <Edit />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onDelete?.(packageData.id)}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
        <h3 className="text-xl font-bold leading-tight">{title}</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-2xl font-black text-primary">${price}</span>
          <span className="text-xs text-muted-foreground">/ package</span>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
          {description}
        </p>
        
        <div className="space-y-3">
          <p className="text-[10px] font-bold text-foreground/40 uppercase">Included Services</p>
          <ul className="grid grid-cols-1 gap-2">
            {services.slice(0, 4).map((service, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="shrink-0 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="line-clamp-1">{service}</span>
              </li>
            ))}
            {services.length > 4 && (
              <li className="text-xs text-muted-foreground font-medium italic">
                + {services.length - 4} more services
              </li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
