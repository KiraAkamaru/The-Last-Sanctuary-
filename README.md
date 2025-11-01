# The Last Sanctuary

A cinematic one-page site for the meditative narrative game “The Last Sanctuary.” This project is ready to run locally with Vite and React 19.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or newer

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production build
```bash
npm run build
```

## Asset Checklist
All visual and audio assets are expected to live in Vite’s [`public/`](public) directory so they are served with the same root-relative paths used in the components. After pulling this repository, drop your files into the following folders (create them if they don’t already exist locally):

```
public/
├── assets/
│   └── images/
│       └── gallery/
│           └── gallery-sunset.jpg        ← background image used in index.html
├── images/
│   ├── gallery/
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   └── gallery-poster.jpg
│   ├── gameplay/
│   │   ├── gameplay-1.jpg
│   │   ├── gameplay-2.jpg
│   │   ├── gameplay-3.jpg
│   │   └── gameplay-poster.jpg
│   └── lore/
│       ├── lore-1.jpg
│       ├── lore-2.jpg
│       ├── lore-3.jpg
│       ├── lore-4.jpg
│       ├── lore-5.jpg
│       └── lore-6.jpg
├── comics/
│   ├── panel-1.jpg
│   ├── panel-2.jpg
│   ├── panel-3.jpg
│   ├── panel-4.jpg
│   ├── panel-5.jpg
│   └── panel-6.jpg
└── videos/
    ├── hero-video.mp4          ← used by the hero banner autoplay sequence
    ├── teaser.mp4              ← displayed in the media gallery
    └── gameplay-loop.mp4       ← showcased inside the gameplay spotlight
```

> **Tip:** If you only have a single clip right now, drop it into `public/videos/`
> with the name you prefer (for example, replace `teaser.mp4`). The corresponding
> component (`MediaGallerySection`, `HeroSection`, or `GameplaySection`) will pick
> it up automatically as soon as the filename matches the path shown above.

If you use different filenames, update the corresponding paths in the components.

### Swapping background art in the lore timeline
Each chapter in the vertical lore scroll is defined in [`data/loreChapters.ts`](data/loreChapters.ts). Update the `imageUrl` value to point at any root-relative file inside `public/`.

```ts
{
  title: 'The Meadow',
  text: 'And so they built it... bored gods.',
  imageUrl: '/images/gallery/gallery-storm-lightning.jpg',
}
```

In the example above, the fourth chapter (“The Meadow”) pulls in `public/images/gallery/gallery-storm-lightning.jpg`. Drop your photo into that folder (or adjust the path to wherever you stored it) and the page will render it the next time you reload the site.

### Updating the comic book gallery
The carousel in [`components/ComicBookSection.tsx`](components/ComicBookSection.tsx) pulls its data from
[`data/comicPanels.ts`](data/comicPanels.ts). Drop your images into `public/comics/` and either match the filenames listed in
`comicPanels.ts` or change the `imageUrl` entries to reflect your own naming convention and file extensions.

You can add as many panels as you like—just append new objects to the exported `comicPanels` array (or remove existing ones) and
update the `alt` text so screen reader users get the right description for each page.

## Deployment
Build the project (`npm run build`) and deploy the `dist/` folder to your static hosting provider of choice. Because all assets are referenced with root-relative URLs (e.g. `/images/...`), ensure the site is served from the domain root or configure your host to rewrite requests accordingly.
