import { NextResponse } from "next/server";
import { projects } from "@/lib/projects";

export async function GET() {
    const techStack = Array.from(new Set(projects.flatMap(p => p.techStack)));

    const stats = {
        developer: "Natnael Darsema",
        status: "Active / Available",
        totalProjects: projects.length,
        primaryStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        allTechnologies: techStack,
        experienceBreakdown: {
            frontend: ["React", "Next.js", "Framer Motion", "Tailwind"],
            backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
            design: ["Industrial Tech", "Bento Grid", "Glassmorphism"]
        },
        uptime: "99.99%",
        lastUpdated: new Date().toISOString()
    };

    return NextResponse.json(stats, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate"
        }
    });
}
