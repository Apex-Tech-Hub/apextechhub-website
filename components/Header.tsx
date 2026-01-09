"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Cybersecurity", path: "/cybersecurity" },
  { name: "IOT", path: "/iot" },
  { name: "GIS", path: "/gis" },
  { name: "Teams", path: "/teams" },
  { name: "Certificates", path: "/certificates" },
];

export default function Header({ active = "Home" }: { active?: string }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const lastScrollY = useRef(0);
  const tickRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);

      if (current < 50) setVisible(true);
      else if (current > lastScrollY.current) setVisible(false);
      else setVisible(true);

      lastScrollY.current = current;
    };

    const wrapped = () => {
      if (tickRef.current) return;
      tickRef.current = requestAnimationFrame(() => {
        onScroll();
        cancelAnimationFrame(tickRef.current);
        tickRef.current = 0;
      });
    };

    window.addEventListener("scroll", wrapped, { passive: true });
    return () => window.removeEventListener("scroll", wrapped);
  }, []);

  const handleNav = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : -96 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "fixed top-0 left-0 w-full z-50 backdrop-blur-md",
        scrolled ? "bg-black/10 shadow-sm" : "bg-white"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div onClick={() => handleNav("/")} className="cursor-pointer">
          <img src="/logo-apex.svg" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="flex gap-2 bg-gray-200 px-2 py-1 rounded-full">
            {tabs.map((tab) => {
              const isActive = active.toLowerCase() === tab.name.toLowerCase();
              return (
                <button
                  key={tab.name}
                  onClick={() => handleNav(tab.path)}
                  className={clsx(
                    "relative px-5 py-2 rounded-full font-medium",
                    isActive ? "text-black" : "text-gray-600 hover:text-black"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-lime-400 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-gray-200"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {tabs.map((tab) => {
                const isActive =
                  active.toLowerCase() === tab.name.toLowerCase();
                return (
                  <button
                    key={tab.name}
                    onClick={() => handleNav(tab.path)}
                    className={clsx(
                      "text-left px-4 py-3 rounded-lg font-medium",
                     
                      isActive
                        ? "bg-lime-400 text-black"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}