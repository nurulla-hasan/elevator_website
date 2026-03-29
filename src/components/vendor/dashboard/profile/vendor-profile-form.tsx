"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Globe, Mail, Phone, Save, Map as MapIcon, Navigation, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SuccessToast } from "@/lib/utils";
import { LocationInput } from "@/components/ui/custom/location-input";
import * as React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const profileSchema = z.object({
  // Business Info
  businessName: z.string().min(2, "Business name is required"),
  category: z.string().min(1, "Please select a category"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  description: z.string().min(10, "Description must be at least 10 characters"),
  services: z.string().min(1, "Please list at least one service"),
  experience: z.string().min(1, "Experience is required"),
  teamSize: z.string().min(1, "Team size is required"),
  // Business Address Info
  streetAddress: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(4, "ZIP code is required"),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  googleMapsUrl: z.string().url("Invalid Google Maps URL").optional().or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const MAP_LIBRARIES: ("places")[] = ["places"];

export function VendorProfileForm() {
  const [isDetecting, setIsDetecting] = React.useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: MAP_LIBRARIES,
  });

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      businessName: "",
      email: "",
      phone: "",
      website: "",
      description: "",
      services: "",
      experience: "",
      teamSize: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      latitude: "",
      longitude: "",
      googleMapsUrl: "",
    },
  });

  const updateAddressFields = React.useCallback((lat: number, lng: number) => {
    if (!isLoaded) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results?.[0]) {
        const place = results[0];
        form.setValue("streetAddress", place.formatted_address);
        
        place.address_components.forEach((component) => {
          const types = component.types;
          if (types.includes("locality")) {
            form.setValue("city", component.long_name);
          } else if (types.includes("administrative_area_level_1")) {
            form.setValue("state", component.long_name);
          } else if (types.includes("postal_code")) {
            form.setValue("zipCode", component.long_name);
          }
        });
        SuccessToast("Address fields updated from location");
      }
    });
  }, [isLoaded, form]);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        form.setValue("latitude", latitude.toString());
        form.setValue("longitude", longitude.toString());
        form.setValue("googleMapsUrl", `https://www.google.com/maps?q=${latitude},${longitude}`);
        setMapCenter({ lat: latitude, lng: longitude });
        updateAddressFields(latitude, longitude);
        setIsDetecting(false);
        SuccessToast("Location detected successfully");
      },
      (error) => {
        console.error("Error detecting location:", error);
        setIsDetecting(false);
        alert("Unable to detect your location. Please ensure location access is enabled.");
      }
    );
  };

  const [mapCenter, setMapCenter] = React.useState({
    lat: 24.8607,
    lng: 67.0011,
  });

  const onMapClick = React.useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      form.setValue("latitude", lat.toString());
      form.setValue("longitude", lng.toString());
      form.setValue("googleMapsUrl", `https://www.google.com/maps?q=${lat},${lng}`);
      updateAddressFields(lat, lng);
    }
  }, [form, updateAddressFields]);

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    SuccessToast("Profile information updated successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Business Information Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary text-xl font-semibold">
              Business Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="videography">Videography</SelectItem>
                        <SelectItem value="catering">Catering</SelectItem>
                        <SelectItem value="decoration">Decoration</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <FormControl>
                        <Input className="pl-10" placeholder="business@email.com" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <FormControl>
                        <Input className="pl-10" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <FormControl>
                      <Input className="pl-10" placeholder="www.yourwebsite.com" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>


            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Write About Your Business</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter about your company, experience and services..." 
                      className="min-h-30 resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Services Offered *</FormLabel>
                  <FormControl>
                    <Input placeholder="Separate services with commas (e.g. Wedding, Portrait, Event)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Size</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Business Address Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary text-xl font-semibold">
              Business Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Street Address *</FormLabel>
                    <FormControl>
                      <LocationInput
                        value={field.value}
                        onChange={(address, data) => {
                          field.onChange(address);
                          if (data) {
                            if (data.city) form.setValue("city", data.city);
                            if (data.state) form.setValue("state", data.state);
                            if (data.postalCode) form.setValue("zipCode", data.postalCode);
                            if (data.lat) form.setValue("latitude", data.lat.toString());
                            if (data.lng) form.setValue("longitude", data.lng.toString());
                            if (data.lat && data.lng) {
                              form.setValue("googleMapsUrl", `https://www.google.com/maps?q=${data.lat},${data.lng}`);
                              setMapCenter({ lat: data.lat, lng: data.lng });
                            }
                          }
                        }}
                        placeholder="Search for your business address..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter state" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter ZIP code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="googleMapsUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Google Maps URL (Optional)</FormLabel>
                    <div className="relative">
                      <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <FormControl>
                        <Input className="pl-10" placeholder="https://goo.gl/maps/..." {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Map Pin / Coordinates Section */}
            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                <MapIcon className="h-4 w-4 text-primary" />
                Map Coordinates (Pin Location)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 24.8607" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 67.0011" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Pinning your exact location helps clients find you easily and assists in business verification.
              </p>
              
              {/* Map View */}
              <div className="mt-4 aspect-4/1 w-full bg-muted rounded-lg overflow-hidden border relative">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={mapCenter}
                    zoom={15}
                    onClick={onMapClick}
                    options={{
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                    }}
                  >
                    <Marker 
                      position={{ 
                        lat: parseFloat(form.getValues("latitude") || "24.8607"), 
                        lng: parseFloat(form.getValues("longitude") || "67.0011") 
                      }} 
                    />
                  </GoogleMap>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-2">
                    <Loader2 className="h-8 w-8 animate-spin opacity-20" />
                    <p className="text-sm">Loading Interactive Map...</p>
                  </div>
                )}
                
                {/* Floating Button over Map */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    type="button"
                    onClick={detectLocation}
                    disabled={isDetecting}
                    className="shadow-lg backdrop-blur-md bg-white/90"
                  >
                    {isDetecting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Detecting...
                      </>
                    ) : (
                      <>
                        <Navigation className="mr-2 h-4 w-4" />
                        Detect Current Location
                      </>
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2 text-center italic">
                * Click on the map to manually set your pin location
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button" className="px-8">
            Cancel
          </Button>
          <Button type="submit" className="px-8 flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}
