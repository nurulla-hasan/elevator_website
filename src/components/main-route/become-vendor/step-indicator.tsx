import React from "react";
import { Check, User, Image, FileText, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: "Business Details", icon: User },
  { id: 2, name: "Portfolio", icon: Image },
  { id: 3, name: "Review", icon: FileText },
  { id: 4, name: "Success", icon: CheckCircle, hidden: true },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const visibleSteps = steps.filter((step) => !step.hidden);

  return (
    <div className="mx-auto max-w-2xl w-full mb-8">
      <div className="relative flex justify-between items-center px-4">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 -z-10 transition-all duration-300" 
          style={{ width: `${Math.min(((currentStep - 1) / (visibleSteps.length - 1)) * 100, 100)}%` }}
        />

        {visibleSteps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 bg-background transition-colors duration-300 shadow-sm",
                  isCompleted ? "bg-primary border-primary text-primary-foreground" :
                  isActive ? "border-primary text-primary" : "border-muted-foreground text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <span 
                className={cn(
                  "text-[10px] sm:text-xs font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
