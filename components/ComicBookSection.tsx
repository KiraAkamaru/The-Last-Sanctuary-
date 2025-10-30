import React from 'react';
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
  return (
    <section className="py-20 bg-[#0a0a14]">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] text-white mb-4">
            From the Shepherd's Journal
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">A few recovered fragments of a story without an end.</p>
        </FadeInSection>
        
        <FadeInSection>
          <div className="flex overflow-x-auto space-x-6 py-4 comic-scrollbar">
            {comicPanels.map((panel, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
                <img src={panel.imageUrl} alt={panel.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ComicBookSection;