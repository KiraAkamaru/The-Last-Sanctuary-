import React from 'react';
import HeroSection from './components/HeroSection';
import LoreSection from './components/LoreSection';
import MediaGallerySection from './components/MediaGallerySection';
import GameplaySection from './components/GameplaySection';
import ComicBookSection from './components/ComicBookSection';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="min-h-screen text-slate-200 font-['Inter']"
      style={{
        backgroundColor: '#0a0a14',
        backgroundImage: 'var(--background-image)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <main>
        <HeroSection />
        <LoreSection />
        <MediaGallerySection />
        <GameplaySection />
        <ComicBookSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
