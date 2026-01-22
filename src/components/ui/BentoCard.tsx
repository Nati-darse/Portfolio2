"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface BentoCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    header?: ReactNode;
    className?: string;
    href?: string;
    cta?: string;
}

export function BentoCard({
    title,
    description,
    icon,
    header,
    className,
    href,
    cta = "View Project",
}: BentoCardProps) {
    const Content = () => (
        <>
            {header && <div className="flex-1 w-full overflow-hidden rounded-t-xl">{header}</div>}
            <div className="flex flex-col gap-2 p-6">
                {icon && <div className="mb-2 text-emerald-500">{icon}</div>}
                <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>

                {href && (
                    <div className="flex items-center gap-2 mt-4 text-emerald-400 text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        {cta}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                )}
            </div>
        </>
    );

    const containerClasses = cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
        className
    );

    if (href) {
        return (
            <Link href={href} className={containerClasses}>
                <Content />
            </Link>
        );
    }

    return (
        <div className={containerClasses}>
            <Content />
        </div>
    );
}
