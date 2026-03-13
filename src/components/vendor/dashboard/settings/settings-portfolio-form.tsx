"use client";

import { ImagePlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SettingsPortfolioForm() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary font-medium">Portfolio Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-muted p-4 rounded-full">
              <ImagePlus className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">Upload Portfolio Images</p>
              <p className="text-sm text-muted-foreground">Add high-quality images of your previous work</p>
            </div>
            <Button variant="default" className="px-8">
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50/50 border-blue-100 shadow-none">
        <CardContent className="pt-6 space-y-4">
          <p className="text-blue-900 font-medium text-lg">Portfolio Guidelines:</p>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-blue-600 rounded-full" />
              Upload high-quality images (minimum 1200x800px)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-blue-600 rounded-full" />
              Add at least 10-15 photos to showcase your work
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-blue-600 rounded-full" />
              Show variety in your portfolio
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-blue-600 rounded-full" />
              Keep your portfolio updated with recent work
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
