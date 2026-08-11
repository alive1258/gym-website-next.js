export type ClassCategory =
  | "Strength"
  | "Cardio"
  | "Combat"
  | "Recovery"
  | "Conditioning";

export interface GymClass {
  id: string;
  name: string;
  category: ClassCategory;
  image: string;
  description: string;
  duration: string;
  intensity: "Low" | "Moderate" | "High";
  schedule: { day: string; time: string }[];
}

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const categories: ClassCategory[] = [
  "Strength",
  "Cardio",
  "Combat",
  "Conditioning",
  "Recovery",
];

export const classes: GymClass[] = [
  {
    id: "iron-foundations",
    name: "Iron Foundations",
    category: "Strength",
    image: unsplash("1517836357463-d25dfeac3438"),
    description:
      "Barbell-focused strength training built on the big compound lifts — squat, bench, deadlift, press.",
    duration: "60 min",
    intensity: "High",
    schedule: [
      { day: "Mon / Wed / Fri", time: "6:00 AM" },
      { day: "Mon / Wed / Fri", time: "6:00 PM" },
    ],
  },
  {
    id: "metcon-forge",
    name: "MetCon Forge",
    category: "Conditioning",
    image: unsplash("1571019613454-1cb2f99b2d8b"),
    description:
      "High-intensity functional circuits that blend kettlebells, sleds, and bodyweight work against the clock.",
    duration: "45 min",
    intensity: "High",
    schedule: [
      { day: "Tue / Thu", time: "7:00 AM" },
      { day: "Tue / Thu", time: "5:30 PM" },
    ],
  },
  {
    id: "combat-conditioning",
    name: "Combat Conditioning",
    category: "Combat",
    image: unsplash("1731955138970-fc88fd48b80f"),
    description:
      "Boxing and kickboxing fundamentals paired with pad work and conditioning intervals.",
    duration: "50 min",
    intensity: "High",
    schedule: [
      { day: "Mon / Thu", time: "7:15 PM" },
      { day: "Saturday", time: "10:00 AM" },
    ],
  },
  {
    id: "endurance-ride",
    name: "Endurance Ride",
    category: "Cardio",
    image: unsplash("1520877880798-5ee004e3f11e"),
    description:
      "Studio cycling built around power zones and rhythm — a full cardiovascular engine session.",
    duration: "45 min",
    intensity: "Moderate",
    schedule: [
      { day: "Wed / Fri", time: "6:15 AM" },
      { day: "Sunday", time: "9:00 AM" },
    ],
  },
  {
    id: "mobility-reset",
    name: "Mobility Reset",
    category: "Recovery",
    image: unsplash("1518611012118-696072aa579a"),
    description:
      "Guided mobility, breathwork, and soft-tissue work designed to speed recovery between hard sessions.",
    duration: "40 min",
    intensity: "Low",
    schedule: [
      { day: "Tue / Sun", time: "8:00 AM" },
      { day: "Friday", time: "6:00 PM" },
    ],
  },
  {
    id: "aqua-power",
    name: "Aqua Power",
    category: "Cardio",
    image: unsplash("1519315901367-f34ff9154487"),
    description:
      "Low-impact, high-output pool training for joint-friendly conditioning and recovery days.",
    duration: "40 min",
    intensity: "Moderate",
    schedule: [
      { day: "Mon / Sat", time: "9:00 AM" },
    ],
  },
];
