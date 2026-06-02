import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { fadeUp, stagger, slideLeft, slideRight, inView } from "@/lib/animations";
import bespokeHero from "@/assets/bespoke-hero.jpg";
import ed1 from "@/assets/ed-1.jpg";
import ed2 from "@/assets/ed-2.jpg";
import ed3 from "@/assets/ed-3.jpg";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "Bespoke - Made For You | StylenStitches" },
      { name: "description", content: "Custom kaftans, abayas and occasion wear, made to your measurements in our Abuja atelier." },
      { property: "og:title", content: "Bespoke - StylenStitches" },
    ],
  }),
  component: Bespoke,
});

function Bespoke() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="relative h-[82vh] min-h-[640px] w-full overflow-hidden flex items-center justify-center">
        <img src={bespokeHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,18,16,0.35), rgba(26,18,16,0.72))" }} />
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-3xl">
          <motion.span variants={fadeUp} className="text-[10px] tracking-[5px] uppercase" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
            Atelier Bespoke
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-[56px] md:text-[96px] mt-6 mb-6" style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Made <em style={{ fontFamily: "var(--font-serif-italic)" }}>for you.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[14px] mb-10" style={{ color: "rgba(250,247,242,0.75)" }}>
            One consultation. Three fittings. A piece that exists nowhere else.
          </motion.p>
          <motion.a variants={fadeUp} href="#consultation" className="btn-primary inline-block" style={{ background: "var(--cream)", color: "var(--ink)" }}>
            Begin Your Consultation
          </motion.a>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={inView} variants={stagger} className="text-center mb-20">
            <motion.span variants={fadeUp} className="label-eyebrow center">
              The Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[36px] md:text-[58px] mt-6" style={{ color: "var(--ink)" }}>
              Three <em style={{ fontFamily: "var(--font-serif-italic)" }}>steps.</em>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={inView} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Consult", d: "We meet in person or on a call to understand the occasion, silhouette, measurements, and colors that move you." },
              { n: "02", t: "Create", d: "Sketches, fabric direction, and fittings guide the piece while every finish is handled by the Abuja atelier." },
              { n: "03", t: "Wear", d: "Your garment arrives ready for the moment it was made for, with care guidance and final styling notes." },
            ].map((step) => (
              <motion.div key={step.n} variants={fadeUp} className="premium-panel p-8 text-center md:text-left">
                <p className="text-[72px] italic mb-4" style={{ fontFamily: "var(--font-serif-italic)", color: "var(--merlot)", fontWeight: 400 }}>
                  {step.n}
                </p>
                <h3 className="text-[11px] tracking-[4px] uppercase mb-4" style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}>
                  {step.t}
                </h3>
                <p className="text-[13px]" style={{ color: "var(--taupe)", lineHeight: 1.9 }}>
                  {step.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="consultation" className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--parchment)" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={inView} variants={stagger} className="max-w-2xl mx-auto premium-panel p-6 md:p-10">
          <motion.span variants={fadeUp} className="label-eyebrow">
            Bespoke Request
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[36px] md:text-[52px] mt-6 mb-12" style={{ color: "var(--ink)" }}>
            Tell us about <em style={{ fontFamily: "var(--font-serif-italic)" }}>your moment.</em>
          </motion.h2>

          <motion.form
            variants={fadeUp}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required placeholder="Full Name" className="underline-input" />
              <input required type="email" placeholder="Email Address" className="underline-input" />
            </div>
            <input required placeholder="Phone Number (WhatsApp preferred)" className="underline-input" />

            <select required className="underline-input" defaultValue="">
              <option value="" disabled>
                Occasion
              </option>
              <option>Wedding</option>
              <option>Eid</option>
              <option>Graduation</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>

            <input placeholder="Preferred Fabric" className="underline-input" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="date" className="underline-input" />
              <select required className="underline-input" defaultValue="">
                <option value="" disabled>
                  Budget Range
                </option>
                <option>NGN 20K - NGN 50K</option>
                <option>NGN 50K - NGN 100K</option>
                <option>NGN 100K+</option>
              </select>
            </div>

            <textarea placeholder="Additional notes - colors, references, anything we should know" rows={4} className="underline-input resize-none" />

            <button type="submit" className="btn-merlot mt-6">
              {submitted ? "Request Received" : "Send My Request"}
            </button>
            {submitted && (
              <p className="text-[12px]" style={{ color: "var(--taupe)" }}>
                Thank you. Your consultation details are ready for studio review.
              </p>
            )}
          </motion.form>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-12" style={{ background: "var(--ink)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-1.5">
          {[ed2, ed1, ed3].map((src, i) => (
            <motion.div
              key={src}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={i === 0 ? slideLeft : i === 2 ? slideRight : fadeUp}
              transition={{ delay: i * 0.15 }}
              className="overflow-hidden aspect-[3/4]"
            >
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
