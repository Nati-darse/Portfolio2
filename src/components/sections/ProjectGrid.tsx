"use client";

import { motion } from "framer-motion";
import { BentoCard } from "../ui/BentoCard";
import { projects } from "@/lib/projects";
import { Cpu, Globe, Rocket } from "lucide-react";

export function ProjectGrid() {
    const featuredProjects = projects.filter((p) => p.featured);

    const getIcon = (category: string) => {
        switch (category) {
            case "Event Management":
                return <Rocket className="w-5 h-5 text-emerald-500" />;
            case "Full-Stack":
                return <Cpu className="w-5 h-5 text-emerald-500" />;
            case "Education":
                return <Globe className="w-5 h-5 text-emerald-500" />;
            default:
                return <Cpu className="w-5 h-5 text-emerald-500" />;
        }
    };

    return (
        <section id="projects" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-slate-100 flex items-center gap-4">
                    <span className="text-emerald-500 font-mono text-xl">01.</span>
                    Selected Infrastructure
                </h2>
                <p className="max-w-xl text-slate-400">
                    A collection of high-end engineering products focused on scale,
                    tactile performance, and solving complex architectural challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {featuredProjects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
                    >
                        <BentoCard
                            title={project.title}
                            description={project.description}
                            icon={getIcon(project.category)}
                            href={`/projects/${project.slug}`}
                            className="h-full"
                            header={
                                <div className="w-full h-full bg-slate-800/50 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                                    {/* Pseudo-code display background for industrial aesthetic */}
                                    <div className="font-mono text-[10px] text-emerald-500/20 leading-none select-none opacity-50 group-hover:scale-105 transition-transform duration-700">
                                        {`
                      class ${project.title.replace(/\s+/g, '')} {
                        constructor() {
                          this.status = "production";
                          this.stack = [${project.techStack.map(s => `"${s}"`).join(", ")}];
                        }
                        render() {
                          return this.metrics;
                        }
                      }
                    `.repeat(10)}
                                    </div>

                                    {/* Metrics Badge */}
                                    <div className="absolute bottom-4 left-4 flex gap-2">
                                        {project.metrics.map((metric, mi) => (
                                            <div key={mi} className="px-2 py-1 rounded bg-slate-950/80 border border-slate-800 text-[10px] text-slate-400">
                                                <span className="text-emerald-500 mr-1">{metric.label}:</span>
                                                {metric.value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
