"use client";
import Header from "../../components/Header";
import LandingSection from "../../components/LandingSection";
import ClientsPartners from "@/components/ClientsPartners";

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


export default function Gis() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Header active="GIS" />
       <LandingSection
        image="/images/gis-background.jpg"
        hub="GIS HUB"
        title="Connecting the Future"
        description="Smart IoT solutions that bridge devices, data, and innovation to transform your business operations."
      />
      <ClientsPartners
        heading="Clients & Partners"
        logos={myLogos}
      />
    </div>
  );
}