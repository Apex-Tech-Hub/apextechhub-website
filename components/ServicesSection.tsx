"use client";

import { CometCard } from "./ui/comet-card";
import { useRef, useState } from "react";
import Image from "next/image";
import FancyButton from "./FancyButton";

interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "cybersecurity" | "iot" | "gis";
  icon?: React.ReactNode;
}

interface ServicesSectionProps {
  heading?: string;
  description?: string;
  solutions: Solution[];
}

export default function ServicesSection({
  heading = "Our Services",
  description = "Smart solutions built for real-world problems",
  solutions,
}: ServicesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<
    "cybersecurity" | "iot" | "gis"
  >("cybersecurity");

  const filteredSolutions = solutions.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="w-full max-w-[calc(100%-2rem)] rounded-3xl bg-black mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="text-white px-6 sm:px-10 pt-10">
          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-lg mb-6 max-w-xl">{description}</p>

          {/* Button to Contact */}
          <a href="#contact-form">
            <FancyButton buttonText="Get Started" />
          </a>
        </div>

        <Image
          src="/home-solutions.png"
          alt="Our Services"
          width={300}
          height={300}
          className="object-cover rounded-3xl"
        />
      </div>

      {/* Cards */}
      <div className="bg-white rounded-2xl w-full max-w-[calc(100%-2rem)] mx-auto  mb-10 p-1">
          <div className="w-full  bg-black rounded-xl py-5">
              {/* Tabs */}
            <div className="flex justify-center gap-4  px-4">
              {[
                { id: "cybersecurity", label: "Cybersecurity" },
                { id: "iot", label: "Internet of Things" },
                { id: "gis", label: "GIS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "cybersecurity" | "iot" | "gis")
                  }
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-lime-400 text-black"
                      : "bg-[#1F2121] text-white hover:bg-[#2a2a2a]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
        </div>
       
        <div
          ref={scrollRef}
          className="flex gap-6 py-10 px-5 overflow-x-auto scrollbar-hide"
        >
          {filteredSolutions.map((solution) => (
            <CometCard key={solution.id}>
            <div className="flex flex-col w-80  cursor-pointer rounded-2xl bg-[#1F2121] p-4 text-white">
                <div className="relative aspect-[3/4] w-full mb-4">
                  {solution.icon ? (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {solution.icon}
                    </div>
                  ) : (
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  )}
                </div>
                <div className="font-bold text-lg">{solution.title}</div>
                <p className="text-sm text-gray-300 mt-1">{solution.description}</p>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}