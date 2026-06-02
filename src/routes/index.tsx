import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustBadges } from "@/components/TrustBadges";
import { InnerCircleBenefits } from "@/components/InnerCircleBenefits";
import { fadeUp, stagger, staggerFast, imageReveal, slideLeft, slideRight, inView } from "@/lib/animations";
import { products, categories } from "@/data/products";
import heroVideo from "@/assets/videos/hero-noor-look2.mp4";
import catKaftans from "@/assets/cat-kaftans.jpg";
import catAbayas from "@/assets/cat-abayas.jpg";
import catOccasion from "@/assets/cat-occasion.jpg";
import ed1 from "@/assets/ed-1.jpg";
import ed2 from "@/assets/ed-2.jpg";
import ed3 from "@/assets/ed-3.jpg";
import blueBubu from "@/assets/p-blue-bubu.jpg";
import blushBubu from "@/assets/p-blush-bubu.jpg";
import ashAbaya from "@/assets/p-ash-abaya.jpg";
import tiedye from "@/assets/p-tiedye.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StylenStitches - Dressed in Grace | Modest Luxury Fashion" },
      { name: "description", content: "Handcrafted kaftans, abayas & bespoke occasion wear from Abuja. Where modesty becomes a language of luxury." },
      { property: "og:title", content: "StylenStitches - Dressed in Grace" },
      { property: "og:description", content: "Handcrafted modest luxury fashion." },
    ],
  }),
  component: Home,
});

const tickerItems = [
  "Noor Al-Eid Collection - Now Available",
  "Free Delivery on Orders Over NGN 50,000",
  "Bespoke Orders: 2-3 Weeks Turnaround",
  "Limited Pieces - Order While Stock Lasts",
  "DM on Instagram or WhatsApp to Order",
];

function Home() {
  return (
    <Layout>
      <Hero />
      <Ticker />
      <CommercePromise />
      <Silhouettes />
      <Featured />
      <NoorSpotlight />
      <Editorial />
      <Newsletter />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden grain flex items-center justify-center">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,18,16,0.35) 0%, rgba(26,18,16,0.5) 60%, rgba(26,18,16,0.75) 100%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-[10px] tracking-[5px] uppercase mb-8"
          style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
        >
          Noor Al-Eid Collection 2026
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-[52px] md:text-[88px] lg:text-[108px] leading-[0.95] mb-8"
          style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          Look 2 in <em style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--dusty-gold)" }}>green</em>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-[13px] md:text-[15px] max-w-xl mx-auto mb-12"
          style={{ color: "rgba(250,247,242,0.75)", lineHeight: 1.9, fontWeight: 300 }}
        >
          A complete Eid-ready set with veil and inner, handcrafted for a graceful fit in sizes 54, 56, 58, and 60.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop" className="btn-primary" style={{ background: "var(--cream)", color: "var(--ink)" }}>
            Shop the Collection
          </Link>
          <Link to="/shop/$slug" params={{ slug: "noor-look-2-green" }} className="btn-ghost">
            View Look 2
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-[9px] tracking-[5px] uppercase"
          style={{ color: "rgba(250,247,242,0.6)", fontFamily: "var(--font-body)" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden" style={{ background: "rgba(250,247,242,0.2)" }}>
          <div className="w-full h-full scroll-line" style={{ background: "var(--dusty-gold)" }} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-6 md:right-12 hidden md:block"
      >
        <div
          className="px-5 py-4 backdrop-blur-md"
          style={{ background: "rgba(250,247,242,0.08)", border: "0.5px solid rgba(250,247,242,0.2)" }}
        >
          <p className="text-[9px] tracking-[3px] uppercase" style={{ color: "var(--dusty-gold)" }}>
            Now Available
          </p>
          <p
            className="text-[15px] mt-1"
            style={{ color: "var(--cream)", fontFamily: "var(--font-display)" }}
          >
            From NGN 35,999
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div
      className="py-4 overflow-hidden border-y"
      style={{ background: "var(--merlot)", borderColor: "rgba(0,0,0,0.05)" }}
    >
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[10px] tracking-[4px] uppercase mx-8 whitespace-nowrap"
            style={{ color: "rgba(250,247,242,0.85)", fontFamily: "var(--font-body)" }}
          >
          {item} <span style={{ color: "var(--dusty-gold)" }}>-</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CommercePromise() {
  const items = [
    { icon: Truck, title: "Fast Abuja Dispatch", text: "Local delivery and nationwide shipping arranged after confirmation." },
    { icon: Ruler, title: "Size Help", text: "Confirm length, size, and fit on WhatsApp before payment." },
    { icon: ShieldCheck, title: "Secure Checkout", text: "Orders are reviewed before checkout so every detail is correct." },
    { icon: CheckCircle2, title: "Limited Pieces", text: "Stock counts are shown early so buyers know what is still available." },
  ];

  return (
    <section className="px-6 md:px-12 py-8" style={{ background: "var(--cream)", borderBottom: "0.5px solid var(--linen)" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <Icon size={20} strokeWidth={1.3} style={{ color: "var(--dusty-gold)", flexShrink: 0, marginTop: 4 }} />
            <div>
              <p className="text-[11px] tracking-[3px] uppercase" style={{ fontFamily: "var(--font-body)", color: "var(--ink)" }}>
                {title}
              </p>
              <p className="mt-1 text-[12px]" style={{ color: "var(--taupe)", lineHeight: 1.6 }}>
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Silhouettes() {
  const catImages = [catKaftans, catAbayas, catOccasion];
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--parchment)" }}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={inView} variants={stagger} className="mb-16">
          <motion.span variants={fadeUp} className="label-eyebrow">Rooted in African Elegance</motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[36px] md:text-[58px] mt-6 max-w-2xl"
            style={{ color: "var(--ink)" }}
          >
            Shop by <em style={{ fontFamily: "var(--font-serif-italic)" }}>style</em>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={staggerFast}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} variants={imageReveal} className="group cursor-pointer">
              <Link to="/shop" className="block">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={catImages[i]}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10"
                    style={{ background: "rgba(26,18,16,0.35)" }}
                  >
                    <span
                      className="text-[10px] tracking-[3px] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2"
                      style={{ color: "var(--cream)", fontFamily: "var(--font-body)" }}
                    >
                      Explore <ArrowRight size={14} strokeWidth={1.2} />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex justify-between items-baseline">
                  <h3 className="text-[22px]" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
                    {cat.name}
                  </h3>
                  <span
                    className="text-[11px]"
                    style={{ color: "var(--warm-gray)", fontFamily: "var(--font-body)" }}
                  >
                    {cat.count} pieces
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="flex justify-between items-end mb-16 flex-wrap gap-6"
        >
          <div>
            <motion.span variants={fadeUp} className="label-eyebrow">Latest Drops</motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] md:text-[58px] mt-6"
              style={{ color: "var(--ink)" }}
            >
              The new <em style={{ fontFamily: "var(--font-serif-italic)" }}>arrivals</em>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              to="/shop"
              className="text-[11px] tracking-[3px] uppercase inline-flex items-center gap-2 group"
              style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
            >
              View All Pieces
              <ArrowRight size={14} strokeWidth={1.2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={staggerFast}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          {products.slice(0, 8).map((p, i) => (
            <ProductCard key={p.slug} product={p} revealDirection={i % 2 === 0 ? "left" : "right"} />
          ))}
        </motion.div>
      </div>
    </section>

    </>
  );
}

function NoorSpotlight() {
  const [size, setSize] = useState("Free");
  const sizes = ["54", "56", "58", "60", "Free"];
  const imgs = [blueBubu, blushBubu, ashAbaya, tiedye];
  const variants = [slideLeft, slideRight, slideLeft, slideRight];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" style={{ background: "var(--parchment)" }}>
      <div className="grid grid-cols-2 gap-1.5 p-6 lg:p-10">
        {imgs.map((src, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={variants[i]}
            transition={{ delay: i * 0.15 }}
            className="overflow-hidden aspect-[3/4]"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="flex items-center px-8 md:px-16 py-20"
      >
        <div>
          <motion.span variants={fadeUp} className="label-eyebrow">Eid Edit 2026</motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[40px] md:text-[56px] mt-6 mb-6"
            style={{ color: "var(--ink)" }}
          >
            Noor Al-Eid <em style={{ fontFamily: "var(--font-serif-italic)" }}>Collection</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[14px] mb-10 max-w-md"
            style={{ color: "var(--taupe)", lineHeight: 1.9 }}
          >
            Hand-placed broderie, liquid satin, and rosettes set by a steady hand - Eid pieces designed to be remembered.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-8">
            <p
              className="text-[9px] tracking-[5px] uppercase mb-3"
              style={{ color: "var(--warm-gray)", fontFamily: "var(--font-body)" }}
            >
              Select Size
            </p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className="text-[11px] tracking-[2px] uppercase px-5 py-2.5 transition-all"
                  style={{
                    background: size === s ? "var(--ink)" : "transparent",
                    color: size === s ? "var(--cream)" : "var(--ink)",
                    border: "0.5px solid var(--ink)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-baseline gap-3 mb-8">
            <span className="text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
              From NGN 35,999
            </span>
            <span className="text-[12px]" style={{ color: "var(--warm-gray)" }}>
              (includes inner & scarf)
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link to="/shop" className="btn-merlot">
              Shop Eid Edit
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <span className="text-[9px] tracking-[5px] uppercase" style={{ color: "var(--warm-gray)" }}>
              Colors
            </span>
            <div className="flex gap-2">
              {["#A8D0DE", "#E8C4B8", "#9E9287", "#8A9E8C"].map((c) => (
                <span
                  key={c}
                  className="w-5 h-5 rounded-full border"
                  style={{ background: c, borderColor: "var(--linen)" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Editorial() {
  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--ink)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={inView} variants={slideLeft}>
            <span className="label-eyebrow">Our Philosophy</span>
            <p
              className="mt-8 text-[28px] md:text-[36px] leading-[1.3]"
              style={{ fontFamily: "var(--font-serif-italic)", fontStyle: "italic", color: "var(--cream)" }}
            >
              "Every woman deserves to feel like herself - elevated."
            </p>
            <p
              className="mt-8 text-[13px]"
              style={{ color: "rgba(250,247,242,0.55)", lineHeight: 1.9 }}
            >
              We design for the woman who chooses presence over noise. Each piece is cut, sewn, and finished by hand in our Abuja atelier - slow work, made to be worn slowly.
            </p>
            <Link
              to="/about"
              className="btn-primary mt-10 inline-block"
              style={{ background: "var(--cream)", color: "var(--ink)" }}
            >
              Read Our Story
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={stagger}
            className="grid grid-cols-2 gap-1.5"
          >
            <motion.div variants={imageReveal} className="row-span-2 overflow-hidden">
              <img src={ed1} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={imageReveal} className="overflow-hidden aspect-[4/3]">
              <img src={ed2} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={imageReveal} className="overflow-hidden aspect-[4/3]">
              <img src={ed3} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      <TrustBadges />
    </>
  );
}

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--merlot)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.span
          variants={fadeUp}
          className="text-[10px] tracking-[5px] uppercase"
          style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
        >
          Inner Circle
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-[44px] md:text-[64px] mt-6 mb-6"
          style={{ color: "var(--cream)" }}
        >
          First to <em style={{ fontFamily: "var(--font-serif-italic)" }}>know.</em>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[14px] mb-10"
          style={{ color: "rgba(250,247,242,0.7)", lineHeight: 1.9 }}
        >
          Exclusive drops, Eid collection previews, and bespoke booking openings â€” sent before they go public.
        </motion.p>
        <motion.div variants={fadeUp} className="mb-12">
          <InnerCircleBenefits />
        </motion.div>
        <motion.form
          variants={fadeUp}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 px-5 py-4 text-[13px] outline-none"
            style={{
              background: "transparent",
              border: "0.5px solid rgba(255,255,255,0.3)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
            }}
          />
          <button
            type="submit"
            className="px-8 py-4 text-[10px] tracking-[3px] uppercase"
            style={{ background: "var(--cream)", color: "var(--merlot)", fontFamily: "var(--font-body)" }}
          >
            {submitted ? "Joined" : "Join Now"}
          </button>
        </motion.form>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-[12px]"
            style={{ color: "rgba(250,247,242,0.72)" }}
          >
            Thank you. Your first-look note is reserved.
          </motion.p>
        )}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap justify-center gap-8 text-[11px] tracking-[2px] uppercase"
          style={{ color: "rgba(250,247,242,0.55)", fontFamily: "var(--font-body)" }}
        >
          <span>10% off first order</span>
          <span style={{ color: "var(--dusty-gold)" }}>-</span>
          <span>Drop alerts</span>
          <span style={{ color: "var(--dusty-gold)" }}>-</span>
          <span>Members-only access</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
