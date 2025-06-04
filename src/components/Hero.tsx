import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const skills = [
    "Full Stack Developer & UI/UX Designer",
    "Backend Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Programmer",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  // Star field effect
  useEffect(() => {
    const container = document.getElementById("stars-container");
    if (!container) return;

    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 1;
      star.className = "absolute rounded-full bg-white animate-float-star";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      star.style.animationDuration = `${Math.random() * 7 + 7}s`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      container.appendChild(star);
    }
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Floating stars background */}
      <div id="stars-container" className="absolute inset-0 z-0"></div>

      {/* Background pattern (optional) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10 z-0"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Hello, I'm <span className="text-emerald-400">Rodolfo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 h-8 flex items-center justify-center">
            <span className="animate-fade-in" key={currentSkillIndex}>
              {skills[currentSkillIndex]}
            </span>
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <a href="/CVRodolfoAparicio.pdf">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-gray-300" />
      </div>
    </section>
  );
};

export default Hero;
