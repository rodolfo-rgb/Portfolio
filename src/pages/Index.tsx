import Hero from "@/components/Hero";


const Index = () => {
  return (
    <div className="min-h-screen bg-black">
    
      <Hero />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 John Doe. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;