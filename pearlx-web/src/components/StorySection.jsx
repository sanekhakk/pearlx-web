
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const stages = [
  {
    number: "01",
    label: "START WITH THE IDEA",
    title: "First, we understand your business.",
    description:
      "Before choosing colours or writing code, we learn about your business, your customers, and what you want your website to achieve.",
    note: "A plan with a purpose",
  },
  {
    number: "02",
    label: "MAKE IT FEEL RIGHT",
    title: "Your brand deserves its own identity.",
    description:
      "We shape the layout, typography, and experience around your brand instead of squeezing your business into a generic template.",
    note: "Designed around you",
  },
  {
    number: "03",
    label: "BRING IT TO LIFE",
    title: "Then, we make it real.",
    description:
      "We build a responsive website, check the details across devices, and prepare it for the people who matter most: your customers.",
    note: "Ready for the real world",
  },
];

function WireframePreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md -rotate-2 border border-[#D6D8E5] bg-[#F7F7FB] p-4 shadow-2xl sm:p-6">
        <div className="flex items-center justify-between border-b border-[#D6D8E5] pb-3">
          <div className="h-2 w-20 bg-[#222542]/70" />
          <div className="flex gap-2">
            <div className="h-2 w-7 bg-[#222542]/15" />
            <div className="h-2 w-7 bg-[#222542]/15" />
          </div>
        </div>

        <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 py-6 sm:py-8">
          <div>
            <div className="h-3 w-full bg-[#222542]/20" />
            <div className="mt-2 h-3 w-4/5 bg-[#222542]/20" />
            <div className="mt-5 h-2 w-full bg-[#222542]/10" />
            <div className="mt-2 h-2 w-3/4 bg-[#222542]/10" />
            <div className="mt-5 h-7 w-20 bg-[#222542]/20" />
          </div>
          <div className="flex items-end bg-[#E1E4F2] p-2">
            <div className="h-20 w-full border border-[#222542]/15 sm:h-28" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[#D6D8E5] pt-3">
          <div className="h-8 bg-[#222542]/5" />
          <div className="h-8 bg-[#222542]/5" />
          <div className="h-8 bg-[#222542]/5" />
        </div>
      </div>

      <span className="absolute bottom-4 left-3 -rotate-3 bg-pearl-cyan px-3 py-2 text-[9px] font-bold tracking-wide text-pearl-navy shadow-lg sm:bottom-8 sm:left-8">
        THE FIRST DRAFT
      </span>
    </div>
  );
}

function DesignPreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md rotate-1 bg-[#EAE4FC] p-3 shadow-2xl sm:p-5">
        <div className="flex items-center justify-between border-b border-pearl-navy/15 pb-3">
          <span className="font-heading text-xs font-bold text-pearl-navy">
            form & field.
          </span>
          <span className="text-[9px] text-pearl-navy/60">
            Made with intention
          </span>
        </div>

        <div className="grid grid-cols-[1fr_0.8fr] items-center gap-3 py-6 sm:gap-5 sm:py-9">
          <div>
            <p className="text-[8px] font-semibold tracking-[0.18em] text-pearl-violet sm:text-[10px]">
              A NEW PERSPECTIVE
            </p>
            <h3 className="mt-3 font-heading text-xl font-semibold leading-tight text-pearl-navy sm:text-3xl">
              A little
              <br />
              more you.
            </h3>
            <div className="mt-4 inline-flex items-center gap-1 bg-pearl-violet px-3 py-2 text-[9px] text-white">
              Explore the story <ArrowUpRight size={11} />
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden bg-[#D9D4F5]">
            <div className="absolute -right-4 top-5 h-24 w-24 rounded-full bg-pearl-magenta/50 sm:h-28 sm:w-28" />
            <div className="absolute bottom-0 left-0 h-2/3 w-2/3 bg-pearl-cyan" />
            <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-pearl-blue/90" />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-pearl-navy/15 pt-3">
          <span className="text-[9px] text-pearl-navy/60">
            Thoughtfully designed
          </span>
          <span className="h-2 w-10 bg-pearl-violet" />
        </div>
      </div>

      <span className="absolute bottom-4 right-3 rotate-3 bg-pearl-violet px-3 py-2 text-[9px] font-bold tracking-wide text-white shadow-lg sm:bottom-8 sm:right-8">
        THE VISUAL DIRECTION
      </span>
    </div>
  );
}

function FinishedPreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md -rotate-1 border border-white/70 bg-white p-3 shadow-2xl sm:p-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="font-heading text-xs font-bold text-pearl-navy">
            form & field.
          </span>
          <span className="flex items-center gap-1 text-[9px] text-green-700">
            <Check size={12} />
            Ready to launch
          </span>
        </div>

        <div className="grid grid-cols-[1fr_0.8fr] items-center gap-3 py-6 sm:gap-5 sm:py-9">
          <div>
            <p className="text-[8px] font-semibold tracking-[0.18em] text-pearl-blue sm:text-[10px]">
              MADE FOR EVERYDAY
            </p>
            <h3 className="mt-3 font-heading text-xl font-semibold leading-tight text-pearl-navy sm:text-3xl">
              Your next
              <br />
              chapter.
            </h3>
            <p className="mt-3 text-[9px] leading-4 text-pearl-navy/60 sm:text-xs sm:leading-5">
              A thoughtful experience from the first click.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 bg-pearl-blue px-3 py-2 text-[9px] text-white">
              Discover more <ArrowUpRight size={11} />
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden bg-[#DDF5F7]">
            <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-pearl-cyan/70" />
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-pearl-violet/20" />
            <div className="absolute bottom-4 left-1/2 h-1/2 w-1/2 -translate-x-1/2 bg-pearl-magenta/70" />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-[9px] text-gray-500">
            Made for real people.
          </span>
          <span className="text-[9px] font-semibold text-pearl-blue">
            LIVE WEBSITE ↗
          </span>
        </div>
      </div>

      <span className="absolute bottom-4 left-3 -rotate-2 bg-pearl-magenta px-3 py-2 text-[9px] font-bold tracking-wide text-white shadow-lg sm:bottom-8 sm:left-8">
        READY FOR THE WORLD
      </span>
    </div>
  );
}

export default function StorySection() {
  const storyRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const wireframeOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.28, 0.4],
    [1, 1, 0, 0]
  );

  const designOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.4, 0.62, 0.74],
    [0, 0, 1, 1, 0]
  );

  const finishedOpacity = useTransform(
    scrollYProgress,
    [0, 0.62, 0.76, 1],
    [0, 0, 1, 1]
  );

  const wireframeScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1, 0.95]
  );

  const designScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.72],
    [0.95, 1, 0.97]
  );

  const finishedScale = useTransform(
    scrollYProgress,
    [0.68, 0.88],
    [0.95, 1]
  );

  return (
    <section
      id="story"
      className="overflow-clip bg-pearl-bg px-5 py-20 text-pearl-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-pearl-cyan">
              BEHIND THE BUILD
            </p>

            <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              From first thought
              <br />
              <span className="bg-gradient-to-r from-pearl-cyan via-pearl-blue to-pearl-magenta bg-clip-text font-normal italic text-transparent">
                to something real.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-pearl-muted sm:text-base">
            Great websites aren't copied from a checklist. They're shaped
            around the people and businesses they're made for.
          </p>
        </div>

        <div
          ref={storyRef}
          className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          {/* Sticky visual on mobile and desktop */}
          <div className="sticky top-16 z-20 h-[230px] self-start sm:top-20 sm:h-[330px] md:top-24 md:h-[min(68vh,620px)]">
            <div className="relative h-full overflow-hidden border border-pearl-border bg-pearl-surface">
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 sm:left-6 sm:top-6">
                <span className="h-2 w-2 rounded-full bg-pearl-cyan shadow-[0_0_12px_#16D9F2]" />
                <span className="text-[9px] font-semibold tracking-[0.15em] text-white/60 sm:text-[10px]">
                  THE MAKING OF A WEBSITE
                </span>
              </div>

              <motion.div
                style={{ opacity: wireframeOpacity, scale: wireframeScale }}
                className="absolute inset-0"
              >
                <WireframePreview />
              </motion.div>

              <motion.div
                style={{ opacity: designOpacity, scale: designScale }}
                className="absolute inset-0"
              >
                <DesignPreview />
              </motion.div>

              <motion.div
                style={{ opacity: finishedOpacity, scale: finishedScale }}
                className="absolute inset-0"
              >
                <FinishedPreview />
              </motion.div>

              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 text-[9px] font-medium text-white/45 sm:bottom-6 sm:right-6 sm:text-[10px]">
                <ArrowDown size={13} />
                SCROLL TO TRANSFORM
              </div>
            </div>
          </div>

          {/* Narrative stages */}
          <div>
            {stages.map((stage, index) => (
              <article
                key={stage.number}
                className="flex min-h-[62vh] flex-col justify-center border-b border-pearl-border py-10 md:min-h-[75vh] md:py-16"
              >
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-heading text-sm font-semibold text-pearl-cyan">
                    {stage.number}
                  </span>
                  <span className="h-px w-10 bg-gradient-to-r from-pearl-blue to-pearl-magenta" />
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-pearl-muted">
                    {stage.label}
                  </span>
                </div>

                <h3 className="max-w-lg font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {stage.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-pearl-muted sm:text-base sm:leading-8">
                  {stage.description}
                </p>

                <div className="mt-8 flex items-center gap-3 text-xs font-medium text-white/65">
                  <span className="flex h-8 w-8 items-center justify-center border border-pearl-border text-pearl-cyan">
                    <Check size={14} />
                  </span>
                  {stage.note}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-lg text-xs leading-6 text-pearl-muted sm:text-sm">
            Your business is unique. Your website should be, too.
          </p>

          <a
            href="#process"
            className="inline-flex items-center gap-2 border-b border-pearl-violet pb-1 text-sm font-semibold text-pearl-cyan transition hover:border-pearl-magenta hover:text-pearl-magenta"
          >
            See how we work
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
