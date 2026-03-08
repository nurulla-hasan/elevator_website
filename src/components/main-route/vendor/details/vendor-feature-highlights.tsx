import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Mail, Heart } from "lucide-react";

export const VendorFeatureHighlights = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <div className="p-2 rounded-full bg-background border border-border">
            <ShieldCheck className="text-emerald-600" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Verified Vendor</h4>
            <p className="text-xs text-muted-foreground">
              Trusted professional service provider.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <div className="p-2 rounded-full bg-background border border-border">
            <Mail className="text-blue-600" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Quick Response</h4>
            <p className="text-xs text-muted-foreground">
              Usually responds within 24 hours.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <div className="p-2 rounded-full bg-background border border-border">
            <Heart className="text-pink-600" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Top Rated</h4>
            <p className="text-xs text-muted-foreground">
              Consistently high customer satisfaction.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
