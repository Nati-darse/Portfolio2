"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Mail,
            label: "Direct Email",
            value: "natnael@example.com",
            href: "mailto:natnael@example.com"
        },
        {
            icon: MessageSquare,
            label: "Consultation",
            value: "Schedule on Calendly",
            href: "#"
        },
        {
            icon: Linkedin,
            label: "Professional",
            value: "/in/natnael-darsema",
            href: "https://linkedin.com/in/natnael-darsema"
        }
    ];

    return (
        <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navbar />

            <section className="pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-7xl font-bold text-slate-100 uppercase tracking-tighter mb-8 leading-[0.9]">
                                Initiate <span className="text-emerald-500">Contact</span>
                            </h1>
                            <p className="max-w-md text-slate-400 text-lg mb-12">
                                Available for high-stakes projects requiring architectural precision and performance-led development.
                            </p>

                            <div className="flex flex-col gap-6">
                                {contactMethods.map((method, i) => (
                                    <motion.a
                                        key={i}
                                        href={method.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/50 transition-all group max-w-sm"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:text-emerald-400 transition-colors">
                                            <method.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                                                {method.label}
                                            </span>
                                            <span className="text-slate-200 font-medium">{method.value}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        {/* Visual tech element: Circuit grid representation */}
                        <div className="aspect-square w-full rounded-3xl bg-slate-900/50 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                            <div className="relative z-10 flex flex-col items-center gap-6 text-center p-12">
                                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-pulse">
                                    <Send className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-100 uppercase tracking-tight">System Status: Ready</h3>
                                <p className="text-slate-500 text-sm max-w-xs">
                                    Response time usually under 24 hours for valid professional inquiries.
                                </p>

                                <div className="mt-8">
                                    <MagneticButton className="bg-emerald-500 text-slate-950 font-bold px-12 py-4">
                                        Send Message
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
