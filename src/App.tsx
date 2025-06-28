import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Mail, MapPin, Phone, Calendar, GraduationCap, Briefcase, User, ChevronRight, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Python', category: 'Programming', icon: Code, color: 'bg-blue-500' },
    { name: 'JavaScript', category: 'Programming', icon: Code, color: 'bg-yellow-500' },
    { name: 'React', category: 'Frontend', icon: Code, color: 'bg-cyan-500' },
    { name: 'C++', category: 'Programming', icon: Code, color: 'bg-red-500' },
    { name: 'Data Science', category: 'Analytics', icon: Database, color: 'bg-purple-500' },
    { name: 'Machine Learning', category: 'AI/ML', icon: Database, color: 'bg-green-500' },
    { name: 'AWS', category: 'Cloud', icon: Globe, color: 'bg-orange-500' },
    { name: 'GoDaddy', category: 'Hosting', icon: Globe, color: 'bg-emerald-500' },
    { name: 'Hostinger', category: 'Hosting', icon: Globe, color: 'bg-indigo-500' }
  ];

  const experiences = [
    {
      title: "Full-Stack Developer | AI Engineer",
      company: "IDatalytics",
      period: "Sept 2024 - May 2025",
      achievements: [
        "Spearheaded development of 10+ static websites with 99.9% uptime",
        "Built 5+ AI-powered applications reducing manual processing time by 40%",
        "Contributed to 20% increase in customer retention for SaaS platform",
        "Reduced onboarding time for new hires by 30%"
      ],
      technologies: ["Python", "AWS", "TensorFlow", "Flask", "JavaScript", "Git"]
    },
    {
      title: "Intern (Data Science with Gen AI)",
      company: "Professional Program",
      period: "Jun 2024 - Sept 2024",
      achievements: [
        "Developed ML model with 92% accuracy",
        "Cleaned and preprocessed 10,000+ records",
        "Contributed to 15% increase in operational efficiency"
      ],
      technologies: ["Python", "TensorFlow", "Data Analysis", "Gen AI"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">HH</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section - Bento Style */}
        <section id="about" className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-auto md:h-96">
            
            {/* Main Hero Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Hafis Ahammed H
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Full-Stack Developer & AI Engineer
                </p>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Passionate about creating innovative solutions at the intersection of web development and artificial intelligence.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Palakkad, Kerala</p>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-purple-100">2+ Years</p>
                <p className="text-purple-200 text-sm">Active Development</p>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section id="skills" className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, data science, and cloud technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 ${
                  index % 7 === 0 ? 'sm:col-span-2' : ''
                } ${index % 9 === 0 ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-500 text-sm">{skill.category}</p>
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${skill.color} rounded-full group-hover:w-full transition-all duration-1000`} style={{ width: '85%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building impactful solutions and driving innovation in every role
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{exp.period}</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section - Bento Style */}
        <section id="education" className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic foundation in computer science and specialized training in AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Bachelor's Degree */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications</h3>
                <p className="text-indigo-100 mb-4">Jai Bharat College of Arts and Science</p>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-indigo-200">Sept 2022 - March 2025</span>
                </div>
                <p className="text-indigo-100">
                  Comprehensive curriculum covering software development, algorithms, data structures, and system design.
                </p>
              </div>
            </div>

            {/* Professional Program */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Data Science with AI</h3>
              <p className="text-gray-600 mb-4">Rounded Professional Program</p>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Jun 2024 - Sept 2024</span>
              </div>
              <p className="text-gray-700">
                Intensive program focusing on machine learning, deep learning, generative AI, and practical data science applications.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Section - Bento Style */}
        <section id="contact" className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-all">hafisahamed@gmail.com</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 7736595862</p>
            </div>

            {/* GitHub Card */}
            <a href="https://github.com/Hafiznapster" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transform hover:-translate-y-1 block">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300 text-sm">View Projects</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/hafis-ahammed/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transform hover:-translate-y-1 block">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-blue-200 text-sm">Connect</p>
              </div>
            </a>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Hafis Ahammed H. Crafted with passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
