"use client";

import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface ProfileCompletionScoreProps {
  score: number;
}

export function ProfileCompletionScore({ score }: ProfileCompletionScoreProps) {
  const getStatusColor = (value: number) => {
    if (value < 40) return "text-destructive bg-destructive/10 border-destructive/20";
    if (value < 80) return "text-warning bg-warning/10 border-warning/20";
    return "text-success bg-success/10 border-success/20";
  };

//   const missingItems = [
//     { label: "Business Portfolio Images", weight: 20, completed: false },
//     { label: "Detailed Service Pricing", weight: 15, completed: true },
//     { label: "Verified Business Address", weight: 25, completed: true },
//     { label: "Social Media Links", weight: 10, completed: false },
//   ];

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Score Circle/Display */}
          <div className="flex flex-col items-center justify-center space-y-2 shrink-0">
            <div className="relative flex items-center justify-center">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-muted/20"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * score) / 100}
                  className={cn("transition-all duration-1000 ease-out", 
                    score < 40 ? "text-destructive" : score < 80 ? "text-warning" : "text-success"
                  )}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold tracking-tight">{score}%</span>
              </div>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Completion
            </span>
          </div>

          {/* Details & Progress */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Profile Visibility Score
                </h4>
                <p className="text-sm text-muted-foreground">
                  Complete your profile to increase your visibility by up to <span className="text-primary font-bold">5x</span>.
                </p>
              </div>
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-bold border w-fit",
                getStatusColor(score)
              )}>
                {score < 40 ? "Needs Work" : score < 80 ? "Getting There" : "Excellent"}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>Profile Strength</span>
                <span>{score}% / 100%</span>
              </div>
              <Progress value={score} className="h-2" />
            </div>

            {/* Recommendations */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {missingItems.filter(item => !item.completed).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs bg-background/50 p-2 rounded-md border border-border/50">
                  <AlertCircle className="h-3.5 w-3.5 text-warning shrink-0" />
                  <span className="flex-1">Add <span className="font-semibold">{item.label}</span></span>
                  <span className="text-success font-bold">+{item.weight}%</span>
                </div>
              ))}
              {score >= 100 && (
                <div className="col-span-full flex items-center gap-2 text-xs bg-success/10 p-2 rounded-md border border-success/20 text-success">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Your profile is fully optimized for maximum visibility!</span>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
