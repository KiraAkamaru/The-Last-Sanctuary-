export type LoreChapter = {
  title: string;
  text: string;
  /**
   * Root-relative path to the background image that fills the viewport for this chapter.
   *
   * Drop your artwork in `public/` and update the path to match the filename.
   * Examples:
   *   imageUrl: '/images/lore/lore-4.jpg'
   *   imageUrl: '/images/gallery/gallery-storm-lightning.jpg'
   */
  imageUrl: string;
};

export const loreChapters: LoreChapter[] = [
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
    // Swap in whichever gallery shot you want for this chapter.
    imageUrl: '/images/gallery/gallery-storm-lightning.jpg',
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
