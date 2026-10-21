
import { motion } from "motion/react";
import {
  Code2,
  PanelsTopLeft,
  ShoppingBag,
  Smartphone,
  Search,
  Wrench,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive websites designed to turn visitors into customers and help your business grow.",
    icon: Code2,
    label: "FOR EVERY BUSINESS",
    theme: "bg-pearl-lime text-pearl-navy",
    card: "bg-pearl-navy text-white",
    span: "md:col-span-7",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces that make your brand look professional and your customers feel at home.",
    icon: PanelsTopLeft,
    label: "DESIGNED WITH PURPOSE",
    theme: "bg-white text-pearl-violet",
    card: "bg-[#EDE7FF] text-pearl-navy",
    span: "md:col-span-5",
  },
  {
    number: "03",
    title: "E-commerce Stores",
    description:
      "Bring your products online with a smooth shopping experience built to support your sales.",
    icon: ShoppingBag,
    label: "SELL ONLINE",
    theme: "bg-white text-pearl-blue",
    card: "bg-[#E4EEFF] text-pearl-navy",
    span: "md:col-span-5",
  },
  {
    number: "04",
    title: "Web Applications",
    description:
      "From customer portals to custom business tools, build digital products around the way you work.",
    icon: Smartphone,
    label: "BUILT AROUND YOU",
    theme: "bg-pearl-navy text-white",
    card: "bg-pearl-blue text-white",
    span: "md:col-span-7",
  },
];

const supportServices = [
  {
    icon: Search,
    title: "SEO foundations",
    description: "Help customers discover your business online.",
  },
  {
    icon: Wrench,
    title: "Ongoing maintenance",
    description: "Keep your website updated, secure, and running smoothly.",
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:p-9 ${service.card} ${service.span}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-heading text-sm font-semibold opacity-60">
          / {service.number}
        </span>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.theme}`}
        >
          <Icon size={23} strokeWidth={1.8} />
        </div>
      </div>

      <div className="relative z-10 mt-12 max-w-lg">
        <span className="text-[10px] font-bold tracking-[0.2em] opacity-65">
          {service.label}
        </span>

        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {service.title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-7 opacity-75 sm:text-base">
          {service.description}
        </p>
      </div>

      <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-current/10 transition-transform duration-700 group-hover:scale-125 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-8 -right-4 h-32 w-32 rounded-full border border-current/15 transition-transform duration-700 group-hover:scale-110" />

      <div className="absolute right-7 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-current/20 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:right-9">
        <ArrowUpRight size={19} />
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-pearl-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pearl-navy/10 bg-white px-4 py-2 text-xs font-semibold text-pearl-navy">
              <Sparkles size={14} className="text-pearl-violet" />
              WHAT WE DO
            </div> */}

            <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-pearl-navy sm:text-5xl lg:text-6xl">
              Big ideas.
              <br />
              <span className="text-pearl-blue">Built for the web.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-pearl-navy/65 sm:text-lg">
            Whether you are starting from scratch or ready to scale, we help
            you build a digital presence that works as hard as you do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 grid gap-4 sm:grid-cols-2"
        >
          {supportServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex items-start gap-4 rounded-3xl border border-pearl-navy/10 bg-white p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pearl-violet/10 text-pearl-violet">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="font-heading text-base font-semibold text-pearl-navy">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-pearl-navy/60">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-heading text-lg font-semibold text-pearl-navy">
              Have something different in mind?
            </p>
            <p className="mt-1 text-sm text-pearl-navy/60">
              Tell us what you want to build. Let’s figure it out together.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-pearl-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pearl-blue"
          >
            Discuss your project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
