import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <span className="text-emerald-400">Rodolfo</span> Aparicio
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-colors hover:text-emerald-400 ${
                isScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors hover:text-emerald-400 ${
                isScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`transition-colors hover:text-emerald-400 ${
                isScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors hover:text-emerald-400 ${
                isScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
