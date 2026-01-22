"use client";

import * as React from "react";

import { motion } from "framer-motion";
import { Command } from "lucide-react";

export function Footer() {
    const [mounted, setMounted] = React.useState(false);
    const currentYear = new Date().getFullYear();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="py-20 px-6 sm:px-12 border-t border-slate-900 bg-slate-950/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <span className="font-mono text-emerald-500 text-xs font-bold">N</span>
                        </div>
                        <span className="font-medium text-slate-200">Natnael Darsema</span>
                    </div>
                    <p className="text-sm text-slate-500 max-w-sm">
                        Engineering high-performance web products with an industrial focus on speed and tactile detail.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect</span>
                        <ul className="flex flex-col gap-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Linkedin</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">System</span>
                        <div className="flex items-center gap-2 text-sm text-emerald-500/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>All Systems Operational</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Command className="w-3 h-3" />
                            <span>Press Cmd+N for Command Palette</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between gap-4">
                <p className="text-xs text-slate-600">
                    © {currentYear} Natnael Darsema. Under MIT License.
                </p>
                <p className="text-xs text-slate-600 font-mono">
                    Last Build: {mounted ? new Date().toLocaleDateString() : '---'}
                </p>
            </div>
        </footer>
    );
}
