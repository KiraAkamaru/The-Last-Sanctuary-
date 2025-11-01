import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

type ComicPanel = {
  imageUrl: string;
  alt: string;
};

const comicPanels: ComicPanel[] = [
  {
    imageUrl: '/comics/issue1-panel1.svg',
    alt: 'Dawn light spills behind the broken sanctuary spire as the valley ridge glows.',
  },
  {
    imageUrl: '/comics/issue1-panel2.svg',
    alt: 'The shepherd guides luminous sheep across a mist-draped ridge under teal skies.',
  },
  {
    imageUrl: '/comics/issue1-panel3.svg',
    alt: 'Cupped hands cradle a radiant seedling that blooms with rose-gold light.',
  },
  {
    imageUrl: '/comics/issue1-panel4.svg',
    alt: 'The flock huddles near crystalline ruins while stars shimmer in the sheltering night.',
  },
  {
    imageUrl: '/comics/issue1-panel5.svg',
    alt: 'Constellations spiral into an ancient sigil over the valley at rose dusk.',
  },
  {
    imageUrl: '/comics/issue1-panel6.svg',
    alt: 'The shepherd writes by the hearth as dawn breaks beyond the sanctuary walls.',
  },
];

const ComicBookSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < comicPanels.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <section className="bg-[#0a0a14] py-20">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl font-['Cormorant_Garamond']">From the Shepherd&apos;s Journal</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-400">A few recovered fragments of a story without an end.</p>
        </FadeInSection>

        <FadeInSection className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-black shadow-2xl shadow-black/50">
              <img
                key={currentIndex}
                src={comicPanels[currentIndex].imageUrl}
                alt={comicPanels[currentIndex].alt}
                className="h-full w-full object-contain animate-flip-in"
              />
            </div>

            <div className="mt-6 flex items-center justify-between px-2">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="flex items-center space-x-2 text-slate-300 transition-colors hover:text-white disabled:cursor-not-allowed disabled:text-slate-600"
                aria-label="Previous comic panel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              <span className="text-sm tracking-widest text-slate-400 font-mono">
                {currentIndex + 1} / {comicPanels.length}
              </span>

              <button
                type="button"
                onClick={goToNext}
                disabled={currentIndex === comicPanels.length - 1}
                className="flex items-center space-x-2 text-slate-300 transition-colors hover:text-white disabled:cursor-not-allowed disabled:text-slate-600"
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