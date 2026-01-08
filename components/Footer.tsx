import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube, } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-10 pb-10 pt-20 bg-black mt-10 text-white">
      <div className="max-w-2xl lg:max-w-full flex justify-between flex-col-reverse md:flex-row mx-auto gap-12">
       {/* Logo Section */}
        <div className="flex flex-col gap-6">
          <Image
            src="/logo-apex.svg"
            alt="Logo"
            width={300}
            height={200}
            className="object-contain"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black transition"
            >
              <SiUpwork />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black transition"
            >
              <FaYoutube />
            </a>
          </div>
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


        {/* Pages Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pages</h3>
          <ul className="space-y-3 ">
            <li>
              <a href="/teams" className="hover:text-lime-400 transition">Teams</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-lime-400 transition">Projects</a>
            </li>
            <li>
              <a href="/certifications" className="hover:text-lime-400 transition">Certifications</a>
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