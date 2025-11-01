import React from 'react';
import FadeInSection from './FadeInSection';
import { loreChapters, LoreChapter } from '../data/loreChapters';

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
