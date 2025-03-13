
import { X, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  problem?: string;
  solution?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

const ProjectModal = ({ project, onClose, isOpen }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-navy-light border border-teal/20 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-500 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-navy-light">
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="border-teal/50 text-teal hover:bg-teal/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="h-64 overflow-hidden rounded-md mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-navy rounded-full text-xs text-teal border border-teal/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate hover:text-teal transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate hover:text-teal transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            )}
          </div>

          <div className="space-y-6 text-slate">
            {project.problem && (
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Problem</h4>
                <p>{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Solution</h4>
                <p>{project.solution}</p>
              </div>
            )}

            <div>
              <h4 className="text-xl font-bold text-white mb-2">Overview</h4>
              <p>{project.longDescription || project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
