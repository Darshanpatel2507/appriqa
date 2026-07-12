"use client";

import { useParams } from "next/navigation";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Mock data fetching based on slug
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="pt-20">
      <Section className="bg-secondary/10 border-b border-border">
        <div className="max-w-4xl">
          <motion.div variants={VARIANTS.fadeUp} initial="hidden" animate="visible" className="mb-4">
            <Link href="/solutions" className="text-primary hover:underline text-sm font-medium">
              &larr; Back to Solutions
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
            End-to-end engineering capabilities tailored for high-performance and mission-critical applications within {title}.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.entrance, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 text-muted-foreground leading-relaxed text-lg">
            <h2 className="text-2xl font-heading font-bold text-foreground">Overview</h2>
            <p>
              Our approach to {title} integrates state-of-the-art research with rigorous industrial engineering standards. We do not just build prototypes; we architect robust solutions designed to scale, endure harsh environments, and deliver absolute reliability.
            </p>
            <p>
              By leveraging our deep-tech expertise, we help organizations accelerate their R&D timelines, reduce technical debt, and deploy market-ready systems faster than traditional engineering life cycles.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground pt-8">Key Capabilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span>Advanced systems architecture and deployment for {title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl h-fit">
            <h3 className="text-xl font-heading font-bold mb-6">Related Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["C++", "Rust", "TensorFlow", "ROS2", "Altium", "AWS IoT"].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-heading font-bold mb-4">Need Expert Guidance?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Our engineering team is ready to evaluate your requirements and architect a custom solution.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/query">Submit a Query <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
