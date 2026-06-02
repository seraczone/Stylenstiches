import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const { itemCount, openCart } = useCart();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(26,18,16,0.94)" : isHome ? "transparent" : "rgba(250,247,242,0.94)",
          backdropFilter: scrolled || !isHome ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "0.5px solid rgba(201,169,110,0.15)"
            : isHome
              ? "0.5px solid rgba(255,255,255,0.08)"
              : "0.5px solid var(--linen)",
        }}
      >
        <div className="h-[72px] px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="wordmark text-[16px] md:text-[20px]"
            style={{ color: dark || scrolled ? "var(--cream)" : "var(--ink)" }}
          >
            STYLENSTITCHES
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative group text-[11px] tracking-[3px] uppercase font-semibold transition-colors"
                style={{
                  color: dark || scrolled ? "rgba(250,247,242,0.6)" : "rgba(26,18,16,0.6)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                }}
                activeProps={{ style: { color: "var(--dusty-gold)" } }}
              >
                {l.label}
                <span
                  className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--dusty-gold)" }}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/shop"
              aria-label="Search products"
              className="transition-colors"
              style={{ color: dark || scrolled ? "rgba(250,247,242,0.7)" : "rgba(26,18,16,0.7)" }}
            >
              <Search size={18} strokeWidth={1.2} />
            </Link>
            <Link
              to="/shop"
              aria-label="View wishlist picks"
              className="transition-colors"
              style={{ color: dark || scrolled ? "rgba(250,247,242,0.7)" : "rgba(26,18,16,0.7)" }}
            >
              <Heart size={18} strokeWidth={1.2} />
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative transition-colors"
              aria-label="Open shopping cart"
              style={{ color: dark || scrolled ? "rgba(250,247,242,0.7)" : "rgba(26,18,16,0.7)" }}
            >
              <ShoppingBag size={18} strokeWidth={1.2} />
              {itemCount > 0 && (
                <span
                  className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px]"
                  style={{ background: "var(--dusty-gold)", color: "var(--ink)" }}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{ color: dark || scrolled ? "var(--cream)" : "var(--ink)" }}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.2} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col"
            style={{ background: "var(--ink)" }}
          >
            <div className="flex items-center justify-between px-6 h-[72px]">
              <span className="wordmark text-[16px]" style={{ color: "var(--cream)" }}>
                STYLENSTITCHES
              </span>
              <button onClick={() => setOpen(false)} style={{ color: "var(--cream)" }} aria-label="Close menu">
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
              className="flex-1 flex flex-col justify-center px-8 gap-6"
            >
              {links.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="border-b pb-6"
                  style={{ borderColor: "rgba(250,247,242,0.1)" }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block italic font-semibold"
                    style={{ fontFamily: "var(--font-display)", fontSize: "42px", color: "var(--cream)", fontWeight: 600 }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCart();
                }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="mt-4 flex items-center justify-between border-b pb-6 text-left"
                style={{ borderColor: "rgba(250,247,242,0.1)", color: "var(--cream)" }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "42px" }}>Cart</span>
                <span className="text-[12px] tracking-[3px] uppercase">({itemCount})</span>
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
