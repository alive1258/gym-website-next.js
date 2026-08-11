import {
  Dumbbell,
  Flame,
  Swords,
  HeartPulse,
  Bike,
  Wind,
  type LucideIcon,
} from "lucide-react";

export interface Trainer {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  specialties: string[];
  bio: string;
  experience: string;
  certifications: string[];
}

export const trainers: Trainer[] = [
  {
    id: "marcus-reed",
    name: "Marcus Reed",
    role: "Head Strength Coach",
    icon: Dumbbell,
    specialties: ["Powerlifting", "Olympic Lifting", "Programming"],
    bio: "Marcus built his coaching philosophy on twelve years of competitive powerlifting — technical precision first, intensity second.",
    experience: "12 yrs",
    certifications: ["USAW L2", "NSCA-CSCS"],
  },
  {
    id: "elena-vargas",
    name: "Elena Vargas",
    role: "Conditioning Coach",
    icon: Flame,
    specialties: ["MetCon", "HIIT", "Fat Loss"],
    bio: "Elena designs conditioning that never feels repeated — her circuits are famous for making the clock the hardest part.",
    experience: "9 yrs",
    certifications: ["NASM-CPT", "Precision Nutrition"],
  },
  {
    id: "daniel-osei",
    name: "Daniel Osei",
    role: "Combat Coach",
    icon: Swords,
    specialties: ["Boxing", "Kickboxing", "Pad Work"],
    bio: "A former amateur boxer, Daniel translates ring discipline into conditioning that builds real fight fitness.",
    experience: "10 yrs",
    certifications: ["USA Boxing Coach", "First Aid/CPR"],
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "Wellness & Recovery Coach",
    icon: HeartPulse,
    specialties: ["Mobility", "Breathwork", "Injury Prevention"],
    bio: "Priya's sessions are the reason PulseForge members recover faster and train longer without breaking down.",
    experience: "7 yrs",
    certifications: ["FRC Mobility Specialist", "Yoga Alliance RYT-200"],
  },
  {
    id: "jonas-kessler",
    name: "Jonas Kessler",
    role: "Endurance Coach",
    icon: Bike,
    specialties: ["Cycling", "Running", "Zone Training"],
    bio: "Jonas coaches endurance athletes toward events all year — his cycling classes are the toughest 45 minutes in the gym.",
    experience: "8 yrs",
    certifications: ["USA Cycling Coach", "Ironman Certified Coach"],
  },
  {
    id: "amara-diallo",
    name: "Amara Diallo",
    role: "Personal Training Lead",
    icon: Wind,
    specialties: ["1:1 Coaching", "Body Recomposition", "Habit Design"],
    bio: "Amara leads the personal training team, matching new members with coaches and building programs that actually stick.",
    experience: "11 yrs",
    certifications: ["ACE-CPT", "Behavioral Coaching Cert"],
  },
];
