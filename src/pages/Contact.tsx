import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Props {
  onEnquire: () => void;
}

const whatsappNumber = "919876543210";
const whatsappMsg = encodeURIComponent("Hi Akash Academy, I'd like to know more about admissions.");

export const Contact = ({ onEnquire }: Props) => (
  <main className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
    <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
    <div className="container relative">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Contact Us</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
          We'd love to hear from you.
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Drop by, call, or message us on WhatsApp — whatever works best for you.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {[
          { icon: MapPin, label: "Visit Us", value: "24, Education Lane, Bengaluru 560001" },
          { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
          { icon: Mail, label: "Email Us", value: "admissions@akashacademy.edu", href: "mailto:admissions@akashacademy.edu" },
          { icon: Clock, label: "Office Hours", value: "Mon – Sat • 8:30 AM – 4:30 PM" },
        ].map(({ icon: Icon, label, value, href }, index) => (
          <ScrollReveal key={label} delay={index * 100}>
            <div className="group flex gap-4 p-6 rounded-3xl bg-card border border-border/70 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth h-full">
              <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth shadow-soft">
                <Icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">{label}</div>
                {href ? (
                  <a href={href} className="font-serif text-lg text-primary hover:text-secondary hover:underline transition-smooth break-words block">
                    {value}
                  </a>
                ) : (
                  <div className="font-serif text-lg text-primary break-words">{value}</div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* WhatsApp + Enquire */}
      <ScrollReveal className="grid md:grid-cols-2 gap-4 mb-12">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 h-14 rounded-2xl bg-whatsapp text-white font-semibold shadow-card hover:brightness-105 active:scale-[0.98] transition-smooth"
        >
          <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
        </a>
        <Button variant="navy" size="xl" onClick={onEnquire} className="h-14 rounded-2xl hover:scale-[1.01] active:scale-[0.98] transition-smooth border border-border/30">
          Send an Enquiry
        </Button>
      </ScrollReveal>

      {/* Map */}
      <ScrollReveal>
        <div className="rounded-3xl overflow-hidden border border-border/80 shadow-card relative">
          <iframe
            title="Akash Academy location"
            src="https://www.google.com/maps?q=Bengaluru&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full filter dark:invert dark:grayscale dark:contrast-125"
          />
        </div>
      </ScrollReveal>
    </div>
  </main>
);
