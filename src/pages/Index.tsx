import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { InquiryModal } from "@/components/InquiryModal";
import { Home } from "@/pages/Home";
import { useLocation } from "react-router-dom";

const HashScroll = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Map legacy routes to anchor IDs
    const routeToId: Record<string, string> = {
      "/": "home",
      "/academics": "academics",
      "/faculty": "faculty",
      "/fees": "fees",
      "/contact": "contact",
    };
    const id = hash ? hash.replace("#", "") : routeToId[pathname];
    if (!id) return;
    // Wait one tick so the section is mounted
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [pathname, hash]);
  return null;
};

const Index = () => {
  const [open, setOpen] = useState(false);
  const onEnquire = () => setOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      <HashScroll />
      <Header onEnquire={onEnquire} />
      <div className="flex-1">
        <Home onEnquire={onEnquire} />
      </div>
      <Footer />
      <StickyMobileCTA onEnquire={onEnquire} />
      <InquiryModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Index;
