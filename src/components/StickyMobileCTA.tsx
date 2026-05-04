import { Phone, MessageCircle } from "lucide-react";

interface Props {
  onEnquire: () => void;
}

export const StickyMobileCTA = ({ onEnquire }: Props) => (
  <>
    {/* Mobile bottom bar */}
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-card safe-bottom">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-primary text-primary font-semibold transition-smooth active:scale-95"
        >
          <Phone className="w-5 h-5" /> Call
        </a>
        <button
          onClick={onEnquire}
          className="flex items-center justify-center gap-2 py-3 rounded-xl gradient-gold text-secondary-foreground font-semibold shadow-glow transition-smooth active:scale-95"
        >
          <MessageCircle className="w-5 h-5" /> Enquire Now
        </button>
      </div>
    </div>

    {/* Desktop floating button */}
    <button
      onClick={onEnquire}
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 px-6 py-4 rounded-full gradient-gold text-secondary-foreground font-semibold animate-float-pulse"
    >
      <MessageCircle className="w-5 h-5" /> Book a Tour
    </button>
  </>
);
