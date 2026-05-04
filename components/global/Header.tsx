"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const tabs = [
  { name: "Home", path: "/" },
    {
    name: "Hubs",
    path: "",
    children: [{ name: "Cybersecurity", path: "/hubs/cybersecurity" },
    { name: "IOT", path: "/hubs/iot" },
    { name: "GIS", path: "/hubs/gis" },
    { name: "Software Development", path: "/hubs/software-development" },
    ],
  },
  {
    name: "Teams",
    path: "",
    children: [{ name: "Board Members", path: "/teams/boardmembers" },
    { name: "Core Team", path: "/teams" },
    ],
  },
  { name: "Certificates", path: "/certificates" },
  { name: "Our Partners", path: "/partners" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Consultancy", path: "/consultancy" },
  { name: "Courses", path: "/courses" },
];

export default function Header({ active = "Home" }: { active?: string }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (path: string) => {
    router.push(path);
    setOpen(false);
    setExpanded(null);
  };

  const toggleExpand = (name: string) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-[9999] backdrop-blur-md",
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
              const isActive =
                active.toLowerCase() === tab.name.toLowerCase();

              return (
                <div key={tab.name} className="relative group">
                  <button
                    onClick={() => handleNav(tab.path)}
                    className={clsx(
                      "relative px-5 py-2 rounded-full font-medium",
                      isActive
                        ? "bg-lime-400 text-black"
                        : "text-gray-600 hover:text-black"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {tab.name}
                      {tab.children && (
                        <ChevronRight size={14} className="rotate-90" />
                      )}
                    </span>
                  </button>

                  {/* Desktop Dropdown */}
                  {tab.children && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                      <div className="bg-white backdrop-blur-md rounded-lg shadow-lg border border-gray-200 min-w-[220px] overflow-hidden">
                        {tab.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNav(child.path)}
                            className="w-full text-left px-5 py-3 font-medium hover:bg-lime-400 transition"
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-2">
            {tabs.map((tab) => {
              const isActive =
                active.toLowerCase() === tab.name.toLowerCase();
              const isOpen = expanded === tab.name;

              return (
                <div key={tab.name}>
                  <div
                    className={clsx(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium cursor-pointer",
                      isActive
                        ? "bg-lime-400 text-black"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={() => handleNav(tab.path)}
                  >
                    <span>{tab.name}</span>

                    {tab.children && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(tab.name);
                        }}
                        className="p-1"
                      >
                        <ChevronRight
                          size={18}
                          className={clsx(
                            "transition-transform",
                            isOpen && "rotate-90"
                          )}
                        />
                      </span>
                    )}
                  </div>

                  {tab.children && isOpen && (
                    <div className="ml-6 mt-1 flex flex-col gap-1">
                      {tab.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleNav(child.path)}
                          className="text-left px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
