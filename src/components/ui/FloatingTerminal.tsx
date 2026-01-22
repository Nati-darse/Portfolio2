"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const logs = [
    "Initializing neural engines...",
    "Loading React Server Components...",
    "Compiling industrial shaders...",
    "Optimizing payload delivery...",
    "Hydrating tactical interfaces...",
    "Ready for deployment.",
    "Bypassing latency bottlenecks...",
    "Analyzing user intent...",
    "Generating static assets...",
    "Mapping industrial data nodes...",
];

export function FloatingTerminal() {
    const [activeLogs, setActiveLogs] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLogs(prev => {
                const next = [...prev, logs[Math.floor(Math.random() * logs.length)]];
                return next.slice(-6); // Keep last 6 logs
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex absolute bottom-32 right-12 w-80 h-48 bg-slate-900/40 backdrop-blur-md rounded-lg border border-slate-800 p-4 flex-col gap-2 font-mono text-[10px] shadow-2xl z-20"
        >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-1">
                <div className="flex items-center gap-2 text-emerald-500/70">
                    <Terminal className="w-3 h-3" />
                    <span className="uppercase tracking-widest text-[8px] font-bold">System Feed</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col gap-1 justify-end">
                <AnimatePresence mode="popLayout">
                    {activeLogs.map((log, i) => (
                        <motion.div
                            key={`${log}-${i}`}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-slate-400 flex items-center gap-2"
                        >
                            <span className="text-emerald-500/50">›</span>
                            {log}
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div className="flex items-center gap-2 text-emerald-400">
                    <span className="animate-pulse">_</span>
                    <span>Waiting for input...</span>
                </div>
            </div>
        </motion.div>
    );
}
