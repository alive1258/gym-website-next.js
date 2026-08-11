import {
  Flame,
  Dumbbell,
  Waves,
  Swords,
  Wind,
  Bike,
  type LucideIcon,
} from "lucide-react";

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
  icon: LucideIcon;
  description: string;
  duration: string;
  intensity: "Low" | "Moderate" | "High";
  schedule: { day: string; time: string }[];
}

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
    icon: Dumbbell,
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
    icon: Flame,
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
    icon: Swords,
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
    icon: Bike,
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
    icon: Wind,
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
    icon: Waves,
    description:
      "Low-impact, high-output pool training for joint-friendly conditioning and recovery days.",
    duration: "40 min",
    intensity: "Moderate",
    schedule: [
      { day: "Mon / Sat", time: "9:00 AM" },
    ],
  },
];
