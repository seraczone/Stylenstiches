import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { fadeUp, stagger, inView } from "@/lib/animations";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook - StylenStitches" },
      { name: "description", content: "Styled moments and editorial looks from StylenStitches. Discover how to style our pieces for every occasion." },
      { property: "og:title", content: "Lookbook - StylenStitches" },
    ],
  }),
  component: LookbookPage,
});

interface Look {
  id: number;
  name: string;
  occasion: string;
  description: string;
  image: string;
  pieces: string[];
}

const looks: Look[] = [
  {
    id: 1,
    name: "The Eid Edit",
    occasion: "Eid Celebration",
    description: "Emerald elegance meets understated luxury. Paired with gold accessories and signature grace.",
    image: "/assets/lookbook/eid-edit.jpg",
    pieces: ["Noor Abaya", "Gold Heels", "Statement Earrings"],
  },
  {
    id: 2,
    name: "Bridal Bliss",
    occasion: "Wedding",
    description: "A custom bespoke kaftan that transforms the bride into royalty. Hand-embroidered details tell a love story.",
    image: "/assets/lookbook/bridal.jpg",
    pieces: ["Custom Bridal Kaftan", "Pearl Accessories", "Gold Jewelry"],
  },
  {
    id: 3,
    name: "Corporate Chic",
    occasion: "Professional",
    description: "Tailored and sophisticated. Modest fashion that commands respect in the boardroom.",
    image: "/assets/lookbook/corporate.jpg",
    pieces: ["Structured Abaya", "Neutral Tones", "Minimal Jewelry"],
  },
  {
    id: 4,
    name: "Casual Elegance",
    occasion: "Everyday",
    description: "Effortlessly chic. Comfort meets style in pieces you'll reach for again and again.",
    image: "/assets/lookbook/casual.jpg",
    pieces: ["Premium Kaftan", "Comfortable Fit", "Versatile Colors"],
  },
  {
    id: 5,
    name: "Evening Grace",
    occasion: "Formal Event",
    description: "Dinner party perfection. Sophisticated and show-stopping, without compromise.",
    image: "/assets/lookbook/evening.jpg",
    pieces: ["Evening Abaya", "Beaded Details", "Gold Accessories"],
  },
  {
    id: 6,
    name: "Travel Ready",
    occasion: "Adventure",
    description: "Jet-setting in style. Beautiful, comfortable, and practical for the modern traveler.",
    image: "/assets/lookbook/travel.jpg",
    pieces: ["Lightweight Pieces", "Neutral Palette", "Easy Care Fabrics"],
  },
];

function LookbookPage() {
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
            The Lookbook
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[16px] md:text-[18px] max-w-2xl mx-auto"
            style={{ color: "var(--warm-gray)", lineHeight: 2 }}
          >
            Styled moments that capture the essence of StylenStitches. Discover how our pieces transform your wardrobe and elevate your presence.
          </motion.p>
        </motion.div>
      </section>

      {/* Lookbook Grid */}
      <section className="pb-20 md:pb-32 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-[1400px] mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {looks.map((look, index) => (
              <motion.div
                key={look.id}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div
                  className="relative overflow-hidden aspect-[3/4] rounded-lg mb-6"
                  style={{
                    backgroundImage: `url(${look.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div style={{ background: "rgba(26, 18, 16, 0.95)", color: "var(--cream)", padding: "24px", borderRadius: "8px", width: "100%" }}>
                      <p className="text-[11px] tracking-[3px] uppercase mb-2" style={{ fontFamily: "var(--font-body)" }}>
                        {look.occasion}
                      </p>
                      <p className="text-[13px] leading-relaxed">{look.description}</p>
                    </div>
                  </div>
                </div>

                <h3
                  className="text-[20px] md:text-[24px] mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--ink)" }}
                >
                  {look.name}
                </h3>
                <p className="text-[12px] mb-4" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-body)" }}>
                  {look.occasion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {look.pieces.map((piece, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-3 py-1 rounded"
                      style={{ background: "white", color: "var(--ink)", fontFamily: "var(--font-body)" }}
                    >
                      {piece}
                    </span>
                  ))}
                </div>
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
            Find Your Perfect Piece
          </motion.h2>
          <motion.a
            variants={fadeUp}
            href="/shop"
            className="inline-block px-10 py-4 text-[12px] tracking-[3px] uppercase rounded"
            style={{ background: "var(--cream)", color: "var(--ink)", fontFamily: "var(--font-body)" }}
          >
            Shop Now
          </motion.a>
        </motion.div>
      </section>
    </div>
    </Layout>
  );
}
