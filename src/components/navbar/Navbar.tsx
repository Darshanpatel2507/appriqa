"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { DURATION, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SOLUTIONS = [
  "Robotics Prototyping",
  "Software Solutions",
  "AI Solutions",
  "Embedded Systems",
  "IoT Solutions",
  "Electronics Design",
  "Product Development",
  "Energy Solutions"
];

const INDUSTRIES = [
  "Manufacturing",
  "Energy",
  "Agriculture",
  "Education",
  "Healthcare",
  "Smart Cities",
  "Automotive",
  "Research & Innovation"
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 relative z-50 group">
            <img src="/logo/logo-main.png" alt="APPRIQA Logo" className="h-20 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
            <span className="font-brand font-black text-2xl tracking-widest text-foreground">APPRIQA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("solutions")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-8">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeMegaMenu === "solutions" && (
                  <MegaMenu title="Solutions" items={SOLUTIONS} basePath="/solutions" />
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("industries")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-8">
                Industries <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeMegaMenu === "industries" && (
                  <MegaMenu title="Industries" items={INDUSTRIES} basePath="/industries" />
                )}
              </AnimatePresence>
            </div>

            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
            <Button asChild variant="outline" className="border-border hover:bg-white/5">
              <Link href="/query">Query</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <button 
            className="lg:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: DURATION.fast, ease: EASE.standard }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <div className="space-y-4">
                <div className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">Solutions</div>
                <div className="grid grid-cols-1 gap-3 pl-4">
                  {SOLUTIONS.map(s => (
                    <Link key={s} href={`/solutions/${s.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMobileMenuOpen(false)}>{s}</Link>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">Industries</div>
                <div className="grid grid-cols-1 gap-3 pl-4">
                  {INDUSTRIES.map(s => (
                    <Link key={s} href={`/industries/${s.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMobileMenuOpen(false)}>{s}</Link>
                  ))}
                </div>
              </div>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                <Link href="/query" onClick={() => setMobileMenuOpen(false)}>Submit Query</Link>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MegaMenu({ title, items, basePath }: { title: string, items: string[], basePath: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: DURATION.fast, ease: EASE.standard }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border rounded-xl shadow-2xl p-6"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {items.map((item) => (
          <Link 
            key={item} 
            href={`${basePath}/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">{item}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <Link href={basePath} className="text-sm text-primary font-medium hover:underline">
          View all {title.toLowerCase()} &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
