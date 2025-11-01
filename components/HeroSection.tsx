import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden p-8 text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/50 to-transparent" />

      <div className="relative z-20">
        <h1 className="animate-fade-in-slow text-6xl font-bold text-white [text-shadow:0_0_12px_rgba(251,191,36,0.5)] md:text-8xl font-['Cormorant_Garamond']">
          The Last Sanctuary
        </h1>
        <p
          className="animate-fade-in-slow mt-4 max-w-2xl text-lg text-slate-300 md:text-xl"
          style={{ animationDelay: '1s' }}
        >
          Built by gods who grew tired of eternity — kept alive by those who still feel.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
