
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Globe,
  LayoutDashboard,
  Menu,
  MousePointer2,
  Palette,
  ShoppingBag,
} from "lucide-react";

const previewCards = [
  {
    icon: Code2,
    title: "Web development",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Palette,
    title: "Creative design",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: ShoppingBag,
    title: "Online stores",
    color: "bg-lime-100 text-lime-700",
  },
];

export default function BrowserPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl shadow-pearl-navy/20 sm:rounded-3xl">
        {/* Browser toolbar */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="flex max-w-[55%] flex-1 items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-[10px] text-gray-400 shadow-sm sm:max-w-[60%] sm:text-xs">
            <Globe size={12} />
            <span className="truncate">yourbusiness.com</span>
          </div>

          <Menu size={17} className="text-gray-500" />
        </div>

        {/* Website preview */}
        <div className="p-4 sm:p-7">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pearl-blue text-white">
                <LayoutDashboard size={17} />
              </div>
              <span className="font-heading text-sm font-bold text-pearl-navy sm:text-base">
                studio<span className="text-pearl-blue">.</span>
              </span>
            </div>

            <nav className="hidden items-center gap-5 text-[10px] text-gray-500 sm:flex">
              <span>Services</span>
              <span>Our work</span>
              <span>About</span>
            </nav>

            <span className="rounded-full bg-pearl-navy px-3 py-2 text-[10px] font-semibold text-white sm:px-4">
              Let’s talk <ArrowUpRight size={11} className="ml-1 inline" />
            </span>
          </header>

          <div className="grid items-center gap-5 py-8 sm:grid-cols-2 sm:gap-7 sm:py-12">
            <div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1.5 text-[9px] font-semibold text-pearl-blue sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-pearl-blue" />
                YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-pearl-navy sm:text-4xl">
                Ideas into
                <br />
                <span className="text-pearl-blue">experiences.</span>
              </h2>

              <p className="mt-3 max-w-xs text-[10px] leading-5 text-gray-500 sm:text-xs sm:leading-6">
                Thoughtful design and powerful technology to help your business
                stand out online.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-pearl-blue px-4 py-2.5 text-[10px] font-semibold text-white sm:text-xs">
                Explore what we do
                <ArrowUpRight size={13} />
              </div>

              <div className="mt-5 flex items-center gap-2 text-[9px] text-gray-500 sm:text-[10px]">
                <Check size={13} className="text-green-500" />
                Designed around your business
              </div>
            </div>

            <div className="relative min-h-[190px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#E7F1FF] via-[#EDE7FF] to-[#D9FBF7] p-4 sm:min-h-[230px] sm:p-5">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-pearl-violet/15 blur-2xl" />
              <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-pearl-cyan/30 blur-2xl" />

              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-xl border border-white/80 bg-white/85 p-3 shadow-lg backdrop-blur-sm sm:p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-400">YOUR BUSINESS</p>
                    <p className="mt-1 font-heading text-xs font-bold text-pearl-navy sm:text-sm">
                      Made to stand out.
                    </p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pearl-lime text-pearl-navy">
                    <MousePointer2 size={15} />
                  </div>
                </div>

                <div className="flex items-end gap-2">
                  <div className="h-12 flex-1 rounded-md bg-pearl-blue/15 sm:h-16" />
                  <div className="h-16 flex-1 rounded-md bg-pearl-violet/20 sm:h-20" />
                  <div className="h-10 flex-1 rounded-md bg-pearl-cyan/30 sm:h-12" />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="h-1.5 w-16 rounded-full bg-gray-200" />
                  <div className="h-1.5 w-8 rounded-full bg-pearl-blue/50" />
                </div>
              </motion.div>

              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow-md sm:bottom-4 sm:right-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pearl-lime text-pearl-navy">
                  <Check size={13} />
                </span>
                <span className="text-[9px] font-semibold text-pearl-navy sm:text-[10px]">
                  Ready to launch
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="mb-3 text-[9px] font-semibold tracking-[0.15em] text-gray-400">
              EVERYTHING YOU NEED TO GROW
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {previewCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-xl border border-gray-100 p-2.5 sm:p-3"
                  >
                    <div
                      className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${card.color}`}
                    >
                      <Icon size={14} />
                    </div>
                    <p className="text-[9px] font-semibold text-pearl-navy sm:text-[11px]">
                      {card.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 -top-4 flex items-center gap-2 rounded-2xl border border-white bg-white px-3 py-2.5 shadow-xl sm:-right-5 sm:top-8 sm:px-4"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-pearl-lime text-pearl-navy">
          <Check size={17} />
        </span>
        <div>
          <p className="text-[10px] font-bold text-pearl-navy sm:text-xs">
            Looking good!
          </p>
          <p className="text-[9px] text-gray-400">Every detail matters</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
