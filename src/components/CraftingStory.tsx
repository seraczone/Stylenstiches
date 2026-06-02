import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";

export function CraftingStory() {
  const steps = [
    {
      number: "01",
      title: "Design",
      description: "Every silhouette is thoughtfully designed to celebrate the modern modest woman. Sketches are refined with feedback from our community.",
      image: "/assets/process/design.jpg",
    },
    {
      number: "02",
      title: "Fabric Selection",
      description: "We source premium fabrics globally—Egyptian cotton, Italian linen, French chiffon. Each fabric is chosen for quality, breathability, and longevity.",
      image: "/assets/process/fabric.jpg",
    },
    {
      number: "03",
      title: "Hand Cutting",
      description: "Our master cutters measure and cut with precision using time-honored techniques. Every centimeter matters for the perfect fit.",
      image: "/assets/process/cutting.jpg",
    },
    {
      number: "04",
      title: "Stitching",
      description: "Expert seamstresses hand-stitch each seam with care. This meticulous work ensures durability and a luxury finish.",
      image: "/assets/process/stitching.jpg",
    },
    {
      number: "05",
      title: "Embellishment",
      description: "When featured, beadwork, embroidery, and details are applied by hand. Each piece becomes a wearable work of art.",
      image: "/assets/process/embellishment.jpg",
    },
    {
      number: "06",
      title: "Final Inspection",
      description: "Every piece undergoes rigorous quality checks before packaging. We stand behind the excellence of our work.",
      image: "/assets/process/inspection.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12" style={{ background: "var(--cream)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="max-w-[1400px] mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2
            className="text-[32px] md:text-[48px] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
          >
            The Crafting Process
          </h2>
          <p
            className="text-[14px] max-w-2xl mx-auto"
            style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}
          >
            Every StylenStitches piece is handmade with intention. Here's how we bring your garment to life.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div>
                <span
                  className="text-[48px] font-light"
                  style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-[24px] md:text-[32px] mt-2 mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px]"
                  style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}
                >
                  {step.description}
                </p>
              </div>

              <div
                className="aspect-square rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  order: index % 2 === 1 ? -1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-20 p-12 rounded-lg text-center"
          style={{ background: "white", borderTop: "2px solid var(--linen)" }}
        >
          <h3
            className="text-[20px] md:text-[24px] mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--ink)" }}
          >
            This is Why It Matters
          </h3>
          <p className="text-[14px] max-w-3xl mx-auto" style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}>
            In a world of mass production, we choose the slower path. Hand-crafted means your piece is made with intention, care, and respect for the artisans who create it. Every StylenStitches garment is built to last years, not seasons.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
