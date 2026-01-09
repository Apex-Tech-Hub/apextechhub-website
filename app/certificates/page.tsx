"use client";

import Certificate from "@/components/Certificate";
import { certificateData } from "./data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cybersecurity() {
    const { active, certificates } = certificateData;
  return (
    <div className="mt-30">
        <Header active={active} />
        <h1 className="text-5xl font-bold text-center mt-10">Our Certifications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {certificates.map((cert) => (
                <Certificate key={cert.id} {...cert} />
            ))}
        </div>
        <Footer />
    </div>
  );
}