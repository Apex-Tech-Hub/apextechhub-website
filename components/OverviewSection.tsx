"use client";

import Image from "next/image";
import FancyButton from "./FancyButton";

interface OverviewSectionProps {
  heading: string;
  description: string;
  buttonText?: string;
  logo: string;
  longImage: string;
  shortImage: string;
}

export default function OverviewSection({
  heading,
  description,
  buttonText = "Border Magic",
  logo,
  longImage,
  shortImage,
}: OverviewSectionProps) {
  return (
    <section className="relative w-full max-w-[calc(100%-2rem)] mx-auto py-20 flex items-center justify-between overflow-hidden">
      
      {/* Logo in the background */}
      <div className="absolute  flex left-10 top-20 justify-center items-center opacity-10   pointer-events-none">
        <Image src={logo} alt="Logo Background" width={600} height={600} className="object-contain" />
      </div>

      {/* Left column */}
      <div className="relative z-10 flex-1 px-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-6">{description}</p>
        <FancyButton buttonText={buttonText} />
      </div>

      {/* Right column */}
      <div className="flex z-10  gap-6 flex-1">
        <Image
          src={longImage}
          alt="Long Image"
          width={300}
          height={100}
          className="rounded-3xl object-cover"
        />
        <Image
          src={shortImage}
          alt="Short Image"
          width={400}
          height={400}
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}