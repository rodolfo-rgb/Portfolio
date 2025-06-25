import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BolsiVibe",
      description: "An application designed to help users manage their personal finances efficiently and effectively.",
      image: "/BolsiVibe-project.jpg",
      technologies: ["React/Typescript", "Node.js", "Tailwind", "Supabase", "Electron"],
      liveUrl: "#",
      githubUrl: "https://github.com/rodolfo-rgb/BolsiVibe-project",
      downloadUrl: "https://drive.google.com/file/d/1ddGvzPhpB8dJOhmatjzToVAGiHzOw4oC/view?usp=drive_link"
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
      title: "Atlantic Books",
      description: "Web application for managing and viewing online books",
      image: "/AtlanticBooks.PNG",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/rodolfo-rgb/AtlanticBooks"
    },
    {
      title: "Metodos de Optimizacion",
      description: "This repository brings together a collection of classic optimization methods implemented in a simple and educational way.",
      image: "/Metodos_opt.PNG",
      technologies: ["React", "Typescript", "Tailwind", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/rodolfo-rgb/Metodos_Optimizacion.git"
    },
    {
      title: "Corazones Solidarios",
      description: "website developed with the purpose of connecting people willing to help with those who need it most.",
      image: "/CorazonesSolidarios.PNG",
      technologies: ["React", "Typescript", "Tailwind", "EmailJS", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/rodolfo-rgb/Corazones-Solidarios.git"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills in web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-gray-900 border-gray-700" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 sm:px-3 py-1 bg-emerald-600 text-white text-xs sm:text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {index === 0 && project.downloadUrl ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center justify-center gap-2 border-gray-600 text-gray-200 hover:bg-gray-700 w-full sm:w-auto"
                      onClick={() => window.open(project.downloadUrl, '_blank')}
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Download</span>
                    </Button>
                  ) : null}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center justify-center gap-2 border-gray-600 text-gray-200 hover:bg-gray-700 w-full sm:w-auto"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
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
