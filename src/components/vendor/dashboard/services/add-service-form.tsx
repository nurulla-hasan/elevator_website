"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Save, 
  RotateCcw, 
  Plus, 
  X, 
  Sparkles, 
  Check, 
  AlertCircle,
  Search
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
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ============================================
// Mock Data - Replace with API calls later
// ============================================

const CATEGORIES = [
  { id: "1", name: "Photography", slug: "photography" },
  { id: "2", name: "Catering", slug: "catering" },
  { id: "3", name: "Decoration", slug: "decoration" },
  { id: "4", name: "Venue", slug: "venue" },
  { id: "5", name: "Makeup Artist", slug: "makeup" },
];

const SUBCATEGORIES: Record<string, Array<{ id: string; name: string; slug: string }>> = {
  photography: [
    { id: "1", name: "Wedding Photography", slug: "wedding-photography" },
    { id: "2", name: "Portrait Photography", slug: "portrait-photography" },
    { id: "3", name: "Event Photography", slug: "event-photography" },
  ],
  catering: [
    { id: "4", name: "Wedding Catering", slug: "wedding-catering" },
    { id: "5", name: "Corporate Catering", slug: "corporate-catering" },
    { id: "6", name: "Birthday Party Catering", slug: "birthday-catering" },
  ],
  decoration: [
    { id: "7", name: "Wedding Decoration", slug: "wedding-decoration" },
    { id: "8", name: "Birthday Decoration", slug: "birthday-decoration" },
  ],
  venue: [
    { id: "9", name: "Wedding Venue", slug: "wedding-venue" },
    { id: "10", name: "Corporate Event Venue", slug: "corporate-venue" },
  ],
  makeup: [
    { id: "11", name: "Bridal Makeup", slug: "bridal-makeup" },
    { id: "12", name: "Party Makeup", slug: "party-makeup" },
  ],
};

// Standard features based on subcategory
const STANDARD_FEATURES: Record<string, Array<{ id: string; name: string }>> = {
  "wedding-photography": [
    { id: "1", name: "Candid Photography" },
    { id: "2", name: "Traditional Photography" },
    { id: "3", name: "Pre-wedding Shoot" },
    { id: "4", name: "Drone Shots" },
    { id: "5", name: "Album Included" },
    { id: "6", name: "Video Editing" },
    { id: "7", name: "Same Day Edit" },
    { id: "8", name: "Raw Files Provided" },
  ],
  "portrait-photography": [
    { id: "9", name: "Studio Setup" },
    { id: "10", name: "Outdoor Shoot" },
    { id: "11", name: "Props Included" },
    { id: "12", name: "Retouching" },
    { id: "13", name: "Digital Copies" },
    { id: "14", name: "Printed Photos" },
  ],
  "event-photography": [
    { id: "15", name: "Full Event Coverage" },
    { id: "16", name: "Highlights Video" },
    { id: "17", name: "On-site Printing" },
    { id: "18", name: "Photo Booth" },
    { id: "19", name: "Instant Sharing" },
  ],
  "wedding-catering": [
    { id: "20", name: "Live Cooking Counter" },
    { id: "21", name: "Buffet Setup" },
    { id: "22", name: "Dessert Station" },
    { id: "23", name: "Welcome Drinks" },
    { id: "24", name: "Custom Menu" },
    { id: "25", name: "Waiter Service" },
  ],
  "corporate-catering": [
    { id: "26", name: "Breakfast Options" },
    { id: "27", name: "Lunch Packages" },
    { id: "28", name: "Tea/Coffee Service" },
    { id: "29", name: "Snacks & Refreshments" },
  ],
  // Add more subcategories as needed...
};

const POPULAR_FEATURES = [
  { text: "Free bridal makeup trial", usedBy: 45 },
  { text: "Free mehendi for bride", usedBy: 32 },
  { text: "Free engagement shoot", usedBy: 28 },
  { text: "Same day highlight video", usedBy: 25 },
  { text: "360° photo booth", usedBy: 20 },
];

export function AddServiceForm() {
  // State Management
  const [serviceName, setServiceName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedStandard, setSelectedStandard] = useState<string[]>([]);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Close suggestions on blur with delay
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setTimeout(() => setShowSuggestions(false), 200);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get selected category object
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
  
  // Get subcategories for selected category
  const availableSubcategories = selectedCategory 
    ? SUBCATEGORIES[selectedCategory.slug] || [] 
    : [];

  // Get selected subcategory object
  const selectedSubcategory = availableSubcategories.find(s => s.id === subcategoryId);

  // Get standard features for selected subcategory
  const availableStandardFeatures = selectedSubcategory
    ? STANDARD_FEATURES[selectedSubcategory.slug] || []
    : [];

  // Handle category change
  const handleCategoryChange = (newCategoryId: string) => {
    setCategoryId(newCategoryId);
    // Reset subcategory and features when category changes
    setSubcategoryId("");
    setSelectedStandard([]);
  };

  // Handle subcategory change
  const handleSubcategoryChange = (newSubcategoryId: string) => {
    setSubcategoryId(newSubcategoryId);
    // Reset selected features when subcategory changes
    setSelectedStandard([]);
  };

  // Functions
  const toggleStandardFeature = (id: string) => {
    setSelectedStandard(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const addCustomFeature = (feature: string) => {
    const trimmed = feature.trim();
    if (trimmed && !customFeatures.includes(trimmed)) {
      setCustomFeatures(prev => [...prev, trimmed]);
      setCustomInput("");
      setShowSuggestions(false);
    }
  };

  const removeCustomFeature = (index: number) => {
    setCustomFeatures(prev => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setServiceName("");
    setCategoryId("");
    setSubcategoryId("");
    setDescription("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedStandard([]);
    setCustomFeatures([]);
    setCustomInput("");
  };

  const handleSubmit = () => {
    const formData = {
      categoryId,
      subcategoryId,
      serviceName,
      description,
      priceRange: { min: minPrice, max: maxPrice },
      standardFeatures: selectedStandard,
      customFeatures
    };
    console.log("Form Data:", formData);
    alert("Service created successfully! Check console for data.");
  };

  // Validation
  const isFormValid = 
    serviceName.trim() !== "" && 
    categoryId !== "" && 
    subcategoryId !== "" &&
    minPrice !== "" && 
    selectedStandard.length >= 3;

  // Filter suggestions
  const filteredSuggestions = POPULAR_FEATURES.filter(item => 
    item.text.toLowerCase().includes(customInput.toLowerCase()) && 
    !customFeatures.includes(item.text)
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Service</CardTitle>
        <CardDescription>Add your service details and features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Details */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Basic Information
                </h3>
                <div className="flex flex-col gap-4">
                  {/* Category & Subcategory */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="category">
                        Category <span className="text-destructive">*</span>
                      </Label>
                      <Select value={categoryId} onValueChange={handleCategoryChange}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="subcategory">
                        Service Type <span className="text-destructive">*</span>
                      </Label>
                      <Select 
                        value={subcategoryId} 
                        onValueChange={handleSubcategoryChange}
                        disabled={!categoryId}
                      >
                        <SelectTrigger id="subcategory">
                          <SelectValue placeholder={
                            categoryId ? "Select Type" : "Select category first"
                          } />
                        </SelectTrigger>
                        <SelectContent>
                          {availableSubcategories.map((sub) => (
                            <SelectItem key={sub.id} value={sub.id}>
                              {sub.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Service Name */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="serviceName">
                      Service Name <span className="text-destructive">*</span>
                    </Label>
                    <Input 
                      id="serviceName" 
                      placeholder="e.g. Premium Wedding Package" 
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Briefly describe your service..." 
                      className="min-h-30"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Price Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="minPrice">
                        Min Price (৳) <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="minPrice" 
                        type="number" 
                        placeholder="50000" 
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="maxPrice">Max Price (৳)</Label>
                      <Input 
                        id="maxPrice" 
                        type="number" 
                        placeholder="200000" 
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Custom Features */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Custom Features
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="relative" ref={suggestionsRef}>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input 
                        placeholder="Type to search or add..." 
                        className="pl-9"
                        value={customInput}
                        onChange={(e) => {
                          setCustomInput(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => customInput && setShowSuggestions(true)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && customInput) {
                            e.preventDefault();
                            addCustomFeature(customInput);
                          }
                        }}
                      />
                    </div>

                    {showSuggestions && (customInput || filteredSuggestions.length > 0) && (
                      <div className="absolute z-10 w-full mt-1 bg-popover border rounded-md shadow-md max-h-60 overflow-auto">
                        <div className="p-1 flex flex-col gap-1">
                          {filteredSuggestions.length > 0 && (
                            <>
                              <div className="px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase">
                                Popular
                              </div>
                              {filteredSuggestions.map((item, idx) => (
                                <button
                                  key={idx}
                                  className="w-full flex items-center justify-between px-2 py-2 text-sm rounded-sm hover:bg-accent text-left"
                                  onClick={() => addCustomFeature(item.text)}
                                >
                                  <span>{item.text}</span>
                                  <span className="text-[10px] text-muted-foreground">
                                    Used by {item.usedBy}
                                  </span>
                                </button>
                              ))}
                            </>
                          )}
                          {customInput && !filteredSuggestions.some(s => s.text.toLowerCase() === customInput.toLowerCase()) && (
                            <button
                              className="w-full flex items-center gap-2 px-2 py-2 text-sm rounded-sm hover:bg-accent text-primary font-medium"
                              onClick={() => addCustomFeature(customInput)}
                            >
                              <Plus className="size-4" />
                              Add &quot;{customInput}&quot;
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {customFeatures.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        <Sparkles className="size-3" />
                        <span>{feature}</span>
                        <button 
                          onClick={() => removeCustomFeature(index)}
                          className="hover:text-destructive"
                        >
                          <X className="size-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Standard Features */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Standard Features
                  </h3>
                  {subcategoryId && (
                    <div className="text-xs font-medium">
                      {selectedStandard.length < 3 ? (
                        <span className="text-destructive">
                          {3 - selectedStandard.length} more needed
                        </span>
                      ) : (
                        <span className="text-primary flex items-center gap-1">
                          <Check className="size-3" /> Minimum met
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {!subcategoryId ? (
                  <div className="flex items-center justify-center h-64 border border-dashed rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground text-center px-4">
                      Please select a category and service type first
                    </p>
                  </div>
                ) : availableStandardFeatures.length === 0 ? (
                  <div className="flex items-center justify-center h-64 border border-dashed rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground text-center px-4">
                      No standard features available for this service type
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableStandardFeatures.map((feature) => {
                      const isChecked = selectedStandard.includes(feature.id);
                      return (
                        <div 
                          key={feature.id}
                          className={cn(
                            "flex items-center gap-3 p-3 border rounded-md transition-colors cursor-pointer hover:bg-accent",
                            isChecked && "border-primary bg-primary/5"
                          )}
                          onClick={() => toggleStandardFeature(feature.id)}
                        >
                          <Checkbox 
                            id={`feature-${feature.id}`} 
                            checked={isChecked}
                            onCheckedChange={() => toggleStandardFeature(feature.id)}
                          />
                          <Label 
                            htmlFor={`feature-${feature.id}`}
                            className="flex-1 cursor-pointer text-sm font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {feature.name}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-auto pt-6 border-t flex flex-col gap-4">
                {!isFormValid && (
                  <div className="flex items-center gap-2 text-xs text-destructive font-medium bg-destructive/10 p-3 rounded-md border border-destructive/20">
                    <AlertCircle className="size-4 shrink-0" />
                    <p>
                      Required: Category, Service Type, Name, Min Price, and 3+ features.
                    </p>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleReset}
                  >
                    <RotateCcw className="size-4" />
                    Reset
                  </Button>
                  <Button 
                    className="flex-1"
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                  >
                    <Save className="size-4" />
                    Create Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}