"use client";
import Image from "next/image";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface ClientsPartnersProps {
  heading?: string;
  subheading?: string;
  logos: Logo[];
}

export default function ClientsPartners({
  heading = "Our Clients & Partners",
  subheading = "Trusted by industry leaders worldwide",
  logos
}: ClientsPartnersProps) {

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-10  bg-white">
      <div className="max-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left side - Heading (1/3) */}
          <div className="text-left pl-10   ">
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 mb-6">
              {heading}
            </h2>
          </div>

          {/* Right side - Scrolling logos (2/3) */}
          <div className="relative overflow-hidden lg:col-span-2">
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 w-25 h-18 mx-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={96}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}