    "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import Image from "next/image";

interface CertificateProps {
  title: string;
  description: string;
  image: string;
  pdfUrl: string;
  date: string;
  issuer: string;
}

export default function CertificateCard({
  title,
  description,
  image,
  pdfUrl,
  date,
  issuer,
}: CertificateProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="rounded-2xl border bg-white shadow-sm p-4 flex flex-col gap-4">
        {/* Image */}
        <button
          onClick={() => setOpen(true)}
          className="relative w-full h-100 md:h-155 rounded-xl overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </button>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-bold text-black">Issued by: {issuer}</p>
          <p className="text-sm font-bold text-lime-600">{date}</p>
          <p className="text-sm text-gray-600">{description}</p>

        </div>

        {/* Download */}
        <a
          href={pdfUrl}
          download
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full"
              >
                <X size={18} />
              </button>

              {/* Zoomed Image */}
              <div className="relative w-full h-155">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}