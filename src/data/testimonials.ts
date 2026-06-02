export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Zainab Ahmed",
    role: "Bride",
    image: "/assets/testimonials/zainab.jpg",
    text: "My wedding day wouldn't have been complete without StylenStitches. The attention to detail on my custom abaya was extraordinary. I felt like royalty.",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "Fashion Enthusiast",
    image: "/assets/testimonials/amina.jpg",
    text: "The quality is unmatched. Every piece I've bought has exceeded my expectations. StylenStitches has become my go-to for elegant, modest fashion.",
    rating: 5,
  },
  {
    name: "Fatima Oluwaseun",
    role: "Entrepreneur",
    image: "/assets/testimonials/fatima.jpg",
    text: "From ordering to delivery, the entire experience was seamless. The customer service team went above and beyond. Highly recommended!",
    rating: 5,
  },
  {
    name: "Noor Ibrahim",
    role: "Social Media Influencer",
    image: "/assets/testimonials/noor.jpg",
    text: "StylenStitches isn't just about fashion—it's about celebrating modesty with grace. Their pieces are timeless and versatile. I'm obsessed.",
    rating: 5,
  },
  {
    name: "Leila Okafor",
    role: "Corporate Professional",
    image: "/assets/testimonials/leila.jpg",
    text: "Professional, elegant, and sophisticated. Perfect for the modern woman who values both style and substance. Worth every naira.",
    rating: 5,
  },
  {
    name: "Dina Malik",
    role: "Photographer",
    image: "/assets/testimonials/dina.jpg",
    text: "I wear StylenStitches for all my important shoots. The drape, the fit, the colors—everything is perfectly curated for that editorial look.",
    rating: 5,
  },
];
