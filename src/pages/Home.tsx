import heroImg from "@/assets/hero-school.webp";
import principalImg from "@/assets/principal.webp";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Trophy, Heart, Sparkles } from "lucide-react";
import { Academics } from "@/pages/Academics";
import { Faculty } from "@/pages/Faculty";
import { Fees } from "@/pages/Fees";
import { Contact } from "@/pages/Contact";

interface Props {
  onEnquire: () => void;
}

const highlights = [
  { icon: Award, title: "25+ Years of Excellence", desc: "A legacy of producing confident, capable students since 1998." },
  { icon: Users, title: "12:1 Student-Teacher Ratio", desc: "Personalised attention so every child is truly seen." },
  { icon: Trophy, title: "98% Board Pass Rate", desc: "Consistent top results across CBSE Class X and XII boards." },
  { icon: BookOpen, title: "Modern Curriculum", desc: "STEM labs, robotics, arts, and sports — all under one roof." },
  { icon: Heart, title: "Holistic Development", desc: "Mindfulness, music, and life-skills woven into every day." },
  { icon: Sparkles, title: "Smart Classrooms", desc: "Interactive learning with technology that enhances, not replaces." },
];

export const Home = ({ onEnquire }: Props) => (
  <>
    {/* HERO */}
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 pb-32 md:pb-20 scroll-mt-20">
      <img
        src={heroImg}
        alt="Students at Akash Academy chatting in the courtyard after class"
        className="absolute inset-0 w-full h-full object-cover"
        width={1600}
        height={1024}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/85" />
      <div className="container relative z-10 text-primary-foreground">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs md:text-sm font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open for 2026–27
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-5">
            A school that feels like <span className="text-secondary">home</span>, and teaches like the best.
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-8 max-w-xl leading-relaxed">
            For 25 years, Akash Academy has been quietly raising thoughtful, curious children in the heart of the city. Come see for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="xl" onClick={onEnquire}>
              Book a Free Campus Tour
            </Button>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center h-14 px-8 rounded-xl border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-smooth"
            >
              Call Admissions
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
            {[["1,200+", "Students"], ["80+", "Teachers"], ["25+", "Years"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl md:text-3xl font-bold text-secondary">{n}</div>
                <div className="text-xs md:text-sm text-primary-foreground/80">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* HIGHLIGHTS */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Why Akash</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-2 mb-4">
            A school built around your child.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Six things parents tell us they love most about life at Akash Academy.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PRINCIPAL */}
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="absolute -inset-3 gradient-gold rounded-3xl opacity-30 blur-xl" />
            <img
              src={principalImg}
              alt="Mr. Rajesh Verma, Principal of Akash Academy"
              loading="lazy"
              width={768}
              height={896}
              className="relative rounded-3xl shadow-card w-full max-w-sm mx-auto object-cover aspect-[4/5]"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">From the Principal's Desk</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
            "Education is the kindest gift we can give a child."
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Akash Academy, we don't just prepare students for exams — we prepare them for life. Every classroom, every conversation, every assembly is an opportunity to build curiosity, courage, and character.
            </p>
            <p>
              When you walk through our gates, you'll feel something different: a quiet confidence in our children, a warmth among our teachers, and parents who feel like partners. We'd love for you to experience it in person.
            </p>
          </div>
          <div className="mt-6">
            <div className="font-serif text-lg font-bold text-primary">Mr. Rajesh Verma</div>
            <div className="text-sm text-muted-foreground">Principal, Akash Academy</div>
          </div>
        </div>
      </div>
    </section>

    {/* ALL TABS AS SECTIONS */}
    <section id="academics" className="scroll-mt-20"><Academics onEnquire={onEnquire} /></section>
    <section id="faculty" className="scroll-mt-20 bg-muted/40"><Faculty onEnquire={onEnquire} /></section>
    <section id="fees" className="scroll-mt-20"><Fees onEnquire={onEnquire} /></section>
    <section id="contact" className="scroll-mt-20 bg-muted/40"><Contact onEnquire={onEnquire} /></section>

    {/* CTA */}
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-navy p-10 md:p-16 text-center text-primary-foreground shadow-card">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 relative">Ready to see Akash Academy in person?</h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto relative">
            Book a free guided campus tour. Meet our teachers. Watch your child light up.
          </p>
          <Button variant="hero" size="xl" onClick={onEnquire} className="relative">Book Your Tour</Button>
        </div>
      </div>
    </section>
  </>
);
