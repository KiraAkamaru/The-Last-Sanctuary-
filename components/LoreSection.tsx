import React from 'react';
import FadeInSection from './FadeInSection';

const loreChapters = [
  {
    title: "When Gods Got Bored",
    text: "Eons collapsed into moments, and the creators of all things found themselves adrift in their own perfect, silent eternity. From this weariness, a singular thought bloomed: a desire not for more creation, but for a single, perfect memory.",
    imageUrl: "/images/lore-1.png",
  },
  {
    title: "The Great Upload",
    text: "They shed their cosmic forms, pouring their consciousness into starlight and nebula dust. Every memory, every fleeting emotion of their infinite lives, was encoded into the very fabric of a new, smaller reality—a universe in a bottle.",
    imageUrl: "/images/lore-2.png",
  },
  {
    title: "The Evolved Flock",
    text: "They are not mere animals. Each member of the flock is a living library, a gentle soul carrying a fragment of a forgotten star, a lost love, or a song sung at the dawn of time. To tend them is to tend the fading embers of the universe itself.",
    imageUrl: "/images/lore-3.png",
  },
  {
    title: "The Meadow",
    text: "And so they built it: a meadow unbound by time, painted with the light of a sun that never sets, cooled by winds that have whispered through every corner of existence. The final masterpiece of bored gods.",
    imageUrl: "/images/lore-4.jpeg",
  },
  {
    title: "The Star Sheep",
    text: "One was chosen, not as a leader, but as the heart. The Star Sheep doesn't just remember; it dreams. Its dreams ripple through the meadow, shaping the clouds, coloring the dawn, and whispering new memories into the flock.",
    imageUrl: "/images/lore-5.png",
  },
  {
    title: "The Now",
    text: "The shepherd walks, the sole guardian of all that remains. Here, at the quiet end of everything, the greatest act is not to build, but to listen. To feel the grass grow, and to remember with the flock.",
    imageUrl: "/images/lore-6.png",
  },
];


const LoreChapter = ({ title, text, imageUrl }: { title: string, text: string, imageUrl: string }) => (
  <div 
    className="h-screen flex flex-col justify-center items-center text-center p-8 relative"
    style={{ 
      backgroundImage: `linear-gradient(rgba(10, 10, 20, 0.7), rgba(10, 10, 20, 0.7)), url('${imageUrl}')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed' 
    }}
  >
      <FadeInSection className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] text-amber-200 [text-shadow:0_0_8px_rgba(251,191,36,0.6)]">{title}</h2>
          <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed">{text}</p>
      </FadeInSection>
  </div>
);

const LoreSection = () => {
  return (
    <section>
      {loreChapters.map((chapter, index) => (
        <LoreChapter key={index} {...chapter} />
      ))}
    </section>
  );
};

export default LoreSection;