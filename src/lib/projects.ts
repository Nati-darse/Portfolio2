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
    category: "Full-Stack" | "FinTech" | "Education" | "Event Management" | "Healthcare";
}

export const projects: Project[] = [
    {
        id: "atlas-hospital",
        title: "Atlas Hospital",
        description: "State-of-the-art medical management platform featuring secure Spring Boot backend, Angular 21 frontend, and 3D NFC card verification logic.",
        category: "Healthcare",
        techStack: ["Angular 21", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT"],
        metrics: [
            { label: "Architecture", value: "Full-Stack" },
            { label: "Security", value: "JWT+NFC" },
        ],
        links: {
            live: "https://hospital-card-management.vercel.app/#/",
        },
        slug: "atlas-hospital",
        featured: true,
    },
    {
        id: "event-easy",
        title: "Event Easy",
        description: "A comprehensive event management platform with real-time ticketing, QR-code check-ins, and data analytics. Built for high-stakes events in the regional market.",
        category: "Event Management",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
        metrics: [
            { label: "Lighthouse", value: "98/100" },
            { label: "Tickets Sold", value: "10k+" },
        ],
        links: {
            github: "https://github.com/natnael-darsema/event-easy",
            live: "https://eventeasy-f.vercel.app/",
        },
        slug: "event-easy",
        featured: true,
    },
    {
        id: "gebeya",
        title: "Gebeya",
        description: "Multi-vendor e-commerce marketplace featuring advanced filtering, vendor dashboards, and complex state management. Orchestrating a full digital trade ecosystem.",
        category: "Full-Stack",
        techStack: ["React", "Express", "MongoDB", "Node.js", "Redux"],
        metrics: [
            { label: "Vendors", value: "500+" },
            { label: "Users", value: "25k+" },
        ],
        links: {
            github: "https://github.com/natnael-darsema/gebeya",
            live: "https://gebeya-amber.vercel.app/",
        },
        slug: "gebeya",
        featured: true,
    },
    {
        id: "warka-academy",
        title: "Warka Academy",
        description: "LMS platform for specialized technical education. Impact-driven software focused on performance, accessibility, and empowering the next generation of engineers.",
        category: "Education",
        techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
        metrics: [
            { label: "Courses", value: "50+" },
            { label: "Students", value: "2k+" },
        ],
        links: {
            live: "https://warka-acadamy.vercel.app/",
        },
        slug: "warka-academy",
        featured: true,
    },
    {
        id: "mesob-help-desk",
        title: "Mesob Help Desk",
        description: "A comprehensive IT support ticket management system built for multi-tenant organizations with multi-role support and real-time features.",
        category: "Full-Stack",
        techStack: ["React 19", "Material-UI", "Node.js", "Express", "MongoDB", "Socket.IO"],
        metrics: [
            { label: "Architecture", value: "Multi-tenant" },
            { label: "Resolution", value: "Real-time" },
        ],
        links: {
            github: "https://github.com/Nati-darse/Mesob-help-desk.git",
            live: "https://mesob-help-desk.vercel.app/",
        },
        slug: "mesob-help-desk",
        featured: true,
    },
    {
        id: "alem-bank",
        title: "Alem Bank Full Gospel Church",
        description: "Digital platform for church management, community engagement, and resource sharing.",
        category: "Full-Stack",
        techStack: ["Next.js", "Supabase", "Tailwind CSS"],
        metrics: [
            { label: "Engagement", value: "40%" },
            { label: "Members", value: "1k+" },
        ],
        links: {
            live: "https://alembankfullgospelchurch.vercel.app/",
        },
        slug: "alem-bank",
        featured: false,
    },
    {
        id: "un-et-uog",
        title: "UN-ET UOG Chapter",
        description: "Official web portal for the UN-ET UOG Chapter, facilitating organizational transparency.",
        category: "Full-Stack",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        metrics: [
            { label: "Traffic", value: "5k/mo" },
            { label: "Active Users", value: "2k" },
        ],
        links: {
            live: "https://un-et-uog-chapter.vercel.app/",
        },
        slug: "un-et-uog",
        featured: false,
    },
];
