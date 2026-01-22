"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { BackgroundGrid } from "../ui/BackgroundGrid";
import { FloatingTerminal } from "../ui/FloatingTerminal";

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 pt-32 overflow-hidden bg-slate-950">
            <BackgroundGrid />
            <FloatingTerminal />

            <div className="max-w-6xl w-full mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-900/50 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-mono text-emerald-400">Available for New Projects</span>
                    </div>

                    {/* Kinetic Typography */}
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-slate-100 mix-blend-difference">
                        <motion.span style={{ y: y1 }} className="block text-slate-500">
                            BUILDING
                        </motion.span>
                        <motion.span style={{ y: y2 }} className="block">
                            DIGITAL
                        </motion.span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            INDUSTRIAL
                        </span>
                    </h1>

                    <p className="max-w-xl text-lg sm:text-xl text-slate-400 mt-8 leading-relaxed">
                        I'm <span className="text-emerald-400 font-medium">Natnael Darsema</span>. A Full-Stack Developer engineering performance-first web applications with Next.js 15, specialized in scalable architecture and tactile user interfaces.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <MagneticButton
                            className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold px-8 py-4 text-base shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                            onClick={() => {
                                const el = document.getElementById('projects');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Explore Projects
                        </MagneticButton>
                        <MagneticButton
                            className="group bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/50 px-8 py-4 text-base flex items-center gap-2"
                            onClick={() => {
                                // Trigger resume download
                                const link = document.createElement("a");
                                link.href = "/resume-placeholder.pdf";
                                link.download = "Natnael_Darsema_Resume.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <FileText className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                            Download CV
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
}
