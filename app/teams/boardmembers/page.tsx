"use client";

import CombineTeam from "@/components/CombineTeam";
import { teamData } from "./data";

export default function Page() {
  return <CombineTeam {...teamData} />;
}