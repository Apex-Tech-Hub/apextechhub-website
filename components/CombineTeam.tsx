"use client";

import Header from "./Header";
import Footer from "./Footer";
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
    <div className=" mt-30 gap-10 min-h-screen flex flex-col">
      <Header active={active} />

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