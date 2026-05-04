import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Sparkles } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const grades = ["Pre-KG", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];
const helpOptions = ["Admission Inquiry", "Campus Tour", "Fee Structure"];

export const InquiryModal = ({ open, onOpenChange }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", grade: "", help: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (o: boolean) => {
    onOpenChange(o);
    if (!o) setTimeout(() => { setSubmitted(false); setForm({ name: "", phone: "", grade: "", help: "" }); }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md p-0 gap-0 overflow-hidden border-0 shadow-card">
        {!submitted ? (
          <>
            <div className="gradient-navy p-6 text-primary-foreground">
              <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-1">
                <Sparkles className="w-4 h-4" /> Quick Enquiry
              </div>
              <DialogHeader className="text-left space-y-1">
                <DialogTitle className="font-serif text-2xl text-primary-foreground">Let's talk about your child's future</DialogTitle>
                <DialogDescription className="text-primary-foreground/80">
                  Share a few details and our admissions team will reach out.
                </DialogDescription>
              </DialogHeader>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Parent Name</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Priya Sharma" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" required type="tel" pattern="[0-9+\s]{10,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-1.5">
                <Label>Child's Current Grade</Label>
                <Select required value={form.grade} onValueChange={(v) => setForm({ ...form, grade: v })}>
                  <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
                  <SelectContent>{grades.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>How can we help you?</Label>
                <Select required value={form.help} onValueChange={(v) => setForm({ ...form, help: v })}>
                  <SelectTrigger><SelectValue placeholder="Select an option" /></SelectTrigger>
                  <SelectContent>{helpOptions.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Submit Enquiry</Button>
              <p className="text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
            </form>
          </>
        ) : (
          <div className="p-8 text-center animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-success" />
            </div>
            <DialogHeader className="text-center space-y-2">
              <DialogTitle className="font-serif text-2xl">Thank You!</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                Our admissions office will call you within <span className="font-semibold text-foreground">24 hours</span>.
              </DialogDescription>
            </DialogHeader>
            <Button variant="outline" className="mt-6" onClick={() => handleClose(false)}>Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
