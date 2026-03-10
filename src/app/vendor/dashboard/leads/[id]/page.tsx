import DashboardPageLayout from "@/components/ui/custom/dashboard-page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BackButton from "@/components/ui/custom/back-button";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Clock,
  Send,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Building2,
} from "lucide-react";

export default function LeadDetailsPage() {
  // Dummy data for Sarah Johnson
  const lead = {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    status: "New Lead",
    priority: "High Priority",
    eventType: "Wedding",
    eventDate: "Saturday, August 15, 2026",
    location: "Los Angeles, CA",
    venue: "The Grand Ballroom",
    budget: "PKR 50,000 - PKR 100,000",
    guests: "200 guests",
    source: "Website Form",
    preferredContact: "Email",
    receivedDate: "February 18, 2026",
    message:
      "Looking for a photographer for our outdoor wedding. We want both traditional and candid shots. We have seen your portfolio and love your style. Our wedding will be at sunset with a beach theme. We would like full-day coverage including getting ready, ceremony, reception, and some couple portraits at the beach.",
  };

  return (
    <DashboardPageLayout>
      <div>
        <BackButton variant="outline" label="Back to Leads" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <Card>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <Avatar className="h-16 w-16 rounded-full border-4 border-primary/10">
                    <AvatarFallback className="bg-primary text-white text-2xl font-semibold">
                      S
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1.5">
                    <h1 className="text-2xl font-semibold text-foreground">
                      {lead.name}
                    </h1>
                    <div className="flex gap-2">
                      <Badge variant="info" className="text-xs">
                        {lead.status}
                      </Badge>
                      <Badge
                        variant="muted"
                        className="text-xs text-destructive"
                      >
                        {lead.priority}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground pt-1">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {lead.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {lead.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <Button>
                  <Send />
                  Send Quote
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Event Details Card */}
          <Card>
            <CardContent className="space-y-8">
              <h2 className="text-xl font-semibold text-foreground">
                Event Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Event Type
                  </p>
                  <p className="font-medium text-foreground">{lead.eventType}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Event Date
                  </p>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {lead.eventDate}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Location
                  </p>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {lead.location}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Venue
                  </p>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Building2 className="h-4 w-4 text-primary" />
                    {lead.venue}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Budget Range
                  </p>
                  <div className="flex items-center gap-2 font-medium text-primary text-lg">
                    <DollarSign className="h-5 w-5" />
                    {lead.budget}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Expected Guests
                  </p>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {lead.guests}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Message Card */}
          <Card>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Client&apos;s Message
                </h2>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <p className="text-foreground/90 leading-relaxed text-base italic">
                  {lead.message}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Sidebar Info & Actions */}
        <div className="space-y-6">
          {/* Lead Information */}
          <Card>
            <CardContent className="space-y-6">
              <h2 className="text-lg font-semibold text-foreground">
                Lead Information
              </h2>
              <div className="space-y-5">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-medium">
                    Source
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {lead.source}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-medium">
                    Preferred Contact
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {lead.preferredContact}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-medium">
                    Received
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock className="h-4 w-4" />
                    {lead.receivedDate}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent className="space-y-6">
              <h2 className="text-lg font-semibold text-foreground">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 h-11 border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700 hover:border-green-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as Won
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 h-11 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
                >
                  <XCircle className="h-4 w-4" />
                  Mark as Lost
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 h-11"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 h-11"
                >
                  <Phone className="h-4 w-4" />
                  Call Client
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardPageLayout>
  );
}
