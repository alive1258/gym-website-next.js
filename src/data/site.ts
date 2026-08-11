export const siteConfig = {
  name: "PulseForge",
  tagline: "Train Harder. Recover Smarter.",
  description:
    "A strength and conditioning gym built around real coaching, honest programming, and a community that shows up.",
  phone: "+1 (555) 204-7788",
  email: "hello@pulseforge.gym",
  address: "482 Ironworks Ave, Austin, TX 78701",
  hours: [
    { days: "Mon – Fri", time: "5:00 AM – 10:00 PM" },
    { days: "Saturday", time: "7:00 AM – 8:00 PM" },
    { days: "Sunday", time: "8:00 AM – 6:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Shop", href: "/shop" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 12, suffix: "+", label: "Years Running" },
  { value: 3200, suffix: "+", label: "Active Members" },
  { value: 40, suffix: "+", label: "Weekly Classes" },
  { value: 98, suffix: "%", label: "Member Retention" },
] as const;
