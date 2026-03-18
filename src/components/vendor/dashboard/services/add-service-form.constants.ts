export type FeatureOption = {
  id: string;
  name: string;
};

export const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Birthday",
  "Corporate",
  "Engagement",
  "Holud",
  "Seminar",
  "Exhibition",
];

export const PRICE_TYPES = ["Fixed", "Starting From", "Per Hour", "Per Event"];

export const SERVICE_CATEGORIES = [
  "Photography",
  "Videography",
  "Venue",
  "Catering",
  "Decoration",
  "Makeup Artist",
  "Music & DJ",
  "Event Planner",
];

export const SUBCATEGORIES_BY_CATEGORY: Record<string, string[]> = {
  Photography: ["Wedding Photography", "Event Photography", "Portrait", "Product", "Cinematic"],
  Videography: ["Wedding Film", "Event Coverage", "Reel/Shorts", "Corporate Video"],
  Venue: ["Community Center", "Resort", "Convention Hall", "Rooftop", "Outdoor"],
  Catering: ["Kacchi", "Chinese", "BBQ", "Dessert", "Snacks"],
  Decoration: ["Stage", "Holud", "Wedding", "Reception", "Lighting"],
  "Makeup Artist": ["Bridal", "Party", "Groom", "Hair Styling"],
  "Music & DJ": ["DJ", "Live Band", "Sound System", "Traditional"],
  "Event Planner": ["Full Planning", "Day Coordination", "Consultation"],
};

export const FEATURES_BY_CATEGORY: Record<string, FeatureOption[]> = {
  Photography: [
    { id: "p1", name: "Camera Equipment" },
    { id: "p2", name: "Post Processing" },
    { id: "p3", name: "Delivery Time" },
    { id: "p4", name: "Online Gallery" },
    { id: "p5", name: "Backup Support" },
  ],
  Catering: [
    { id: "c1", name: "Menu Options" },
    { id: "c2", name: "Service Staff" },
    { id: "c3", name: "Cutlery & Crockery" },
    { id: "c4", name: "Live Counter" },
  ],
  Venue: [
    { id: "v1", name: "Capacity" },
    { id: "v2", name: "Air Conditioning" },
    { id: "v3", name: "Parking Space" },
    { id: "v4", name: "Generator Backup" },
  ],
  Videography: [
    { id: "vg1", name: "Video Resolution" },
    { id: "vg2", name: "Editing Style" },
    { id: "vg3", name: "Audio Recording" },
  ],
  Decoration: [
    { id: "d1", name: "Theme Style" },
    { id: "d2", name: "Lighting" },
    { id: "d3", name: "Stage Setup" },
  ],
  "Makeup Artist": [
    { id: "m1", name: "Products Used" },
    { id: "m2", name: "Trial Session" },
    { id: "m3", name: "Home Service" },
  ],
  "Music & DJ": [
    { id: "mu1", name: "Sound System" },
    { id: "mu2", name: "Music Genre" },
    { id: "mu3", name: "Special Effects" },
  ],
  "Event Planner": [
    { id: "ep1", name: "Management Scope" },
    { id: "ep2", name: "Vendor Coordination" },
  ],
};
