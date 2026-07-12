"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { motion } from "framer-motion";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
};

const STATS: Stat[] = [
  { label: "MVPs Shipped", value: 12, suffix: "+" },
  { label: "Hackathon Wins", value: 3, suffix: "" },
  { label: "Agile Workflows", value: 100, suffix: "%" },
  { label: "Weeks to Prototype", value: 2, suffix: "" },
];

export function StatsSection() {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-x-0 md:divide-x divide-white/5">
          {STATS.map((stat, idx) => (
            <motion.div key={idx} variants={VARIANTS.fadeUp} className="flex flex-col gap-1 items-center justify-center">
              <div className="text-3xl md:text-5xl font-heading font-bold text-primary">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  duration={2} 
                />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
