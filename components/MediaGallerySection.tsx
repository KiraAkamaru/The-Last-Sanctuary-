import React from 'react';
import FadeInSection from './FadeInSection';

type MediaItem =
  | {
      type: 'video';
      videoUrl: string;
      posterUrl: string;
      lore: string;
      className?: string;
    }
  | {
      type: 'image';
      imageUrl: string;
      lore: string;
      className?: string;
    };

const mediaItems: MediaItem[] = [
  {
    type: 'video',
    videoUrl: '/videos/teaser.mp4',
    posterUrl: '/images/gallery/gallery-poster.jpg',
    lore: 'A teaser of the tranquil world.',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    type: 'image',
    imageUrl: '/images/gallery/gallery-1.jpg',
    lore: 'A single perfect meadow, to hold what was and what could have been.',
  },
  {
    type: 'image',
    imageUrl: '/images/gallery/gallery-2.jpg',
    lore: 'Each carries a fragment of a forgotten star, a lost love, or a song.',
  },
  {
    type: 'image',
    imageUrl: '/images/gallery/gallery-3.jpg',
    lore: 'They rewrote the laws of physics to remember how to feel rain.',
  },
  {
    type: 'image',
    imageUrl: '/images/gallery/gallery-4.jpg',
    lore: 'Its dreams ripple through the meadow, shaping the clouds.',
  },
  {
    type: 'image',
    imageUrl: '/images/gallery/gallery-5.jpg',
    lore: 'To tend them is to tend the fading embers of the universe itself.',
  },
];

const MediaItemCard: React.FC<{ item: MediaItem }> = ({ item }) => {
  if (item.type === 'video') {
    return (
      <div
        className={`group relative aspect-video overflow-hidden rounded-lg shadow-2xl shadow-black/50 ${item.className ?? ''}`}
      >
        <video
          className="h-full w-full object-cover"
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
    <div
      className={`group relative aspect-square overflow-hidden rounded-lg shadow-2xl shadow-black/50 ${item.className ?? ''}`}
    >
      <img
        src={item.imageUrl}
        alt={item.lore}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-4 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <p className="text-lg text-slate-200 font-['Cormorant_Garamond']">{item.lore}</p>
      </div>
    </div>
  );
};

const MediaGallerySection: React.FC = () => {
  return (
    <section className="bg-[#0a0a14]/90 py-20 backdrop-blur-sm">
      <FadeInSection className="container mx-auto px-6 text-center">
        <h2 className="mb-12 text-4xl text-white md:text-5xl font-['Cormorant_Garamond']">Glimpses of the Meadow</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {mediaItems.map((item) => (
            <FadeInSection key={item.lore} className={item.className}>
              <MediaItemCard item={item} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default MediaGallerySection;
