"use client";

import { Github, Linkedin, Twitter, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "../ui/MagneticButton";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/Nati-darse" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/nathnael-darsema/" },
        { icon: Twitter, href: "https://x.com/nati_sha29" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 sm:px-12 backdrop-blur-sm bg-gradient-to-b from-slate-950/80 to-transparent"
        >
            <Link href="/" className="group flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <span className="font-mono text-emerald-500 font-bold">N</span>
                </div>
                <span className="font-medium text-slate-200 hidden sm:block">Natnael.dev</span>
            </Link>

            <div className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/50 backdrop-blur-md">
                {links.map((link) => (
                    <Link key={link.name} href={link.href} className="relative px-4 py-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button
                    onClick={() => {
                        window.dispatchEvent(new CustomEvent("open-command-palette"));
                    }}
                    className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                    aria-label="Open Commands"
                >
                    <Search className="w-5 h-5" />
                </button>

                <div className="hidden sm:flex items-center gap-2">
                    {socials.map((Social, i) => (
                        <a
                            key={i}
                            href={Social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                            <Social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                <div className="hidden sm:block">
                    <MagneticButton
                        onClick={() => window.open('mailto:nathnaeldarsema29@gmail.com')}
                        className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/20"
                    >
                        Book a Call
                    </MagneticButton>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-slate-950/95 border-b border-slate-800/50 backdrop-blur-xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                                {socials.map((Social, i) => (
                                    <a
                                        key={i}
                                        href={Social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        <Social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
