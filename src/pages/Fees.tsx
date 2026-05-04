import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, IndianRupee } from "lucide-react";

interface Props {
  onEnquire: () => void;
}

type FeeRow = { label: string; amount: number };
type FeePlan = { grade: string; rows: FeeRow[]; includes: string[] };

const plans: FeePlan[] = [
  {
    grade: "Pre-KG",
    rows: [
      { label: "Admission Fee (one-time)", amount: 15000 },
      { label: "Tuition Fee (annual)", amount: 48000 },
      { label: "Activity & Material", amount: 8000 },
    ],
    includes: ["Books & stationery", "Snacks & milk", "Indoor play sessions"],
  },
  {
    grade: "LKG",
    rows: [
      { label: "Admission Fee (one-time)", amount: 15000 },
      { label: "Tuition Fee (annual)", amount: 52000 },
      { label: "Activity & Material", amount: 9000 },
    ],
    includes: ["Books & stationery", "Snacks & milk", "Music & movement"],
  },
  {
    grade: "UKG",
    rows: [
      { label: "Admission Fee (one-time)", amount: 15000 },
      { label: "Tuition Fee (annual)", amount: 56000 },
      { label: "Activity & Material", amount: 9000 },
    ],
    includes: ["Books & stationery", "Snacks & milk", "Phonics workshops"],
  },
  {
    grade: "Grade 1",
    rows: [
      { label: "Admission Fee (one-time)", amount: 20000 },
      { label: "Tuition Fee (annual)", amount: 68000 },
      { label: "Activity & Lab", amount: 10000 },
    ],
    includes: ["Textbooks", "Sports kit", "Annual day & field trips"],
  },
  {
    grade: "Grade 2",
    rows: [
      { label: "Admission Fee (one-time)", amount: 20000 },
      { label: "Tuition Fee (annual)", amount: 70000 },
      { label: "Activity & Lab", amount: 10000 },
    ],
    includes: ["Textbooks", "Sports kit", "Field trips"],
  },
  {
    grade: "Grade 3",
    rows: [
      { label: "Admission Fee (one-time)", amount: 20000 },
      { label: "Tuition Fee (annual)", amount: 72000 },
      { label: "Activity & Lab", amount: 11000 },
    ],
    includes: ["Textbooks", "Sports kit", "STEM kits"],
  },
  {
    grade: "Grade 4",
    rows: [
      { label: "Admission Fee (one-time)", amount: 20000 },
      { label: "Tuition Fee (annual)", amount: 75000 },
      { label: "Activity & Lab", amount: 11000 },
    ],
    includes: ["Textbooks", "Sports kit", "STEM & art clubs"],
  },
  {
    grade: "Grade 5",
    rows: [
      { label: "Admission Fee (one-time)", amount: 20000 },
      { label: "Tuition Fee (annual)", amount: 78000 },
      { label: "Activity & Lab", amount: 12000 },
    ],
    includes: ["Textbooks", "Sports kit", "Olympiad prep"],
  },
  {
    grade: "Grade 6",
    rows: [
      { label: "Admission Fee (one-time)", amount: 25000 },
      { label: "Tuition Fee (annual)", amount: 86000 },
      { label: "Activity & Lab", amount: 13000 },
    ],
    includes: ["Textbooks", "Robotics intro", "Inter-school events"],
  },
  {
    grade: "Grade 7",
    rows: [
      { label: "Admission Fee (one-time)", amount: 25000 },
      { label: "Tuition Fee (annual)", amount: 90000 },
      { label: "Activity & Lab", amount: 13000 },
    ],
    includes: ["Textbooks", "Robotics & coding", "Inter-school events"],
  },
  {
    grade: "Grade 8",
    rows: [
      { label: "Admission Fee (one-time)", amount: 25000 },
      { label: "Tuition Fee (annual)", amount: 94000 },
      { label: "Activity & Lab", amount: 14000 },
    ],
    includes: ["Textbooks", "Coding & Olympiads", "Public speaking"],
  },
  {
    grade: "Grade 9",
    rows: [
      { label: "Admission Fee (one-time)", amount: 30000 },
      { label: "Tuition Fee (annual)", amount: 1_05_000 },
      { label: "Lab & Practicals", amount: 16000 },
    ],
    includes: ["CBSE textbooks", "Lab access", "Career counselling"],
  },
  {
    grade: "Grade 10",
    rows: [
      { label: "Admission Fee (one-time)", amount: 30000 },
      { label: "Tuition Fee (annual)", amount: 1_12_000 },
      { label: "Board Prep & Lab", amount: 18000 },
    ],
    includes: ["CBSE textbooks", "Board prep classes", "Mock exams"],
  },
  {
    grade: "Grade 11",
    rows: [
      { label: "Admission Fee (one-time)", amount: 35000 },
      { label: "Tuition Fee (annual)", amount: 1_25_000 },
      { label: "Stream Lab & Practicals", amount: 20000 },
    ],
    includes: ["Science / Commerce / Humanities", "Career counselling", "Entrance exam guidance"],
  },
  {
    grade: "Grade 12",
    rows: [
      { label: "Admission Fee (one-time)", amount: 35000 },
      { label: "Tuition Fee (annual)", amount: 1_32_000 },
      { label: "Board Prep & Practicals", amount: 22000 },
    ],
    includes: ["Board prep & mocks", "University application help", "Entrance exam coaching"],
  },
];

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const Fees = ({ onEnquire }: Props) => {
  const [grade, setGrade] = useState<string>("");
  const plan = plans.find((p) => p.grade === grade);
  const total = plan?.rows.reduce((s, r) => s + r.amount, 0) ?? 0;

  return (
    <main className="pt-28 pb-20">
      <section className="container text-center max-w-2xl mx-auto mb-10">
        <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Fee Structure</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
          Transparent fees, no surprises.
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Select your child's class to view the full annual fee breakdown for the 2026–27 session.
        </p>
      </section>

      <section className="container max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-2xl shadow-soft p-6 md:p-8">
          <label className="block text-sm font-semibold text-primary mb-2">Select Class</label>
          <Select value={grade} onValueChange={setGrade}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Choose a class to view fees" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {plans.map((p) => (
                <SelectItem key={p.grade} value={p.grade}>{p.grade}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {!plan && (
            <p className="text-muted-foreground text-sm mt-6 text-center">
              Pick a class above to see the fee details.
            </p>
          )}

          {plan && (
            <div className="mt-7 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                {plan.grade} — Annual Fees
              </h2>
              <div className="rounded-xl border border-border overflow-hidden">
                {plan.rows.map((r, i) => (
                  <div
                    key={r.label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i % 2 ? "bg-muted/40" : "bg-card"
                    }`}
                  >
                    <span className="text-foreground">{r.label}</span>
                    <span className="font-semibold text-primary tabular-nums">{formatINR(r.amount)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
                  <span className="font-semibold flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" /> Total (first year)
                  </span>
                  <span className="font-bold text-lg tabular-nums">{formatINR(total)}</span>
                </div>
              </div>

              <h3 className="font-semibold text-primary mt-6 mb-3">What's included</h3>
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {plan.includes.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> {h}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground mb-5">
                * Tuition is payable in 3 easy instalments. Admission fee is one-time, charged only in the first year.
                Transport & uniform are optional add-ons.
              </p>

              <Button variant="hero" size="lg" className="w-full" onClick={onEnquire}>
                Book a Tour & Discuss Fees
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
