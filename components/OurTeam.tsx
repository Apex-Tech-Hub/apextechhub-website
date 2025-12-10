"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface OurTeamProps {
  heading: string;
  members: TeamMember[];
}

export default function OurTeam({ heading, members }: OurTeamProps) {
  return (
    <section className="w-full max-w-[calc(100%-2rem)] mx-auto rounded-3xl bg-black py-5 relative overflow-hidden">
      <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4 pt-5 text-center text-white">
        {heading}
      </h2>

      <div className="bg-white rounded-2xl w-full max-w-[calc(100%-3rem)] mx-auto mt-12 py-20 flex justify-center items-center">
        <AnimatedTooltip items={members} />
      </div>
    </section>
  );
}