import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import { useState } from "react";
import { slideLeft, slideRight, slideUp, inView } from "@/lib/animations";
import type { Product } from "@/data/products";
import { useCart } from "./CartContext";

export function ProductCard({ product, revealDirection = "up" }: { product: Product; revealDirection?: "left" | "right" | "up" }) {
  const { addItem } = useCart();
  const [saved, setSaved] = useState(false);
  const revealVariant = revealDirection === "left" ? slideLeft : revealDirection === "right" ? slideRight : slideUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={revealVariant}
      className="group"
    >
      <Link to="/shop/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative overflow-hidden bg-[var(--parchment)] aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          {product.badge && (
            <span
              className="absolute top-4 left-4 text-[9px] tracking-[3px] uppercase px-3 py-1.5"
              style={{
                background: "var(--cream)",
                color: "var(--ink)",
                fontFamily: "var(--font-body)",
              }}
            >
              {product.badge}
            </span>
          )}
          <button
            type="button"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={saved ? "Saved to wishlist" : "Add to wishlist"}
            onClick={(e) => {
              e.preventDefault();
              setSaved((current) => !current);
            }}
          >
            {saved ? (
              <Check size={14} strokeWidth={1.4} style={{ color: "var(--ink)" }} />
            ) : (
              <Heart size={14} strokeWidth={1.4} style={{ color: "var(--ink)" }} />
            )}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addItem({ product });
            }}
            className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] py-3.5 text-center text-[10px] tracking-[3px] uppercase"
            style={{ background: "var(--ink)", color: "var(--cream)", fontFamily: "var(--font-body)" }}
          >
            Quick Add
          </button>
        </div>
        <div className="mt-5 px-1">
          <p
            className="text-[9px] tracking-[5px] uppercase mb-1.5"
            style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}
          >
            {product.collection}
          </p>
          <h3
            className="text-[18px] mb-2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--ink)" }}
          >
            {product.name}
          </h3>
          <div className="flex justify-between items-center">
            <p
              className="text-[20px]"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              NGN {product.price.toLocaleString()}
            </p>
            <div className="flex gap-1.5">
              {product.swatch.map((c) => (
                <span
                  key={c}
                  className="w-3 h-3 rounded-full border"
                  style={{ background: c, borderColor: "var(--linen)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
