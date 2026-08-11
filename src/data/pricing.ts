export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "drop-in",
    name: "Drop-In",
    monthlyPrice: 29,
    yearlyPrice: 299,
    description: "For occasional training and out-of-town visits.",
    features: [
      "Full gym floor access",
      "1 class credit / visit",
      "Locker room access",
      "No commitment",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    id: "member",
    name: "Member",
    monthlyPrice: 79,
    yearlyPrice: 799,
    description: "Unlimited training for people who show up regularly.",
    features: [
      "Unlimited gym floor access",
      "Unlimited group classes",
      "Free fitness assessment",
      "Member app + tracking",
      "Guest pass ×2 / month",
    ],
    popular: true,
    cta: "Join PulseForge",
  },
  {
    id: "performance",
    name: "Performance",
    monthlyPrice: 149,
    yearlyPrice: 1499,
    description: "Full access plus dedicated coaching for serious progress.",
    features: [
      "Everything in Member",
      "2 personal training sessions / month",
      "Custom programming",
      "Nutrition check-ins",
      "Priority class booking",
      "Recovery suite access",
    ],
    popular: false,
    cta: "Go Performance",
  },
];

export const pricingFaqs = [
  {
    question: "Can I freeze or cancel my membership?",
    answer:
      "Yes. Freeze up to two months a year at no cost, or cancel anytime with 14 days' notice — no lock-in contracts.",
  },
  {
    question: "Is there a joining fee?",
    answer:
      "No hidden fees. The price you see monthly or yearly is the price you pay from day one.",
  },
  {
    question: "Do you offer a trial?",
    answer:
      "Every new member gets one free trial class and a facility tour before committing to a plan.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely — upgrade or downgrade anytime from your member dashboard, effective the next billing cycle.",
  },
];
