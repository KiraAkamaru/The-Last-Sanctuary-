import React from 'react';
import FadeInSection from './FadeInSection';

type GameplayPillar = {
  title: string;
  description: string;
  imageUrl: string;
};

const gameplayPillars: GameplayPillar[] = [
  {
    title: 'Echoes of Creation',
    description:
      "Tend to the Star Flock. Each creature is a living archive of a god's memory. Listen to their cosmic hums, groom their nebulae fleece, and guide them through the timeless meadow to unlock forgotten stories.",
    imageUrl: '/images/gameplay/gameplay-1.jpg',
  },
  {
    title: 'Cultivate the Meadow',
    description:
      'The Sanctuary responds to your touch. Plant seeds of starlight to grow crystalline flora, divert rivers of liquid moonlight, and shape the landscape to create new paths and unlock hidden areas. Your actions paint the world.',
    imageUrl: '/images/gameplay/gameplay-2.jpg',
  },
  {
    title: 'Weave the Firmament',
    description:
      'Gaze into the heavens and rearrange the constellations. Connect stars to solve celestial puzzles that influence the weather, the flock\'s mood, and the very fabric of reality in the meadow.',
    imageUrl: '/images/gameplay/gameplay-3.jpg',
  },
];

const GameplaySection: React.FC = () => {
  return (
    <section className="bg-[#0a0a14] py-20">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl font-['Cormorant_Garamond']">The Shepherd&apos;s Path</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-400">
            Gameplay in The Last Sanctuary is a meditative experience of creation, care, and cosmic archeology.
          </p>
        </FadeInSection>

        <FadeInSection className="mx-auto mb-16 max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-lg border border-slate-800 shadow-2xl shadow-black/50">
            <video
              className="h-full w-full object-cover"
              src="/videos/gameplay-loop.mp4"
              poster="/images/gameplay/gameplay-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {gameplayPillars.map((pillar) => (
            <FadeInSection key={pillar.title} className="flex">
              <div className="flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/20 shadow-lg transition-all duration-300 hover:border-amber-200/50 hover:shadow-amber-200/10">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-3 text-2xl text-amber-200 font-['Cormorant_Garamond']">{pillar.title}</h3>
                  <p className="flex-grow leading-relaxed text-slate-400">{pillar.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
