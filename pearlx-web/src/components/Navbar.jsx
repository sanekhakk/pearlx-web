
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  // { label: "Our Process", href: "#process" },
  { label: "Payment Plans", href: "#payments" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const projectButton =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pearl-blue to-pearl-violet px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]";

  return (
    <header className="sticky top-0 z-50 border-b border-pearl-navy/10 bg-pearl-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[68px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:min-h-[76px] sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Pearlx Web home"
          onClick={closeMenu}
          className="shrink-0"
        >
          <img
            src="/pearlx-web-light.webp"
            alt="Pearlx Web"
            className="h-11 w-32 object-contain object-left sm:h-12 sm:w-40"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-pearl-navy/70 transition-colors duration-200 hover:text-pearl-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className={`hidden lg:inline-flex ${projectButton}`}>
          Start a Project
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-pearl-navy/10 bg-white text-pearl-navy transition-colors hover:border-pearl-violet/40 hover:text-pearl-violet lg:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation dropdown */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-pearl-navy/10 bg-pearl-white px-5 pb-5 pt-2 sm:px-8">
            <div className="mx-auto max-w-7xl">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex min-h-[50px] items-center justify-between border-b border-pearl-navy/[0.08] text-sm font-medium text-pearl-navy transition-colors hover:text-pearl-blue"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-heading text-[10px] font-semibold text-pearl-violet/70">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-pearl-navy/35 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pearl-blue"
                  />
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={closeMenu}
                className={`mt-4 w-full ${projectButton}`}
              >
                Start a Project
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
