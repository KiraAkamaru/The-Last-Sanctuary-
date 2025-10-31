import React from 'react';
import FadeInSection from './FadeInSection';

const gameplayPillars = [
  {
    title: "Echoes of Creation",
    description: "Tend to the Star Flock. Each creature is a living archive of a god's memory. Listen to their cosmic hums, groom their nebulae fleece, and guide them through the timeless meadow to unlock forgotten stories.",
    imageUrl: "/images/gameplay-1.png",
  },
  {
    title: "Cultivate the Meadow",
    description: "The Sanctuary responds to your touch. Plant seeds of starlight to grow crystalline flora, divert rivers of liquid moonlight, and shape the landscape to create new paths and unlock hidden areas. Your actions paint the world.",
    imageUrl: "/images/gameplay-2.png",
  },
  {
    title: "Weave the Firmament",
    description: "Gaze into the heavens and rearrange the constellations. Connect stars to solve celestial puzzles that influence the weather, the flock's mood, and the very fabric of reality in the meadow.",
    imageUrl: "/images/gameplay-3.png",
  },
];

const GameplaySection = () => {
  return (
    <section className="py-20 bg-[#0a0a14]">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] text-white mb-4">
            The Shepherd's Path
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Gameplay in The Last Sanctuary is a meditative experience of creation, care, and cosmic archeology.
          </p>
        </FadeInSection>

        <FadeInSection className="max-w-4xl mx-auto mb-16">
          <div className="aspect-video rounded-lg shadow-2xl shadow-black/50 overflow-hidden border border-slate-800">
            <video
              className="w-full h-full object-cover"
              src="/videos/gameplay-loop.mp4"
              poster="/images/gameplay-poster.png"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gameplayPillars.map((pillar, index) => (
            <FadeInSection key={index} className="flex">
              <div className="bg-slate-900/20 rounded-lg shadow-lg overflow-hidden border border-slate-800 flex flex-col transition-all duration-300 hover:border-amber-200/50 hover:shadow-amber-200/10">
                <div className="aspect-video overflow-hidden">
                    <img src={pillar.imageUrl} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-amber-200 mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-grow">{pillar.description}</p>
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