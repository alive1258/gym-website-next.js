import {
  Shirt,
  Dumbbell,
  Droplets,
  Backpack,
  Watch,
  FlaskConical,
  Footprints,
  ShieldHalf,
  GlassWater,
  Weight,
  type LucideIcon,
} from "lucide-react";

export type ProductCategory =
  | "Apparel"
  | "Supplements"
  | "Equipment"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  icon: LucideIcon;
  price: number;
  description: string;
  badge?: "New" | "Bestseller" | "Limited";
}

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
    icon: Shirt,
    price: 32,
    description: "Moisture-wicking training tee in heavyweight cotton blend.",
    badge: "Bestseller",
  },
  {
    id: "pulseforge-shorts",
    name: "Forge Training Shorts",
    category: "Apparel",
    icon: ShieldHalf,
    price: 38,
    description: "4-way stretch shorts built for squats, sleds, and everything between.",
  },
  {
    id: "pulseforge-hoodie",
    name: "Iron Foundations Hoodie",
    category: "Apparel",
    icon: Shirt,
    price: 58,
    description: "Heavyweight fleece hoodie for warm-ups and post-session recovery.",
    badge: "New",
  },
  {
    id: "training-socks",
    name: "Grip Training Socks",
    category: "Apparel",
    icon: Footprints,
    price: 14,
    description: "Crew-length socks with arch compression for lifting stability.",
  },
  {
    id: "whey-isolate",
    name: "Forge Whey Isolate",
    category: "Supplements",
    icon: FlaskConical,
    price: 54,
    description: "25g protein per scoop, third-party tested, minimal additives.",
    badge: "Bestseller",
  },
  {
    id: "pre-workout",
    name: "Ignite Pre-Workout",
    category: "Supplements",
    icon: Droplets,
    price: 42,
    description: "Clean-energy pre-workout formulated with our coaching team.",
  },
  {
    id: "electrolyte-mix",
    name: "Recovery Electrolyte Mix",
    category: "Supplements",
    icon: GlassWater,
    price: 28,
    description: "Zero-sugar hydration blend for long sessions and hot classes.",
  },
  {
    id: "creatine",
    name: "Pure Creatine Monohydrate",
    category: "Supplements",
    icon: FlaskConical,
    price: 24,
    description: "Unflavored, micronized creatine — the most researched supplement in strength sport.",
  },
  {
    id: "kettlebell-set",
    name: "Cast Iron Kettlebell",
    category: "Equipment",
    icon: Weight,
    price: 65,
    description: "Powder-coated kettlebell available in 12kg / 16kg / 20kg.",
  },
  {
    id: "resistance-bands",
    name: "Resistance Band Set",
    category: "Equipment",
    icon: Dumbbell,
    price: 22,
    description: "Five-band set for mobility work, warm-ups, and accessory training.",
    badge: "New",
  },
  {
    id: "lifting-belt",
    name: "Competition Lifting Belt",
    category: "Equipment",
    icon: ShieldHalf,
    price: 89,
    description: "10mm double-prong leather belt for squat and deadlift PRs.",
    badge: "Limited",
  },
  {
    id: "jump-rope",
    name: "Speed Jump Rope",
    category: "Equipment",
    icon: Dumbbell,
    price: 18,
    description: "Ball-bearing handles for double-unders and conditioning finishers.",
  },
  {
    id: "gym-bag",
    name: "PulseForge Duffel",
    category: "Accessories",
    icon: Backpack,
    price: 46,
    description: "Ventilated shoe compartment, wet-gear pocket, built to survive daily training.",
  },
  {
    id: "shaker-bottle",
    name: "Forge Shaker Bottle",
    category: "Accessories",
    icon: GlassWater,
    price: 12,
    description: "Leak-proof 700ml shaker with mixing grid.",
  },
  {
    id: "wrist-wraps",
    name: "Heavy-Duty Wrist Wraps",
    category: "Accessories",
    icon: ShieldHalf,
    price: 19,
    description: "18-inch wraps for pressing and heavy pushing work.",
  },
  {
    id: "training-watch",
    name: "PulseForge Training Band",
    category: "Accessories",
    icon: Watch,
    price: 79,
    description: "Heart-rate tracking band synced to the member app.",
    badge: "New",
  },
];
