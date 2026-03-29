export type EventStatus = "upcoming" | "completed" | "cancelled";

export type Event = {
  id: string;
  title: string;
  client: string;
  clientEmail: string;
  date: string;
  time: string;
  location: string;
  type: string;
  status: EventStatus;
};
