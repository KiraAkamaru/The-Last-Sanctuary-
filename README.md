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
    ├── hero-video.mp4
    ├── teaser.mp4
    └── gameplay-loop.mp4
```

If you use different filenames, update the corresponding paths in the components.

## Deployment
Build the project (`npm run build`) and deploy the `dist/` folder to your static hosting provider of choice. Because all assets are referenced with root-relative URLs (e.g. `/images/...`), ensure the site is served from the domain root or configure your host to rewrite requests accordingly.
