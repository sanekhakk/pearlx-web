
import { motion } from "motion/react";
import {
  MessageCircle,
  Palette,
  Code2,
  Rocket,
  ArrowUpRight,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "First, let's talk.",
    description:
      "Tell us about your business, your audience, and what you want your website to achieve. No complicated brief needed.",
    icon: MessageCircle,
    color: "text-pearl-cyan",
    border: "border-pearl-cyan",
    bg: "bg-pearl-cyan/10",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "Find your look.",
    description:
      "We work out the layout, visual direction, and experience so your website feels like your brand—not somebody else's.",
    icon: Palette,
    color: "text-pearl-blue",
    border: "border-pearl-blue",
    bg: "bg-pearl-blue/10",
  },
  {
    number: "03",
    label: "DEVELOP",
    title: "Bring it to life.",
    description:
      "We build your website, make it responsive, and check the important details across screen sizes before launch.",
    icon: Code2,
    color: "text-pearl-violet",
    border: "border-pearl-violet",
    bg: "bg-pearl-violet/10",
  },
  {
    number: "04",
    label: "LAUNCH",
    title: "Ready for the world.",
    description:
      "Once everything is reviewed and approved, we help you take your website live and discuss ongoing maintenance.",
    icon: Rocket,
    color: "text-pearl-magenta",
    border: "border-pearl-magenta",
    bg: "bg-pearl-magenta/10",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-pearl-bg px-5 py-20 text-pearl-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Brand-colour lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-pearl-violet/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-pearl-blue/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-5% 0px -5% 0px",
          }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end md:gap-12"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 bg-pearl-cyan shadow-[0_0_12px_#16D9F2]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-pearl-muted sm:text-xs">
                FROM FIRST CHAT TO LAUNCH
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              A good process.
              <br />
              <span className="bg-gradient-to-r from-pearl-cyan via-pearl-blue to-pearl-magenta bg-clip-text text-transparent">
                A better result.
              </span>
            </h2>
          </div>

          <p className="w-full max-w-xl text-sm leading-7 text-pearl-muted sm:text-base sm:leading-8 md:justify-self-end">
            No mysterious process or unnecessary complexity. Just clear
            conversations, considered design, and a website built with purpose.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative mt-14 sm:mt-20">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-pearl-cyan via-pearl-blue via-pearl-violet to-pearl-magenta opacity-40 sm:left-7" />

          <div>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 36,
                    scale: 0.98,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                    margin: "-5% 0px -10% 0px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid min-w-0 grid-cols-[42px_minmax(0,1fr)] gap-x-4 py-7 sm:grid-cols-[56px_minmax(0,180px)_minmax(0,1fr)] sm:gap-x-6 sm:py-9 lg:grid-cols-[64px_minmax(0,200px)_minmax(0,1fr)_40px] lg:gap-x-8"
                >
                  {/* Icon marker */}
                  <div className="relative z-10 flex items-start justify-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center border sm:h-14 sm:w-14 ${step.border} ${step.bg}`}
                    >
                      <Icon
                        size={20}
                        className={step.color}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* Step number and label */}
                  <div className="min-w-0 pt-1 sm:pt-2">
                    <p
                      className={`text-[10px] font-bold tracking-[0.18em] ${step.color}`}
                    >
                      {step.label}
                    </p>

                    <p className="mt-2 text-xs font-medium text-white/35">
                      STEP {step.number}
                    </p>
                  </div>

                  {/* Step content */}
                  <div className="col-start-2 min-w-0 border-b border-pearl-border pb-7 sm:col-start-3 sm:pb-9">
                    <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 w-full max-w-2xl text-sm leading-7 text-pearl-muted sm:text-base sm:leading-8">
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                      <Check size={14} className={step.color} />
                      One step closer to launch
                    </div>
                  </div>

                  {/* Desktop arrow */}
                  <div className="hidden items-center justify-end lg:flex">
                    <ArrowUpRight
                      size={21}
                      className={`${step.color} opacity-60`}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing call to action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-5% 0px -5% 0px",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-5 border border-pearl-border bg-pearl-surface p-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold text-pearl-cyan">
              <Check size={15} />
              EVERY PROJECT STARTS SOMEWHERE
            </p>

            <h3 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
              Let's start with your idea.
            </h3>

            <p className="mt-2 text-sm leading-6 text-pearl-muted">
              Tell us what you have in mind. We'll take it from there.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-gradient-to-r from-pearl-blue to-pearl-violet px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
