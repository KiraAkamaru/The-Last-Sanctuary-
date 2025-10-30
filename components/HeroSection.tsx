import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden"
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0 opacity-60"
        poster="/images/hero-poster.jpeg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/50 to-transparent z-10"></div>

      <div className="relative z-20">
        <h1 className="text-6xl md:text-8xl font-['Cormorant_Garamond'] font-bold text-white [text-shadow:0_0_12px_rgba(251,191,36,0.5)] animate-fade-in-slow">
          The Last Sanctuary
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl animate-fade-in-slow" style={{ animationDelay: '1s' }}>
          Built by gods who grew tired of eternity — kept alive by those who still feel.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;