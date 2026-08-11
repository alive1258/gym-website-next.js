import type { Metadata } from "next";
import Hero from "@/src/components/sections/home/Hero";
import Marquee from "@/src/components/sections/home/Marquee";
import ProgramsPreview from "@/src/components/sections/home/ProgramsPreview";
import VideoCarousel from "@/src/components/sections/home/VideoCarousel";
import WhyUs from "@/src/components/sections/home/WhyUs";
import TrainersPreview from "@/src/components/sections/home/TrainersPreview";
import ShopPreview from "@/src/components/sections/home/ShopPreview";
import PhotoGallery from "@/src/components/sections/home/PhotoGallery";
import Testimonials from "@/src/components/sections/home/Testimonials";
import PricingPreview from "@/src/components/sections/home/PricingPreview";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProgramsPreview />
      <VideoCarousel />
      <WhyUs />
      <TrainersPreview />
      <ShopPreview />
      <PhotoGallery />
      <Testimonials />
      <PricingPreview />
      <CtaBanner
        title="Your first session is free."
        description="Walk in, meet a coach, and see what real programming feels like. No pressure, no pitch."
      />
    </>
  );
}
