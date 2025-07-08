"use client";

import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-navy">
      <ParticleBackground />
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-slate text-lg max-w-2xl">
            A collection of my personal and professional projects. Check out what I'm currently building 
            and some of my completed work.
          </p>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;