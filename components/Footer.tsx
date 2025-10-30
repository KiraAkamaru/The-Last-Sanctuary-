import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-center bg-gradient-to-t from-black via-[#0a0a14] to-[#0a0a14]">
      <div className="container mx-auto px-6">
        <p className="text-lg text-slate-400 font-['Cormorant_Garamond'] mb-4">
          Somewhere in the meadow, the wind remembers your name.
        </p>
        <p className="text-sm text-slate-500">
          © The Last Sanctuary — Designed by beings who grew tired of being gods.
        </p>
      </div>
    </footer>
  );
};

export default Footer;