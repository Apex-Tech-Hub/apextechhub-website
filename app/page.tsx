"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EncryptedText } from "@/components/ui/encrypted-text";


export default function Home() {
  const [showBackground, setShowBackground] = useState(true);

  // Wait for the text to finish before hiding background
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
    }, 3000); // 3 seconds for the text animation to show fully
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <AnimatePresence>
        {showBackground && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-black rounded-3xl flex items-center justify-center"
          >
            <EncryptedText text="Welcome to APEX TECH HUB" className="text-white text-3xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content that shows after background disappears */}
      {!showBackground && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-6 bg-white rounded-2xl shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-4">Main Page Content</h1>
          <p>This is your main content revealed after the intro animation.</p>
        </motion.div>
      )}

    </div>
  );
}