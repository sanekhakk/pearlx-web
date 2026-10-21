
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const footerLinks = [
  { label: "Our work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Our process", href: "#process" },
  { label: "Monthly payments", href: "#payments" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-pearl-white px-5 pb-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-pearl-navy px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <a
                href="#home"
                aria-label="Pearlx Web home"
                className="inline-flex"
              >
                <img
                  src="/pearlx-web-dark.webp"
                  alt="Pearlx Web"
                  className="h-11 w-auto object-contain"
                />
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                Thoughtful design. Reliable development. Websites that help
                businesses move forward.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-pearl-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-pearl-violet"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-8">
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-white/40">
                  EXPLORE
                </h3>

                <ul className="mt-5 space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/75 transition hover:text-pearl-cyan"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest text-white/40">
                  GET IN TOUCH
                </h3>

                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:web@pearlx.in"
                    className="flex items-start gap-2 text-sm text-white/75 transition hover:text-pearl-cyan"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0" />
                    <span className="break-all">web@pearlx.in</span>
                  </a>

                  <a
                    href="tel:+916239434959"
                    className="flex items-center gap-2 text-sm text-white/75 transition hover:text-pearl-cyan"
                  >
                    <Phone size={16} className="shrink-0" />
                    <span>6239434959</span>
                  </a>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-xs font-semibold tracking-widest text-white/40">
                  FOLLOW
                </h3>

                <a
                  href="https://www.instagram.com/pearlx_web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Pearlx Web on Instagram"
                  className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/80 transition hover:border-pearl-cyan hover:text-pearl-cyan"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-white/10 text-xs font-bold">
                    IG
                  </span>
                  @pearlx_web
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Pearlx Web. All rights reserved.
              </p>

              <a
                href="#home"
                className="w-fit transition hover:text-pearl-cyan"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
