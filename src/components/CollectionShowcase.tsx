import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";

const collections = [
  {
    name: "Eid Collections",
    description: "Celebrate with elegance. Emerald greens, golds, and jewel tones perfect for your special day.",
    image: "/assets/collections/eid.jpg",
    link: "/shop",
    featured: true,
  },
  {
    name: "Occasion Wear",
    description: "From weddings to celebrations. Bespoke and ready-to-wear pieces for life's milestone moments.",
    image: "/assets/collections/occasion.jpg",
    link: "/shop",
  },
  {
    name: "Everyday Elegance",
    description: "Premium kaftans and abayas for work, shopping, and all-day comfort without compromise.",
    image: "/assets/collections/everyday.jpg",
    link: "/shop",
  },
  {
    name: "Curated Sets",
    description: "Pre-styled looks that work together. Take the guesswork out of modest fashion.",
    image: "/assets/collections/sets.jpg",
    link: "/shop",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hello StylenStitches, I need help choosing the right collection. My height, preferred fit, and occasion are:"
);

export function CollectionShowcase() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12" style={{ background: "white" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="max-w-[1400px] mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-8 md:mb-10 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <span className="label-eyebrow">Curated Edits</span>
            <h2
              className="text-[32px] md:text-[48px] mt-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
            >
              Shop by Collection
            </h2>
          </div>

          <div
            className="p-5 md:p-6 rounded-lg"
            style={{
              background: "var(--cream)",
              border: "0.5px solid var(--linen)",
              boxShadow: "0 18px 48px -36px rgba(26,18,16,0.4)",
            }}
          >
            <div className="flex gap-4">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--ink)", color: "var(--cream)" }}
              >
                <MessageCircle size={17} strokeWidth={1.4} />
              </span>
              <div>
                <p
                  className="text-[10px] tracking-[3px] uppercase"
                  style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
                >
                  Need help choosing?
                </p>
                <p className="mt-2 text-[13px]" style={{ color: "var(--taupe)", lineHeight: 1.75 }}>
                  Send your height, preferred fit, and occasion. We will recommend the best collection before you order.
                </p>
                <a
                  href={`https://wa.me/2347015507217?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[3px] uppercase group"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                >
                  Chat on WhatsApp
                  <ArrowRight size={14} strokeWidth={1.2} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {collections.map((collection, index) => (
            <motion.a
              key={index}
              href={collection.link}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                collection.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: collection.featured ? "2/1" : "1/1" }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${collection.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3
                  className="text-[24px] md:text-[32px] mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  {collection.name}
                </h3>
                <p className="text-[13px] opacity-90" style={{ color: "white", lineHeight: 1.6 }}>
                  {collection.description}
                </p>
                <div className="mt-4 inline-block">
                  <span
                    className="text-[11px] tracking-[3px] uppercase"
                    style={{ color: "white", fontFamily: "var(--font-body)" }}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
