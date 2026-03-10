"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";

export default function AddPackageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [features, setFeatures] = useState(["", "", ""]);
  const [hasCatering, setHasCatering] = useState(false);

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleClose = () => setIsOpen(false);

  return (
    <ModalWrapper
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Add New Package"
      description="Add a new package to your catalog"
      actionTrigger={
        <Button>
          <Plus />
          Add Package
        </Button>
      }
    >
      <ScrollArea className="max-h-[80vh]">
        <div className="p-6 space-y-6">
          {/* Package Image */}
          <div className="space-y-2">
            <Label>Package Image</Label>
            <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-2 bg-muted/5 cursor-pointer hover:bg-muted/10 transition-colors">
              <Upload className="h-10 w-10 text-muted-foreground" />
              <div className="text-sm font-medium">Click to upload or drag and drop</div>
              <div className="text-xs text-muted-foreground text-center">
                PNG, JPG or WEBP (max. 5MB)
              </div>
            </div>
          </div>

          {/* Package Title */}
          <div className="space-y-2">
            <Label>Package Title</Label>
            <Input placeholder="e.g., Premium Wedding Package" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea 
              placeholder="Detailed description of your package..." 
              className="min-h-30"
            />
          </div>

          {/* Price & Event Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Price ($)</Label>
              <Input type="number" defaultValue={0} />
            </div>
            <div className="space-y-2">
              <Label>Event Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selected" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Catering Services */}
          <div className="flex items-center space-x-2 p-4 bg-muted/10 border rounded-lg">
            <Checkbox 
              id="catering" 
              checked={hasCatering}
              onCheckedChange={(checked) => setHasCatering(checked as boolean)}
            />
            <Label htmlFor="catering">
              Includes Catering Services
            </Label>
          </div>

          {hasCatering && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
              <div className="space-y-2">
                <Label>Price Per Head ($)</Label>
                <Input type="number" defaultValue={0} />
                <p className="text-[10px] text-muted-foreground">Leave empty if not applicable</p>
              </div>
              <div className="space-y-2">
                <Label>Menu Options</Label>
                <Input placeholder="e.g., Continental, Indian, Chinese" />
                <p className="text-[10px] text-muted-foreground">Separate with commas</p>
              </div>
            </div>
          )}

          {/* Package Features */}
          <div className="space-y-3">
            <Label>Package Features</Label>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input 
                    placeholder={`Feature ${index + 1}`} 
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[index] = e.target.value;
                      setFeatures(newFeatures);
                    }}
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => removeFeature(index)}
                    className="shrink-0"
                  >
                    <X className="text-destructive" />
                  </Button>
                </div>
              ))}
              <Button 
                variant="outline" 
                onClick={addFeature}
                className="w-full"
              >
                <Plus />
                Add Feature
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose}>
              Add Package
            </Button>
          </div>
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
}
