"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

interface AboutItem {
  id: string;
  title: string;
  image: string;
  href: string;
  className: string;
}

interface AboutSectionProps {
  heading: string;
  description: string;
  logo: string;
  buttonText?: string;
  items: AboutItem[];
}

export default function AboutSection({
  heading,
  description,
  logo,
  buttonText = "Explore More",
  items,
}: AboutSectionProps) {
  const router = useRouter();

  // 🔒 only ONE active card, first one open by default
  const [activeId, setActiveId] = useState(
    items.length > 0 ? items[0].id : ""
  );

  return (
    <section className="relative w-full max-w-[calc(100%-2rem)] mx-auto py-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute left-0 md:left-20 top-0 lg:left-10 lg:top-20 opacity-5 pointer-events-none">
        <Image
          src={logo}
          alt="Logo Background"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Left Content */}
      <div className="relative text-center lg:text-left z-10 flex-1 px-4 sm:px-10">
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-6 max-w-full lg:max-w-lg">
          {description}
        </p>
      </div>

      {/* 📱 MOBILE – accordion cards (ONE open only) */}
      <div className="w-full lg:hidden flex flex-col gap-3">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`relative overflow-hidden rounded-xl cursor-pointer
                transition-all duration-500 ease-in-out
                ${isActive ? "h-[320px]" : "h-[80px]"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={isActive}
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute bottom-4 left-4 text-white font-bold z-10">
                {item.title}
              </div>

              {isActive && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(item.href);
                  }}
                  className="absolute bottom-4 right-4 z-10
                    bg-white/80 text-black p-2 rounded-full
                    active:scale-95 transition"
                >
                  <ArrowUpRight size={26} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* 🖥️ DESKTOP – draggable cards (UNCHANGED) */}
      <div className="relative z-10 flex-1 w-full hidden lg:block md:h-[600px] sm:h-[500px]">
        <DraggableCardContainer className="relative w-full h-full overflow-visible">
          {items.map((item) => (
            <DraggableCardBody
              key={item.id}
              className={`${item.className} cursor-grab active:cursor-grabbing`}
            >
              <div
                className="bg-black rounded-3xl p-4 shadow-2xl"
                onDoubleClick={() => router.push(item.href)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10
                    h-64 w-64 sm:h-72 sm:w-72
                    rounded-2xl object-cover"
                />
                <h3 className="mt-4 text-center text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-center text-sm text-gray-400">
                  Double click to open
                </p>
              </div>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
}