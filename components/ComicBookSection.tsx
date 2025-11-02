import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

type ComicPanel = {
  imageUrl: string;
  alt: string;
};

const comicPanels: ComicPanel[] = [
  {
    imageUrl: '/comics/issue1-panel1.svg',
    alt: 'A lone wanderer surveys a moonlit valley from a cliff edge.',
  },
  {
    imageUrl: '/comics/issue1-panel2.svg',
    alt: 'A spectral ram illuminates a hillside with its glowing fleece.',
  },
  {
    imageUrl: '/comics/issue1-panel3.svg',
    alt: "The shepherd brushes frost from a hardy mountain plant.",
  },
  {
    imageUrl: '/comics/issue1-panel4.svg',
    alt: 'Flock silhouettes wind through the meadow beneath auroras.',
  },
  {
    imageUrl: '/comics/issue1-panel5.svg',
    alt: 'Constellations spiral into a luminous whirlpool over the flock.',
  },
  {
    imageUrl: '/comics/issue1-panel6.svg',
    alt: 'The shepherd tends a campfire while the herd sleeps in a ring.',
  },
  {
    imageUrl: '/comics/issue1-panel7.svg',
    alt: 'An ancient stone arch crackles with otherworldly energy.',
  },
  {
    imageUrl: '/comics/issue1-panel8.svg',
    alt: 'A close-up of a rune-covered staff sparking with blue light.',
  },
  {
    imageUrl: '/comics/issue1-panel9.svg',
    alt: 'A celestial map unfurls showing hidden paths through the stars.',
  },
  {
    imageUrl: '/comics/issue1-panel10.svg',
    alt: 'The shepherd opens a journal revealing sketches of cosmic beasts.',
  },
  {
    imageUrl: '/comics/issue1-panel11.svg',
    alt: 'Storm clouds gather as the flock huddles around a glowing sigil.',
  },
  {
    imageUrl: '/comics/issue1-panel12.svg',
    alt: 'Lightning arcs across the valley framing the guardian statue.',
  },
  {
    imageUrl: '/comics/issue1-panel13.svg',
    alt: 'A vision of the sanctuary emerges above the shepherd’s palm.',
  },
  {
    imageUrl: '/comics/issue1-panel14.svg',
    alt: 'Close friends clasp forearms before entering a shadowed gate.',
  },
  {
    imageUrl: '/comics/issue1-panel15.svg',
    alt: 'The gate opens onto a corridor of suspended crystal lanterns.',
  },
  {
    imageUrl: '/comics/issue1-panel16.svg',
    alt: 'Runic machinery awakens as the staff is placed in its cradle.',
  },
  {
    imageUrl: '/comics/issue1-panel17.svg',
    alt: 'A mosaic on the floor animates, charting the lost sanctuary.',
  },
  {
    imageUrl: '/comics/issue1-panel18.svg',
    alt: 'The shepherd and flock cross a bridge over floating monoliths.',
  },
  {
    imageUrl: '/comics/issue1-panel19.svg',
    alt: 'A guardian spirit rises from the depths of a reflecting pool.',
  },
  {
    imageUrl: '/comics/issue1-panel20.svg',
    alt: 'The spirit imparts a starmap woven from threads of light.',
  },
  {
    imageUrl: '/comics/issue1-panel21.svg',
    alt: 'Night blossoms bloom as the sanctuary domes open overhead.',
  },
  {
    imageUrl: '/comics/issue1-panel22.svg',
    alt: 'Villagers cheer as the shepherd leads the flock into the haven.',
  },
  {
    imageUrl: '/comics/issue1-panel23.svg',
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

        <FadeInSection className="mx-auto max-w-5xl">
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]">
              <div className="relative w-full overflow-visible">
                <div className="aspect-square rounded-[2.5rem] bg-[#05050b] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-black">
                    <img
                      key={currentIndex}
                      src={comicPanels[currentIndex].imageUrl}
                      alt={comicPanels[currentIndex].alt}
                      className="h-full w-full object-contain animate-flip-in"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex w-full max-w-[28rem] items-center justify-between px-2 text-sm font-medium tracking-wide text-slate-300">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="flex items-center space-x-2 transition-colors hover:text-white disabled:cursor-not-allowed disabled:text-slate-600"
                aria-label="Previous comic panel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              <span className="font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
                {currentIndex + 1} / {comicPanels.length}
              </span>

              <button
                type="button"
                onClick={goToNext}
                disabled={currentIndex === comicPanels.length - 1}
                className="flex items-center space-x-2 transition-colors hover:text-white disabled:cursor-not-allowed disabled:text-slate-600"
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
