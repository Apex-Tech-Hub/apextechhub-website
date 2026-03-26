"use client";

import Header from "../../components/global/Header";
import LandingSection from "../../components/LandingSection";
import Footer from "../../components/global/Footer";
import ContactForm from "@/components/ContactForm";
import { consultancyData } from "./data";

export default function ConsultancyPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Header active="Consultancy" />

      {/* Reusing your LandingSection component for style consistency */}
      <LandingSection
        video={consultancyData.hero.video}
        hub={consultancyData.hero.hub}
        title={consultancyData.hero.title}
        description={consultancyData.hero.description}
      />

      {/* Specialized Domains - Matching your Services style */}
      <section className="w-full max-w-[calc(100%-2rem)] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultancyData.domains.map((item: any) => (
            <div key={item.id} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-500/30 transition-all duration-500 group">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{item.t}</h4>
              <p className="text-gray-600 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}