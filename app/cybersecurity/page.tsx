"use client";

import Header from "../../components/Header";
import LandingSection from "../../components/LandingSection";
import ClientsPartners from "@/components/ClientsPartners";
import OurSolutions from "@/components/OurSolutions";
import OverviewSection from "@/components/OverviewSection";
import OurTeam from "@/components/OurTeam";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const myLogos = [
  { id: 1, src: "/logos/sdss-logo.jpg", alt: "SDSS" },
  { id: 2, src: "/logos/bhmis-logo.jpeg", alt: " BHMIS" },
  { id: 3, src: "/logos/gob-logo.jpg", alt: "GOB" },
  { id: 4, src: "/logos/icrms-logo.png", alt: "ICRMS" },
  { id: 5, src: "/logos/iwmis-logo.webp", alt: "IWMI" },
  { id: 6, src: "/logos/ncgsa-logo.png", alt: "NCGSA" },
  { id: 7, src: "/logos/ndma-logo.png", alt: "NDMA" },
  { id: 8, src: "/logos/suparco-logo.png", alt: "SUPARCO"},
];

const solutions = [
  { 
    id: 1, 
    title: "Threat Monitoring", 
    description: "Real-time detection of cyber threats and vulnerabilities.",
    image: "/cyberservice1.jpg"
  },
  { 
    id: 2, 
    title: "Data Protection", 
    description: "Securing sensitive information with advanced encryption.",
    image: "cyberservice2.jpg"
  },
  { 
    id: 3, 
    title: "Incident Response", 
    description: "Rapid action to minimize damage from security breaches.",
    image: "cyberservice3.jpg"
  },
  { 
    id: 4, 
    title: "Network Defense", 
    description: "Protecting your networks from intrusions and attacks.",
    image: "cyberservice4.jpg"
  },
];

export default function Cybersecurity() {



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Header active="Cybersecurity" />
      <LandingSection
        image="/images/cybersecurity-background.jpg"
        hub="CYBERSECURITY HUB"
        title="Shielding Your Digital World"
        description="We protect your data, systems, and networks from evolving cyber threats"
      />
      <ClientsPartners 
        heading="Clients & Partners"
        logos={myLogos}
      />
     <OurSolutions solutions={solutions} />
      <OverviewSection
        heading="About Us"
        description="Apex Tech Hub, a technology consortium based in Quetta which unites innovation and expertise across IoT, GIS, and Cybersecurity, delivering advanced tech solutions with a team of internationally trained professionals"
        logo="/logo-apex.png"          // your logo path
        longImage="/cyberabout1.jpg"  // your first image path
        shortImage="/cyberabout2.jpg" // your second image path
        buttonText="Explore Now"    // optional, defaults to "Border Magic"
      />
      <OurTeam />
       <ContactForm />
       <Footer />

    </div>
  );
}