import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "@/lib/animations";

interface FooterCol {
  title: string;
  links?: Array<{ label: string; to: string }>;
  content?: {
    location: string;
    hours: string;
    phone?: string;
    email?: string;
  };
}

const cols: FooterCol[] = [
  {
    title: "SHOP",
    links: [
      { label: "All Pieces", to: "/shop" },
      { label: "Couture", to: "/shop" },
      { label: "Ready to Wear", to: "/shop" },
      { label: "Kaftan", to: "/shop" },
    ],
  },
  {
    title: "HOUSE",
    links: [
      { label: "The Atelier", to: "/" },
      { label: "Bespoke", to: "/bespoke" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "VISIT",
    content: {
      location: "StylenStitches Atelier\nPlot 14, Aminu Kano Crescent\nWuse 2, Abuja",
      phone: "+234 701 550 7217",
      email: "hello@stylenstitches.com",
      hours: "By appointment\nTue — Sat · 10:00 — 18:00",
    },
  },
];

const additionalLinks = [
  { label: "Our Story", to: "/about" },
  { label: "Lookbook", to: "/lookbook" },
  { label: "Journal", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12"
      >
        <motion.div variants={fadeUp}>
          <Link to="/" className="wordmark" style={{ color: "var(--cream)" }}>
            STYLENSTITCHES
          </Link>
          <p
            className="mt-6 text-[13px] max-w-xs"
            style={{ color: "rgba(250,247,242,0.55)", lineHeight: 1.9 }}
          >
            Handcrafted kaftans, abayas & bespoke occasion wear - where modesty becomes a language of luxury.
          </p>
          <div className="flex gap-4 mt-8">
            {[Instagram, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href={i === 0 ? "https://www.instagram.com/stylenstitches_/" : "https://wa.me/2347015507217"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(250,247,242,0.15)" }}
                aria-label={i === 0 ? "Open Instagram" : "Chat on WhatsApp"}
              >
                <Icon size={15} strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </motion.div>

        {cols.map((c) => (
          <motion.div key={c.title} variants={fadeUp}>
            <h4
              className="text-[10px] tracking-[5px] uppercase mb-6"
              style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
            >
              {c.title}
            </h4>
            {c.content ? (
              <div className="space-y-6">
                <p
                  className="text-[12px] whitespace-pre-line"
                  style={{ color: "rgba(250,247,242,0.55)", lineHeight: 1.8 }}
                >
                  {c.content.location}
                </p>
                <div>
                  <p
                    className="text-[12px] font-semibold mb-2"
                    style={{ color: "rgba(250,247,242,0.85)" }}
                  >
                    By appointment
                  </p>
                  <p
                    className="text-[12px]"
                    style={{ color: "rgba(250,247,242,0.55)" }}
                  >
                    {c.content.hours.split("\n")[1]}
                  </p>
                </div>
                <div className="space-y-2">
                  {c.content.phone && (
                    <a
                      href="tel:+2347015507217"
                      className="block text-[12px] transition-colors hover:text-white"
                      style={{ color: "rgba(250,247,242,0.55)" }}
                    >
                      {c.content.phone}
                    </a>
                  )}
                  {c.content.email && (
                    <a
                      href={`mailto:${c.content.email}`}
                      className="block text-[12px] transition-colors hover:text-white"
                      style={{ color: "rgba(250,247,242,0.55)" }}
                    >
                      {c.content.email}
                    </a>
                  )}
                </div>
              </div>
            ) : c.links ? (
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[12px] transition-colors hover:text-white"
                      style={{ color: "rgba(250,247,242,0.55)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
        ))}
      </motion.div>

      <div className="border-t" style={{ borderColor: "rgba(250,247,242,0.06)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[11px]" style={{ color: "rgba(250,247,242,0.4)" }}>
              © 2026 StylenStitches. Crafted in Abuja.
            </p>
            <p className="mt-2 text-[11px]" style={{ color: "rgba(250,247,242,0.4)" }}>
              Designed by Seraczone Technology Limited.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-[11px]">
            {additionalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="transition-colors hover:text-white"
                style={{ color: "rgba(250,247,242,0.6)" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/privacy"
              className="transition-colors hover:text-white"
              style={{ color: "rgba(250,247,242,0.6)" }}
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-white"
              style={{ color: "rgba(250,247,242,0.6)" }}
            >
              Terms
            </a>
            <a
              href="/shipping-returns"
              className="transition-colors hover:text-white"
              style={{ color: "rgba(250,247,242,0.6)" }}
            >
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
