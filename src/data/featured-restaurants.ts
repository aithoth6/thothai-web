export type FeaturedRestaurant = {
  name: string;
  cuisine: string;
  area: string;
  image: string;
  waUrl?: string; // per-restaurant WhatsApp link — optional until verified
};

export const featuredRestaurants: FeaturedRestaurant[] = [
  {
    name: "Severin Plus Restaurant, TF Hostel",
    cuisine: "Local Ghanaian",
    area: "Legon",
    image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=120&h=120&fit=crop&q=80",
  },
];
