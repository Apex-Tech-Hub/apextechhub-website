"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Cybersecurity", path: "/cybersecurity" },
  { name: "IOT", path: "/iot" },
  { name: "GIS", path: "/gis" },
];

export default function Header({ active = "Home" }: { active?: string }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);
  const tickRef = useRef<number>(0);

  useEffect(() => {
    // small thresholds to avoid flicker on micro scrolls
    const UP_THRESHOLD = -15; // px
    const DOWN_THRESHOLD = 15; // px
    const ALWAYS_SHOW_AT = 50; // px from top -> always show

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;

      // background toggle
      setScrolled(current > 10);

      // always show when near top
      if (current <= ALWAYS_SHOW_AT) {
        setVisible(true);
      } else if (delta > DOWN_THRESHOLD) {
        // scrolling down enough → hide
        setVisible(false);
      } else if (delta < UP_THRESHOLD) {
        // scrolling up enough → show
        setVisible(true);
      }
      // update last only after we've used delta
      lastScrollY.current = current;
    };

    // throttle using requestAnimationFrame to reduce jitter
    const wrapped = () => {
      if (tickRef.current) return;
      tickRef.current = window.requestAnimationFrame(() => {
        onScroll();
        window.cancelAnimationFrame(tickRef.current);
        tickRef.current = 0;
      });
    };

    window.addEventListener("scroll", wrapped, { passive: true });
    return () => {
      window.removeEventListener("scroll", wrapped);
      if (tickRef.current) window.cancelAnimationFrame(tickRef.current);
    };
  }, []);

  return (
    // keep header always mounted — animate translateY instead of mount/unmount
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : -96 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md",
        scrolled ? "bg-black/10 shadow-sm" : "bg-white"
      )}
      style={{ willChange: "transform" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
        <img src="/logo-apex.svg" alt="ApexTech Logo" className="h-10" />
      </div>

      {/* Tabs */}
      <nav className="flex items-center gap-4">
        {/* Home button separate */}
        <button
          onClick={() => router.push("/")}
          className={clsx(
            "relative px-5 py-2 rounded-full font-medium bg-gray-200 transition-all",
            active.toLowerCase() === "home" ? "text-black" : "text-gray-600 hover:text-black"
          )}
        >
          {active.toLowerCase() === "home" &&
            (scrolled ? (
              <div className="absolute inset-0 bg-lime-400 rounded-full" />
            ) : (
              <motion.div
                layoutId="activePill"
                initial={false}
                className="absolute inset-0 bg-lime-400 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ))}
          <span className="relative z-10">Home</span>
        </button>

        {/* Grouped tabs */}
        <div className="flex gap-2 bg-gray-200 px-2 py-1 rounded-full relative">
          {tabs
            .filter((t) => t.name !== "Home")
            .map((tab) => {
              const isActive = active.toLowerCase() === tab.name.toLowerCase();
              return (
                <button
                  key={tab.name}
                  onClick={() => router.push(tab.path)}
                  className={clsx(
                    "relative px-5 py-2 rounded-full font-medium transition-all",
                    isActive ? "text-black" : "text-gray-600 hover:text-black"
                  )}
                >
                  {isActive &&
                    (scrolled ? (
                      <div className="absolute inset-0 bg-lime-400 rounded-full" />
                    ) : (
                      <motion.div
                        layoutId="activePill"
                        initial={false}
                        className="absolute inset-0 bg-lime-400 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    ))}
                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
        </div>
      </nav>
    </motion.header>
  );
}