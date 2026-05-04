import { GraduationCap, Phone, MapPin, Mail } from "lucide-react";


export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-14 pb-24 md:pb-10">
    <div className="container grid gap-10 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-serif font-bold text-xl mb-3">
          <span className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-secondary" />
          </span>
          Akash Academy
        </div>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Nurturing curious minds since 1998. A K–12 school dedicated to academic excellence and character building.
        </p>
      </div>

      <div>
        <h4 className="font-serif text-lg mb-3 text-secondary">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><a href="#home" className="hover:text-secondary transition-smooth">Home</a></li>
          <li><a href="#academics" className="hover:text-secondary transition-smooth">Academics</a></li>
          <li><a href="#faculty" className="hover:text-secondary transition-smooth">Faculty</a></li>
          <li><a href="#fees" className="hover:text-secondary transition-smooth">Fee Structure</a></li>
          <li><a href="#contact" className="hover:text-secondary transition-smooth">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-lg mb-3 text-secondary">Reach Us</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-2"><MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> 24, Education Lane, Bengaluru 560001</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> +91 98765 43210</li>
          <li className="flex gap-2"><Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> admissions@akashacademy.edu</li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/60 text-center">
      © {new Date().getFullYear()} Akash Academy. All rights reserved.
    </div>
  </footer>
);
