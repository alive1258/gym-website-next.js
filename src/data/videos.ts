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
  youtubeId: string;
  url: string;
  thumbnail: string;
}

const categoryIcon: Record<ClassCategory, LucideIcon> = {
  Strength: Dumbbell,
  Conditioning: Flame,
  Combat: Swords,
  Cardio: Bike,
  Recovery: Wind,
};

const clips: {
  youtubeId: string;
  title: string;
  category: ClassCategory;
  duration: string;
}[] = [
  { youtubeId: "XKSt130C8vo", title: "Arm Day ft. Manoj", category: "Strength", duration: "Vlog" },
  { youtubeId: "SGOiPdyaebk", title: "Chest Day in Japan's Most Expensive Gym", category: "Strength", duration: "Vlog" },
  { youtubeId: "9yyyKPNU1Dc", title: "5AM Chest Day", category: "Strength", duration: "Vlog" },
  { youtubeId: "f0YGSYyyhvI", title: "Training Chest With My Brother", category: "Strength", duration: "Vlog" },
  { youtubeId: "ZHzwtTHWl50", title: "Arm Day, Morjim Beach & Kokum Curry", category: "Strength", duration: "Vlog" },
  { youtubeId: "tP6bSe5q8mQ", title: "Chest Day", category: "Strength", duration: "Vlog" },
  { youtubeId: "8qd-XS63__E", title: "Back Day + Burger Factory", category: "Strength", duration: "Vlog" },
  { youtubeId: "q6IYBaQ1Keo", title: "Ending The Bulk", category: "Recovery", duration: "Vlog" },
  { youtubeId: "Sre0oGBeCz8", title: "Show Day in Dubai", category: "Conditioning", duration: "Vlog" },
  { youtubeId: "pBXgoeywweE", title: "Saket x Mihir: Part 2", category: "Conditioning", duration: "Vlog" },
  { youtubeId: "BkDBqzkvnUw", title: "Chest Day", category: "Strength", duration: "Vlog" },
  { youtubeId: "i4RcJhpMqjI", title: "Arms With Manoj", category: "Strength", duration: "Vlog" },
  { youtubeId: "RhPoF7psFvY", title: "Arm Day | 83 Days Out", category: "Strength", duration: "Vlog" },
  { youtubeId: "BiiP8eLjuVc", title: "Chest Day & Full Day of Eating", category: "Recovery", duration: "Vlog" },
  { youtubeId: "iv2byjbuWaY", title: "Arm Day", category: "Strength", duration: "Vlog" },
  { youtubeId: "QmPYxg_3wT0", title: "Arriving in Gwalior", category: "Conditioning", duration: "Vlog" },
  { youtubeId: "_2MTKmmt8c0", title: "FST-7 Chest Workout", category: "Strength", duration: "Vlog" },
  { youtubeId: "REK3jvSX_x4", title: "Training Back & Biceps + Gwalior Fort", category: "Strength", duration: "Vlog" },
  { youtubeId: "aZt4rv0-feY", title: "The Next Adventure", category: "Conditioning", duration: "Vlog" },
];

export const videos: GymVideo[] = clips.map((v) => ({
  id: `yt-${v.youtubeId}`,
  title: v.title,
  category: v.category,
  duration: v.duration,
  icon: categoryIcon[v.category],
  youtubeId: v.youtubeId,
  url: `https://www.youtube.com/watch?v=${v.youtubeId}`,
  thumbnail: `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`,
}));
