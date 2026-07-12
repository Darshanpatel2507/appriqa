"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { submitQuery } from "@/app/actions";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";
import { CheckCircle2, HelpCircle } from "lucide-react";

const querySchema = z.object({
  type: z.string().min(1, "Please select an inquiry type"),
  email: z.string().email("Invalid email address"),
  question: z.string().min(10, "Question must be at least 10 characters"),
});

type QueryFormValues = z.infer<typeof querySchema>;

export default function QueryPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QueryFormValues>({
    resolver: zodResolver(querySchema),
    defaultValues: { type: "general" }
  });

  const onSubmit = async (data: QueryFormValues) => {
    const result = await submitQuery(data);
    if (result.success) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="pt-20">
      <Section className="pb-10">
        <SectionHeader 
          title="Queries & Support" 
          subtitle="Find answers to common questions or submit a specific inquiry to our engineering and support teams."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* FAQ Accordion */}
          <motion.div variants={VARIANTS.fadeUp}>
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              Frequently Asked Questions
            </h3>
            
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-card border border-border">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="mt-0">
                <Accordion className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Where is APPRIQA located?</AccordionTrigger>
                    <AccordionContent>
                      Our headquarters are in Silicon Valley, with R&D centers in Boston and Munich, and manufacturing partners globally.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What industries do you serve?</AccordionTrigger>
                    <AccordionContent>
                      We primarily serve Manufacturing, Energy, Agriculture, Healthcare, Smart Cities, and Automotive sectors, though our deep-tech solutions are highly adaptable.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="business" className="mt-0">
                <Accordion className="w-full">
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do you structure project engagements?</AccordionTrigger>
                    <AccordionContent>
                      We offer end-to-end consulting, joint venture R&D partnerships, and direct turnkey solution delivery depending on project scope.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Do you take on start-up projects?</AccordionTrigger>
                    <AccordionContent>
                      We occasionally partner with well-funded deep-tech startups if the engineering challenge aligns with our R&D goals.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="technical" className="mt-0">
                <Accordion className="w-full">
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What is your primary tech stack?</AccordionTrigger>
                    <AccordionContent>
                      Our software stack utilizes C++/Rust for embedded systems, Python/TensorFlow for AI, and Next.js/React for cloud interfaces. Hardware design is done via Altium and SolidWorks.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Are your solutions open-source?</AccordionTrigger>
                    <AccordionContent>
                      Most of our production solutions are proprietary to ensure security and IP protection for our clients, though we contribute heavily to open-source foundation models and tools.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div variants={VARIANTS.fadeUp} className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: DURATION.fast }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-heading font-bold mb-6">Submit an Inquiry</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type of Inquiry <span className="text-primary">*</span></label>
                    <select 
                      {...register("type")}
                      className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="general">General Support</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="media">Media / Press</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address <span className="text-primary">*</span></label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors"
                      placeholder="john@company.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-xs">
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Question <span className="text-primary">*</span></label>
                    <textarea 
                      {...register("question")}
                      rows={5}
                      className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Please describe your issue or question in detail."
                    />
                    <AnimatePresence>
                      {errors.question && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-xs">
                          {errors.question.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-14 text-base">
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Inquiry Received</h3>
                  <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                    Your question has been routed to the appropriate department. We will respond within 24-48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Submit Another Query
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
