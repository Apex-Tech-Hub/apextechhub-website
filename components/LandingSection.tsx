"use client";

interface LandingSectionProps {
  video: string;   // ✅ video instead of image
  hub?: string;
  title: string;
  description: string;
}

export default function LandingSection({
  video,
  hub,
  title,
  description,
}: LandingSectionProps) {
  return (
    <section className="relative overflow-hidden w-full max-w-[calc(100%-2rem)] rounded-3xl h-[680px] flex items-start justify-center px-2 sm:px-4 mt-20">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white mt-20 w-full max-w-[1200px] px-2 sm:px-4">
        {hub && (
          <span className="inline-block bg-black/50 border border-white/20 px-4 py-1 rounded-md tracking-widest text-sm mb-4">
            {hub}
          </span>
        )}

        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg opacity-90">{description}</p>
      </div>
    </section>
  );
}