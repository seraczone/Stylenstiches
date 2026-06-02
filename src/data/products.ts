import look1 from "@/assets/shop/look1.jpg";
import look2 from "@/assets/shop/look2.jpg";
import look3 from "@/assets/shop/look3.jpg";
import look4 from "@/assets/shop/look4.jpg";
import look5 from "@/assets/shop/look5.jpg";
import look6 from "@/assets/shop/look6.jpg";
import look7 from "@/assets/shop/look7.jpg";

export type Product = {
  slug: string;
  name: string;
  collection: string;
  category: string;
  price: number;
  colors: string[];
  swatch: string[];
  sizes: string[];
  badge?: string;
  image: string;
  description: string;
  stock: number;
};

export const products: Product[] = [
  {
    slug: "polka-dot-midi-dress",
    name: "Polka Dot Midi Dress",
    collection: "Casual Collection",
    category: "Occasion Dresses",
    price: 13500,
    colors: ["Beige", "Mint Green"],
    swatch: ["#E8DFD0", "#A8C0A0"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    image: look5,
    description: "A soft, feminine midi cut from breathable cotton-poplin and dotted in restraint. For quiet days that still deserve grace.",
    stock: 8,
  },
  {
    slug: "lace-bubu-sky-blue",
    name: "Lace Bubu - Sky Blue",
    collection: "Noor Al-Eid",
    category: "Kaftans & Bubus",
    price: 59999,
    colors: ["Blue", "Pink"],
    swatch: ["#A8D0DE", "#E8C4B8"],
    sizes: ["54", "56", "58", "60", "Free"],
    badge: "Eid Edit",
    image: look2,
    description: "The Noor Al-Eid Lace Bubu is a masterclass in understated grandeur. Premium broderie anglaise with hand-placed rosette appliques. Arrives with matching inner and scarf.",
    stock: 3,
  },
  {
    slug: "lace-bubu-blush-pink",
    name: "Lace Bubu - Blush Pink",
    collection: "Noor Al-Eid",
    category: "Kaftans & Bubus",
    price: 59999,
    colors: ["Pink", "Blue"],
    swatch: ["#E8C4B8", "#A8D0DE"],
    sizes: ["54", "56", "58", "60", "Free"],
    badge: "Limited",
    image: look3,
    description: "Soft blush broderie with hand-placed rosettes - the kind of piece you wear when you want to be seen, but never heard.",
    stock: 2,
  },
  {
    slug: "noor-look-2-green",
    name: "Noor Al-Eid Look 2 - Green",
    collection: "Noor Al-Eid",
    category: "Abayas & Open Layers",
    price: 35999,
    colors: ["Green"],
    swatch: ["#8A9E8C"],
    sizes: ["54", "56", "58", "60"],
    badge: "Eid Edit",
    image: look4,
    description: "Look 2 from the Noor Al-Eid Collection in green. Comes complete with veil and inner, ready for Eid styling.",
    stock: 6,
  },
  {
    slug: "bling-edit-abaya-brown",
    name: "Bling Edit Abaya - Brown",
    collection: "The Bling Edit",
    category: "Abayas & Open Layers",
    price: 25000,
    colors: ["Brown"],
    swatch: ["#6B4A3A"],
    sizes: ["54", "56", "58", "60", "Free"],
    badge: "New",
    image: look7,
    description: "Earth tones with a quiet sparkle - hand-placed crystals on a soft crepe abaya. Cocoa rich.",
    stock: 5,
  },
  {
    slug: "cape-blouse-skirt-set",
    name: "Cape Blouse + Skirt Set",
    collection: "The Bling Edit",
    category: "Occasion Dresses",
    price: 27500,
    colors: ["Peach"],
    swatch: ["#E8A488"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Bestseller",
    image: look6,
    description: "A two-piece with architectural cape detail - for the moment when one silhouette isn't quite enough.",
    stock: 4,
  },
  {
    slug: "occasion-dress-white",
    name: "Occasion Dress - White",
    collection: "Occasion Collection",
    category: "Occasion Dresses",
    price: 20500,
    colors: ["White"],
    swatch: ["#FAF7F2"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    image: look1,
    description: "The dress for milestones. A clean V neckline, soft bishop sleeves, and an ankle-skimming length.",
    stock: 7,
  },
  {
    slug: "tie-dye-satin-abaya",
    name: "Tie-Dye Satin Abaya",
    collection: "Premium Abayas",
    category: "Abayas & Open Layers",
    price: 27500,
    colors: ["Purple/Mauve"],
    swatch: ["#B488C4"],
    sizes: ["54", "56", "58", "60", "Free"],
    badge: "Limited",
    image: look6,
    description: "Hand-dyed satin in a slow gradient of mauve. Each piece is one of one.",
    stock: 2,
  },
];

export const categories = [
  { slug: "kaftans-bubus", name: "Kaftans & Bubus", count: 12 },
  { slug: "abayas", name: "Abayas & Open Layers", count: 18 },
  { slug: "occasion", name: "Occasion Dresses", count: 9 },
];
