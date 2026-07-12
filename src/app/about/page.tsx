"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";
import { Lightbulb, Target, Compass, Users, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const VALUES = [
  { icon: Lightbulb, title: "Ship Fast", desc: "We believe in rapid iteration. Perfect is the enemy of deployed." },
  { icon: Target, title: "Obsession", desc: "We are obsessed with our craft, pushing the limits of AI and Robotics." },
  { icon: Compass, title: "Agility", desc: "Pivoting and adapting instantly to new challenges in deep-tech." },
  { icon: Users, title: "Radical Candor", desc: "Open, honest feedback to build the strongest possible engineering culture." }
];

const TIMELINE = [
  { year: "2023", title: "The Garage Days", desc: "Founded by obsessed engineers to build autonomous edge AI." },
  { year: "2024", title: "First MVP Shipped", desc: "Successfully deployed our first swarm robotics software in the field." },
  { year: "2025", title: "Seed Funded", desc: "Backed by top-tier deep-tech VCs to accelerate our AI deployment." },
  { year: "2026", title: "Scaling Impact", desc: "Rapidly expanding our hardware integrations across autonomous platforms." }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative w-full min-h-[70vh] flex items-center justify-center pt-20 pb-12 overflow-hidden border-b border-white/10">
        {/* Background Image with Blending */}
        <div className="absolute inset-0 z-0">
          <img src="/images/about-hero.png" alt="APPRIQA Lab" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.entrance }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-white drop-shadow-xl tracking-tight"
          >
            Building the <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Autonomous</span> Future
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.entrance, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-md"
          >
            APPRIQA is a lean deep-tech startup. We design, build, and deploy the AI and robotics infrastructure of tomorrow, moving from concept to MVP in record time.
          </motion.p>
        </div>
      </div>

      {/* Vision & Mission */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div variants={VARIANTS.fadeUp} className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the definitive brain behind the next generation of autonomous physical systems and embodied AI.
            </p>
          </motion.div>
          <motion.div variants={VARIANTS.fadeUp} className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-4 text-accent">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To aggressively iterate on AI and robotics paradigms, turning complex academic concepts into production-ready software in weeks, not years.
            </p>
          </motion.div>
        </div>
      </Section>



      {/* Core Values */}
      <Section>
        <SectionHeader title="Core Values" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {VALUES.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div 
                key={val.title}
                variants={VARIANTS.fadeUp}
                className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{val.title}</h4>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Careers CTA */}
      <Section className="bg-primary/5 text-center py-24 border-t border-border">
        <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Join The Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We are always looking for exceptional engineers, scientists, and designers who want to build the future. 
        </p>
        <Button asChild size="lg">
          <Link href="/contact">View Open Positions</Link>
        </Button>
      </Section>
    </div>
  );
}
