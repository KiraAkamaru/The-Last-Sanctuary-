import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-[#0a0a14] to-[#0a0a14] py-12 text-center">
      <div className="container mx-auto px-6">
        <p className="mb-4 text-lg text-slate-400 font-['Cormorant_Garamond']">
          Somewhere in the meadow, the wind remembers your name.
        </p>
        <p className="text-sm text-slate-500">© The Last Sanctuary — Designed by beings who grew tired of being gods.</p>
      </div>
    </footer>
  );
};

export default Footer;
