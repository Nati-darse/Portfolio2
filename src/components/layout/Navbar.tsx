"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Search } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "../ui/MagneticButton";

export function Navbar() {
    const links = [
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/natnael-darsema" },
        { icon: Linkedin, href: "https://linkedin.com/in/natnael-darsema" },
        { icon: Twitter, href: "https://twitter.com/natnael_dev" }, // Placeholder
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

            <div className="flex items-center gap-4">
                <button
                    onClick={() => {
                        window.dispatchEvent(new CustomEvent("open-command-palette"));
                    }}
                    className="flex md:hidden p-2 text-slate-400 hover:text-emerald-400 transition-colors"
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
                <MagneticButton
                    onClick={() => window.open('mailto:natnael.dev@example.com')}
                    className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/20"
                >
                    Book a Call
                </MagneticButton>
            </div>
        </motion.nav>
    );
}
