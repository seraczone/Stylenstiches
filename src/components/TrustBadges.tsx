import { motion } from "framer-motion";
import { Check, Truck, Shield, Leaf } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";

const badges = [
  {
    icon: Check,
    title: "Handcrafted Quality",
    description: "Each piece is meticulously cut, sewn, and finished by skilled artisans in Abuja.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free delivery on orders over NGN 50,000. Ready-to-wear ships within 48 hours.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your payment information is protected. Easy returns within 14 days.",
  },
  {
    icon: Leaf,
    title: "Ethical Fashion",
    description: "We believe in sustainable practices and fair wages for our artisans.",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--warm-white)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <motion.div key={index} variants={fadeUp} className="text-center">
              <Icon
                size={32}
                style={{ color: "var(--dusty-gold)", margin: "0 auto 12px" }}
                strokeWidth={1.2}
              />
              <h3
                className="text-[13px] font-semibold mb-2"
                style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
              >
                {badge.title}
              </h3>
              <p
                className="text-[11px]"
                style={{ color: "var(--warm-gray)", lineHeight: 1.6 }}
              >
                {badge.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
