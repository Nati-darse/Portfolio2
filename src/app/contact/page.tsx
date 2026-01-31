"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const form = React.useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = React.useState(false);
    const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSending(true);
        setStatus('idle');

        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your Service ID
                'YOUR_TEMPLATE_ID', // Replace with your Template ID
                form.current,
                'YOUR_PUBLIC_KEY' // Replace with your Public Key
            );
            setStatus('success');
            form.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsSending(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: "Direct Email",
            value: "nathnaeldarsema29@gmail.com",
            href: "mailto:nathnaeldarsema29@gmail.com"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "Nati-darse",
            href: "https://github.com/Nati-darse"
        },
        {
            icon: Linkedin,
            label: "Professional",
            value: "nathnael-darsema",
            href: "https://www.linkedin.com/in/nathnael-darsema/"
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
                        className="relative"
                    >
                        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                            <form ref={form} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mb-2">Send Message</h3>
                                    <p className="text-slate-500 text-sm mb-6">
                                        Use the form below to reach out directly. I'll get back to you as soon as possible.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="user_name" className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1">Name</label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="user_email" className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1">Email</label>
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            required
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <div className="mt-4">
                                    <MagneticButton
                                        disabled={isSending}
                                        type="submit"
                                        className={`w-full font-bold px-12 py-4 flex items-center justify-center gap-2 transition-all ${isSending ? 'bg-slate-800 text-slate-500' : 'bg-emerald-500 text-slate-950 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'}`}
                                    >
                                        {isSending ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                                                Transmitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 text-current" />
                                                Send Message
                                            </>
                                        )}
                                    </MagneticButton>
                                </div>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-emerald-500 text-sm text-center font-medium"
                                    >
                                        Message sent successfully!
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm text-center font-medium"
                                    >
                                        Failed to send message. Please try again.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
