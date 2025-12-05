"use client";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import LandingSection from "../components/LandingSection";

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
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Header active="Home" />
      <LandingSection
        image="/images/home-background.png"
        hub="APEX TECH HUB"
        title="Advancing Technology, Empowering Futures"
        description="We specialize in IoT, GIS, and Cybersecurity solutions that drive innovation and secure your digital landscape."
      />
    </div>
  );
}