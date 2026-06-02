import { motion } from "framer-motion";
import { Star, Gift, Clock, Users } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";

const benefits = [
  {
    icon: Gift,
    title: "10% Welcome Discount",
    description: "On your first order with exclusive member codes",
  },
  {
    icon: Clock,
    title: "Drop Alerts",
    description: "Be the first to know when new collections launch",
  },
  {
    icon: Star,
    title: "VIP Access",
    description: "Members-only sales, events, and early access",
  },
  {
    icon: Users,
    title: "Exclusive Community",
    description: "Connect with StylenStitches enthusiasts worldwide",
  },
];

export function InnerCircleBenefits() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
    >
      <h3
        className="text-[16px] md:text-[18px] font-semibold mb-8 text-center"
        style={{ color: "white", fontFamily: "var(--font-body)" }}
      >
        The Inner Circle Includes:
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div key={index} variants={fadeUp} className="text-center">
              <Icon size={28} style={{ color: "var(--dusty-gold)", margin: "0 auto 12px" }} strokeWidth={1.5} />
              <h4 className="text-[12px] font-semibold mb-2" style={{ color: "white", fontFamily: "var(--font-body)" }}>
                {benefit.title}
              </h4>
              <p className="text-[11px]" style={{ color: "rgba(250,247,242,0.7)", lineHeight: 1.5 }}>
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
