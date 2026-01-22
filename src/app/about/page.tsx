"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Code2, Terminal, Cpu, Zap } from "lucide-react";

export default function AboutPage() {
    const experiences = [
        {
            year: "2024 - Present",
            role: "Lead Full-Stack Engineer",
            company: "Event Easy",
            description: "Architecting high-performance ticketing systems and real-time dashboard analytics."
        },
        {
            year: "2023 - 2024",
            role: "Senior Software Developer",
            company: "Gebeya",
            description: "Built scalable multi-vendor marketplaces and merchant administrative suites."
        },
        {
            year: "2022 - 2023",
            role: "Frontend Engineer",
            company: "Warka Academy",
            description: "Developed impact-driven LMS platforms with a focus on accessibility and performance."
        }
    ];

    const skills = [
        { icon: Code2, label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { icon: Terminal, label: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"] },
        { icon: Cpu, label: "Infrastructure", items: ["Vercel", "GitHub Actions", "Docker", "Edge Functions"] },
        { icon: Zap, label: "Performance", items: ["Lighthouse Optimization", "Core Web Vitals", "Edge Caching"] }
    ];

    return (
        <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navbar />

            <section className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 mb-20">
                    <h1 className="text-4xl sm:text-7xl font-bold text-slate-100 uppercase tracking-tighter">
                        Engineering <span className="text-emerald-500">Excellence</span>
                    </h1>
                    <p className="max-w-2xl text-slate-400 text-lg">
                        A developer focused on the intersection of performance, industrial-grade reliability, and tactile user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Theory / BIO */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-4">
                            Mission Statement // 01
                        </h2>
                        <div className="prose prose-invert prose-emerald text-slate-300">
                            <p>
                                My philosophy as an engineer is simple: **Performance is not a feature, it's a foundation.**
                                Every line of code I write is optimized for speed, clarity, and scalability.
                            </p>
                            <p>
                                With several years of experience building specialized products in East Africa,
                                from FinTech to EdTech, I've developed a deep understanding of creating software
                                that works reliably across varied environments.
                            </p>
                            <p>
                                I don't just build cards on a screen; I build digital infrastructure that
                                empowers businesses and provides seamless utility to users.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {skills.map((skill) => (
                                <div key={skill.label} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                                    <skill.icon className="w-5 h-5 text-emerald-500 mb-4" />
                                    <h3 className="text-sm font-bold text-slate-100 mb-3">{skill.label}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map(item => (
                                            <span key={item} className="text-[10px] text-slate-500 font-mono">[{item}]</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-12">
                        <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-4">
                            Log // Technical History
                        </h2>
                        <div className="flex flex-col gap-12">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative pl-8 border-l border-slate-800 group"
                                >
                                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-colors" />
                                    <span className="text-xs font-mono text-emerald-500 mb-2 block">{exp.year}</span>
                                    <h3 className="text-xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                                    <p className="text-slate-500 text-sm font-medium mb-4">{exp.company}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
