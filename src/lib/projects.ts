import { Calendar, Code2, Globe, Github } from "lucide-react";
import { ReactNode } from "react";

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    links: {
        github?: string;
        live?: string;
    };
    slug: string;
    featured?: boolean;
    category: "Full-Stack" | "FinTech" | "Education" | "Event Management";
}

export const projects: Project[] = [
    {
        id: "event-easy",
        title: "Event Easy",
        description: "A comprehensive event management platform with real-time ticketing and analytics.",
        category: "Event Management",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
        metrics: [
            { label: "Lighthouse", value: "98/100" },
            { label: "Tickets Sold", value: "10k+" },
        ],
        links: {
            github: "https://github.com/natnael-darsema/event-easy",
            live: "https://event-easy.vercel.app",
        },
        slug: "event-easy",
        featured: true,
    },
    {
        id: "gebeya",
        title: "Gebeya",
        description: "Multi-vendor e-commerce marketplace with advanced filtering and vendor dashboards.",
        category: "Full-Stack",
        techStack: ["React", "Express", "MongoDB", "Node.js", "Redux"],
        metrics: [
            { label: "Vendors", value: "500+" },
            { label: "Users", value: "25k+" },
        ],
        links: {
            github: "https://github.com/natnael-darsema/gebeya",
        },
        slug: "gebeya",
        featured: true,
    },
    {
        id: "warka-academy",
        title: "Warka Academy",
        description: "LMS platform for specialized technical education in East Africa.",
        category: "Education",
        techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
        metrics: [
            { label: "Courses", value: "50+" },
            { label: "Students", value: "2k+" },
        ],
        links: {
            live: "https://warka.academy",
        },
        slug: "warka-academy",
        featured: true,
    },
];
