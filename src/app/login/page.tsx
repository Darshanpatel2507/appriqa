"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { DURATION, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Mail, Lock, ArrowRight } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type TabType = "client" | "student" | "employee";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<TabType>("client");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // TODO: connect to auth provider
    console.log("Login submitted for:", activeTab, data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-80px)] pt-20 pb-20">
      <div className="absolute inset-0 bg-background z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.base, ease: EASE.standard }}
        className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="font-heading font-bold text-3xl mb-2 text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground text-sm">Sign in to your APPRIQA portal</p>
          </div>

          <div className="flex p-1 bg-background/50 rounded-lg mb-8 border border-border">
            {(["client", "student", "employee"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 py-2 text-sm font-medium rounded-md capitalize transition-all",
                  activeTab === tab ? "bg-card shadow text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: DURATION.fast, ease: EASE.standard }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div className="space-y-1 text-sm font-medium text-foreground">
                <label>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-background border border-border rounded-lg py-2.5 pl-10 pr-4 outline-none focus:border-primary transition-colors"
                    placeholder={`Enter your ${activeTab} email`}
                  />
                </div>
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 text-sm font-medium text-foreground">
                <div className="flex justify-between">
                  <label>Password</label>
                  <a href="#" className="text-primary text-xs hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    {...register("password")}
                    type="password"
                    className="w-full bg-background border border-border rounded-lg py-2.5 pl-10 pr-4 outline-none focus:border-primary transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="text-destructive text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary text-primary-foreground text-base">
                {isSubmitting ? "Authenticating..." : (
                  <>Sign In <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
            </motion.form>
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
}
