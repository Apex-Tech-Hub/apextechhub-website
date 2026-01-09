"use client";

import CombineCerticiates from "@/components/CombineCertificates";
import { certificateData } from "./data";

export default function Page() {
  return <CombineCerticiates {...certificateData} />;
}