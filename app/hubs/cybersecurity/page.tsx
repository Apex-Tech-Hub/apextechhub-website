"use client";

import Hub from "@/components/Hub";
import { cybersecurityData } from "./data";

export default function Page() {
  return <Hub {...cybersecurityData} />;
}