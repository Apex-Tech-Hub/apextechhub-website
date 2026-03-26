"use client";

import Header from "../../components/global/Header";
import LandingSection from "../../components/LandingSection";
import Footer from "../../components/global/Footer";
import { coursesData } from "./data";

export default function CoursesPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Header active="Courses" />

      <LandingSection
        video={coursesData.hero.video}
        hub={coursesData.hero.hub}
        title={coursesData.hero.title}
        description={coursesData.hero.description}
      />

      <section className="w-full max-w-[calc(100%-2rem)] py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
          <h2 className="text-4xl font-bold text-gray-900">Available Diplomas</h2>
          <p className="text-gray-500">Launching March 29-30, 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {coursesData.diplomas.map((course) => (
            <div key={course.id} className="relative overflow-hidden rounded-3xl bg-black h-[300px] group p-8 flex flex-col justify-end border border-white/10">
              {/* Card Background - Visual Polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative z-20">
                <span className="text-[10px] tracking-[0.2em] text-blue-400 uppercase font-bold">
                  {course.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">{course.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{course.duration}</span>
                  <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-all">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}