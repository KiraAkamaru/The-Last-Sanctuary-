import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const loreParagraphs: React.ReactNode[] = [
  (
    <>
      Eons collapsed into moments, and the creators of all things found themselves adrift within their own perfect, silent
      eternity. From this weariness, a singular thought bloomed: a desire not for more creation, but for a single, <em>perfect
      memory</em> that could be held close when the stars finally dimmed.
    </>
  ),
  (
    <>
      To secure that memory, they shed their cosmic forms, pouring consciousness into starlight and nebula dust. Every
      recollection, every fleeting emotion of their infinite lives, was encoded into the fabric of a new, smaller reality—
      <q>a universe in a bottle</q> cradled within the dark between galaxies.
    </>
  ),
  (
    <>
      Within that vessel they sculpted a sanctuary where time could be tuned like music. Seasons folded over one another in
      luminous ribbons, and the soil remembered the touch of hands that had once shaped continents and seas across countless
      worlds.
    </>
  ),
  (
    <>
      They wove light into a meadow that would never fade, painted by a sun that set only when the keepers wished to dream.
      Winds carried whispers of first dawns and final farewells, while crystal streams mirrored constellations from long-dead
      skies.
    </>
  ),
  (
    <>
      Into this meadow they ushered the evolved flock—gentle creatures whose wool held galaxies of thought. Each was a living
      library, carrying the fragment of a forgotten star, a lost love, or a lullaby hummed at the birth of oceans.
    </>
  ),
  (
    <>
      Among them walked the Star Sheep, chosen not as a ruler but as a heart. Its dreams ripple through the grasses, shaping
      clouds into memories and coloring dawn with the hues of abandoned worlds. When it sleeps, the meadow listens.
    </>
  ),
  (
    <>
      A solitary shepherd keeps vigil beside the flock. Their footsteps trace constellations across the dew, and their task is
      neither to build nor to conquer, but to listen—to feel the grass grow and to remember alongside the creatures entrusted
      to them.
    </>
  ),
  (
    <>
      To walk the Last Sanctuary is to step into the quiet end of everything, where even gods have traded power for presence.
      Here, the greatest act is to tend the embers of memory until they glow once more for any wanderer brave enough to ask.
    </>
  ),
];

const LoreLibrarySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'highlights' | 'fullStory'>('highlights');

  const handleFullStoryToggle = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) {
      event.preventDefault();
    }
    setActiveTab('fullStory');
    const loreAnchor = document.getElementById('lore');
    if (loreAnchor) {
      loreAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="lore-library" className="relative bg-slate-950/80 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <FadeInSection className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-amber-300/80">Lore Library</p>
                <h2 className="mt-2 font-['Cormorant_Garamond'] text-3xl font-semibold text-amber-100 md:text-4xl">
                  Unlock the Last Sanctuary&apos;s Memory Vault
                </h2>
                <p className="mt-3 text-base text-slate-300 md:text-lg">
                  Use the tabs below to revisit luminous highlights or immerse yourself in the full mythic chronicle.
                </p>
              </div>
              <a
                href="#lore"
                onClick={handleFullStoryToggle}
                className="inline-flex items-center justify-center rounded-full border border-amber-300/60 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-amber-200 transition hover:border-amber-200 hover:bg-amber-200/10"
              >
                Read the full chronicle
              </a>
            </header>

            <div className="flex flex-wrap gap-3">
              {['highlights', 'fullStory'].map((tabKey) => {
                const isActive = activeTab === tabKey;
                const label = tabKey === 'highlights' ? 'Highlights' : 'Full Story';
                return (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveTab(tabKey as 'highlights' | 'fullStory')}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      isActive
                        ? 'bg-amber-300/90 text-slate-900 shadow-lg shadow-amber-300/30'
                        : 'bg-slate-800/70 text-amber-100 hover:bg-slate-700'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {activeTab === 'highlights' ? (
              <div className="space-y-5 text-slate-200">
                <p className="text-base leading-relaxed md:text-lg">
                  The Lore Library distills the cosmic origins of the sanctuary and the living memories guarded within it. These
                  highlights are a compass for quick orientation before you wander deeper.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed md:text-base">
                  <li>The gods surrendered eternity to craft a single preserved moment of peace.</li>
                  <li>An evolved flock safeguards fragments of ancient feelings, songs, and starlight.</li>
                  <li>The Star Sheep dreams new memories while the shepherd listens for fading echoes.</li>
                </ul>
                <p className="text-sm text-amber-200/80 md:text-base">
                  Ready for every whispered detail? Switch to the <strong>Full Story</strong> tab or use the call-to-action above.
                </p>
              </div>
            ) : (
              <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6 shadow-inner">
                <div className="space-y-6 text-slate-100">
                  {loreParagraphs.map((content, index) => (
                    <p key={`lore-paragraph-${index}`} className="text-base leading-relaxed md:text-lg md:leading-loose">
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default LoreLibrarySection;
