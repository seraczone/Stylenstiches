import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { fadeUp, stagger, inView } from "@/lib/animations";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal - StylenStitches" },
      { name: "description", content: "Stories, tips, and inspiration from StylenStitches. Fashion guides, styling ideas, and lifestyle content." },
      { property: "og:title", content: "Journal - StylenStitches" },
    ],
  }),
  component: BlogPage,
});

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    slug: "styling-abayas-modern-way",
    title: "Styling Abayas the Modern Way",
    excerpt: "Discover how to layer, accessorize, and elevate your abaya for every occasion. From casual to formal, master the art of modest fashion.",
    category: "Style Guide",
    date: "May 28, 2026",
    image: "/assets/blog/abaya-styling.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "fabrics-care-guide",
    title: "The Ultimate Fabric Care Guide",
    excerpt: "Learn how to maintain the quality and beauty of your StylenStitches pieces. Expert tips for washing, storing, and preserving your garments.",
    category: "Care",
    date: "May 20, 2026",
    image: "/assets/blog/fabric-care.jpg",
    readTime: "4 min read",
  },
  {
    id: 3,
    slug: "eid-fashion-inspiration",
    title: "Eid Fashion Inspiration 2026",
    excerpt: "This season's most stunning Eid looks. From emerald elegance to gold-adorned pieces, find your perfect celebration outfit.",
    category: "Inspiration",
    date: "May 15, 2026",
    image: "/assets/blog/eid-fashion.jpg",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "modest-fashion-confidence",
    title: "Modest Fashion & Body Confidence",
    excerpt: "Exploring how modest fashion intersects with self-love, confidence, and celebrating your authentic self without apologies.",
    category: "Lifestyle",
    date: "May 10, 2026",
    image: "/assets/blog/confidence.jpg",
    readTime: "7 min read",
  },
  {
    id: 5,
    slug: "color-psychology-fashion",
    title: "Color Psychology in Modest Fashion",
    excerpt: "Understanding how colors affect mood and presence. Choose hues that celebrate your personality and complement your skin tone.",
    category: "Style Guide",
    date: "May 5, 2026",
    image: "/assets/blog/color-psychology.jpg",
    readTime: "5 min read",
  },
  {
    id: 6,
    slug: "transition-seasonal-wardrobe",
    title: "Transitioning Your Wardrobe Seasonally",
    excerpt: "Smart styling tips for adapting your collection across seasons. Maximize versatility and minimize your fashion footprint.",
    category: "Style Guide",
    date: "April 28, 2026",
    image: "/assets/blog/seasonal.jpg",
    readTime: "6 min read",
  },
];

function BlogPage() {
  return (
    <Layout>
      <div style={{ background: "var(--cream)" }}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[48px] md:text-[64px] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
          >
            Journal
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[16px] md:text-[18px] max-w-2xl mx-auto"
            style={{ color: "var(--warm-gray)", lineHeight: 2 }}
          >
            Stories, tips, and inspiration for the modern woman. From styling guides to lifestyle reflections, dive into our editorial content.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={fadeUp}
          className="max-w-[1400px] mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div
              className="aspect-[3/4] rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${posts[0].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div>
              <p className="text-[10px] tracking-[5px] uppercase mb-4" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
                {posts[0].category}
              </p>
              <h2
                className="text-[32px] md:text-[48px] mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
              >
                {posts[0].title}
              </h2>
              <div className="flex gap-4 mb-6 text-[12px]" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-body)" }}>
                <span>{posts[0].date}</span>
                <span>•</span>
                <span>{posts[0].readTime}</span>
              </div>
              <p className="text-[15px] mb-8 leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                {posts[0].excerpt}
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 text-[11px] tracking-[3px] uppercase rounded"
                style={{ background: "var(--ink)", color: "var(--cream)", fontFamily: "var(--font-body)" }}
              >
                Read Article
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* All Posts Grid */}
      <section className="pb-20 md:pb-32 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="max-w-[1400px] mx-auto"
        >
          <h2
            className="text-[28px] md:text-[36px] mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
          >
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <motion.div key={post.id} variants={fadeUp} className="group">
                <div
                  className="relative overflow-hidden aspect-[3/4] rounded-lg mb-6"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                  <span
                    className="absolute top-4 right-4 text-[9px] tracking-[2px] uppercase px-3 py-1 rounded"
                    style={{ background: "rgba(26, 18, 16, 0.8)", color: "var(--cream)", fontFamily: "var(--font-body)" }}
                  >
                    {post.readTime}
                  </span>
                </div>
                <p className="text-[10px] tracking-[5px] uppercase mb-3" style={{ color: "var(--dusty-gold)", fontFamily: "var(--font-body)" }}>
                  {post.category}
                </p>
                <h3
                  className="text-[18px] mb-3 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--ink)" }}
                >
                  {post.title}
                </h3>
                <p className="text-[13px] mb-4 line-clamp-2" style={{ color: "var(--warm-gray)", lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
                <p className="text-[11px]" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-body)" }}>
                  {post.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
    </Layout>
  );
}
