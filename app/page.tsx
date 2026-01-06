"use client";

import { useState, useEffect } from "react";

import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import ClientsPartners from "../components/ClientsPartners";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

import { servicesData, logos, landingData, aboutData, aboutItems, teamData, servicesSection } from "./data";

export default function Home() {
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Header active="Home" />

      <LandingSection
        video={landingData.video}
        hub={landingData.hub}
        title={landingData.title}
        description={landingData.description}
      />

      <ClientsPartners heading="Clients & Partners" logos={logos} />

      <AboutSection
        heading={aboutData.heading}
        description={aboutData.description}
        buttonText={aboutData.buttonText}
        logo={aboutData.logo}
        items={aboutItems}
      />
    

      <ServicesSection
        heading={servicesSection.heading}
        description={servicesSection.description}
        buttonLink={servicesSection.buttonLink}
        solutions={[...servicesData]}
      />

      <ContactForm />

      <OurTeam 
        heading={teamData.heading}
        members={teamData.members}
      />

      <Footer />
    </div>
  );
}