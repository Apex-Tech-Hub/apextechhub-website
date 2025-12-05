"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useEffect, useState } from "react";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Cybersecurity", path: "/cybersecurity" },
  { name: "IOT", path: "/iot" },
  { name: "GIS", path: "/gis" },
];

export default function Header({ active = "Home" }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-all backdrop-blur-md",
        scrolled ? "bg-black/10 shadow-sm " : "bg-white"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>        
        <img src="/logo-apex.svg" alt="ApexTech Logo" className="h-10" />
      </div>

      {/* Tabs */}
      <nav className="flex items-center gap-4 relative">
        {/* Home button separate */}
        <button
          onClick={() => router.push("/")}
          className={clsx(
            "relative px-5 py-2 rounded-full font-medium bg-gray-200 transition-all",
            active.toLowerCase() === "home" ? "text-black" : "text-gray-600 hover:text-black"
          )}
        >
          {active.toLowerCase() === "home" && (
            <motion.div
              layoutId="activeTabHome"
              className="absolute inset-0 bg-lime-400 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
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
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGroup"
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
    </header>
  );
}
