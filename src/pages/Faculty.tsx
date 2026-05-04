import math from "@/assets/teacher-math.webp";
import physics from "@/assets/teacher-physics.webp";
import english from "@/assets/teacher-english.webp";
import chemistry from "@/assets/teacher-chemistry.webp";
import biology from "@/assets/teacher-biology.webp";
import cs from "@/assets/teacher-cs.webp";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

interface Props {
  onEnquire: () => void;
}

const faculty = [
  { img: math, name: "Mrs. Lakshmi Iyer", subject: "Mathematics", degree: "M.Sc. Mathematics, B.Ed. — 18 yrs", note: "Loves making algebra feel like a puzzle worth solving." },
  { img: physics, name: "Mr. Anil Deshpande", subject: "Physics", degree: "M.Sc. Physics (IIT Bombay), B.Ed. — 22 yrs", note: "Former research scholar; brings real labs to every class." },
  { img: english, name: "Ms. Ananya Pillai", subject: "English Literature", degree: "M.A. English (JNU), B.Ed. — 9 yrs", note: "Believes every student has a story worth writing." },
  { img: chemistry, name: "Mr. Suresh Nair", subject: "Chemistry", degree: "M.Sc. Chemistry, M.Phil. — 16 yrs", note: "Hands-on experiments over rote formulas, every time." },
  { img: biology, name: "Ms. Meera Joshi", subject: "Biology", degree: "M.Sc. Botany, B.Ed. — 11 yrs", note: "Field trips to wetlands are her favourite classrooms." },
  { img: cs, name: "Mr. Rohit Menon", subject: "Computer Science", degree: "B.Tech CSE (NIT Trichy), M.Tech — 7 yrs", note: "Teaches Python the way he wishes he was taught." },
];

export const Faculty = ({ onEnquire }: Props) => (
  <main className="pt-28 pb-20">
    <section className="container text-center max-w-2xl mx-auto mb-14">
      <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Our Faculty</span>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
        Teachers your child will remember for life.
      </h1>
      <p className="text-muted-foreground text-base md:text-lg">
        Qualified, patient, and curious — meet a few of the people who make Akash Academy what it is.
      </p>
    </section>

    <section className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {faculty.map((f) => (
        <article
          key={f.name}
          className="group rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth overflow-hidden flex flex-col"
        >
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={f.img}
              alt={`${f.name}, ${f.subject} teacher at Akash Academy`}
              loading="lazy"
              decoding="async"
              width={768}
              height={960}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/80">{f.subject}</span>
            <h2 className="font-serif text-xl font-bold text-primary mt-1">{f.name}</h2>
            <div className="flex items-start gap-2 mt-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
              <span>{f.degree}</span>
            </div>
            <p className="text-sm text-foreground/80 mt-3 leading-relaxed flex-1">"{f.note}"</p>
          </div>
        </article>
      ))}
    </section>

    <section className="container mt-16">
      <div className="rounded-3xl gradient-navy p-10 md:p-14 text-center text-primary-foreground">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Want to meet our teachers in person?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Book a guided campus tour and sit in on a live class.</p>
        <Button variant="hero" size="lg" onClick={onEnquire}>Book a Campus Tour</Button>
      </div>
    </section>
  </main>
);
