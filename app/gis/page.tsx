"use client";

import Hub from "@/components/Hub";
import { gisData } from "./data";

export default function Page() {
  return <Hub {...gisData} />;
}