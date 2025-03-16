"use client";

import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import ProjectModal, { Project } from "./ProjectModal";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // Store the current value in a variable
    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored variable in the cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const projects: Project[] = [
    {
      id: "castura",
      title: "Castura",
      description: "Screen recording tool with advanced editing features",
      longDescription:
        "Castura is a comprehensive screen recording solution that allows users to capture and share their screen recordings along with voice over and camera pip. Built Next.js, it provides a seamless experience across OSs.",
      image:
        "https://images.unsplash.com/photo-1534939118136-e6f032db3c33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/itsviv0/castura",
      problem:
        "Existing screen recording tools are paid to offer these functionalities and work on subscription models.",
      solution:
        "Developed a complete solution with intuitive UI and built-in editing features, allowing users to record their screen with voiceover without any additional application.",
    },
    {
      id: "cropwise",
      title: "CropWise",
      description: "AI-powered crop yield prediction application",
      longDescription:
        "CropWise uses machine learning algorithms to analyze soil data, weather patterns, and historical crop performance to predict best crop for cultivation to farmers.",
      image:
        "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2370&auto=format&fit=crop",
      tech: ["Python", "Scikit-Learn", "tkinter"],
      github: "https://github.com/itsviv0/cropwise",
      problem:
        "Traditional farming relies heavily on experience and historical data, without leveraging modern predictive technologies.",
      solution:
        "Created an AI model that processes multiple data points to suggest best crop for improving crop output.",
    },
    {
      id: "repomarker",
      title: "RepoMarker",
      description:
        "Feature rich web-based markdown editor built using NextJS for all those nano and vim users.",
      longDescription:
        "RepoMarker is an AD-FREE Markdown editor designed specifically for creating easy editing documentation in GitHub repositories, with features like live preview and last save.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2370&auto=format&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/itsviv0/repomarker",
      problem:
        "GitHub's built-in markdown editor lacks live preview and last save features.",
      solution:
        "Built a feature-rich editor that streamlines the documentation process for repository management. Simple to use, without ADs, signups.",
    },
    {
      id: "textdiff",
      title: "TextDiff",
      description: "Text comparison tool with visualization features.",
      longDescription:
        "TextDiff allows users to compare two text documents and visualize the differences with advanced highlighting and side-by-side comparisons.",
      image:
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2366&auto=format&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/itsviv0/textdiff",
      problem:
        "Existing text comparison tools are filled with ADs and provide limited options in the free version.",
      solution:
        "Developed an intuitive visualization system that supports file upload and download the results.",
    },
    {
      id: "pomodoro",
      title: "MyPomodoro",
      description: "Productivity tracker with Pomodoro technique integration",
      longDescription:
        "MyPomodoro helps users manage their time effectively using the Pomodoro technique, with additional features for task management, productivity analytics, and customizable work/break intervals.",
      image:
        "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      tech: ["Kotlin", "SQLite"],
      github: "https://github.com/itsviv0/My_Pomodoro",
      problem:
        "Many productivity apps lack personalization and data-driven insights on work patterns.",
      solution:
        "Created a comprehensive productivity system that adapts to individual work styles and provides actionable insights based on usage patterns.",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card cursor-pointer transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-navy rounded-full text-xs text-teal/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-navy rounded-full text-xs text-teal/80">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={closeModal}
        isOpen={modalOpen}
      />
    </section>
  );
};

export default Projects;
