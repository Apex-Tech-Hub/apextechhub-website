"use client";

import { CometCard } from "./ui/comet-card";
import { useRef, useState } from "react";
import Image from "next/image";

interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

interface OurSolutionsProps {
  heading?: string;
  description?: string;
  solutions: Solution[];
}

export default function OurSolutions({
  heading = "Our Solutions",
  description = "Innovative solutions tailored to meet your business needs",
  solutions,
}: OurSolutionsProps) {

  return (
    <section className="w-full max-w-[calc(100%-2rem)] rounded-3xl bg-black "> 
        <div className="flex justify-between items-center" >
            <div className="text-white pl-10 pt-10 pb-10 lg:pb-0">
                <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4">{heading}</h2>
                <p className="text-lg">{description}</p>
            </div>
            <Image
            src="/services-background.png"
            alt="Our Solutions"
            width={700}
            height={700}
            className="hidden md:block object-cover rounded-3xl"
            />
        </div>
        

    {/* Scrollable Cards */}
  <div className="bg-white rounded-2xl w-full max-w-[calc(100%-2rem)] mx-auto mb-6">
    <div
      className="hidden lg:flex justify-between py-10 px-5" 
    >
      {solutions.map((solution) => (
       <CometCard key={solution.id}>
              <div className="flex flex-col w-80 cursor-pointer rounded-2xl bg-[#1F2121] p-4 text-white">
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
      {/* Mobile + Tablet — no CometCard, scrollable */}
        <div
          className="lg:hidden flex gap-4 overflow-x-auto px-5 py-10 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="min-w-[80%] sm:min-w-[45%] bg-[#1F2121] rounded-2xl p-4 text-white scroll-snap-align-start"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}