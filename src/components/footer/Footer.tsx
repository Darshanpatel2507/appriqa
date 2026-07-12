"use client";

import Link from "next/link";
const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <img src="/logo/logo-main.png" alt="APPRIQA Logo" className="h-24 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
              <span className="font-brand font-black text-4xl tracking-widest text-foreground">APPRIQA</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Building the autonomous future. We are an agile startup obsessed with shipping AI and Robotics breakthroughs.
            </p>
            <div className="flex gap-5 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><XIcon className="w-4 h-4 mt-0.5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/solutions/robotics-prototyping" className="hover:text-primary transition-colors">Robotics</Link></li>
              <li><Link href="/solutions/ai-solutions" className="hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/solutions/embedded-systems" className="hover:text-primary transition-colors">Embedded Systems</Link></li>
              <li><Link href="/solutions/iot-solutions" className="hover:text-primary transition-colors">IoT Solutions</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors text-primary">View All &rarr;</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/industries/manufacturing" className="hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/energy" className="hover:text-primary transition-colors">Energy</Link></li>
              <li><Link href="/industries/smart-cities" className="hover:text-primary transition-colors">Smart Cities</Link></li>
              <li><Link href="/industries/automotive" className="hover:text-primary transition-colors">Automotive</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors text-primary">View All &rarr;</Link></li>
            </ul>
          </div>

          {/* Column 4: Company & Support */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/query" className="hover:text-primary transition-colors">Submit Query</Link></li>
            </ul>
          </div>



        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>&copy; {new Date().getFullYear()} APPRIQA. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
