"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { FeatureCard } from "@/components/cards/Card";
import { Bot, Code, Brain, Cpu, Wifi, CircuitBoard, Wrench, Zap } from "lucide-react";

const SOLUTIONS = [
  { id: "robotics-prototyping", title: "Robotics Prototyping", desc: "Design and build of autonomous physical systems and manipulators.", icon: Bot },
  { id: "software-solutions", title: "Software Solutions", desc: "High-performance distributed systems, cloud infrastructure, and mission-control software.", icon: Code },
  { id: "ai-solutions", title: "AI Solutions", desc: "Machine learning, computer vision, and predictive maintenance models.", icon: Brain },
  { id: "embedded-systems", title: "Embedded Systems", desc: "Firmware development and edge computing for real-time processing.", icon: Cpu },
  { id: "iot-solutions", title: "IoT Solutions", desc: "Sensor networks, telemetry, and secure data pipelines for connected devices.", icon: Wifi },
  { id: "electronics-design", title: "Electronics Design", desc: "Custom PCB design, layout, and manufacturing for specialized hardware.", icon: CircuitBoard },
  { id: "product-development", title: "Product Development", desc: "End-to-end engineering from concept to scaled production.", icon: Wrench },
  { id: "energy-solutions", title: "Energy Solutions", desc: "Smart grid tech, battery management, and renewable integration.", icon: Zap },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      <Section className="bg-secondary/10 pb-12">
        <SectionHeader 
          title="Engineering Solutions" 
          subtitle="Comprehensive deep-tech capabilities tailored for complex industrial challenges."
        />
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map(sol => {
            const Icon = sol.icon;
            return (
              <FeatureCard 
                key={sol.id}
                title={sol.title}
                description={sol.desc}
                href={`/solutions/${sol.id}`}
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
