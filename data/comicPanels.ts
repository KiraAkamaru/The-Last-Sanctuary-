export type ComicPanel = {
  /**
   * Root-relative path to the panel artwork. Place your files in public/comics/.
   * Rename the file here if you want to use a different filename or extension.
   */
  imageUrl: string;
  /**
   * Short description for screen readers. Update this to match your artwork.
   */
  alt: string;
};

export const comicPanels: ComicPanel[] = [
  { imageUrl: '/comics/panel-1.jpg', alt: 'A lone figure looks over a vast, quiet valley.' },
  { imageUrl: '/comics/panel-2.jpg', alt: 'A glowing sheep looks up at the sky.' },
  { imageUrl: '/comics/panel-3.jpg', alt: "A close up of the shepherd\'s hand gently touching a plant." },
  { imageUrl: '/comics/panel-4.jpg', alt: 'The flock moving slowly across the meadow at dusk.' },
  { imageUrl: '/comics/panel-5.jpg', alt: 'Strange constellations appear in the night sky.' },
  { imageUrl: '/comics/panel-6.jpg', alt: 'The shepherd sits by a fire, the flock resting nearby.' },
];

/**
 * Add or remove items in the array above to match the number of panels you have.
 * The ComicBookSection component will automatically render however many entries
 * you include here.
 */
