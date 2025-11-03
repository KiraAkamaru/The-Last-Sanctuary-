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
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const beginTransition = (targetIndex: number) => {
    if (targetIndex === activeIndex || targetIndex < 0 || targetIndex >= comicPanels.length) {
      return;
    }

    setDirection(targetIndex > activeIndex ? 'forward' : 'backward');
    setOutgoingIndex(activeIndex);
    setActiveIndex(targetIndex);
    setIsAnimating(true);
  };

  const goToPrevious = () => {
    if (activeIndex === 0 || isAnimating) {
      return;
    }

    beginTransition(activeIndex - 1);
  };

  const goToNext = () => {
    if (activeIndex === comicPanels.length - 1 || isAnimating) {
      return;
    }

    beginTransition(activeIndex + 1);
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLImageElement>) => {
    if (event.animationName !== 'flip-in') {
      return;
    }

    setOutgoingIndex(null);
    setIsAnimating(false);
  };

  return (
    <section className="bg-[#0a0a14] py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12">
        <FadeInSection className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl font-['Cormorant_Garamond']">From the Shepherd&apos;s Journal</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-400">A few recovered fragments of a story without an end.</p>
        </FadeInSection>

        <FadeInSection className="w-full">
          <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8">
            <div className="w-full">
              <div className="relative w-full overflow-visible">
                <div className="min-h-[60vh] rounded-[2.5rem] bg-[#05050b] p-6 sm:p-8 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-black">
                    {outgoingIndex !== null && (
                      <img
                        key={`panel-outgoing-${outgoingIndex}`}
                        src={comicPanels[outgoingIndex].imageUrl}
                        alt={comicPanels[outgoingIndex].alt}
                        className="absolute inset-0 z-10 h-full w-full object-contain animate-flip-out"
                        style={{
                          transformOrigin: direction === 'forward' ? 'center left' : 'center right',
                        }}
                      />
                    )}
                    <img
                      key={`panel-active-${activeIndex}`}
                      src={comicPanels[activeIndex].imageUrl}
                      alt={comicPanels[activeIndex].alt}
                      className="relative z-20 h-full w-full object-contain animate-flip-in"
                      style={{
                        transformOrigin: direction === 'forward' ? 'center left' : 'center right',
                      }}
                      onAnimationEnd={handleAnimationEnd}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-4 text-sm font-medium tracking-wide text-slate-300">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={activeIndex === 0 || isAnimating}
                className="flex items-center space-x-2 transition-colors hover:text-white disabled:cursor-not-allowed disabled:text-slate-600"
                aria-label="Previous comic panel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              <span className="font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
                {activeIndex + 1} / {comicPanels.length}
              </span>

              <button
                type="button"
                onClick={goToNext}
                disabled={activeIndex === comicPanels.length - 1 || isAnimating}
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