"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ProjectCard } from "@/components/cards/Card";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Robotics", "AI", "IoT", "Edge AI", "Embedded", "Energy"];

import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === "All" || project.categories.includes(activeFilter)
  );

  return (
    <div className="pt-20">
      <Section className="bg-secondary/10 border-b border-border pb-12">
        <SectionHeader 
          title="Our Projects" 
          subtitle="A comprehensive portfolio of deep-tech engineering solutions delivered to global industry leaders."
        />
        
        {/* Filter Strip */}
        <div className="flex flex-wrap gap-2 mt-8">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div 
          key={activeFilter}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              href={`/projects/${project.slug}`}
              imageSrc={project.imageSrc}
              tags={project.categories}
              className="h-full"
            />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No projects found for the selected category.
          </div>
        )}
      </Section>
    </div>
  );
}
