"use client";

import Header from "./global/Header";
import Footer from "./global/Footer";
import OurTeam from "./OurTeam";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface SingleTeam {
  heading: string;
  members: TeamMember[];
}

interface TeamProps {
  active: string;
  teams: SingleTeam[];
}

export default function CombineTeam({ active, teams }: TeamProps) {
  return (
    <div className=" mt-20 gap-10 min-h-screen flex flex-col">
      <Header active={active} />
      <h1 className="text-5xl font-bold text-center mt-10">Our Teams</h1>
      {teams.map((team, index) => (
        <OurTeam
          key={index}
          heading={team.heading}
          members={team.members}
        />
      ))}

      <Footer />
    </div>
  );
}