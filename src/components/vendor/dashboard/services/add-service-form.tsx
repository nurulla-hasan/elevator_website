"use client";

import { useEffect, useState } from "react";
import { 
  AlertCircle, 
  RotateCcw, 
  Save, 
  X,
  Check,
  Upload,
  Calendar as CalendarIcon,
  MapPin,
  Info
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Mock Data
const EVENT_TYPES = [
  "Wedding", "Reception", "Birthday", "Corporate", "Engagement", "Holud", "Seminar", "Exhibition"
];

const PRICE_TYPES = [
  "Fixed", "Starting From", "Per Hour", "Per Event"
];

const SERVICE_CATEGORIES = [
  "Photography", "Videography", "Venue", "Catering", "Decoration", "Makeup Artist", "Music & DJ", "Event Planner"
];

const FEATURES_BY_CATEGORY: Record<string, Array<{ id: string; name: string; placeholder: string }>> = {
  "Photography": [
    { id: "p1", name: "Camera Equipment", placeholder: "e.g. Sony A7IV, 24-70mm Lens" },
    { id: "p2", name: "Post Processing", placeholder: "e.g. Color correction, Retouching" },
    { id: "p3", name: "Delivery Time", placeholder: "e.g. 7-10 working days" },
    { id: "p4", name: "Online Gallery", placeholder: "e.g. Google Drive, Pixieset link" },
    { id: "p5", name: "Backup Support", placeholder: "e.g. 2nd photographer, backup gear" },
  ],
  "Catering": [
    { id: "c1", name: "Menu Options", placeholder: "e.g. Kacchi, Roast, Salad, Dessert" },
    { id: "c2", name: "Service Staff", placeholder: "e.g. 10 waiters, 2 supervisors" },
    { id: "c3", name: "Cutlery & Crockery", placeholder: "e.g. Ceramic plates, Glassware" },
    { id: "c4", name: "Live Counter", placeholder: "e.g. Live Pasta or BBQ station" },
  ],
  "Venue": [
    { id: "v1", name: "Capacity", placeholder: "e.g. Up to 500 guests" },
    { id: "v2", name: "Air Conditioning", placeholder: "e.g. Central AC or non-AC" },
    { id: "v3", name: "Parking Space", placeholder: "e.g. Space for 50 cars" },
    { id: "v4", name: "Generator Backup", placeholder: "e.g. Full load generator" },
  ],
  "Videography": [
    { id: "vg1", name: "Video Resolution", placeholder: "e.g. 4K 60fps, 10-bit color" },
    { id: "vg2", name: "Editing Style", placeholder: "e.g. Cinematic highlights, full documentary" },
    { id: "vg3", name: "Audio Recording", placeholder: "e.g. External mic, Zoom recorder" },
  ],
  "Decoration": [
    { id: "d1", name: "Theme Style", placeholder: "e.g. Floral, Rustic, Minimalist" },
    { id: "d2", name: "Lighting", placeholder: "e.g. Fairy lights, Chandeliers" },
    { id: "d3", name: "Stage Setup", placeholder: "e.g. Custom wooden stage" },
  ],
  "Makeup Artist": [
    { id: "m1", name: "Products Used", placeholder: "e.g. MAC, Estee Lauder, Huda Beauty" },
    { id: "m2", name: "Trial Session", placeholder: "e.g. Available on request" },
    { id: "m3", name: "Home Service", placeholder: "e.g. Available across Dhaka" },
  ],
  "Music & DJ": [
    { id: "mu1", name: "Sound System", placeholder: "e.g. JBL, Bose setup" },
    { id: "mu2", name: "Music Genre", placeholder: "e.g. EDM, Bollywood, Retro" },
    { id: "mu3", name: "Special Effects", placeholder: "e.g. Fog machine, Laser lights" },
  ],
  "Event Planner": [
    { id: "ep1", name: "Management Scope", placeholder: "e.g. Full event management or consultation" },
    { id: "ep2", name: "Vendor Coordination", placeholder: "e.g. Handling all vendors" },
  ]
};

export function AddServiceForm() {
  // Global State
  const [serviceTitle, setServiceTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);
  const [priceType, setPriceType] = useState("");
  const [price, setPrice] = useState("");
  const [isAcrossCity, setIsAcrossCity] = useState(false);
  const [area, setArea] = useState("");
  const [policies, setPolicies] = useState("");
  const [availableDates, setAvailableDates] = useState<Date[] | undefined>([]);
  
  // Integrated Features State (Array of IDs)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Get dynamic features based on category
  const coreFeatures = category ? FEATURES_BY_CATEGORY[category] || [] : [];

  // Reset features when category changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedFeatures([]);
  }, [category]);

  const toggleEventType = (type: string) => {
    setSelectedEventTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setServiceTitle("");
    setCategory("");
    setDescription("");
    setSelectedEventTypes([]);
    setPriceType("");
    setPrice("");
    setIsAcrossCity(false);
    setArea("");
    setPolicies("");
    setAvailableDates([]);
    setSelectedFeatures([]);
  };

  const handleSubmit = () => {
    const formData = {
      serviceTitle,
      category,
      description,
      selectedEventTypes,
      priceDetails: { type: priceType, amount: price },
      location: { isAcrossCity, area },
      policies,
      availability: availableDates,
      features: selectedFeatures
    };
    console.log("Final Form Data:", formData);
    alert("Service listing created successfully!");
  };

  const isFormValid = serviceTitle && category && priceType && price && selectedEventTypes.length > 0;

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>List Your Service</CardTitle>
        <CardDescription>Complete the global fields and specific features for your service.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-10">
          {/* Section 1: Service Overview */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-2 border-b">
              <Info className="size-5 text-primary" />
              <h3 className="text-lg">Service Overview</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="serviceTitle">Service Title <span className="text-destructive">*</span></Label>
                <Input 
                  id="serviceTitle" 
                  placeholder="e.g. Professional Wedding Photography" 
                  value={serviceTitle}
                  onChange={(e) => setServiceTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category <span className="text-destructive">*</span></Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="priceType">Price Type <span className="text-destructive">*</span></Label>
                <Select value={priceType} onValueChange={setPriceType}>
                  <SelectTrigger id="priceType">
                    <SelectValue placeholder="Select Price Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRICE_TYPES.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Base Price (৳) <span className="text-destructive">*</span></Label>
                <Input 
                  id="price" 
                  type="number" 
                  placeholder="0.00" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Suitable for Event Types <span className="text-destructive">*</span></Label>
              <div className="flex flex-wrap gap-2">
                {EVENT_TYPES.map(type => (
                  <Badge 
                    key={type}
                    variant={selectedEventTypes.includes(type) ? "default" : "secondary"}
                    className="cursor-pointer px-4 py-1.5 transition-all"
                    onClick={() => toggleEventType(type)}
                  >
                    {type}
                    {selectedEventTypes.includes(type) && <X className="size-3 ml-2" />}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description">About the Service <span className="text-destructive">*</span></Label>
              <Textarea 
                id="description" 
                placeholder="Briefly describe what you offer..." 
                className="min-h-24"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Section 2: Core Features */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-2 border-b">
              <Save className="size-5 text-primary" />
              <h3 className="text-lg">Core Features</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {!category ? (
                <div className="p-8 border border-dashed text-center bg-muted/50">
                  <p className="text-sm text-muted-foreground">Select a category above to see features.</p>
                </div>
              ) : coreFeatures.length === 0 ? (
                <div className="p-8 border border-dashed text-center bg-muted/50">
                  <p className="text-sm text-muted-foreground">No specific features for this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coreFeatures.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <div 
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={cn(
                          "flex items-center gap-3 p-4 border transition-all cursor-pointer",
                          isSelected 
                            ? "border-primary bg-primary/5" 
                            : "bg-card border-border"
                        )}
                      >
                        <div className={cn(
                          "size-5 rounded-full border flex items-center justify-center transition-colors shrink-0",
                          isSelected ? "bg-primary border-primary text-white" : "border-muted-foreground/30"
                        )}>
                          {isSelected && <Check className="size-3 stroke-3" />}
                        </div>
                        <Label className="flex-1 cursor-pointer text-base leading-none">
                          {feature.name}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Logistics & Media */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-2 border-b">
              <MapPin className="size-5 text-primary" />
              <h3 className="text-lg">Logistics & Media</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <Label>Service Location</Label>
                  <div className="flex items-center space-x-2 p-3 border">
                    <Checkbox 
                      id="acrossCity" 
                      checked={isAcrossCity}
                      onCheckedChange={(checked) => setIsAcrossCity(checked as boolean)}
                    />
                    <Label htmlFor="acrossCity" className="cursor-pointer">Available across entire city</Label>
                  </div>
                  {!isAcrossCity && (
                    <Input id="area" placeholder="Specific area (e.g. Dhanmondi)" value={area} onChange={(e) => setArea(e.target.value)} />
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Availability & Dates</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {availableDates && availableDates.length > 0 ? `${availableDates.length} dates selected` : <span>Select dates</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="multiple" selected={availableDates} onSelect={setAvailableDates} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label>Portfolio Images</Label>
                  <div className="border-2 border-dashed p-6 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-accent cursor-pointer transition-colors">
                    <Upload className="size-6" />
                    <span className="text-xs font-medium">Click to upload (Max 10)</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Label htmlFor="policies">Policies & Terms</Label>
                  <Textarea 
                    id="policies" 
                    placeholder="Cancellation rules, terms..." 
                    className="min-h-24"
                    value={policies}
                    onChange={(e) => setPolicies(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pt-6 border-t">
            {!isFormValid && (
              <div className="flex items-center gap-2 text-xs text-destructive font-medium bg-destructive/10 p-3 rounded-md border border-destructive/20">
                <AlertCircle className="size-4 shrink-0" />
                <p>Please fill required fields: Title, Category, Description, Event Types, Price Type, and Price.</p>
              </div>
            )}
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" onClick={handleReset}>
                <RotateCcw className="size-4 mr-2" />
                Reset Form
              </Button>
              <Button className="flex-1" disabled={!isFormValid} onClick={handleSubmit}>
                <Save className="size-4 mr-2" />
                Publish Service
              </Button>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}