import React from 'react';
import HeroSection from './components/HeroSection';
import LoreSection from './components/LoreSection';
import MediaGallerySection from './components/MediaGallerySection';
import ComicBookSection from './components/ComicBookSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a14] text-slate-200 font-['Inter']">
      <main>
        <HeroSection />
        <LoreSection />
        <MediaGallerySection />
        <ComicBookSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;