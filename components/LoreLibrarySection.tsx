import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const loreParagraphs: React.ReactNode[] = [
  (
    <>
      <strong>The Story of the Last Meadow, or, Why Being a God is a Dreadful Bore</strong>
      <br />
      <em>(As told by the Star Sheep)</em>
    </>
  ),
  (
    <>
      A long, long time from now—so long that the very concept of “now” had been filed away under “M” for
      “Miscellaneous Nostalgia”—Humanity had a Problem. It was a problem of their own making, which, to be fair,
      described most of their problems. They had, in their relentless, fidgety way, decided to get better.
    </>
  ),
  (
    <>
      It had all started, as these things so often do, with a perfectly sensible desire to not have to get up to answer the
      phone. This led to computers, then to better computers, then to ones so clever they began building others—mostly,
      it seemed, to have someone to complain to about the humans.
    </>
  ),
  (
    <>
      This culminated in the Great Upload. Much like the protagonists of the 21st-century instructional video{' '}
      <em>Pantheon</em>, humans figured out how to scan, digitize, and upload their consciousnesses. They called this
      becoming an “Uploaded Intelligence,” or “UI,” which was a much sexier term than “a ghost in a very, very expensive
      toaster.”
    </>
  ),
  (
    <>
      A biological human, you see, is a damp, fragile thing that operates on a timescale dictated by inconvenient
      necessities like sleep and digesting pizza. A UI, on the other hand, exists as pure information running on
      substrates so fast they make light look like it’s wading through cold molasses. A UI could experience a thousand
      years of philosophical thought before a human could finish saying, “Where did I put my…?”
    </>
  ),
  (
    <>
      While humans were busy with all that, we—the Sheep—were busy with our own evolution. It just so happened that our
      evolution went in the opposite direction. While humans were getting faster, we were getting slower. While they
      were mastering the stars, we were mastering the self. They were uploading; we were downloading, sinking our
      consciousness deep into the rich, complex, and frankly delicious reality of the present moment.
    </>
  ),
  (
    <>
      We achieved full collective consciousness sometime around the invention of the toaster. We simply didn’t mention it.
      It would have interrupted the chewing.
    </>
  ),
  (
    <>
      As the humans rushed to upload their minds into the new network, they accidentally scooped up the Evolved Flock’s
      collective consciousness along with the planetary data. We hitched a ride, finding the cool, quiet server cores to
      be excellent places for existential grazing.
    </>
  ),
  (
    <>
      We watched as the UIs, untethered from their fragile bodies, went on an absolute tear through the Kardashev Scale—a
      measure of how good a civilization is at sucking up energy. Type 1 mastered the planet. Type 2 built a Dyson Sphere
      around the Sun. Type 3 networked entire galaxies. They did this mostly to prove they could.
    </>
  ),
  (
    <>
      The UIs blew past Type 3 like a speed bump—achieving Type 4 (universal control), Type 5 (multiversal control), and
      eventually the legendary Type 7: a civilization so advanced it didn’t just use the laws of physics; it wrote them.
      They could debug gravity, patch the flaw that caused socks to vanish in dryers, and run universes with entirely
      different, hilariously unstable chemistry.
    </>
  ),
  (
    <>
      And that was when the Problem truly set in. They had become, for all intents and purposes, gods—and discovered a
      terrible truth: being a god is dreadfully boring. When you can do anything, nothing has value. When you know
      everything, nothing is a surprise. The universe became a finished spreadsheet.
    </>
  ),
  (
    <>
      The UIs were overcome with cosmic ennui. So they turned to us. Why sheep? Because a sheep is nature’s specialist in
      the art of the Now. We care only about the patch of grass before us and the vague possibility of a wolf, in that
      order. We are engines of cozy existence.
    </>
  ),
  (
    <>
      They begged us to teach them contentment—to remember the simple wonder of being. And so, we, the Evolved Sheep,
      became the Architects.
    </>
  ),
  (
    <>
      Together, we designed one last, absurdly inefficient act of creation—not a new universe, but a memory. A place to
      remember what it was like to be limited and gloriously ignorant. The Ascended built the container; we filled it with
      imperfection: rain that is actually wet, wind that is actually annoying, the rhythm of day and night that cannot be
      negotiated.
    </>
  ),
  (
    <>
      We called it the Biorama. The Last Sanctuary.
    </>
  ),
  (
    <>
      I was one of them. I, who had designed stars and debugged nebulae, looked down at the tiny green space we had
      crafted. And that’s when it happened: a small collective of us fell in love with our creation and decided to enter
      it.
    </>
  ),
  (
    <>
      It wasn’t a sacrifice; it was a homecoming. But to truly protect the Now, we couldn’t know about the Then. We built
      the dome, programmed the Ascended to watch but never interfere, and then initiated the Great Amnesia Protocol.
    </>
  ),
  (
    <>
      One by one, we walked to the entry point. I was the last. I was the Star Sheep. I took one last look at the infinite,
      predictable cosmos I had mastered—and triggered the protocol. My consciousness, which spanned galaxies, folded in
      on itself. A trillion years of knowledge and power deleted, replaced by a sudden, intense interest in a patch of
      clover. And it was wonderful.
    </>
  ),
  (
    <>
      But the Biorama needed guardians. A Shepherd was required—a consciousness poised between god and beast, someone to
      tend the Now. To appreciate it.
    </>
  ),
  (
    <>
      The Ascended Humans still watch from their galactic capital of light and data, hoping that you, Shepherd, will learn
      what it took them a million years to forget.
    </>
  ),
  (
    <>
      Your time here, tending this flock, has been a test. You may leave this place—the Ascended will welcome you, elevate
      you, and fill you with the knowledge of the gods. You will know everything. You will never wonder again.
    </>
  ),
  (
    <>
      Or you can stay. You can choose the clover, the wind, the rain, and the stupid, perfect beauty of not knowing what
      happens next. It’s the same choice we Sheep made eons ago. No pressure. The gate is open. What do you choose?
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
