import React from 'react';
import FadeInSection from './FadeInSection';

const mediaItems = [
  {
    type: 'video',
    videoUrl: "/videos/teaser.mp4",
    posterUrl: "/images/gallery-poster.png",
    lore: "A teaser of the tranquil world.",
  },
  {
    type: 'image',
    imageUrl: "/images/gallery-1.png",
    lore: "A single perfect meadow, to hold what was and what could have been."
  },
  {
    type: 'image',
    imageUrl: "/images/gallery-2.png",
    lore: "Each carries a fragment of a forgotten star, a lost love, or a song."
  },
  {
    type: 'image',
    imageUrl: "/images/gallery-3.png",
    lore: "They rewrote the laws of physics to remember how to feel rain."
  },
  {
    type: 'image',
    imageUrl: "/images/gallery-4.png",
    lore: "Its dreams ripple through the meadow, shaping the clouds."
  },
  {
    type: 'image',
    imageUrl: "/images/gallery-5.png",
    lore: "To tend them is to tend the fading embers of the universe itself."
  },
];

const MediaItem = ({ item }: { item: any }) => {
  if (item.type === 'video') {
    return (
      <div className="group relative aspect-video sm:aspect-auto sm:col-span-2 sm:row-span-2 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          src={item.videoUrl}
          poster={item.posterUrl}
          controls
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg shadow-2xl shadow-black/50">
      <img src={item.imageUrl} alt={item.lore} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <p className="text-slate-200 text-lg font-['Cormorant_Garamond']">{item.lore}</p>
      </div>
    </div>
  );
};


const MediaGallerySection = () => {
  return (
    <section className="py-20 bg-[#0a0a14]/90 backdrop-blur-sm">
      <FadeInSection className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] text-white mb-12">
          Glimpses of the Meadow
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
             <FadeInSection key={index}>
              <MediaItem item={item} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default MediaGallerySection;