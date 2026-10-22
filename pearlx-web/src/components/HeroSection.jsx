
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const heroImages = [
  {
    src: "/hero-showcase-1.webp",
    alt: "Pearlx Web website showcase",
  },
  {
    src: "/hero-showcase-2.webp",
    alt: "Pearlx Web creative website design",
  },
  {
    src: "/hero-showcase-3.webp",
    alt: "Pearlx Web responsive website design",
  },
];


function HeroImageLoop() {
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      {/* Fixed image area: images overlap instead of shifting layout */}
      <div className="relative grid w-full place-items-center">
        <div className="invisible col-start-1 row-start-1 w-full">
          <img
            src={heroImages[0].src}
            alt=""
            className="block h-auto w-full object-contain"
          />
        </div>

        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={heroImages[activeImage].src}
            src={heroImages[activeImage].src}
            alt={heroImages[activeImage].alt}
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: reduceMotion ? 0 : [0, -6, 0, 6, 0],
            }}
            exit={{
              opacity: 0,
              x: reduceMotion ? 0 : -15,
            }}
            transition={{
              opacity: { duration: 0.65, ease: "easeInOut" },
              x: { duration: 0.8, ease: "easeOut" },
              y: reduceMotion
                ? { duration: 0 }
                : {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
            }}
            className="absolute inset-0 block h-full w-full object-contain"
            draggable={false}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}


export default function HeroSection() {

  const reduceMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-pearl-bg px-5 pb-16 pt-15 text-pearl-white sm:px-8 sm:pb-24  lg:px-12 lg:h-screen lg:pt-36"
    >
      {/* Subtle brand-colour atmosphere behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-pearl-blue/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-80 w-80 rounded-full bg-pearl-violet/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          

          
          <h1 className="hero-heading max-w-2xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Big website dreams.
            <br />
            <span className="hero-gradient-text bg-gradient-to-r from-pearl-cyan via-pearl-blue to-pearl-magenta bg-clip-text text-transparent">
              Smaller monthly payments.
            </span>
          </h1>


          {/* Image appears immediately below heading on mobile */}
          <div className="my-6 lg:hidden">
            <HeroImageLoop />
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-pearl-muted sm:text-lg sm:leading-8">
            Your website, your way. Get a professional website without paying
            the entire development cost upfront. Spread the cost across
            manageable monthly payments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            <a
              href="#contact"
              className="hero-cta-shine group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-pearl-blue to-pearl-violet px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              <span className="relative z-10">Get started</span>

              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>


            <a
              href="#story"
              className="hero-see-how inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-sm font-medium text-pearl-white/80 transition-colors hover:text-pearl-cyan"
            >
              See how it works
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Floating image loop — no card or image background */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{
            opacity: 1,
            x: 0,
            y: reduceMotion ? 0 : [0, -9, 0, 9, 0],
          }}
          transition={{
            opacity: { duration: 0.65, ease: "easeInOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: reduceMotion
              ? { duration: 0 }
              : {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
          }}
          className="relative min-w-0"
        >
          <div className="relative hidden min-w-0 lg:block">
            <HeroImageLoop />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
