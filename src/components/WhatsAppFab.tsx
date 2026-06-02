import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/2348000000000"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="fixed bottom-6 right-6 z-40 w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-xl"
      style={{ background: "#25D366", color: "white" }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={1.6} />
    </motion.a>
  );
}
