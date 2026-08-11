import {
  Dumbbell,
  Flame,
  Swords,
  Bike,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { ClassCategory } from "@/src/data/classes";

export interface GymVideo {
  id: string;
  title: string;
  category: ClassCategory;
  icon: LucideIcon;
  duration: string;
}

const categoryIcon: Record<ClassCategory, LucideIcon> = {
  Strength: Dumbbell,
  Conditioning: Flame,
  Combat: Swords,
  Cardio: Bike,
  Recovery: Wind,
};

const raw: { title: string; category: ClassCategory; duration: string }[] = [
  { title: "Squat Technique Breakdown", category: "Strength", duration: "6:42" },
  { title: "Building Your First 5x5", category: "Strength", duration: "9:15" },
  { title: "Deadlift Setup, Fixed", category: "Strength", duration: "5:20" },
  { title: "MetCon Forge: Full Session", category: "Conditioning", duration: "12:08" },
  { title: "Kettlebell Complex for Conditioning", category: "Conditioning", duration: "7:33" },
  { title: "Sled Push Finisher", category: "Conditioning", duration: "4:12" },
  { title: "Boxing Fundamentals: Jab-Cross", category: "Combat", duration: "8:05" },
  { title: "Pad Work Combos with Coach Daniel", category: "Combat", duration: "10:47" },
  { title: "Kickboxing Conditioning Round", category: "Combat", duration: "6:58" },
  { title: "Endurance Ride: Power Zones", category: "Cardio", duration: "11:20" },
  { title: "Zone 2 Explained", category: "Cardio", duration: "5:45" },
  { title: "Aqua Power Session Highlights", category: "Cardio", duration: "4:30" },
  { title: "Mobility Reset: Full Routine", category: "Recovery", duration: "9:52" },
  { title: "Breathwork for Recovery Days", category: "Recovery", duration: "6:15" },
  { title: "Foam Rolling Fundamentals", category: "Recovery", duration: "5:03" },
];

export const videos: GymVideo[] = raw.map((v, i) => ({
  id: `video-${i + 1}`,
  title: v.title,
  category: v.category,
  duration: v.duration,
  icon: categoryIcon[v.category],
}));
