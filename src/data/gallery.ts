import {
  Dumbbell,
  Users2,
  Flame,
  Trophy,
  HeartPulse,
  Swords,
  Weight,
  PartyPopper,
  Bike,
  type LucideIcon,
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  caption: string;
  icon: LucideIcon;
  span: "tall" | "wide" | "normal";
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: "1", caption: "Free Weights Floor", icon: Dumbbell, span: "tall" },
  { id: "2", caption: "Morning Group Class", icon: Users2, span: "normal" },
  { id: "3", caption: "MetCon Session", icon: Flame, span: "normal" },
  { id: "4", caption: "Member Milestone", icon: Trophy, span: "wide" },
  { id: "5", caption: "Recovery Suite", icon: HeartPulse, span: "normal" },
  { id: "6", caption: "Combat Conditioning", icon: Swords, span: "normal" },
  { id: "7", caption: "Powerlifting Platform", icon: Weight, span: "tall" },
  { id: "8", caption: "Community Event Night", icon: PartyPopper, span: "wide" },
  { id: "9", caption: "Endurance Studio", icon: Bike, span: "normal" },
];
