"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, FileText, Briefcase, Mail, Laptop, User, X, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery("(max-width: 640px)");
    const [search, setSearch] = React.useState("");
    const [status, setStatus] = React.useState<'idle' | 'copied'>('idle');
    const router = useRouter();

    // Toggle with Cmd+N
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && e.altKey) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const handleTrigger = () => setOpen(true);

        document.addEventListener("keydown", down);
        window.addEventListener("open-command-palette", handleTrigger);
        return () => {
            document.removeEventListener("keydown", down);
            window.removeEventListener("open-command-palette", handleTrigger);
        };
    }, []);

    // Haptic feedback helper
    const triggerHaptic = () => {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(10);
        }
    };

    const handleOpen = () => {
        triggerHaptic();
        setOpen(true);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("nathnaeldarsema29@gmail.com");
        setStatus('copied');
        triggerHaptic();
        setTimeout(() => setStatus('idle'), 2000);
    };

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // Update this to actual resume path later
        link.download = "Natnael_Darsema_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const MobileQuickChips = () => (
        <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar mask-gradient">
            {[
                { icon: FileText, label: "Resume", action: handleDownloadResume },
                { icon: Briefcase, label: "Work", action: () => router.push("/projects") },
                { icon: Mail, label: "Contact", action: () => router.push("/contact") },
            ].map((chip, i) => (
                <button
                    key={i}
                    onClick={() => {
                        triggerHaptic();
                        chip.action();
                        setOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full whitespace-nowrap text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                >
                    <chip.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{chip.label}</span>
                </button>
            ))}
        </div>
    );

    return (
        <>
            {/* Mobile FAB */}
            {isMobile && !open && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpen}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 text-slate-950 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center z-50 ring-2 ring-emerald-400/20"
                >
                    <Search className="w-6 h-6" />
                </motion.button>
            )}

            {/* Main Command Dialog */}
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />

                        {/* Dialog Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            drag={isMobile ? "y" : false}
                            dragConstraints={{ top: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_, info) => {
                                if (info.offset.y > 100) {
                                    triggerHaptic();
                                    setOpen(false);
                                }
                            }}
                            className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[80vh]"
                        >
                            <Command className="flex flex-col h-full w-full bg-transparent overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center border-b border-slate-800 p-3">
                                    <Search className="w-5 h-5 text-slate-400 ml-2" />
                                    <Command.Input
                                        autoFocus
                                        placeholder={isMobile ? "Tap chip or type..." : "Type a command or search..."}
                                        value={search}
                                        onValueChange={setSearch}
                                        className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-500 px-3 py-1 text-base sm:text-lg"
                                    />
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="p-1 rounded bg-slate-800 text-xs text-slate-400 px-2 font-mono"
                                    >
                                        ALT+K
                                    </button>
                                </div>

                                {/* Mobile Chips - Only visible on mobile */}
                                {isMobile && <MobileQuickChips />}

                                {/* List */}
                                <Command.List className="overflow-y-auto p-2 scroll-py-2 max-h-[400px]">
                                    <Command.Empty className="p-4 text-center text-slate-500 text-sm">
                                        No results found.
                                    </Command.Empty>

                                    <Command.Group heading="Navigation" className="text-slate-500 text-xs font-medium px-2 py-1.5 mb-2">
                                        <CommandItem onSelect={() => { setOpen(false); router.push("/"); }}>
                                            <Laptop className="w-4 h-4 mr-2" />
                                            Home
                                        </CommandItem>
                                        <CommandItem onSelect={() => { setOpen(false); router.push("/projects"); }}>
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            Projects
                                        </CommandItem>
                                        <CommandItem onSelect={() => { setOpen(false); router.push("/about"); }}>
                                            <User className="w-4 h-4 mr-2" />
                                            About Me
                                        </CommandItem>
                                    </Command.Group>

                                    <Command.Group heading="Connect" className="text-slate-500 text-xs font-medium px-2 py-1.5 mb-2">
                                        <CommandItem onSelect={() => { setOpen(false); window.open("https://github.com/Nati-darse"); }}>
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub Profile
                                        </CommandItem>
                                        <CommandItem onSelect={() => { setOpen(false); window.open("https://www.linkedin.com/in/nathnael-darsema/"); }}>
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            LinkedIn Profile
                                        </CommandItem>
                                        <CommandItem onSelect={() => { setOpen(false); window.open("https://x.com/nati_sha29"); }}>
                                            <Twitter className="w-4 h-4 mr-2" />
                                            X (Twitter)
                                        </CommandItem>
                                        <CommandItem onSelect={() => { setOpen(false); window.location.href = "mailto:nathnaeldarsema29@gmail.com"; }}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            Send Email
                                        </CommandItem>
                                        <CommandItem onSelect={handleCopyEmail}>
                                            {status === 'copied' ? <Check className="w-4 h-4 mr-2 text-emerald-500" /> : <Copy className="w-4 h-4 mr-2" />}
                                            {status === 'copied' ? "Copied!" : "Copy Email Address"}
                                        </CommandItem>
                                    </Command.Group>
                                    <Command.Group heading="Utility" className="text-slate-500 text-xs font-medium px-2 py-1.5 mb-2">
                                        <CommandItem onSelect={() => { setOpen(false); handleDownloadResume(); }}>
                                            <FileText className="w-4 h-4 mr-2" />
                                            Download Resume
                                        </CommandItem>
                                    </Command.Group>
                                </Command.List>
                            </Command>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect?: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-4 py-3 rounded-lg text-slate-300 text-sm cursor-pointer hover:bg-slate-800 hover:text-emerald-400 transition-colors aria-selected:bg-slate-800 aria-selected:text-emerald-400"
        >
            {children}
        </Command.Item>
    );
}
