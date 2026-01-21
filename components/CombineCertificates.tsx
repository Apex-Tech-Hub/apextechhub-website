"use client";

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Certificate from "@/components/Certificate";

interface CertificateData {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfUrl: string;
    date: string;
    issuer: string;
}

interface CertificatePageProps {
    active: string;
    certificates: CertificateData[];
}

export default function CombineCerticiates({ active, certificates }: CertificatePageProps) {
  return (
    <div className="mt-30">
        <Header active={active} />
        <h1 className="text-5xl font-bold text-center mt-10">Company Certifications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {certificates.map((cert) => (
                <Certificate key={cert.id} {...cert} />
            ))}
        </div>
        <h1 className="text-5xl font-bold text-center mt-10">Team Certifications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {certificates.map((cert) => (
                <Certificate key={cert.id} {...cert} />
            ))}
        </div>
        <Footer />
    </div>
  );
}