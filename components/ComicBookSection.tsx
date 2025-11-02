import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

type ComicPanel = {
  imageUrl: string;
  alt: string;
};

const comicPanels: ComicPanel[] = [
  {
    imageUrl: '/comics/1.png',
    alt: 'A lone wanderer surveys a moonlit valley from a cliff edge.',
  },
  {
    imageUrl: '/comics/2.png',
    alt: 'A spectral ram illuminates a hillside with its glowing fleece.',
  },
  {
    imageUrl: '/comics/3.png',
    alt: "The shepherd brushes frost from a hardy mountain plant.",
  },
  {
    imageUrl: '/comics/4.png',
    alt: 'Flock silhouettes wind through the meadow beneath auroras.',
  },
  {
    imageUrl: '/comics/5.png',
    alt: 'Constellations spiral into a luminous whirlpool over the flock.',
  },
  {
    imageUrl: '/comics/6.png',
    alt: 'The shepherd tends a campfire while the herd sleeps in a ring.',
  },
  {
    imageUrl: '/comics/7.png',
    alt: 'An ancient stone arch crackles with otherworldly energy.',
  },
  {
    imageUrl: '/comics/8.png',
    alt: 'A close-up of a rune-covered staff sparking with blue light.',
  },
  {
    imageUrl: '/comics/9.png',
    alt: 'A celestial map unfurls showing hidden paths through the stars.',
  },
  {
    imageUrl: '/comics/10.png',
    alt: 'The shepherd opens a journal revealing sketches of cosmic beasts.',
  },
  {
    imageUrl: '/comics/11.png',
    alt: 'Storm clouds gather as the flock huddles around a glowing sigil.',
  },
  {
    imageUrl: '/comics/12.png',
    alt: 'Lightning arcs across the valley framing the guardian statue.',
  },
  {
    imageUrl: '/comics/13.png',
    alt: 'A vision of the sanctuary emerges above the shepherd’s palm.',
  },
  {
    imageUrl: '/comics/14.png',
    alt: 'Close friends clasp forearms before entering a shadowed gate.',
  },
  {
    imageUrl: '/comics/15.png',
    alt: 'The gate opens onto a corridor of suspended crystal lanterns.',
  },
  {
    imageUrl: '/comics/16.png',
    alt: 'Runic machinery awakens as the staff is placed in its cradle.',
  },
  {
    imageUrl: '/comics/17.png',
    alt: 'A mosaic on the floor animates, charting the lost sanctuary.',
  },
  {
    imageUrl: '/comics/18.png',
    alt: 'The shepherd and flock cross a bridge over floating monoliths.',
  },
  {
    imageUrl: '/comics/19.png',
    alt: 'A guardian spirit rises from the depths of a reflecting pool.',
  },
  {
    imageUrl: '/comics/20.png',
    alt: 'The spirit imparts a starmap woven from threads of light.',
  },
  {
    imageUrl: '/comics/21.png',
    alt: 'Night blossoms bloom as the sanctuary domes open overhead.',
  },
  {
    imageUrl: '/comics/22.png',
    alt: 'Villagers cheer as the shepherd leads the flock into the haven.',
  },
  {
    imageUrl: '/comics/23.png',
    alt: 'Dawn breaks over the sanctuary revealing a restored horizon.',
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

        <FadeInSection className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-black shadow-2xl shadow-black/50">
              <img
                key={currentIndex}
                src={comicPanels[currentIndex].imageUrl}
                alt={comicPanels[currentIndex].alt}
                className="h-full w-full object-cover animate-flip-in"
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
