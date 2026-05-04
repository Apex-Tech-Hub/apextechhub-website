"use client";

import Hub from "@/components/Hub";
import { iotData } from "./data";

export default function Page() {
  return <Hub {...iotData} />;
}