import { HomeHero } from "@/components/hero/HomeHero";
import { StatsSection } from "@/components/sections/StatsSection";
import { Section, SectionHeader } from "@/components/layout/Section";
import { FeatureCard, ProjectCard } from "@/components/cards/Card";
import { Cpu, Bot, Factory, Zap, Code, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeHero />
      
      <Section className="bg-secondary/10 py-12 md:py-16">
        <SectionHeader 
          title="Engineering Excellence" 
          subtitle="We bridge the gap between AI research and physical reality, delivering rapid prototypes and scalable MVPs for autonomous systems."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Robotics & AI" 
            description="Autonomous systems, computer vision, and machine learning models for industrial automation."
            href="/solutions/robotics-prototyping"
          >
            <Bot className="w-8 h-8" />
          </FeatureCard>
          <FeatureCard 
            title="Embedded Systems" 
            description="Custom PCB design, firmware development, and IoT infrastructure for mission-critical operations."
            href="/solutions/embedded-systems"
          >
            <Cpu className="w-8 h-8" />
          </FeatureCard>
          <FeatureCard 
            title="Energy Solutions" 
            description="Sustainable energy management, smart grid integration, and next-gen battery tech."
            href="/solutions/energy-solutions"
          >
            <Zap className="w-8 h-8" />
          </FeatureCard>
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/solutions">View All Solutions</Link>
          </Button>
        </div>
      </Section>

      <StatsSection />

      <Section>
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of our recent engineering achievements."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Project Alpha-R" 
            description="Autonomous robotic arm software for modular micro-factories. Built with advanced computer vision for dynamic pick-and-place."
            href="/projects/alpha-r"
            imageSrc="/images/project-1.png"
            tags={["Robotics", "AI", "Manufacturing"]}
          />
          <ProjectCard 
            title="Nexus Edge AI" 
            description="Smart grid IoT sensor mesh prototype designed to detect energy anomalies using edge AI."
            href="/projects/nexus-edge-ai"
            imageSrc="/images/project-2.png"
            tags={["IoT", "Energy", "Smart Cities"]}
          />
        </div>
        <div className="mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Explore Portfolio</Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-transparent py-16 md:py-24">
        <div className="flex flex-col items-center justify-center mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            The Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Why Choose <span className="font-brand font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm tracking-wider">APPRIQA</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-card/40 hover:bg-card border border-border hover:border-white/20 transition-all duration-300 p-8 rounded-3xl flex flex-col items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all shadow-lg">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">A Lean Team of Builders</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">No corporate bloat. Just obsessed engineers shipping AI and robotics solutions at breakneck speed. We move fast and build things that actually work.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-card/40 hover:bg-card border border-border hover:border-white/20 transition-all duration-300 p-8 rounded-3xl flex flex-col items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all shadow-lg">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Rapid Prototyping</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">From napkin sketch to working MVP in weeks, not years. We bridge the gap between AI research and physical reality.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-card/40 hover:bg-card border border-border hover:border-white/20 transition-all duration-300 p-8 rounded-3xl flex flex-col items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">Fail Fast, Scale Hard</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">We iterate aggressively to find product-market fit in deep-tech, delivering scalable MVPs for autonomous systems.</p>
          </div>
        </div>
      </Section>

      <Section className="text-center py-20 bg-secondary/20">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to disrupt the status quo?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Partner with our agile engineering team to rapidly validate and scale your next big AI or Robotics idea.
        </p>
        <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full">
          <Link href="/contact">Let's Build</Link>
        </Button>
      </Section>
    </>
  );
}
