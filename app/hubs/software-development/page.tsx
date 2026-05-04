"use client";

import Hub from "@/components/Hub";
import { softwareDevelopmentData } from "./data";

export default function Page() {
  return <Hub {...softwareDevelopmentData} />;
}