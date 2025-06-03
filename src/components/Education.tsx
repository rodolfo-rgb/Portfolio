import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, University } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "ESCOM (Higher School of Computing)",
      degree: "Computer Systems Engineering",
      period: "Currently",
      status: "In Progress",
      type: "University",
      icon: University,
      description: "Studying computer systems engineering with a focus on software development"
    },
    {
      institution: "CECyT 8 'Narciso Bassols'",
      degree: "Programming Technician",
      period: "Completed",
      status: "Graduated",
      type: "Vocational",
      icon: School,
      description: "Technical training in programming and software development fundamentals."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Academic Path</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My educational background in technology and programming, 
            from vocational education to university level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card 
                key={index} 
                className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in bg-gray-900 border-gray-700"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-emerald-600/20">
                      <IconComponent className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    {edu.institution}
                  </CardTitle>
                  <div className="space-y-2">
                    <p className="text-emerald-400 font-semibold">{edu.degree}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-emerald-600 text-white'
                      }`}>
                        {edu.status}
                      </span>
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-center leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
