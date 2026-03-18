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

export const FEATURES_BY_SUBCATEGORY: Record<string, FeatureOption[]> = {
  "Wedding Photography": [
    { id: "wp1", name: "Full Day Coverage" },
    { id: "wp2", name: "Premium Album" },
    { id: "wp3", name: "Candid Shots" },
    { id: "wp4", name: "Drone Add-on" },
  ],
  "Event Photography": [
    { id: "epht1", name: "On-site Team" },
    { id: "epht2", name: "Same Day Highlights" },
    { id: "epht3", name: "Edited Photos Delivery" },
  ],
  Portrait: [
    { id: "por1", name: "Studio Setup" },
    { id: "por2", name: "Retouching" },
    { id: "por3", name: "Wardrobe Guidance" },
  ],
  Product: [
    { id: "prd1", name: "Lightbox Setup" },
    { id: "prd2", name: "Background Options" },
    { id: "prd3", name: "Color Correction" },
  ],
  Cinematic: [
    { id: "cin1", name: "Storytelling Style" },
    { id: "cin2", name: "Color Grading" },
    { id: "cin3", name: "Music Licensing Support" },
  ],
  "Wedding Film": [
    { id: "wf1", name: "Cinematic Edit" },
    { id: "wf2", name: "Highlight Trailer" },
    { id: "wf3", name: "Drone Footage" },
  ],
  "Event Coverage": [
    { id: "evc1", name: "Multi Camera" },
    { id: "evc2", name: "Live Audio Recording" },
    { id: "evc3", name: "Fast Delivery" },
  ],
  "Reel/Shorts": [
    { id: "rl1", name: "Vertical Format" },
    { id: "rl2", name: "Trending Edit Style" },
    { id: "rl3", name: "Same Day Delivery" },
  ],
  "Corporate Video": [
    { id: "cv1", name: "Script Assistance" },
    { id: "cv2", name: "Voice Over" },
    { id: "cv3", name: "Brand Guidelines Followed" },
  ],
  "Community Center": [
    { id: "cc1", name: "Guest Capacity" },
    { id: "cc2", name: "Parking Facility" },
    { id: "cc3", name: "Stage Setup" },
  ],
  Resort: [
    { id: "rs1", name: "Accommodation" },
    { id: "rs2", name: "Outdoor Space" },
    { id: "rs3", name: "Pool Access" },
  ],
  "Convention Hall": [
    { id: "ch1", name: "Large Capacity" },
    { id: "ch2", name: "AC Facility" },
    { id: "ch3", name: "Generator Backup" },
  ],
  Rooftop: [
    { id: "rt1", name: "City View" },
    { id: "rt2", name: "Weather Backup Plan" },
    { id: "rt3", name: "Lighting Options" },
  ],
  Outdoor: [
    { id: "od1", name: "Garden Space" },
    { id: "od2", name: "Event Tent Options" },
    { id: "od3", name: "On-site Security" },
  ],
  Kacchi: [
    { id: "kc1", name: "Basmati Rice" },
    { id: "kc2", name: "Beef/Mutton Options" },
    { id: "kc3", name: "Borhani Included" },
  ],
  Chinese: [
    { id: "chf1", name: "Set Menu" },
    { id: "chf2", name: "Live Noodle Counter" },
    { id: "chf3", name: "Dessert Options" },
  ],
  BBQ: [
    { id: "bbq1", name: "Live Grill" },
    { id: "bbq2", name: "Sauce Options" },
    { id: "bbq3", name: "Starter Platters" },
  ],
  Dessert: [
    { id: "des1", name: "Sweet Table Setup" },
    { id: "des2", name: "Custom Cakes" },
    { id: "des3", name: "Ice Cream Corner" },
  ],
  Snacks: [
    { id: "sn1", name: "Tea & Coffee" },
    { id: "sn2", name: "Finger Foods" },
    { id: "sn3", name: "Live Counter" },
  ],
  Stage: [
    { id: "st1", name: "Stage Design" },
    { id: "st2", name: "Floral Setup" },
    { id: "st3", name: "Backdrop Customization" },
  ],
  Holud: [
    { id: "hl1", name: "Holud Theme" },
    { id: "hl2", name: "Marigold Decor" },
    { id: "hl3", name: "Seating Setup" },
  ],
  Wedding: [
    { id: "wd1", name: "Entrance Decor" },
    { id: "wd2", name: "Aisle Design" },
    { id: "wd3", name: "Mandap Setup" },
  ],
  Reception: [
    { id: "rc1", name: "Stage Lighting" },
    { id: "rc2", name: "Centerpieces" },
    { id: "rc3", name: "Photo Booth" },
  ],
  Lighting: [
    { id: "lg1", name: "Ambient Lighting" },
    { id: "lg2", name: "Spotlights" },
    { id: "lg3", name: "Fairy Lights" },
  ],
  Bridal: [
    { id: "br1", name: "HD Makeup" },
    { id: "br2", name: "Long Lasting" },
    { id: "br3", name: "Touch-up Kit" },
  ],
  Party: [
    { id: "pr1", name: "Glam Look" },
    { id: "pr2", name: "Lashes Included" },
    { id: "pr3", name: "Hair Styling" },
  ],
  Groom: [
    { id: "gr1", name: "Skin Prep" },
    { id: "gr2", name: "Natural Finish" },
    { id: "gr3", name: "Hair Styling" },
  ],
  "Hair Styling": [
    { id: "hs1", name: "Updo" },
    { id: "hs2", name: "Blowout" },
    { id: "hs3", name: "Accessory Styling" },
  ],
  DJ: [
    { id: "dj1", name: "Playlist Customization" },
    { id: "dj2", name: "MC Support" },
    { id: "dj3", name: "DJ Console" },
  ],
  "Live Band": [
    { id: "lb1", name: "Singer Included" },
    { id: "lb2", name: "Instrument Setup" },
    { id: "lb3", name: "Rehearsal" },
  ],
  "Sound System": [
    { id: "ss1", name: "Speakers" },
    { id: "ss2", name: "Wireless Mics" },
    { id: "ss3", name: "Sound Engineer" },
  ],
  Traditional: [
    { id: "tr1", name: "Dhol Team" },
    { id: "tr2", name: "Cultural Set" },
    { id: "tr3", name: "Entry Performance" },
  ],
  "Full Planning": [
    { id: "fp1", name: "Budget Planning" },
    { id: "fp2", name: "Vendor Management" },
    { id: "fp3", name: "Timeline Coordination" },
  ],
  "Day Coordination": [
    { id: "dc1", name: "On-site Management" },
    { id: "dc2", name: "Vendor Coordination" },
    { id: "dc3", name: "Schedule Handling" },
  ],
  Consultation: [
    { id: "cs1", name: "Planning Call" },
    { id: "cs2", name: "Checklist" },
    { id: "cs3", name: "Recommendations" },
  ],
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
