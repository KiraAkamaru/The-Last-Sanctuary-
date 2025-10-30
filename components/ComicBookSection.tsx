import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const comicPanels = [
  { imageUrl: "/comics/panel-1.jpg", alt: "A lone figure looks over a vast, quiet valley." },
  { imageUrl: "/comics/panel-2.jpg", alt: "A glowing sheep looks up at the sky." },
  { imageUrl: "/comics/panel-3.jpg", alt: "A close up of the shepherd's hand gently touching a plant." },
  { imageUrl: "/comics/panel-4.jpg", alt: "The flock moving slowly across the meadow at dusk." },
  { imageUrl: "/comics/panel-5.jpg", alt: "Strange constellations appear in the night sky." },
  { imageUrl: "/comics/panel-6.jpg", alt: "The shepherd sits by a fire, the flock resting nearby." },
];

const ComicBookSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < comicPanels.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <section className="py-20 bg-[#0a0a14]">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] text-white mb-4">
            From the Shepherd's Journal
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">A few recovered fragments of a story without an end.</p>
        </FadeInSection>
        
        <FadeInSection className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Aspect ratio container for the image */}
            <div className="aspect-w-4 aspect-h-3 rounded-lg shadow-2xl shadow-black/50 overflow-hidden bg-black">
              <img
                key={currentIndex} // This key is crucial to re-trigger the animation on change
                src={comicPanels[currentIndex].imageUrl}
                alt={comicPanels[currentIndex].alt}
                className="w-full h-full object-contain animate-flip-in"
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6 px-2">
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="flex items-center space-x-2 text-slate-300 hover:text-white disabled:text-slate-600 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous comic panel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              <span className="text-slate-400 text-sm font-mono tracking-widest">
                {currentIndex + 1} / {comicPanels.length}
              </span>

              <button
                onClick={goToNext}
                disabled={currentIndex === comicPanels.length - 1}
                className="flex items-center space-x-2 text-slate-300 hover:text-white disabled:text-slate-600 disabled:cursor-not-allowed transition-colors"
                aria-label="Next comic panel"
              >
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ComicBookSection;