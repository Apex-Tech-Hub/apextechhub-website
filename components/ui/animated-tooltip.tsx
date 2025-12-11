"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div
      className="
        flex flex-wrap justify-center gap-6 
        sm:grid sm:grid-cols-3 lg:gap-0 
        lg:flex lg:flex-row 
      "
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className="
            group relative
            flex justify-center 
            sm:justify-center
            lg:-ml-6
          "
          style={{ zIndex: hoveredIndex === item.id ? 50 : index }}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="
                  absolute -top-20 left-1/2 z-[60]
                  -translate-x-1/2
                  flex flex-col items-center
                  rounded-md bg-black px-4 py-2 
                  text-xs shadow-xl
                "
              >
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Avatar wrapper with responsive sizes */}
          <div
            className="
              relative 
              h-[150px] w-[150px] 
              sm:h-[170px] sm:w-[170px]
              lg:h-[200px] lg:w-[200px]
            "
          >
            <div
              className="
                absolute inset-0 rounded-full 
                bg-gradient-to-br from-emerald-300/50 to-sky-300/50 
                blur-2xl opacity-60 
                group-hover:opacity-90 
                transition-all
              "
            ></div>

            <img
              onMouseMove={handleMouseMove}
              src={item.image}
              alt={item.name}
              className="
                relative rounded-full object-cover border-2 border-white 
                shadow-md transition 
                duration-300 
                group-hover:scale-110 group-hover:shadow-xl
                h-full w-full
              "
            />
          </div>
        </div>
      ))}
    </div>
  );
};