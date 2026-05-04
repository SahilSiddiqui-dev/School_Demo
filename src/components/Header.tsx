import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onEnquire: () => void;
}

const links = [
  { id: "home", label: "Home" },
  { id: "academics", label: "Academics" },
  { id: "faculty", label: "Faculty" },
  { id: "fees", label: "Fees" },
  { id: "contact", label: "Contact" },
];

export const Header = ({ onEnquire }: Props) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const overHero = active === "home" && !scrolled;
  const solid = !overHero;

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-smooth ${
        solid ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => goTo("home")}
          className={`flex items-center gap-2 font-serif font-bold text-lg md:text-xl ${
            overHero ? "text-white" : "text-primary"
          }`}
        >
          <span className="w-9 h-9 rounded-full gradient-navy flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-secondary" />
          </span>
          Akash Academy
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className={`text-sm font-medium transition-smooth ${
                  overHero
                    ? isActive
                      ? "text-secondary"
                      : "text-white/90 hover:text-secondary"
                    : isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </button>
            );
          })}
          <Button variant="hero" size="sm" onClick={onEnquire}>
            Enquire Now
          </Button>
        </nav>

        <button
          className={`md:hidden p-2 ${overHero ? "text-white" : "text-primary"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className={`py-2 text-left text-base font-medium ${
                  active === l.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
            <Button variant="hero" className="mt-2" onClick={() => { setOpen(false); onEnquire(); }}>
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
