import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import FeaturedPost from "@/src/components/sections/blog/FeaturedPost";
import BlogGrid from "@/src/components/sections/blog/BlogGrid";
import Newsletter from "@/src/components/sections/blog/Newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Training tips, nutrition guidance, and recovery advice from the PulseForge coaching team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Coaching insight, no fluff."
        description="Straight-talk articles on strength, nutrition, recovery, and mindset — written by the coaches who train our members."
      />
      <FeaturedPost />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
