import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import ProductsGrid from "@/src/components/sections/shop/ProductsGrid";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse PulseForge apparel, supplements, equipment, and accessories — filter by category to find your gear.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Gym Shop"
        title="Gear for every session."
        description="Apparel, supplements, equipment, and accessories — picked by our coaching staff, available in-store."
      />
      <ProductsGrid />
      <CtaBanner
        tone="raised"
        title="Available in-store today."
        description="Stop by the front desk or send us a message to check stock, sizing, or bulk orders."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Membership"
        secondaryHref="/pricing"
      />
    </>
  );
}
