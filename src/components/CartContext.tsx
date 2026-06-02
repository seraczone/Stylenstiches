import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/data/products";

export type CartLine = {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

type AddInput = {
  product: Product;
  size?: string;
  color?: string;
  quantity?: number;
};

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (input: AddInput) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "stylenstitches-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setLines(JSON.parse(saved) as CartLine[]);
    } catch {
      setLines([]);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

    return {
      lines,
      itemCount,
      subtotal,
      isOpen,
      addItem: ({ product, size, color, quantity = 1 }) => {
        const selectedSize = size ?? product.sizes[0] ?? "One Size";
        const selectedColor = color ?? product.colors[0] ?? "Default";
        const id = `${product.slug}-${selectedSize}-${selectedColor}`;

        setLines((current) => {
          const existing = current.find((line) => line.id === id);
          if (existing) {
            return current.map((line) =>
              line.id === id ? { ...line, quantity: Math.min(line.quantity + quantity, product.stock) } : line,
            );
          }

          return [
            ...current,
            { id, product, size: selectedSize, color: selectedColor, quantity: Math.min(quantity, product.stock) },
          ];
        });
        setIsOpen(true);
      },
      removeItem: (id) => setLines((current) => current.filter((line) => line.id !== id)),
      updateQuantity: (id, quantity) =>
        setLines((current) =>
          current.flatMap((line) => {
            if (line.id !== id) return [line];
            if (quantity < 1) return [];
            return [{ ...line, quantity: Math.min(quantity, line.product.stock) }];
          }),
        ),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [isOpen, lines]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

function CartDrawer() {
  const { lines, itemCount, subtotal, isOpen, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[70] bg-black/45"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[80] flex h-screen w-full max-w-[430px] flex-col"
            style={{ background: "var(--cream)", color: "var(--ink)" }}
          >
            <div className="flex h-[72px] items-center justify-between border-b px-6" style={{ borderColor: "var(--linen)" }}>
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.4} />
                <p className="text-[11px] uppercase tracking-[3px]" style={{ fontFamily: "var(--font-body)" }}>
                  Cart ({itemCount})
                </p>
              </div>
              <button type="button" onClick={closeCart} aria-label="Close cart">
                <X size={22} strokeWidth={1.3} />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <ShoppingBag size={34} strokeWidth={1.1} style={{ color: "var(--dusty-gold)" }} />
                <h2 className="mt-6 text-[34px]">Your cart is empty</h2>
                <p className="mt-3 text-[13px]" style={{ color: "var(--taupe)" }}>
                  Add Eid-ready abayas, kaftans, and occasion pieces before checkout.
                </p>
                <Link to="/shop" onClick={closeCart} className="btn-primary mt-8">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <div className="space-y-5">
                    {lines.map((line) => (
                      <div key={line.id} className="grid grid-cols-[88px_1fr] gap-4">
                        <img
                          src={line.product.image}
                          alt={line.product.name}
                          className="aspect-[3/4] w-full object-cover"
                          style={{ background: "var(--parchment)" }}
                        />
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[16px]" style={{ fontFamily: "var(--font-display)" }}>
                                {line.product.name}
                              </p>
                              <p className="text-[11px]" style={{ color: "var(--taupe)" }}>
                                {line.color} / Size {line.size}
                              </p>
                            </div>
                            <button type="button" onClick={() => removeItem(line.id)} aria-label="Remove item">
                              <Trash2 size={15} strokeWidth={1.3} />
                            </button>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center border" style={{ borderColor: "var(--linen)" }}>
                              <button type="button" className="p-2" onClick={() => updateQuantity(line.id, line.quantity - 1)} aria-label="Decrease quantity">
                                <Minus size={13} strokeWidth={1.2} />
                              </button>
                              <span className="min-w-8 text-center text-[13px]">{line.quantity}</span>
                              <button type="button" className="p-2" onClick={() => updateQuantity(line.id, line.quantity + 1)} aria-label="Increase quantity">
                                <Plus size={13} strokeWidth={1.2} />
                              </button>
                            </div>
                            <p className="text-[17px]" style={{ fontFamily: "var(--font-display)" }}>
                              NGN {(line.product.price * line.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t p-6" style={{ borderColor: "var(--linen)" }}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[3px]">Subtotal</span>
                    <span className="text-[24px]" style={{ fontFamily: "var(--font-display)" }}>
                      NGN {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <p className="mb-5 text-[12px]" style={{ color: "var(--taupe)" }}>
                    Checkout is completed through WhatsApp so sizing and delivery can be confirmed before payment.
                  </p>
                  <a
                    href={`https://wa.me/2348000000000?text=${encodeURIComponent(
                      `Hello StylenStitches, I want to order:\n${lines
                        .map((line) => `${line.quantity}x ${line.product.name} - ${line.color}, size ${line.size}`)
                        .join("\n")}\nSubtotal: NGN ${subtotal.toLocaleString()}`,
                    )}`}
                    className="btn-merlot block w-full text-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Checkout on WhatsApp
                  </a>
                  <Link to="/shop" onClick={closeCart} className="btn-ghost-dark mt-3 block w-full text-center">
                    Continue Shopping
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
