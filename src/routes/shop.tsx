import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { fadeUp, stagger, staggerFast, inView } from "@/lib/animations";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop - StylenStitches" },
      { name: "description", content: "Browse kaftans, abayas, and occasion wear from StylenStitches." },
      { property: "og:title", content: "Shop - StylenStitches" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const sizes = useMemo(() => Array.from(new Set(products.flatMap((p) => p.sizes))).sort(), []);
  const priceRange = useMemo(() => {
    const prices = products.map((p) => p.price);
    return {
      min: Math.min(...prices).toLocaleString(),
      max: Math.max(...prices).toLocaleString(),
    };
  }, []);
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const next = products.filter((p) => {
      const matchesCategory = activeCat ? p.category === activeCat : true;
      const matchesSize = activeSize ? p.sizes.includes(activeSize) : true;
      const matchesSearch = normalizedQuery
        ? [p.name, p.collection, p.category, p.description].join(" ").toLowerCase().includes(normalizedQuery)
        : true;
      return matchesCategory && matchesSize && matchesSearch;
    });

    return [...next].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "stock") return a.stock - b.stock;
      return 0;
    });
  }, [activeCat, activeSize, query, sort]);

  const resetFilters = () => {
    setActiveCat(null);
    setActiveSize(null);
    setQuery("");
    setSort("featured");
  };

  return (
    <Layout>
      <section className="pt-32 pb-12 px-6 md:px-12" style={{ background: "var(--parchment)" }}>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[1400px] mx-auto">
          <motion.span variants={fadeUp} className="label-eyebrow">
            The Collection
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-[44px] md:text-[72px] mt-6" style={{ color: "var(--ink)" }}>
            All <em style={{ fontFamily: "var(--font-serif-italic)" }}>pieces</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-[14px] max-w-xl" style={{ color: "var(--taupe)" }}>
            Handcrafted in Abuja. Cut, sewn, and finished slowly - the way important things should be.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 py-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          <aside className="lg:sticky lg:top-28 self-start premium-panel p-6">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} strokeWidth={1.4} style={{ color: "var(--dusty-gold)" }} />
                <span className="text-[10px] tracking-[5px] uppercase" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
                  Filters
                </span>
              </div>
              <button type="button" onClick={resetFilters} className="text-[10px] tracking-[2px] uppercase" style={{ color: "var(--taupe)" }}>
                Reset
              </button>
            </div>

            <h3 className="text-[10px] tracking-[5px] uppercase mb-5" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
              Category
            </h3>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setActiveCat(null)}
                className="block text-[13px] transition-colors text-left"
                style={{
                  color: activeCat === null ? "var(--ink)" : "var(--warm-gray)",
                  fontFamily: "var(--font-body)",
                  fontWeight: activeCat === null ? 400 : 300,
                }}
              >
                All Pieces ({products.length})
              </button>
              {categories.map((c) => {
                const count = products.filter((p) => p.category === c.name).length;
                return (
                  <button
                    type="button"
                    key={c.slug}
                    onClick={() => setActiveCat(c.name)}
                    className="block text-[13px] transition-colors text-left"
                    style={{
                      color: activeCat === c.name ? "var(--ink)" : "var(--warm-gray)",
                      fontFamily: "var(--font-body)",
                      fontWeight: activeCat === c.name ? 400 : 300,
                    }}
                  >
                    {c.name} ({count})
                  </button>
                );
              })}
            </div>

            <h3 className="text-[10px] tracking-[5px] uppercase mt-10 mb-5" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
              Size
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveSize(null)}
                className="px-3 py-2 text-[11px] uppercase tracking-[2px]"
                style={{
                  border: "0.5px solid var(--linen)",
                  background: activeSize === null ? "var(--ink)" : "transparent",
                  color: activeSize === null ? "var(--cream)" : "var(--ink)",
                }}
              >
                All
              </button>
              {sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className="px-3 py-2 text-[11px] uppercase tracking-[2px]"
                  style={{
                    border: "0.5px solid var(--linen)",
                    background: activeSize === size ? "var(--ink)" : "transparent",
                    color: activeSize === size ? "var(--cream)" : "var(--ink)",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            <h3 className="text-[10px] tracking-[5px] uppercase mt-10 mb-5" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
              Price
            </h3>
            <p className="text-[13px]" style={{ color: "var(--warm-gray)" }}>
              NGN {priceRange.min} - NGN {priceRange.max}
            </p>
          </aside>

          <div>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">
              <label className="relative block">
                <Search size={16} strokeWidth={1.4} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--warm-gray)" }} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search collection, color, or style"
                  className="w-full py-3 pl-11 pr-4 text-[13px] outline-none"
                  style={{ border: "0.5px solid var(--linen)", background: "var(--warm-white)", color: "var(--ink)" }}
                />
              </label>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="w-full px-4 py-3 text-[12px] uppercase tracking-[2px] outline-none"
                style={{ border: "0.5px solid var(--linen)", background: "var(--warm-white)", color: "var(--ink)" }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="stock">Lowest Stock</option>
              </select>
            </div>
            <p className="text-[11px] mb-8 tracking-[2px] uppercase" style={{ color: "var(--warm-gray)" }}>
              {filtered.length} {filtered.length === 1 ? "item" : "items"} found
            </p>
            <motion.div
              key={`${activeCat ?? "all"}-${activeSize ?? "all"}-${sort}-${query}`}
              initial="hidden"
              animate="visible"
              variants={staggerFast}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
            >
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </motion.div>
            {filtered.length === 0 && (
              <div className="py-20 text-center" style={{ borderTop: "0.5px solid var(--linen)" }}>
                <h2 className="text-[34px]">No pieces found</h2>
                <p className="mt-3 text-[13px]" style={{ color: "var(--taupe)" }}>
                  Try clearing the category, size, or search filters.
                </p>
                <button type="button" onClick={resetFilters} className="btn-ghost-dark mt-8">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
