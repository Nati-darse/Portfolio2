import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
