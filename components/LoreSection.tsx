import React from 'react';
import FadeInSection from './FadeInSection';

type LoreChapter = {
  title: string;
  text: string;
  imageUrl: string;
};

const loreChapters: LoreChapter[] = [
  {
    title: 'When Gods Got Bored',
    text: 'Eons collapsed into moments, and the creators of all things found themselves adrift in their own perfect, silent eternity. From this weariness, a singular thought bloomed: a desire not for more creation, but for a single, perfect memory.',
    imageUrl: '/images/lore/lore-1.jpg',
  },
  {
    title: 'The Great Upload',
    text: 'They shed their cosmic forms, pouring their consciousness into starlight and nebula dust. Every memory, every fleeting emotion of their infinite lives, was encoded into the very fabric of a new, smaller reality—a universe in a bottle.',
    imageUrl: '/images/lore/lore-2.jpg',
  },
  {
    title: 'The Evolved Flock',
    text: 'They are not mere animals. Each member of the flock is a living library, a gentle soul carrying a fragment of a forgotten star, a lost love, or a song sung at the dawn of time. To tend them is to tend the fading embers of the universe itself.',
    imageUrl: '/images/lore/lore-3.jpg',
  },
  {
    title: 'The Meadow',
    text: 'And so they built it: a meadow unbound by time, painted with the light of a sun that never sets, cooled by winds that have whispered through every corner of existence. The final masterpiece of bored gods.',
    imageUrl: '/images/lore/lore-4.jpg',
  },
  {
    title: 'The Star Sheep',
    text: "One was chosen, not as a leader, but as the heart. The Star Sheep doesn't just remember; it dreams. Its dreams ripple through the meadow, shaping the clouds, coloring the dawn, and whispering new memories into the flock.",
    imageUrl: '/images/lore/lore-5.jpg',
  },
  {
    title: 'The Now',
    text: 'The shepherd walks, the sole guardian of all that remains. Here, at the quiet end of everything, the greatest act is not to build, but to listen. To feel the grass grow, and to remember with the flock.',
    imageUrl: '/images/lore/lore-6.jpg',
  },
];

const LoreChapterCard: React.FC<LoreChapter> = ({ title, text, imageUrl }) => (
  <div
    className="relative flex h-screen flex-col items-center justify-center overflow-hidden p-8 text-center"
    style={{
      backgroundImage: `linear-gradient(rgba(10,10,20,0.7), rgba(10,10,20,0.7)), url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <FadeInSection className="mx-auto max-w-3xl">
      <h2 className="text-4xl text-amber-200 [text-shadow:0_0_8px_rgba(251,191,36,0.6)] md:text-5xl font-['Cormorant_Garamond']">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl">{text}</p>
    </FadeInSection>
  </div>
);

const LoreSection: React.FC = () => {
  return (
    <section>
      {loreChapters.map((chapter) => (
        <LoreChapterCard key={chapter.title} {...chapter} />
      ))}
    </section>
  );
};

export default LoreSection;
