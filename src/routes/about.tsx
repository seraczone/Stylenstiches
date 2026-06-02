import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CraftingStory } from "@/components/CraftingStory";
import { fadeUp, stagger, slideLeft, slideRight, inView } from "@/lib/animations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story - StylenStitches" },
      { name: "description", content: "Learn about StylenStitches, our craftsmanship, and our mission to celebrate modest fashion." },
      { property: "og:title", content: "Our Story - StylenStitches" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
            Our Story
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[16px] md:text-[18px] max-w-2xl mx-auto"
            style={{ color: "var(--warm-gray)", lineHeight: 2 }}
          >
            StylenStitches exists to celebrate the modern woman who values modesty without compromising on elegance, quality, and personal expression.
          </motion.p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={slideLeft}
          >
            <div
              className="aspect-square rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url(/assets/about-founder.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={slideRight}
          >
            <h2
              className="text-[32px] md:text-[48px] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
            >
              Born in Abuja
            </h2>
            <div style={{ color: "var(--warm-gray)", lineHeight: 2 }}>
              <p className="mb-4 text-[14px] md:text-[15px]">
                StylenStitches was founded with a simple belief: every woman deserves to feel beautiful and confident in her own skin. What started as a passion project in a small Abuja atelier has grown into a movement.
              </p>
              <p className="mb-4 text-[14px] md:text-[15px]">
                We work exclusively with skilled local artisans, honoring the rich tradition of Nigerian textile craftsmanship. Each piece is cut, sewn, and finished with meticulous attention to detail, using premium fabrics sourced globally.
              </p>
              <p className="text-[14px] md:text-[15px]">
                Our mission? To prove that modest fashion can be luxurious, editorial, and utterly empowering.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Craftsmanship Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" style={{ background: "white" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-[1400px] mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[32px] md:text-[48px] text-center mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
          >
            The Craftsmanship
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Design",
                description: "Every design begins with a vision—celebrating the beauty of modest fashion through silhouettes that flatter, colors that inspire, and details that delight.",
              },
              {
                title: "Fabric Selection",
                description: "We source premium fabrics from trusted suppliers worldwide, ensuring breathability, durability, and that unmistakable luxury feel against the skin.",
              },
              {
                title: "Hand Finishing",
                description: "From hand-stitched seams to carefully placed beadwork, our artisans bring each piece to life with precision and pride.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ background: "var(--parchment)" }}
                >
                  <span
                    className="text-[20px] font-semibold"
                    style={{ color: "var(--dusty-gold)" }}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3
                  className="text-[16px] font-semibold mb-4"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px]" style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <CraftingStory />

      {/* Values Section */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-[1400px] mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[32px] md:text-[48px] text-center mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                value: "Quality",
                text: "We never compromise. Premium fabrics, expert craftsmanship, and rigorous quality checks ensure every piece is perfect.",
              },
              {
                value: "Authenticity",
                text: "Our designs celebrate Nigerian heritage while embracing global fashion sensibilities. We stay true to our roots.",
              },
              {
                value: "Sustainability",
                text: "We care for the planet and our people. Fair wages, ethical sourcing, and responsible production are non-negotiable.",
              },
              {
                value: "Empowerment",
                text: "Fashion is a tool for self-expression. We empower women to dress their truth—modestly, confidently, beautifully.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="p-8 rounded-lg" style={{ background: "var(--warm-white)" }}>
                <h3
                  className="text-[18px] font-semibold mb-4"
                  style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
                >
                  {item.value}
                </h3>
                <p className="text-[14px]" style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}>
                  {item.text}
                </p>
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
            Experience the Difference
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[16px] mb-10 opacity-90"
            style={{ lineHeight: 1.8 }}
          >
            Visit our atelier in Wuse 2, Abuja, or explore our collections online. Every piece tells a story of craftsmanship, care, and celebration.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="/shop"
            className="inline-block px-10 py-4 text-[12px] tracking-[3px] uppercase rounded"
            style={{ background: "var(--cream)", color: "var(--ink)", fontFamily: "var(--font-body)" }}
          >
            Shop Our Collections
          </motion.a>
        </motion.div>
      </section>
    </div>
    </Layout>
  );
}
