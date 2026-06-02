import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: EASE } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

export const inView = { once: true, margin: "-80px" } as const;

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

export const parallax: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};
