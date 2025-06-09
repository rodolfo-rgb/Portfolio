import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Angular.js", "Node.js", "Python",
    "Java", "SQL", "Google Cloud", "PHP", "C", "C#", "Git",
    "Tailwind CSS", "HTML", "CSS", "Electron", "Supabase", "Neovim", "WSL", "Shell Scripting"
  ];

  const experiences = [
    {
      company: "Google Cloud",
      position: "Google IT Support Professional Certificate",
      period: "2025-present",
      description: "An introduction to the core services and architecture of Google Cloud Platform (GCP)."
    },
    {
      company: "Udemy",
      position: "Python sin Fronteras",
      period: "2023",
      description: "Python course from scratch, data structures, error handling, and practical projects. Instructor: Nicolás Schurmann."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm passionate about software development, the CI/CD process, 
            and algorithmic problem-solving. I have experience in several programming languages, 
            including Java, JavaScript, C, C#, and SQL. My passion for learning drives me to constantly explore and master new technologies and tools. 
            If something sparks my interest, I'm always willing to dig deeper and learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="animate-slide-in-left">
            <Card className="h-full bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Section */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="h-full bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4 pb-4">
                      <h3 className="font-semibold text-lg text-white">{exp.position}</h3>
                      <p className="text-emerald-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;