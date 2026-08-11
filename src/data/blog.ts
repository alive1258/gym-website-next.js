import {
  Salad,
  Timer,
  BedDouble,
  BicepsFlexed,
  Brain,
  Activity,
  type LucideIcon,
} from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: LucideIcon;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "progressive-overload-explained",
    title: "Progressive Overload, Explained Simply",
    excerpt:
      "The single most important principle in strength training — and how to apply it without overcomplicating your program.",
    category: "Strength",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    icon: BicepsFlexed,
    featured: true,
  },
  {
    id: "2",
    slug: "protein-timing-myths",
    title: "Protein Timing: What Actually Matters",
    excerpt:
      "The 'anabolic window' isn't what fitness culture made it out to be. Here's what the research really says.",
    category: "Nutrition",
    date: "Jul 14, 2026",
    readTime: "5 min read",
    icon: Salad,
  },
  {
    id: "3",
    slug: "why-you-need-a-deload-week",
    title: "Why You Need a Deload Week",
    excerpt:
      "Training hard every week without a break is the fastest way to stall progress. Here's how to program recovery.",
    category: "Recovery",
    date: "Jun 30, 2026",
    readTime: "4 min read",
    icon: Timer,
  },
  {
    id: "4",
    slug: "sleep-and-performance",
    title: "Sleep Is Your Most Underrated PR",
    excerpt:
      "Poor sleep quietly undoes weeks of good training. Practical steps to protect the recovery you're not seeing.",
    category: "Recovery",
    date: "Jun 18, 2026",
    readTime: "7 min read",
    icon: BedDouble,
  },
  {
    id: "5",
    slug: "training-motivation-that-lasts",
    title: "Building Motivation That Outlasts January",
    excerpt:
      "Motivation fades — systems don't. How to design a training habit that survives a bad week.",
    category: "Mindset",
    date: "Jun 2, 2026",
    readTime: "5 min read",
    icon: Brain,
  },
  {
    id: "6",
    slug: "heart-rate-zones-for-fat-loss",
    title: "Heart Rate Zones for Fat Loss, Demystified",
    excerpt:
      "Zone 2 isn't magic, but it isn't hype either. A clear breakdown of when — and why — to train at each intensity.",
    category: "Cardio",
    date: "May 20, 2026",
    readTime: "6 min read",
    icon: Activity,
  },
];

export const blogCategories = [
  "All",
  "Strength",
  "Nutrition",
  "Recovery",
  "Mindset",
  "Cardio",
];
