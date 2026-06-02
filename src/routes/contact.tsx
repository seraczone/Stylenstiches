import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { fadeUp, stagger, slideRight, inView } from "@/lib/animations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — StylenStitches" },
      { name: "description", content: "Visit our Abuja atelier or message us on WhatsApp. We'd love to hear from you." },
      { property: "og:title", content: "Contact — StylenStitches" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="pt-32 pb-20 px-6 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="label-eyebrow">Get In Touch</motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-[44px] md:text-[68px] mt-6 mb-8"
              style={{ color: "var(--ink)", fontWeight: 300 }}
            >
              We'd love to <em style={{ fontFamily: "var(--font-serif-italic)" }}>hear</em> from you.
            </motion.h1>

            <motion.div variants={fadeUp} className="space-y-5 mb-12">
              {[
                { Icon: MapPin, label: "Plot 24, Wuse II, Abuja, Nigeria" },
                { Icon: Phone, label: "WhatsApp +234 800 000 0000" },
                { Icon: Mail, label: "hello@stylenstitches.com" },
                { Icon: Clock, label: "Mon–Sat, 9am–7pm WAT" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <Icon size={16} strokeWidth={1.2} style={{ color: "var(--dusty-gold)" }} />
                  <span className="text-[13px]" style={{ color: "var(--taupe)" }}>{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={(e) => { e.preventDefault(); alert("Message sent."); }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Name" className="underline-input" />
                <input required type="email" placeholder="Email" className="underline-input" />
              </div>
              <input placeholder="Subject" className="underline-input" />
              <textarea placeholder="Message" rows={4} className="underline-input resize-none" />
              <button type="submit" className="btn-primary">Send Message</button>
            </motion.form>

            <motion.div variants={fadeUp} className="mt-12 flex gap-3">
              {[Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--parchment)]"
                  style={{ border: "0.5px solid var(--linen)" }}
                >
                  <Icon size={15} strokeWidth={1.2} style={{ color: "var(--ink)" }} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={slideRight}
            className="lg:sticky lg:top-28 self-start"
          >
            <div
              className="aspect-[4/5] w-full overflow-hidden relative"
              style={{ border: "0.5px solid var(--linen)" }}
            >
              <iframe
                title="StylenStitches Atelier — Abuja"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.45%2C9.05%2C7.55%2C9.10&layer=mapnik&marker=9.0765%2C7.4986"
                className="w-full h-full"
                style={{ border: 0, filter: "sepia(20%) saturate(0.8) brightness(0.97) contrast(0.95)" }}
                loading="lazy"
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-md"
                style={{ background: "rgba(250,247,242,0.95)", border: "0.5px solid var(--linen)" }}
              >
                <p
                  className="text-[9px] tracking-[5px] uppercase mb-2"
                  style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
                >
                  Our Atelier
                </p>
                <p className="text-[18px]" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
                  STYLENSTITCHES
                </p>
                <p className="text-[12px] mt-1" style={{ color: "var(--taupe)" }}>
                  Abuja, Nigeria — DM us to visit the studio
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
