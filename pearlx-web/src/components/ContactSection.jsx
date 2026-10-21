
import { useState , useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, LoaderCircle, ChevronDown,
  Check, } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  requirement: "",
  budget: "",
};

const inputClass =
  "w-full rounded-xl border border-[#DFD9F0] bg-white px-4 py-3.5 text-sm text-[#10194A] outline-none transition placeholder:text-[#9691AD] focus:border-[#833BFA] focus:ring-4 focus:ring-[#833BFA]/10";

  
function CustomDropdown({
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
}) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function chooseOption(option) {
    onChange({ target: { name, value: option } });
    setOpen(false);
    setHighlighted(-1);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlighted(Math.max(0, options.indexOf(value)));
      } else {
        setHighlighted((current) => (current + 1) % options.length);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlighted((current) =>
        current <= 0 ? options.length - 1 : current - 1
      );
    }

    if (event.key === "Enter" && open && highlighted >= 0) {
      event.preventDefault();
      chooseOption(options[highlighted]);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-options`}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3.5 text-left text-sm outline-none transition-all duration-200 ${
          open
            ? "border-[#833BFA] ring-4 ring-[#833BFA]/10"
            : "border-[#DFD9F0] hover:border-[#BDB0EA] focus:border-[#833BFA]"
        }`}
      >
        <span className={value ? "text-[#10194A]" : "text-[#9691AD]"}>
          {value || placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 text-[#6940C8] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-[#E2DCF2] bg-white p-1.5 shadow-[0_12px_32px_rgba(36,25,82,0.12)]"
          >
            <div
              id={`${id}-options`}
              role="listbox"
              aria-label={placeholder}
              className="max-h-60 overflow-y-auto"
            >
              {options.map((option, index) => {
                const selected = value === option;

                return (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => chooseOption(option)}
                    onMouseEnter={() => setHighlighted(index)}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${
                      selected
                        ? "bg-[#F0EBFF] font-medium text-[#6940C8]"
                        : highlighted === index
                          ? "bg-[#F7F5FC] text-[#10194A]"
                          : "text-[#4F496A] hover:bg-[#F7F5FC]"
                    }`}
                  >
                    <span>{option}</span>
                    {selected && (
                      <Check size={16} className="shrink-0 text-[#833BFA]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/web@pearlx.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            requirement: form.requirement,
            budget: form.budget,
            _subject: "New Pearlx Web Enquiry",
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success !== "true") {
        throw new Error("Unable to submit your enquiry. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#F7F6FC] px-5 py-16 text-[#10194A] sm:px-8 sm:py-20 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-2xl"
      >
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's talk about your website.
          </h2>
          <p className="mt-2 text-sm text-[#77718F]">
            Submit your details and we'll contact you soon.
          </p>
        </div>

        {status === "success" ? (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-[#BCEBE3] bg-[#EAF9F6] p-5"
          >
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#159D8E]" size={22} />
            <div>
              <p className="font-semibold text-[#155E55]">
                Enquiry submitted successfully.
              </p>
              <p className="mt-1 text-sm text-[#39776E]">
                We'll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-sm font-semibold text-[#176BFF]"
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="enquiry-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                maxLength={100}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-phone"
                className="mb-2 block text-sm font-medium"
              >
                Contact number
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                pattern="[+0-9() .-]{7,20}"
                title="Enter a valid phone number."
                maxLength={20}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-requirement"
                className="mb-2 block text-sm font-medium"
              >
                What do you need?
              </label>
                            
              <CustomDropdown
                id="enquiry-requirement"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                placeholder="Choose what you need"
                options={[
                  "Business website",
                  "E-commerce website",
                  "Portfolio website",
                  "Website redesign",
                  "Landing page",
                  "Something else",
                ]}
              />

            </div>

            <div>
              <label
                htmlFor="enquiry-budget"
                className="mb-2 block text-sm font-medium"
              >
                Preferred monthly budget
              </label>
              
              <CustomDropdown
                id="enquiry-budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Choose your monthly budget"
                options={[
                  "Under ₹2,000/month",
                  "₹2,000–₹5,000/month",
                  "₹5,000–₹10,000/month",
                  "Above ₹10,000/month",
                  "Let's discuss",
                ]}
              />

            </div>

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#10194A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#176BFF] disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <LoaderCircle size={17} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit enquiry
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
