import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Download } from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-xl text-gray-900">Hammad Wakeel</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              HW
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hammad Wakeel
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Engineer & Full Stack Developer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Passionate about creating innovative solutions and building scalable applications that make a difference.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hammad-wakeel" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated software engineer with a passion for creating innovative solutions and building scalable applications. 
              With expertise in full-stack development, I enjoy tackling complex challenges and turning ideas into reality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                With years of experience in software development, I've worked on diverse projects ranging from web applications 
                to mobile solutions. I'm constantly learning new technologies and methodologies to stay at the forefront of innovation.
              </p>
              <p className="text-gray-600 mb-6">
                I believe in writing clean, maintainable code and creating user experiences that are both functional and delightful.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location TBD
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Available for opportunities
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-600">
                <li>🎓 Computer Science Background</li>
                <li>💻 Full Stack Development</li>
                <li>🚀 Startup Experience</li>
                <li>🌟 Open Source Contributor</li>
                <li>📚 Continuous Learner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600">Technologies I work with to bring ideas to life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Building beautiful user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>Scalable server-side solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Others</CardTitle>
                <CardDescription>Development tools and practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Agile</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600">My professional journey and key achievements</p>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <CardDescription>Company Name • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">2023 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Leading development of scalable web applications and contributing to architectural decisions.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Developed and maintained multiple React-based applications</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality products</li>
                  <li>Implemented best practices for code quality and performance optimization</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Junior Developer</CardTitle>
                    <CardDescription>Previous Company • Full-time</CardDescription>
                  </div>
                  <Badge variant="outline">2022 - 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Gained valuable experience in full-stack development and agile methodologies.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Built responsive web applications using modern frameworks</li>
                  <li>Participated in code reviews and team collaboration</li>
                  <li>Learned industry best practices and development workflows</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work and side projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Project One
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>Full-stack web application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A comprehensive web application built with React and Node.js, featuring user authentication and real-time updates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Project Two
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>Mobile-first application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A responsive mobile application with modern UI/UX design and seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Firebase</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Project Three
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>Open source contribution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  An open-source tool that helps developers streamline their workflow and improve productivity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">CLI</Badge>
                  <Badge variant="outline">Open Source</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <a href="https://www.linkedin.com/in/hammad-wakeel" className="text-gray-600 hover:text-blue-600 transition-colors">
                    linkedin.com/in/hammad-wakeel
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">github.com/your-username</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-600 mb-4">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                  <Textarea placeholder="Tell me about your project or just say hello!" rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Hammad Wakeel. Built with React and Tailwind CSS.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/hammad-wakeel" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;