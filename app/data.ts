// src/data.ts

export const servicesSection = {
  heading: "Our Services",
  description: "Cybersecurity, IoT, and GIS solutions built for the real world.",
  buttonLink: "#contact-form",
};

export const servicesData = [
  {
    id: 1,
    title: "Threat Monitoring",
    description: "Real-time detection of cyber threats and vulnerabilities.",
    image: "/cyberservice1.jpg",
    category: "cybersecurity",
  },
  {
    id: 2,
    title: "Data Protection",
    description: "Securing sensitive information with advanced encryption.",
    image: "/cyberservice2.jpg",
    category: "cybersecurity",
  },
  {
    id: 3,
    title: "Incident Response",
    description: "Rapid action to minimize damage from security breaches.",
    image: "/cyberservice3.jpg",
    category: "cybersecurity",
  },
  {
    id: 4,
    title: "Network Defense",
    description: "Protecting your networks from intrusions and attacks.",
    image: "/cyberservice4.jpg",
    category: "cybersecurity",
  },
  {
    id: 5,
    title: "Smart Device Integration",
    description: "Seamlessly connect and manage all your IoT devices.",
    image: "/iot1.jpg",
    category: "iot",
  },
  {
    id: 6,
    title: "Real-Time Analytics",
    description: "Gain actionable insights from live data streams.",
    image: "/iot2.jpg",
    category: "iot",
  },
  {
    id: 7,
    title: "Automation & Control",
    description: "Automate processes to boost efficiency and reduce errors.",
    image: "/iot3.jpg",
    category: "iot",
  },
  {
    id: 8,
    title: "Smart Systems",
    description: "Automate lights, machines, and sensors to cut costs and boost efficiency.",
    image: "/iot4.jpg",
    category: "iot",
  },
  {
    id: 9,
    title: "Satellite Image Analysis",
    description: "High-resolution satellite data for planning, monitoring, and research.",
    image: "/gis4.jpg",
    category: "gis",
  },
  {
    id: 10,
    title: "Urban Planning Maps",
    description: "Smart city maps for roads, utilities, and development projects.",
    image: "/gis2.jpg",
    category: "gis",
  },
  {
    id: 11,
    title: "Land Survey Mapping",
    description: "Accurate land measurement and digital boundary mapping.",
    image: "/gis3.png",
    category: "gis",
  },
  {
    id: 12,
    title: " Environmental Monitoring",
    description: "Track climate, water, and land changes using GIS data.",
    image: "/gis1.jpg",
    category: "gis",
  },
] as const;

export const aboutData = {
  heading: "About Apex Tech Hub",
  description:
    "APEXTECH, a technology consortium based in Quetta, brings together three specialized solutions: IoT, GIS, and cybersecurity. It is dedicated to delivering high-quality IT projects, offering accredited tech diplomas to empower youth, and acting as a hub for IT exports and innovation.",
  buttonText: "Learn More",
  logo: "/apexlogo.png",
};

export const aboutItems = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    image: "/images/cybersecurity-background.jpg",
    href: "/cybersecurity",
    className:
      "absolute left-80 top-0 lg:left-[10%] rotate-[10deg] lg:rotate-[-6deg]",
  },
  {
    id: "iot",
    title: "Internet of Things",
    image: "/images/iot-background.jpg",
    href: "/iot",
    className:
      "absolute top-30 left-10 lg:top-20 lg:left-[-30%] rotate-[-10deg] lg:rotate-[-2deg]",
  },
  {
    id: "gis",
    title: "GIS",
    image: "/images/gis-background.jpg",
    href: "/gis",
    className:
      "absolute top-20 right-20 lg:top-30 lg:right-5 rotate-[-6deg] lg:rotate-[8deg]",
  },
];

export const logos = [
  { id: 1, src: "/logos/sdss-logo.jpg", alt: "SDSS" },
  { id: 2, src: "/logos/bhmis-logo.jpeg", alt: "BHMIS" },
  { id: 3, src: "/logos/gob-logo.jpg", alt: "GOB" },
  { id: 4, src: "/logos/icrms-logo.png", alt: "ICRMS" },
  { id: 5, src: "/logos/iwmis-logo.webp", alt: "IWMI" },
  { id: 6, src: "/logos/ncgsa-logo.png", alt: "NCGSA" },
  { id: 7, src: "/logos/ndma-logo.png", alt: "NDMA" },
  { id: 8, src: "/logos/suparco-logo.png", alt: "SUPARCO" },
  { id: 9, src: "/logos/aigeo-logo.jpeg", alt: "AiGeo"},
  { id: 10, src: "/logos/cloud-logo.jpeg", alt: "Cloud"},
  { id: 11, src: "/logos/gobtd-logo.jpeg", alt: "GOBTD"},
];




export const landingData = {
  video: "/videos/homepage.mp4",
  hub: "APEX TECH HUB",
  title: "Advancing Technology, Empowering Futures",
  description:
    "We specialize in IoT, GIS, and Cybersecurity solutions that drive innovation and secure your digital landscape.",
};

export const teamData = {
  heading: "Executive Team",
  members: [
    {
      id: 1,
      name: "Dr. Shafi Ullah",
      designation: "Founder & CEO",
      image:
        "/employee/executive/shafi-ullah.jpeg",
    },
    {
      id: 2,
      name: "Israr Khan",
      designation: "Co-Founder & CFO",
      image:
        "/employee/executive/israr-khan.jpeg",
    },
    {
      id: 3,
      name: "Ahmed Shah",
      designation: "Chief Technical Officer",
      image:
        "/employee/executive/ahmedshah.jpeg",
    }
  ],
};
