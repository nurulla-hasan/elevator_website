import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Utensils, Car } from "lucide-react";

export const VenueFeatureHighlights = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <div className="p-2 rounded-full bg-background border border-border">
            <Sparkles className="text-amber-600" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm">Premium Amenities</h4>
            <p className="text-xs text-muted-foreground">
              Top-notch facilities for your special events.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <div className="p-2 rounded-full bg-background border border-border">
            <Utensils className="text-blue-600" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm">Catering Options</h4>
            <p className="text-xs text-muted-foreground">
              In-house and external catering available.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <div className="p-2 rounded-full bg-background border border-border">
            <Car className="text-pink-600" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm">Ample Parking</h4>
            <p className="text-xs text-muted-foreground">
              Secure parking for over 100+ vehicles.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};