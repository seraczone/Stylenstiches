import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { fadeUp, stagger, inView } from "@/lib/animations";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - StylenStitches" },
      { name: "description", content: "Frequently asked questions about StylenStitches, sizing, bespoke orders, fabric care, and shipping." },
      { property: "og:title", content: "FAQ - StylenStitches" },
    ],
  }),
  component: FAQPage,
});

interface FAQItem {
  category: string;
  questions: Array<{
    q: string;
    a: string;
  }>;
}

const faqData: FAQItem[] = [
  {
    category: "Sizing & Fit",
    questions: [
      {
        q: "How do I know my size?",
        a: "Each product has detailed size charts. We recommend measuring yourself and comparing to our charts. Our Abuja atelier staff are also available via WhatsApp for personalized sizing help.",
      },
      {
        q: "Can I exchange or return items?",
        a: "Yes! We offer hassle-free returns and exchanges within 14 days of delivery. Items must be unworn and in original condition. Contact us to initiate a return.",
      },
      {
        q: "What's your return shipping policy?",
        a: "For defects or sizing issues, we cover return shipping. For other returns, customers cover shipping costs. We'll email you a prepaid label for easy return.",
      },
      {
        q: "Do you offer free delivery?",
        a: "Yes! Free delivery on orders over NGN 50,000 within Abuja. Orders under this amount have a flat delivery fee of NGN 2,500.",
      },
    ],
  },
  {
    category: "Bespoke & Customization",
    questions: [
      {
        q: "What is the bespoke process?",
        a: "Bespoke orders go through three phases: Consultation (discuss your vision), Creation (our artisans design and construct), and Wear (you rock your custom piece!). Turnaround is typically 4-6 weeks.",
      },
      {
        q: "How much do bespoke pieces cost?",
        a: "Bespoke pricing varies based on complexity, fabric choice, and embellishments. Consultation starts at NGN 50,000 with deposits required. We'll provide exact quotes after your consultation.",
      },
      {
        q: "Can I customize colors and fabrics?",
        a: "Absolutely! This is where bespoke shines. Choose from our premium fabric library or bring your own. Select any color combination you desire.",
      },
      {
        q: "How do I book a bespoke consultation?",
        a: "Fill out our Bespoke Request Form on the website, or WhatsApp us directly at +2347015507217. We'll schedule a call or in-person visit at our Abuja atelier.",
      },
    ],
  },
  {
    category: "Fabric & Care",
    questions: [
      {
        q: "What fabrics do you use?",
        a: "We use premium fabrics including Egyptian cotton, Italian linen, French chiffon, and luxury blends. All fabrics are chosen for quality, breathability, and longevity.",
      },
      {
        q: "How should I care for my StylenStitches piece?",
        a: "Each garment comes with detailed care instructions. Most items are hand-wash or gentle machine wash. We recommend air-drying to maintain fabric integrity. See our Fabric Care Guide for detailed tips.",
      },
      {
        q: "Are your fabrics sustainable?",
        a: "We prioritize sustainable sourcing where possible. We work with suppliers who follow ethical practices. We're committed to reducing our environmental impact.",
      },
    ],
  },
  {
    category: "Shopping & Orders",
    questions: [
      {
        q: "Do you ship internationally?",
        a: "Currently, we deliver within Abuja with fast dispatch (ready-to-wear ships within 48 hours). We're expanding international shipping soon. Contact us for details.",
      },
      {
        q: "How long does delivery take?",
        a: "Abuja deliveries arrive within 2-3 business days. You'll receive tracking information via email and WhatsApp.",
      },
      {
        q: "Can I place orders via WhatsApp?",
        a: "Yes! Our team loves helping via WhatsApp. Message us at +2347015507217 with your questions, style preferences, or order requests.",
      },
      {
        q: "Do you have a physical store?",
        a: "Our atelier is located at Plot 14, Aminu Kano Crescent, Wuse 2, Abuja. Open by appointment only. Book a visit for personal styling and bespoke consultations.",
      },
    ],
  },
  {
    category: "Modest Fashion & StylenStitches",
    questions: [
      {
        q: "What is modest fashion?",
        a: "Modest fashion celebrates dressing in a way that feels true to you—typically with longer hemlines, covered shoulders, and layers. It's about confidence, not compromise.",
      },
      {
        q: "Is StylenStitches only for Muslim women?",
        a: "No! Our pieces are designed for all women who value modesty, elegance, and quality. Our community includes women of all faiths and backgrounds.",
      },
      {
        q: "Can I style your pieces multiple ways?",
        a: "Absolutely! Our designs are versatile. Layer kaftans with statement belts, pair abayas with different accessories, and experiment. Each piece works across multiple occasions.",
      },
      {
        q: "Why choose StylenStitches?",
        a: "We combine luxury with modesty, editorial vision with wearability, and quality craftsmanship with competitive pricing. Every piece celebrates the modern woman.",
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      <h3
        className="text-[18px] font-semibold mb-6"
        style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
      >
        {item.category}
      </h3>
      <div className="space-y-4">
        {item.questions.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg transition-all duration-300"
            style={{ borderColor: "var(--linen)", background: expanded === index ? "white" : "transparent" }}
          >
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left"
            >
              <span
                className="text-[14px] font-medium"
                style={{ color: "var(--ink)" }}
              >
                {faq.q}
              </span>
              <ChevronDown
                size={18}
                style={{
                  color: "var(--dusty-gold)",
                  transform: expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
            {expanded === index && (
              <div className="px-6 pb-4 border-t" style={{ borderColor: "var(--linen)" }}>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--warm-gray)" }}
                >
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQPage() {
  return (
    <Layout>
      <div style={{ background: "var(--cream)" }}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[48px] md:text-[64px] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[16px] md:text-[18px] max-w-2xl mx-auto"
            style={{ color: "var(--warm-gray)", lineHeight: 2 }}
          >
            Everything you need to know about StylenStitches, our products, and our services.
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 md:pb-32 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-16">
            {faqData.map((section, index) => (
              <motion.div key={index} variants={fadeUp}>
                <FAQAccordion item={section} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" style={{ background: "var(--ink)", color: "var(--cream)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[32px] md:text-[48px] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[16px] mb-10 opacity-90"
            style={{ lineHeight: 1.8 }}
          >
            Our team is here to help. Reach out via WhatsApp, email, or visit our atelier in person.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="/contact"
            className="inline-block px-10 py-4 text-[12px] tracking-[3px] uppercase rounded"
            style={{ background: "var(--cream)", color: "var(--ink)", fontFamily: "var(--font-body)" }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
    </div>
    </Layout>
  );
}
