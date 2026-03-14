"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function NeedHelpChoosing() {
  return (
    <Card className="bg-primary overflow-hidden">
      <CardContent className="text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-white">Need Help Choosing?</h3>
          <p className="text-white/80 text-sm font-normal max-w-lg mx-auto leading-relaxed">
            Our team can help you select the best promotion plan for your business
          </p>
        </div>
        
        <Button 
          variant="secondary" 
        >
          Contact Support <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
