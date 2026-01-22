import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug((await params).slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navbar />

            <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
                {/* Navigation / Header */}
                <Link
                    href="/#projects"
                    className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-12 transition-colors w-fit group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-mono uppercase tracking-widest">Back to Projects</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 prose prose-invert prose-emerald max-w-none">
                        <header className="mb-12">
                            <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 mb-6 !mt-0 uppercase tracking-tighter">
                                {project.meta.title}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-mono">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {project.meta.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4" />
                                    {project.meta.category}
                                </div>
                            </div>
                        </header>

                        <MDXRemote source={project.content} />
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 flex flex-col gap-12">
                        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 sticky top-32">
                            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-4">
                                Tech Infrastructure
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-12">
                                {project.meta.techStack.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-4">
                                Project Metrics
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {project.meta.metrics.map((metric: any) => (
                                    <div key={metric.label} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">
                                            {metric.label}
                                        </span>
                                        <span className="text-xl font-bold text-emerald-500">
                                            {metric.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-800">
                                <button className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors">
                                    Source Documents
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </main>
    );
}
