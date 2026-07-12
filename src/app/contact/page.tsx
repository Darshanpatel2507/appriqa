"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { DURATION, EASE, VARIANTS } from "@/lib/motion";
import { submitContact } from "@/app/actions";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const result = await submitContact(data);
    if (result.success) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="pt-20">
      <Section className="pb-10">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Partner with our engineering team to solve your most complex technical challenges."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Information */}
          <motion.div variants={VARIANTS.fadeUp} className="space-y-12">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Global Headquarters</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office Address</h4>
                    <p className="text-muted-foreground mt-1">123 Innovation Drive, Tech Park<br />Silicon Valley, CA 94043</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground mt-1">contact@appriqa.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground mt-1">Mon - Fri: 8:00 AM - 6:00 PM PST</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 rounded-xl border border-border bg-card overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                [ Interactive Map Embed Placeholder ]
              </div>
            </div>
          </motion.div>

          {/* Form */}
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
                  <h3 className="text-2xl font-heading font-bold mb-6">Send us a message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name <span className="text-primary">*</span></label>
                      <input 
                        {...register("name")}
                        className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-xs">
                            {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address <span className="text-primary">*</span></label>
                      <input 
                        {...register("email")}
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
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company (Optional)</label>
                    <input 
                      {...register("company")}
                      className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors"
                      placeholder="Organization Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message <span className="text-primary">*</span></label>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-destructive text-xs">
                          {errors.message.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-14 text-base">
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                  <h3 className="text-2xl font-heading font-bold mb-2">Message Sent</h3>
                  <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. An APPRIQA representative will be in touch with you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Send Another Message
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
