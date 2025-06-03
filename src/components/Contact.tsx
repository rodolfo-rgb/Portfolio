import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">rodo.aparicio.lopez@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+52 (56) 18791084</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Mexico City</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => window.open('https://www.linkedin.com/in/rodolfo-aparicio-l%C3%B3pez-25814b315/', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => window.open('https://github.com/rodolfo-rgb', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;