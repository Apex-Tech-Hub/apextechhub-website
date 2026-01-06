"use client";

import Header from "./Header";
import LandingSection from "./LandingSection";
import ClientsPartners from "./ClientsPartners";
import OurSolutions from "./OurSolutions";
import OverviewSection from "./OverviewSection";
import OurTeam from "./OurTeam";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface HubProps {
  active: string;

  landing: {
    video: string;
    hub: string;
    title: string;
    description: string;
  };

  logos: {
    id: number;
    src: string;
    alt: string;
  }[];

  solutions: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];

  overview: {
    heading: string;
    description: string;
    logo: string;
    longImage: string;
    shortImage: string;
    buttonText?: string;
    buttonLink?: string;
  };

  teamData: {
    heading: string;
    members: TeamMember[];
  };
}

export default function Hub({
  active,
  landing,
  logos,
  solutions,
  overview,
  teamData,
}: HubProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Header active={active} />

      <LandingSection
        video={landing.video}
        hub={landing.hub}
        title={landing.title}
        description={landing.description}
      />

      <ClientsPartners heading="Clients & Partners" logos={logos} />

      <OurSolutions solutions={solutions} />

      <OverviewSection
        heading={overview.heading}
        description={overview.description}
        logo={overview.logo}
        longImage={overview.longImage}
        shortImage={overview.shortImage}
        buttonText={overview.buttonText}
        buttonLink={overview.buttonLink}
      />

      <OurTeam 
        heading={teamData.heading}
        members={teamData.members}
      />

      <ContactForm />
      <Footer />
    </div>
  );
}