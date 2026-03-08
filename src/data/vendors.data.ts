import { Vendor } from "@/types/vendor.type";

export const mockVendors: Vendor[] = [
  {
    id: "1",
    name: "Grand Palace Hotel",
    category: "Venue",
    location: "Gulshan, Dhaka",
    rating: 4.8,
    reviews: 124,
    price: "PKR 5,000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "2",
    name: "Candid Moments Photography",
    category: "Photographer",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 86,
    price: "PKR 1,200",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "3",
    name: "Royal Garden Banquet",
    category: "Venue",
    location: "Banani, Dhaka",
    rating: 4.7,
    reviews: 210,
    price: "PKR 3,500",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    verified: true,
    sponsored: true
  },
  {
    id: "4",
    name: "Glamour Makeup Studio",
    category: "Makeup Artist",
    location: "Uttara, Dhaka",
    rating: 4.6,
    reviews: 45,
    price: "PKR 500",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "5",
    name: "Elite Catering Services",
    category: "Caterer",
    location: "Mirpur, Dhaka",
    rating: 4.5,
    reviews: 156,
    price: "PKR 2,000",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    verified: true
  },
  {
    id: "6",
    name: "Bloom & Petal Decor",
    category: "Decorator",
    location: "Mohakhali, Dhaka",
    rating: 4.8,
    reviews: 67,
    price: "PKR 1,800",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    verified: false,
    sponsored: true
  }
];

export const mockVendorDetails: Vendor = {
  id: "1",
  name: "Royal Palace Events",
  category: "Venues",
  location: "Clifton, Karachi",
  rating: 4.9,
  reviews: 245,
  price: "PKR 2,500",
  image:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
  verified: true,
  sponsored: true,
  description:
    "Royal Palace Events is Karachi's premier wedding venue, offering luxurious halls and impeccable service for your special day. With over 10 years of experience, we've hosted thousands of memorable celebrations.",
  services: [
    "Wedding Photography",
    "Engagement Shoots",
    "Pre-wedding Sessions",
    "Album Design",
  ],
  packages: mockVendors.map((v) => ({
     id: `pkg-${v.id}`,
     name: v.name,
     price: v.price,
     description: `${v.category} services in ${v.location}. Professional and reliable service with a ${v.rating} rating.`,
     isPopular: v.sponsored,
     category: v.category,
     location: v.location,
     rating: v.rating,
     reviews: v.reviews,
     image: v.image,
     verified: v.verified,
     sponsored: v.sponsored,
     features: [
       "Professional Service",
       v.verified ? "Verified Provider" : "Quality Assured",
       `${v.reviews}+ Happy Customers`,
       "Premium Support",
     ],
   })),
  portfolio: {
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    ]
  },
  reviewList: [
    {
      id: "rev-1",
      userName: "Sarah & Michael",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely amazing service! They exceeded all our expectations and made our wedding day truly special. Highly recommended!"
    },
    {
      id: "rev-2",
      userName: "Emily & David",
      rating: 4.8,
      date: "1 month ago",
      comment: "The venue was beautiful and the staff was incredibly helpful throughout the planning process. Everything went smoothly on our big day."
    },
    {
      id: "rev-3",
      userName: "Jessica & Robert",
      rating: 5,
      date: "2 months ago",
      comment: "Exceptional quality and professionalism. The attention to detail was remarkable. We couldn't have asked for a better experience."
    }
  ],
  contact: {
    phone: "+92 300 1234567",
    email: "info@royalpalace.com",
    whatsapp: "+923001234567",
  },
  availability: {
    [new Date(2026, 1, 23).toDateString()]: "booked",
    [new Date(2026, 1, 24).toDateString()]: "available",
  },
};
