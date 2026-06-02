import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Heart, Minus, Plus, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/components/CartContext";
import { products, type Product } from "@/data/products";
import { fadeUp, stagger, staggerFast } from "@/lib/animations";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} - StylenStitches` },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:title", content: loaderData?.product.name ?? "" },
      { property: "og:description", content: loaderData?.product.description ?? "" },
      ...(loaderData?.product.image ? [{ property: "og:image", content: loaderData.product.image }] : []),
    ],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-4xl mb-4">Piece not found</h1>
        <Link to="/shop" className="btn-ghost-dark mt-6 inline-block">
          Back to Shop
        </Link>
      </div>
    </Layout>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { addItem } = useCart();
  const [size, setSize] = useState<string | null>(product.sizes[0] ?? null);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(0);
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const selectedColor = product.colors[color] ?? product.colors[0] ?? "Default";
  const selectedSize = size ?? product.sizes[0] ?? "One Size";

  const handleAdd = () => {
    addItem({
      product,
      size: selectedSize,
      color: selectedColor,
      quantity: qty,
    });
    setAdded(true);
  };

  return (
    <Layout>
      <section className="pt-28 pb-20 px-6 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.12fr_1fr] gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="space-y-5">
            <div className="overflow-hidden aspect-[4/5] relative" style={{ background: "var(--parchment)" }}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span
                  className="absolute left-5 top-5 text-[9px] tracking-[3px] uppercase px-3 py-1.5"
                  style={{ background: "var(--cream)", color: "var(--ink)", fontFamily: "var(--font-body)" }}
                >
                  {product.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { Icon: Truck, label: "Nationwide delivery" },
                { Icon: Ruler, label: "Fit confirmed before checkout" },
                { Icon: ShieldCheck, label: "Secure WhatsApp order" },
              ].map(({ Icon, label }) => (
                <div key={label} className="premium-panel px-4 py-4 flex items-center gap-3">
                  <Icon size={16} strokeWidth={1.3} style={{ color: "var(--dusty-gold)", flexShrink: 0 }} />
                  <span className="text-[11px]" style={{ color: "var(--taupe)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[9px] tracking-[5px] uppercase mb-4" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
              {product.collection}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[36px] md:text-[52px] mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--ink)", fontWeight: 300 }}>
              {product.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[28px] mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
              NGN {product.price.toLocaleString()}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[13px] mb-10" style={{ color: "var(--taupe)", lineHeight: 1.9 }}>
              {product.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-[9px] tracking-[5px] uppercase mb-3" style={{ color: "var(--warm-gray)" }}>
                Color - {selectedColor}
              </p>
              <div className="flex gap-3">
                {product.swatch.map((c, i) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setColor(i)}
                    className="w-9 h-9 rounded-full transition-all"
                    style={{
                      background: c,
                      border: "0.5px solid var(--linen)",
                      outline: color === i ? "1px solid var(--ink)" : "none",
                      outlineOffset: "3px",
                    }}
                    aria-label={`Choose ${product.colors[i]}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-[9px] tracking-[5px] uppercase" style={{ color: "var(--warm-gray)" }}>
                  Size
                </p>
                <Link to="/contact" className="text-[10px] tracking-[2px] uppercase" style={{ color: "var(--taupe)" }}>
                  Need help?
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    type="button"
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

            <motion.p variants={fadeUp} className="text-[11px] mb-6 tracking-[2px] uppercase" style={{ color: product.stock <= 5 ? "var(--rose)" : "var(--taupe)", fontFamily: "var(--font-body)" }}>
              {product.stock <= 5 ? `Only ${product.stock} pieces left` : `${product.stock} pieces available`}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="flex items-center justify-between sm:justify-start" style={{ border: "0.5px solid var(--linen)" }}>
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="p-3" aria-label="Decrease quantity">
                  <Minus size={14} strokeWidth={1.2} />
                </button>
                <span className="px-5 text-[14px]" style={{ fontFamily: "var(--font-body)" }}>
                  {qty}
                </span>
                <button type="button" onClick={() => setQty(Math.min(product.stock, qty + 1))} className="p-3" aria-label="Increase quantity">
                  <Plus size={14} strokeWidth={1.2} />
                </button>
              </div>
              <button type="button" className="btn-primary flex-1" onClick={handleAdd}>
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                type="button"
                onClick={() => setSaved((current) => !current)}
                className="h-[54px] w-full sm:w-[54px] flex items-center justify-center"
                style={{
                  border: "0.5px solid var(--ink)",
                  background: saved ? "var(--ink)" : "transparent",
                  color: saved ? "var(--cream)" : "var(--ink)",
                }}
                aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
              >
                {saved ? <Check size={18} strokeWidth={1.4} /> : <Heart size={18} strokeWidth={1.2} />}
              </button>
            </motion.div>

            {added && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-[12px]" style={{ color: "var(--taupe)" }}>
                Added: {qty} x {product.name}, {selectedColor}, size {selectedSize}.
              </motion.p>
            )}

            <motion.div variants={fadeUp} className="mt-10 space-y-px">
              {[
                { t: "Product Details", c: "Premium fabric, hand-finished. Made in Abuja." },
                { t: "Size & Fit", c: "Confirm length, fit, and styling notes with the studio before payment." },
                { t: "Delivery & Returns", c: "Free delivery on orders over NGN 50,000. Returns are reviewed for unworn pieces within 7 days." },
                { t: "How Checkout Works", c: "Add pieces to cart, then checkout on WhatsApp for sizing, delivery details, and payment instructions." },
              ].map((item) => (
                <details key={item.t} className="group" style={{ borderTop: "0.5px solid var(--linen)" }}>
                  <summary className="py-5 cursor-pointer text-[11px] tracking-[3px] uppercase flex justify-between items-center list-none" style={{ fontFamily: "var(--font-body)" }}>
                    {item.t}
                    <Plus size={14} strokeWidth={1.2} className="group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="pb-5 text-[13px]" style={{ color: "var(--taupe)" }}>
                    {item.c}
                  </p>
                </details>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20" style={{ background: "var(--parchment)" }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] mb-12" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            You may also <em style={{ fontFamily: "var(--font-serif-italic)" }}>like</em>
          </h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerFast} className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
