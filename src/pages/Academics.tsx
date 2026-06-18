import { Button } from "@/components/ui/button";
import { Baby, BookOpen, Beaker, GraduationCap as GradCap, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Props {
  onEnquire: () => void;
}

const levels = [
  {
    icon: Baby,
    title: "Pre-Primary",
    grades: "Pre-KG – UKG",
    age: "Ages 3–5",
    desc: "Play-based learning that sparks wonder. Storytelling, music, and outdoor exploration build confidence and language.",
    highlights: ["Montessori-inspired play", "Phonics & early math", "Art, music & movement"],
  },
  {
    icon: BookOpen,
    title: "Primary",
    grades: "Grades 1 – 5",
    age: "Ages 6–10",
    desc: "Foundational years where reading, reasoning, and curiosity take root. Small classes mean every voice is heard.",
    highlights: ["Reading & writing fluency", "Hands-on STEM", "Sports & performing arts"],
  },
  {
    icon: Beaker,
    title: "Middle School",
    grades: "Grades 6 – 8",
    age: "Ages 11–13",
    desc: "Students dive deeper. Project-based learning, robotics, and electives help them discover what they love.",
    highlights: ["Robotics & coding", "Public speaking", "Inter-school competitions"],
  },
  {
    icon: GradCap,
    title: "Senior School",
    grades: "Grades 9 – 12",
    age: "Ages 14–18",
    desc: "CBSE curriculum with focused board prep, career counselling, and a strong support system for university.",
    highlights: ["CBSE X & XII", "Career counselling", "University guidance"],
  },
];

export const Academics = ({ onEnquire }: Props) => (
  <main className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none" />
    <div className="container relative">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Academics</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
          Learning that grows with your child.
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          From their first crayon to their final board exam — a thoughtful programme at every stage.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {levels.map(({ icon: Icon, title, grades, age, desc, highlights }, index) => (
          <ScrollReveal key={title} delay={index * 100} className="h-full">
            <article
              className="group h-full relative p-7 md:p-9 rounded-3xl bg-card border border-border/70 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-smooth overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full gradient-gold opacity-10 group-hover:opacity-20 transition-smooth pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center mb-5 shadow-soft">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">{title}</h2>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground">{age}</span>
                </div>
                <div className="text-sm font-semibold text-secondary-foreground/80 mb-3">{grades}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {h}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onEnquire}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all focus:outline-none"
                >
                  Enquire about this programme <ArrowRight className="w-4 h-4 text-secondary" />
                </button>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16">
        <div className="rounded-3xl gradient-navy p-10 md:p-14 text-center text-primary-foreground shadow-card relative overflow-hidden">
          <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Not sure which grade is right?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Our admissions team will help you find the perfect fit for your child.</p>
          <Button variant="hero" size="lg" onClick={onEnquire}>Talk to Admissions</Button>
        </div>
      </ScrollReveal>
    </div>
  </main>
);
