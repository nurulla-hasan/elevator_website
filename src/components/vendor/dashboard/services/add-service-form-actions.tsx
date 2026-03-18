"use client";

import { RotateCcw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

type AddServiceFormActionsProps = {
  onReset: () => void;
};

export function AddServiceFormActions({ onReset }: AddServiceFormActionsProps) {
  return (
    <div className="flex gap-4 border-t pt-6">
      <Button type="button" variant="outline" className="flex-1" onClick={onReset}>
        <RotateCcw className="mr-2 size-4" />
        Reset Form
      </Button>
      <Button type="submit" className="flex-1">
        <Save className="mr-2 size-4" />
        Publish Service
      </Button>
    </div>
  );
}
