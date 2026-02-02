"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Layers,
    Terminal,
    Smartphone,
    Cpu,
    Globe,
    Zap
} from "lucide-react";

const languages = [
    { name: "TypeScript", level: "Senior", icon: Code2, color: "text-blue-400" },
    { name: "JavaScript", level: "Senior", icon: Code2, color: "text-yellow-400" },
    { name: "Go (Golang)", level: "Basics", icon: Terminal, color: "text-cyan-400" },
    { name: "Python", level: "Intermediate", icon: Terminal, color: "text-blue-500" },
    { name: "C++", level: "Intermediate", icon: Cpu, color: "text-blue-600" },
    { name: "Java", level: "Basics", icon: Coffee, color: "text-red-500" },
];

const categories = [
    {
        title: "Frontend Architecture",
        icon: Globe,
        items: ["Next.js", "React", "Angular", "Tailwind CSS", "Framer Motion", "Redux/Zustand"]
    },
    {
        title: "Backend Engineering",
        icon: Database,
        items: ["Node.js", "Express", "Spring Boot", "PHP", "Prisma/Drizzle", "PostgreSQL/MongoDB/Supabase"]
    },
    {
        title: "Mobile & Specialized",
        icon: Smartphone,
        items: ["React Native", "Expo", "Firebase", "Edge Functions", "AI/ML (Basics)"]
    },
    {
        title: "System & Infra",
        icon: Zap,
        items: ["Docker", "Vercel", "GitHub Actions", "Google Cloud", "CI/CD Pipelines"]
    }
];

// Helper to provide Coffee icon if not in lucide (it usually is though)
import { Coffee } from "lucide-react";

export function TechStack() {
    return (
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-slate-900/50">
            <div className="flex flex-col gap-4 mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-slate-100 flex items-center gap-4">
                    <span className="text-emerald-500 font-mono text-xl">02.</span>
                    Core Stack
                </h2>
                <p className="max-w-xl text-slate-400">
                    A dynamic look at the languages and technologies I leverage to build
                    high-performance industrial software.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Languages Side */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
                        Primary Languages // Registry
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {languages.map((lang, i) => (
                            <motion.div
                                key={lang.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-4"
                            >
                                <div className={`w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform ${lang.color}`}>
                                    <lang.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-medium text-sm">{lang.name}</h4>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase">{lang.level}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Categories Side */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <cat.icon className="w-4 h-4 text-emerald-500" />
                                </div>
                                <h4 className="text-sm font-bold text-slate-100 uppercase tracking-tight">{cat.title}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map(item => (
                                    <span
                                        key={item}
                                        className="px-2 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 group-hover:text-emerald-400 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
