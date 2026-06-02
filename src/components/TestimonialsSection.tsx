import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { fadeUp, stagger, inView } from "@/lib/animations";

export function TestimonialsSection() {
  const carouselTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-14 md:py-20 overflow-hidden" style={{ background: "var(--cream)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="max-w-[1400px] mx-auto px-6 md:px-12"
      >
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9 md:mb-12">
          <div>
            <span className="label-eyebrow">Client Notes</span>
            <h2
              className="text-[32px] md:text-[48px] mt-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "var(--ink)" }}
            >
              Loved by Our Community
            </h2>
          </div>
          <p
            className="text-[13px] max-w-md"
            style={{ color: "var(--warm-gray)", lineHeight: 1.8 }}
          >
            Real stories from real women who trust StylenStitches for their most important moments.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28"
            style={{ background: "linear-gradient(to right, var(--cream), rgba(250,247,242,0))" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28"
            style={{ background: "linear-gradient(to left, var(--cream), rgba(250,247,242,0))" }}
          />
          <div className="testimonial-carousel -mx-6 md:-mx-12 px-6 md:px-12">
            <div className="testimonial-track">
              {carouselTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="testimonial-card shrink-0 p-5 md:p-6 rounded-lg"
                  style={{ background: "white", boxShadow: "0 16px 40px -28px rgba(26, 18, 16, 0.45)" }}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill="var(--dusty-gold)"
                        style={{ color: "var(--dusty-gold)" }}
                      />
                    ))}
                  </div>

                  <p
                    className="text-[13px] mb-5"
                    style={{ color: "var(--ink)", lineHeight: 1.75, fontStyle: "italic" }}
                  >
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "var(--linen)" }}>
                    <div
                      className="w-10 h-10 rounded-full bg-gray-200 shrink-0"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div>
                      <p
                        className="text-[13px] font-semibold"
                        style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-[10px] tracking-[1px] uppercase"
                        style={{ color: "var(--warm-gray)", fontFamily: "var(--font-body)" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
