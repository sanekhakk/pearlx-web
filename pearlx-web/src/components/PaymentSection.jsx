
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarDays, Check, Wrench } from "lucide-react";

const images = [
  {
    src: "/payment-showcase-1.webp",
    alt: "Pearlx Web website design",
  },
  {
    src: "/payment-showcase-2.webp",
    alt: "Pearlx Web responsive website",
  },
  {
    src: "/payment-showcase-3.webp",
    alt: "Pearlx Web creative website project",
  },
];

const benefits = [
  "No need to pay the full development cost upfront",
  "Spread website development payments across months",
  "Monthly maintenance charged separately",
];

export default function PaymentSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="payments"
      className="relative overflow-hidden bg-[#F0EDFF] px-5 py-16 text-[#10194A] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6940C8] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#833BFA]" />
              Flexible website payments
            </span>

            <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your website.
              <br />
              <span className="bg-gradient-to-r from-[#176BFF] via-[#833BFA] to-[#D83DFF] bg-clip-text text-transparent">
                Monthly payments.
              </span>
            </h2>
          </motion.div>

          {/* Image comes directly after the heading on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative my-5 sm:my-7 lg:hidden"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[activeImage].src}
                  src={images[activeImage].src}
                  alt={images[activeImage].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="block h-auto max-h-[340px] w-full object-contain object-center"
                />
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-pressed={activeImage === index}
                    onClick={() => setActiveImage(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? "w-7 bg-[#833BFA]"
                        : "w-2 bg-[#10194A]/20 hover:bg-[#833BFA]/60"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#77718F]">
                0{activeImage + 1} / 03
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="max-w-lg text-sm leading-7 text-[#5E5A78] sm:text-base sm:leading-8">
              You don't have to pay the entire website development cost upfront.
              Spread the development cost into manageable monthly payments, with
              a separate monthly maintenance charge.
            </p>

            <div className="mt-6 space-y-3.5 sm:mt-8 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#176BFF]/10 text-[#176BFF]">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-6 text-[#34304F] sm:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#10194A] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#176BFF] sm:mt-9"
            >
              Explore your options
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#10194A]/10 pt-5 sm:mt-10 sm:gap-x-7 sm:pt-6">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-[#6940C8]" />
                <span className="text-xs font-medium text-[#5E5A78] sm:text-sm">
                  Pay month by month
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench size={18} className="text-[#176BFF]" />
                <span className="text-xs font-medium text-[#5E5A78] sm:text-sm">
                  Ongoing maintenance
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop image: standalone, without a card or background */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="hidden min-w-0 lg:block"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[activeImage].src}
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.7 }}
              className="block h-auto max-h-[580px] w-full object-contain"
            />
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onClick={() => setActiveImage(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-7 bg-[#833BFA]"
                      : "w-2 bg-[#10194A]/20 hover:bg-[#833BFA]/60"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#77718F]">
              0{activeImage + 1} / 03
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
