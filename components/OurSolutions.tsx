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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="w-full max-w-[calc(100%-2rem)] rounded-3xl bg-black "> 
        <div className="flex justify-between items-center" >
            <div className="text-white pl-10 pt-10">
                <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4">{heading}</h2>
                <p className="text-lg">{description}</p>
            </div>
            <Image
            src="/services-background.png"
            alt="Our Solutions"
            width={700}
            height={700}
            className="object-cover rounded-3xl"
            />
        </div>
        

    {/* Scrollable Cards */}
  <div className="bg-white rounded-2xl w-full max-w-[calc(100%-2rem)] mx-auto mb-6">
    <div
      className="flex justify-between py-10 px-5" 
    >
      {solutions.map((solution) => (
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

      {/* Stylish scrollbar */}
      <style jsx>{`
        .scrollbar-thumb-rounded::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thumb-rounded::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .scrollbar-thumb-rounded::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}