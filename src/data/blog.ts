export interface BlogSection {
  heading?: string;
  body: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  featured?: boolean;
  sections: BlogSection[];
}

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1600&q=80`;

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
    image: unsplash("1646492169621-d8da8016354a"),
    author: "Marcus Reed, Head Strength Coach",
    featured: true,
    sections: [
      {
        body: "If you strip away every trend, every program template, and every piece of equipment, one principle is still doing all the work: progressive overload. It's the reason a beginner squat program works, the reason powerlifters peak for a meet, and the reason your first six months of training produced faster results than the two years after that.",
      },
      {
        heading: "What progressive overload actually means",
        body: "Progressive overload is simply giving your body a reason to adapt. Muscle, connective tissue, and your nervous system only get stronger when they're asked to handle more than they're currently used to — more weight, more reps, more sets, or the same work in less rest. Do the same workout forever and your body has no reason to change. It already can do that workout.",
      },
      {
        heading: "The simplest way to apply it",
        body: "You don't need a spreadsheet to start. Pick one variable at a time: add 2.5–5kg to a lift when every rep of every set is completed with good form, or add one rep per set before you add weight. Small, boring increases compound faster than ambitious jumps that force you to miss reps or break form.",
      },
      {
        heading: "Common mistakes",
        body: "The most common failure isn't going too slow — it's chasing overload on too many fronts at once. Adding weight, reps, and sets in the same week makes it impossible to tell what's actually working, and it's the fastest route to a stalled lift or a strained lower back. Change one thing, let your body prove it can handle it, then change the next.",
      },
      {
        heading: "The bottom line",
        body: "You don't need a new program every six weeks. You need the same core lifts, tracked honestly, with a small and consistent push each week. That's what our coaches actually watch for on the floor — not how much you lifted today, but whether today was harder than last week.",
      },
    ],
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
    image: unsplash("1670398564097-0762e1b30b3a"),
    author: "Elena Vargas, Conditioning Coach",
    sections: [
      {
        body: "For years, the advice was absolute: you had 30 minutes after training to get protein in, or you'd leave gains on the table. Members would chug a shake in the parking lot like the window was closing on them. It mostly isn't — and understanding why can take a lot of unnecessary stress out of your nutrition.",
      },
      {
        heading: "Where the 'anabolic window' myth came from",
        body: "Early research on post-workout nutrition studied fasted training — subjects who hadn't eaten in many hours. In that specific context, timing does matter more, because there's little protein circulating to support repair. Most people training in the evening after a normal day of eating aren't in that state at all.",
      },
      {
        heading: "What actually matters",
        body: "Total daily protein intake is the variable that predicts muscle growth and recovery, not the number of minutes after your last set. If you're hitting roughly 1.6–2.2g of protein per kg of bodyweight across the day, spread over 3–5 meals, the exact timing of any single meal has a small effect at most.",
      },
      {
        heading: "A simple framework",
        body: "Eat a protein-containing meal within a few hours of training, on either side — before or after, whichever fits your schedule. Beyond that, focus on hitting your daily total consistently. A shake is a convenient tool when you're short on time, not a requirement for progress.",
      },
    ],
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
    image: unsplash("1531403939386-c08a16cd7eef"),
    author: "Priya Nair, Wellness & Recovery Coach",
    sections: [
      {
        body: "Members are often surprised when a coach tells them to lift less. It feels backwards — you came here to work hard, not to back off. But a planned deload is one of the most productive weeks in any serious training block, and skipping it is a common reason progress stalls.",
      },
      {
        heading: "What a deload actually is",
        body: "A deload is a short, planned reduction in training volume or intensity — usually one week every 4 to 8 weeks — that lets your joints, connective tissue, and nervous system catch up to the fatigue that heavy training accumulates even when your muscles feel fine.",
      },
      {
        heading: "Signs you need one",
        body: "Watch for lifts that feel heavier than the number on the bar, sleep that isn't refreshing, nagging joint aches that don't resolve, or a workout you'd normally enjoy starting to feel like a chore. Any one of these on its own is normal; several stacking together is your body asking for a break.",
      },
      {
        heading: "How to program it",
        body: "The easiest approach is to cut your working weights by 40–50% for a week while keeping your normal sets and reps, or keep the same weight and cut your volume roughly in half. Either way, you're still training — just not creating new fatigue. Most people come out the other side lifting more than they did before.",
      },
    ],
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
    image: unsplash("1531353826977-0941b4779a1c"),
    author: "Priya Nair, Wellness & Recovery Coach",
    sections: [
      {
        body: "We spend a lot of time coaching bar path, breathing, and bracing. We spend almost no time asking members how they slept — and it might be the bigger lever. Sleep is when the actual adaptation from your training happens: tissue repair, hormone regulation, and memory consolidation for the skills you drilled that day.",
      },
      {
        heading: "Why sleep matters more than another set",
        body: "Growth hormone release, muscle protein synthesis, and glycogen replenishment all lean heavily on deep sleep. Cut sleep short and your body isn't just tired — it's actively worse at recovering from the session you just paid for with real effort.",
      },
      {
        heading: "What poor sleep costs you",
        body: "Research on sleep-restricted athletes shows slower reaction time, reduced strength output, and a measurable rise in perceived exertion — the same workout simply feels harder. Chronically short sleep is also linked to increased injury risk, because reaction time and coordination both suffer before you notice you're impaired.",
      },
      {
        heading: "Practical steps",
        body: "You don't need a perfect sleep routine, just a consistent one: a fixed wake time (even on weekends), caffeine cut off by early afternoon, and a dark, cool room. If you train early morning, protect your wind-down time the night before as seriously as you protect your warm-up.",
      },
    ],
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
    image: unsplash("1605296867304-46d5465a13f1"),
    author: "Amara Diallo, Personal Training Lead",
    sections: [
      {
        body: "Every January the gym fills up. By March, a good share of those new faces are gone — not because they failed, but because they were relying on motivation to carry them through months of consistency it was never built to sustain. Motivation is a spark. It's not a fuel source.",
      },
      {
        heading: "Motivation vs systems",
        body: "Motivation is a feeling, and feelings are unreliable by nature — they respond to sleep, stress, weather, and how your week at work went. A system doesn't ask how you feel. It's a default you fall back on: the days you train, the plan you follow, the person you meet at the gym. Systems keep working on the days motivation doesn't show up.",
      },
      {
        heading: "Three systems that hold up",
        body: "Fix your training days to specific times, not \"whenever works\" — vague plans are the easiest to skip. Train with someone else, even once a week; a standing appointment is harder to cancel than a solo plan. And track the streak, not the intensity — showing up on a bad day counts exactly as much toward the habit as a great session.",
      },
      {
        heading: "Start smaller than you think",
        body: "The members who last a year rarely started with the most ambitious plan. They started with something almost too easy to skip, and let consistency compound. Motivation gets you through week one. A system built smaller than your willpower gets you through the whole year.",
      },
    ],
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
    image: unsplash("1659366100463-9e29a63adcc2"),
    author: "Jonas Kessler, Endurance Coach",
    sections: [
      {
        body: "Zone 2 training has taken over fitness culture — and like most things that go viral, it's gotten a little confused along the way. It's not a fat-burning cheat code, and it isn't useless hype either. Understanding what each heart rate zone is actually doing makes it obvious when to use it.",
      },
      {
        heading: "The five zones, briefly",
        body: "Zone 1 (very light) is active recovery. Zone 2 (light-moderate, roughly 60–70% of max heart rate) is conversational-pace cardio you could sustain for an hour or more. Zone 3 (moderate) sits in an uncomfortable middle ground. Zone 4 (hard) is tempo and threshold work. Zone 5 (max effort) is sprints and intervals you can only hold for seconds to minutes.",
      },
      {
        heading: "Where fat loss actually happens",
        body: "It's true that your body burns a higher percentage of fat as fuel at Zone 2 intensities. But percentage isn't the same as total amount — a harder Zone 4 session burns more total calories, fat included, in the same time window. Fat loss ultimately comes down to a sustained calorie deficit, not which zone you trained in.",
      },
      {
        heading: "How to use this practically",
        body: "Zone 2 earns its reputation because it's sustainable — you can do a lot of it without wrecking your recovery for strength training, and it builds the aerobic base that makes every other intensity easier. Use it as your volume base, use Zone 4–5 intervals sparingly for a harder stimulus, and let your total weekly output — not a single zone — do the work.",
      },
    ],
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
