import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Download } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BolsiVibe",
      description: "An application designed to help users manage their personal finances efficiently and effectively.",
      image: "/BolsiVibe-project.jpg",
      technologies: ["React/Typescript", "Node.js", "Tailwind", "Supabase"],
      liveUrl: "#",
      githubUrl: "https://github.com/rodolfo-rgb/BolsiVibe-project"
    },
    {
      title: "Rodolfo.Dots",
      description: "My personal Neovim configuration! This repository contains my custom setup an prefeerences for NeoVim, based on LazyVim",
      image: "/RodolfoDots.jpg",
      technologies: ["lua", "WSL", "Shell"],
      liveUrl: "#",
      githubUrl: "https://github.com/rodolfo-rgb/Rodolfo.Dots"
    },
    {
      title: "Future Project",
      description: "Here I will upload a future project",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: [],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Future Project",
      description: "Here I will upload a future project",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: [],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-gray-900 border-gray-700" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {index === 0 ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 border-gray-600 text-gray-200 hover:bg-gray-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  ) : index !== 1 ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 border-gray-600 text-gray-200 hover:bg-gray-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  ) : null}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-gray-600 text-gray-200 hover:bg-gray-700"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;