import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
}

const EventCard = ({ title, date, time, location }: EventProps) => {
  return (
    <Card>
      <CardContent className="space-y-3">
        <h3 className="font-semibold text-primary text-lg">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function UpcomingEvents() {
  const events = [
    {
      title: "Sarah & John Wedding",
      date: "3/15/2026",
      time: "10:00 AM",
      location: "Grand Ballroom, NY",
    },
    {
      title: "Michael & Lisa Engagement",
      date: "3/20/2026",
      time: "4:00 PM",
      location: "Central Park, NY",
    },
    {
      title: "Emily & Tom Wedding",
      date: "3/25/2026",
      time: "2:00 PM",
      location: "Riverside Venue, NY",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </CardContent>
    </Card>
  );
}
