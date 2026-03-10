export interface Subcategory {
  name: string;
  count: string;
  emoji: string;
  image: string;
}

export interface Category {
  name: string;
  count: string;
  emoji: string;
  image: string;
  subcategories?: Subcategory[];
}

export const categories: Category[] = [
  {
    name: "Venues",
    count: "189",
    emoji: "🏛️",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=400&h=400&auto=format&fit=crop",
    subcategories: [
      {
        name: "Outdoor Venues",
        count: "45",
        emoji: "🌳",
        image:
          "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Banquet Halls",
        count: "62",
        emoji: "🏰",
        image:
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Ballrooms",
        count: "38",
        emoji: "💃",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Hotel & Resorts",
        count: "44",
        emoji: "🏨",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&h=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Catering (Per Head 3 Packages)",
    count: "312",
    emoji: "🍴",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=400&h=400&auto=format&fit=crop",
    subcategories: [
      {
        name: "Full-Service Catering",
        count: "145",
        emoji: "🍽️",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Desserts",
        count: "84",
        emoji: "🍰",
        image:
          "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Beverages",
        count: "83",
        emoji: "🍷",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&h=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Decoration",
    count: "156",
    emoji: "🎨",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=400&auto=format&fit=crop",
    subcategories: [
      {
        name: "Nikkah Decor",
        count: "32",
        emoji: "💍",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Maiyon & Mehandi",
        count: "28",
        emoji: "🌿",
        image:
          "https://images.unsplash.com/photo-1560520136-121655469da4?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Stage Decor",
        count: "45",
        emoji: "🎭",
        image:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Room Décor",
        count: "15",
        emoji: "🏠",
        image:
          "https://images.unsplash.com/photo-1513519247388-4e2826502127?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Thematic Decoration",
        count: "22",
        emoji: "✨",
        image:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Lighting setups",
        count: "14",
        emoji: "💡",
        image:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&h=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Photographers",
    count: "245",
    emoji: "📷",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Makeup Artist",
    count: "278",
    emoji: "💄",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&h=400&auto=format&fit=crop",
    subcategories: [
      {
        name: "Bridal Makeup",
        count: "125",
        emoji: "👰",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Groom Styling",
        count: "45",
        emoji: "👔",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Party Makeup",
        count: "68",
        emoji: "💃",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Hairstyling",
        count: "40",
        emoji: "💇",
        image:
          "https://images.unsplash.com/photo-1522337363553-560520136-121655469da4?q=80&w=400&h=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Car Rental",
    count: "78",
    emoji: "🚗",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Event Essentials",
    count: "366",
    emoji: "✨",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=400&auto=format&fit=crop",
    subcategories: [
      {
        name: "Henna Artist",
        count: "54",
        emoji: "🌿",
        image:
          "https://images.unsplash.com/photo-1560520136-121655469da4?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Invitation",
        count: "112",
        emoji: "💌",
        image:
          "https://images.unsplash.com/photo-1510076857177-74700760f0bb?q=80&w=400&h=400&auto=format&fit=crop",
      },
      {
        name: "Wedding Accessories",
        count: "322",
        emoji: "👜",
        image:
          "https://images.unsplash.com/photo-1549416878-b9ca35c2d47a?q=80&w=400&h=400&auto=format&fit=crop",
      },
    ],
  },
];
