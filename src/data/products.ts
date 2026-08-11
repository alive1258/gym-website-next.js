export type ProductCategory =
  | "Apparel"
  | "Supplements"
  | "Equipment"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  price: number;
  description: string;
  badge?: "New" | "Bestseller" | "Limited";
}

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;

export const productCategories: ProductCategory[] = [
  "Apparel",
  "Supplements",
  "Equipment",
  "Accessories",
];

export const products: Product[] = [
  {
    id: "pulseforge-tee",
    name: "PulseForge Performance Tee",
    category: "Apparel",
    image: unsplash("1620799139507-2a76f79a2f4d"),
    price: 32,
    description: "Moisture-wicking training tee in heavyweight cotton blend.",
    badge: "Bestseller",
  },
  {
    id: "pulseforge-shorts",
    name: "Forge Training Shorts",
    category: "Apparel",
    image: unsplash("1579758682665-53a1a614eea6"),
    price: 38,
    description: "4-way stretch shorts built for squats, sleds, and everything between.",
  },
  {
    id: "pulseforge-hoodie",
    name: "Iron Foundations Hoodie",
    category: "Apparel",
    image: unsplash("1556821840-3a63f95609a7"),
    price: 58,
    description: "Heavyweight fleece hoodie for warm-ups and post-session recovery.",
    badge: "New",
  },
  {
    id: "training-socks",
    name: "Grip Training Socks",
    category: "Apparel",
    image: unsplash("1640026199235-c24aa417b552"),
    price: 14,
    description: "Crew-length socks with arch compression for lifting stability.",
  },
  {
    id: "whey-isolate",
    name: "Forge Whey Isolate",
    category: "Supplements",
    image: unsplash("1704650311298-4d6915d34c64"),
    price: 54,
    description: "25g protein per scoop, third-party tested, minimal additives.",
    badge: "Bestseller",
  },
  {
    id: "pre-workout",
    name: "Ignite Pre-Workout",
    category: "Supplements",
    image: unsplash("1704650311162-153bbf7f17b0"),
    price: 42,
    description: "Clean-energy pre-workout formulated with our coaching team.",
  },
  {
    id: "electrolyte-mix",
    name: "Recovery Electrolyte Mix",
    category: "Supplements",
    image: unsplash("1764182350435-ed46f1e93c2f"),
    price: 28,
    description: "Zero-sugar hydration blend for long sessions and hot classes.",
  },
  {
    id: "creatine",
    name: "Pure Creatine Monohydrate",
    category: "Supplements",
    image: unsplash("1693996045435-af7c48b9cafb"),
    price: 24,
    description: "Unflavored, micronized creatine — the most researched supplement in strength sport.",
  },
  {
    id: "kettlebell-set",
    name: "Cast Iron Kettlebell",
    category: "Equipment",
    image: unsplash("1754839004013-0276d56bc0e7"),
    price: 65,
    description: "Powder-coated kettlebell available in 12kg / 16kg / 20kg.",
  },
  {
    id: "resistance-bands",
    name: "Resistance Band Set",
    category: "Equipment",
    image: unsplash("1584827386916-b5351d3ba34b"),
    price: 22,
    description: "Five-band set for mobility work, warm-ups, and accessory training.",
    badge: "New",
  },
  {
    id: "lifting-belt",
    name: "Competition Lifting Belt",
    category: "Equipment",
    image: unsplash("1664285612706-b32633c95820"),
    price: 89,
    description: "10mm double-prong leather belt for squat and deadlift PRs.",
    badge: "Limited",
  },
  {
    id: "jump-rope",
    name: "Speed Jump Rope",
    category: "Equipment",
    image: unsplash("1514994667787-b48ca37155f0"),
    price: 18,
    description: "Ball-bearing handles for double-unders and conditioning finishers.",
  },
  {
    id: "gym-bag",
    name: "PulseForge Duffel",
    category: "Accessories",
    image: unsplash("1758542988969-39a10168b2ce"),
    price: 46,
    description: "Ventilated shoe compartment, wet-gear pocket, built to survive daily training.",
  },
  {
    id: "shaker-bottle",
    name: "Forge Shaker Bottle",
    category: "Accessories",
    image: unsplash("1775199603318-7f8a9a63b40d"),
    price: 12,
    description: "Leak-proof 700ml shaker with mixing grid.",
  },
  {
    id: "wrist-wraps",
    name: "Heavy-Duty Wrist Wraps",
    category: "Accessories",
    image: unsplash("1582852567809-a25c21a13ee6"),
    price: 19,
    description: "18-inch wraps for pressing and heavy pushing work.",
  },
  {
    id: "training-watch",
    name: "PulseForge Training Band",
    category: "Accessories",
    image: unsplash("1557935728-e6d1eaabe558"),
    price: 79,
    description: "Heart-rate tracking band synced to the member app.",
    badge: "New",
  },
];
