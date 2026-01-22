import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { BentoCard } from "@/components/ui/BentoCard";
import { Cpu, Globe, Rocket, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
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
        <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navbar />

            <section className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-12 transition-colors w-fit group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-mono uppercase tracking-widest">Back to Home</span>
                </Link>

                <div className="flex flex-col gap-4 mb-16">
                    <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 uppercase tracking-tighter">
                        Full <span className="text-emerald-500">Archive</span>
                    </h1>
                    <p className="max-w-xl text-slate-400">
                        A complete log of engineering projects, experiments, and industrial applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <BentoCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            icon={getIcon(project.category)}
                            href={`/projects/${project.slug}`}
                            className="h-[400px]"
                            header={
                                <div className="w-full h-full bg-slate-800/50 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                                    <div className="font-mono text-[10px] text-emerald-500/10 leading-none select-none opacity-50">
                                        {`
                      class ${project.title.replace(/\s+/g, '')} {
                        stack = [${project.techStack.map(s => `"${s}"`).join(", ")}];
                      }
                    `.repeat(5)}
                                    </div>
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
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
