"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "923361002666"; 
    const message = "Hi, I need help";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg"
    >
      <MessageCircle className="text-white w-7 h-7" />
    </motion.a>
  );
}