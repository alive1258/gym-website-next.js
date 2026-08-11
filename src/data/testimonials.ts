export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Member since 2022",
    quote:
      "I've joined three gyms in this city. PulseForge is the first one where the coaches actually watch your form instead of scrolling their phones.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Whitfield",
    role: "Member since 2023",
    quote:
      "The programming is honest — no fluff, no gimmicks. I hit a 405lb deadlift eight months after walking in unable to do a bodyweight squat.",
    rating: 5,
  },
  {
    id: "3",
    name: "Aisha Rahman",
    role: "Member since 2021",
    quote:
      "The community here is what keeps me coming back at 6am. Everyone from beginners to competitive lifters trains in the same room.",
    rating: 5,
  },
  {
    id: "4",
    name: "Tom Bakker",
    role: "Member since 2024",
    quote:
      "Signed up for the free trial class expecting to feel out of place. Left with a program, a coach, and a plan. Never looked back.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do I need experience to join?",
    answer:
      "Not at all. Every new member starts with a free assessment and a coach-guided orientation, regardless of experience level.",
  },
  {
    question: "What should I bring on my first visit?",
    answer:
      "Just workout clothes, shoes, and a water bottle. We provide towels, mats, and all training equipment.",
  },
  {
    question: "Are personal trainers included?",
    answer:
      "Group classes and gym floor coaching are included in every plan. 1:1 personal training is included in the Performance plan or available as an add-on.",
  },
  {
    question: "Can I try before I commit?",
    answer:
      "Yes — every new visitor gets one free class and a full facility tour before choosing a plan.",
  },
];
