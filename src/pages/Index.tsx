import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Rodolfo Aparicio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
