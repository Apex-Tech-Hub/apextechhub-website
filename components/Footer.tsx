import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-5 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo Section */}
        <div>
          <Image
            src="/logo-apex.svg"
            alt="Logo"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Hubs Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hubs</h3>
          <ul className="space-y-3 ">
            <li>
              <a href="/cybersecurity" className="hover:text-lime-400 transition">Cybersecurity</a>
            </li>
            <li>
              <a href="/iot" className="hover:text-lime-400 transition">IoT</a>
            </li>
            <li>
              <a href="/gis" className="hover:text-lime-400 transition">GIS</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">You can reach us at</h3>
          <ul className="space-y-4 ">
            <li className="flex items-center gap-3">
              <FaPhone className="text-lg" />
              <a href="tel:+9231382848267" className="hover:text-lime-400 transition">+92 313 828 48267</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <a href="mailto:info@apextechhub.org" className="hover:text-lime-400 transition">info@apextechhub.org</a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg" />
              <a href="https://maps.app.goo.gl/TyDaaQQJ47g4RKcx9" className="hover:text-lime-400 transition">Greenscape Tower, Barat Road, Jinnah Town Quetta, Balochistan, Pakistan</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}