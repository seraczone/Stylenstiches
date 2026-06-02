import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";

interface ProductFAQProps {
  productName?: string;
}

const productFAQs = [
  {
    q: "What's the best way to care for this piece?",
    a: "Hand wash in cool water with mild detergent. Avoid bleach and harsh chemicals. Air dry flat or hang to dry. Iron on low heat if needed. See care tag for specific instructions.",
  },
  {
    q: "Can I return this if the fit isn't right?",
    a: "Yes! We offer 14-day returns on unworn items in original condition. If there's a sizing issue, we'll cover return shipping. Contact us to start the return process.",
  },
  {
    q: "Is this piece true to size?",
    a: "Our pieces run true to size based on our detailed size charts. However, fit can be subjective. Check the measurements provided and compare them to a piece you already own that fits well.",
  },
  {
    q: "How long does delivery take?",
    a: "Abuja deliveries arrive within 2-3 business days. You'll receive tracking information via email and WhatsApp. For ready-to-wear, we typically ship within 48 hours.",
  },
  {
    q: "Can I customize the color or fabric?",
    a: "For ready-to-wear pieces, colors are as shown. For custom orders and bespoke pieces, absolutely! We offer complete customization. Book a bespoke consultation to explore options.",
  },
  {
    q: "Is this piece available in other colors?",
    a: "Check the color swatches shown on the product page. If you don't see your preferred color, feel free to message us on WhatsApp—we may have it in stock or can help with a custom order.",
  },
];

function ProductFAQItem({ question, answer }: { question: string; answer: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border rounded-lg transition-all duration-300 overflow-hidden"
      style={{ borderColor: "var(--linen)", background: expanded ? "white" : "transparent" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex justify-between items-center text-left"
      >
        <span className="text-[13px] font-medium" style={{ color: "var(--ink)" }}>
          {question}
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "var(--dusty-gold)",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      {expanded && (
        <div className="px-6 pb-4 border-t" style={{ borderColor: "var(--linen)" }}>
          <p className="text-[12px] leading-relaxed" style={{ color: "var(--warm-gray)" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function ProductFAQ({ productName }: ProductFAQProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
    >
      <h3
        className="text-[16px] font-semibold mb-6"
        style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
      >
        Product Questions
      </h3>

      <div className="space-y-3">
        {productFAQs.map((faq, index) => (
          <motion.div key={index} variants={fadeUp}>
            <ProductFAQItem question={faq.q} answer={faq.a} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
