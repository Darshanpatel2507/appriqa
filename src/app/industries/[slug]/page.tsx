"use client";

import { useParams } from "next/navigation";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";
import { ProjectCard } from "@/components/cards/Card";

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="pt-20">
      <Section className="bg-secondary/10 border-b border-border">
        <div className="max-w-4xl">
          <motion.div variants={VARIANTS.fadeUp} initial="hidden" animate="visible" className="mb-4">
            <Link href="/industries" className="text-primary hover:underline text-sm font-medium">
              &larr; Back to Industries
            </Link>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.entrance }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.entrance, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            Engineering resilient, scalable, and highly secure infrastructure tailored to the rigorous demands of the {title} sector.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.entrance, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 text-muted-foreground leading-relaxed text-lg">
            <h2 className="text-2xl font-heading font-bold text-foreground">Sector Challenges</h2>
            <p>
              The {title} industry faces unprecedented challenges in scaling operations while maintaining absolute reliability and security. Our engineering teams specialize in architecting systems that thrive under these constraints.
            </p>
            <p>
              We integrate deep-tech solutions—from edge computing and autonomous robotics to distributed AI models—to ensure that your infrastructure is future-proofed against incoming technological shifts.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground pt-8">Security & Compliance</h2>
            <ul className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <strong className="text-foreground block mb-1">Enterprise-Grade Security Protocol</strong>
                    <span className="text-sm">Implementation of military-grade encryption and zero-trust architectures specific to {title} regulatory standards.</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-bold mb-4">Relevant Case Study</h3>
              <ProjectCard
                title={`${title} Transformation`}
                description="Deployed a full-stack IoT and AI monitoring solution that increased operational efficiency by 35%."
                href={`/projects/mock-project`}
                tags={[title, "AI", "IoT"]}
                className="bg-background shadow-none"
              />
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Ready to Scale?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Connect with our specialized {title} engineering team.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Contact Sales <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
