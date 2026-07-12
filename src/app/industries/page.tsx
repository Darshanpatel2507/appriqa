"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { FeatureCard } from "@/components/cards/Card";
import { Factory, Zap, Leaf, Stethoscope, Building, Car, GraduationCap, Microscope } from "lucide-react";

const INDUSTRIES = [
  { id: "manufacturing", title: "Manufacturing", desc: "Industry 4.0 automation, robotics, and predictive maintenance.", icon: Factory },
  { id: "energy", title: "Energy", desc: "Smart grid optimization and renewable energy storage systems.", icon: Zap },
  { id: "agriculture", title: "Agriculture", desc: "Precision farming, drone surveying, and IoT yield tracking.", icon: Leaf },
  { id: "healthcare", title: "Healthcare", desc: "Medical device engineering and compliant embedded software.", icon: Stethoscope },
  { id: "smart-cities", title: "Smart Cities", desc: "Urban telemetry, traffic optimization, and connected infrastructure.", icon: Building },
  { id: "automotive", title: "Automotive", desc: "EV battery management systems and autonomous vehicle subsystems.", icon: Car },
  { id: "education", title: "Education", desc: "Advanced training simulators and R&D lab integrations.", icon: GraduationCap },
  { id: "research", title: "Research & Innovation", desc: "Bespoke engineering for particle accelerators and academic labs.", icon: Microscope },
];

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <Section className="bg-secondary/10 pb-12">
        <SectionHeader 
          title="Industries We Transform" 
          subtitle="Delivering domain-specific engineering solutions across critical sectors."
        />
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map(ind => {
            const Icon = ind.icon;
            return (
              <FeatureCard 
                key={ind.id}
                title={ind.title}
                description={ind.desc}
                href={`/industries/${ind.id}`}
              >
                <Icon className="w-8 h-8" />
              </FeatureCard>
            )
          })}
        </div>
      </Section>
    </div>
  );
}
