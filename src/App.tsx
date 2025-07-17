import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Code, Palette, Zap, Mail, Github, Linkedin, ExternalLink, Menu, X, Cpu, Database, Globe, Rocket, Star, ArrowRight, Phone, 	ShieldIcon
 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Animated 3D Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>
        
        {/* Floating 3D Cubes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-3d opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 transform rotate-45 animate-spin-3d border border-cyan-400/20"></div>
            </div>
          ))}
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-move"></div>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Interactive Light Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 shadow-2xl shadow-cyan-500/20 animate-nav-float">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            YAJ DevFolio
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-cyan-400 transition-all duration-300 relative group transform hover:scale-110"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:rotate-180"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 animate-slide-down">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 capitalize hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>


      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center perspective-1000">
        <div className="relative z-10 text-center px-4">
          <div 
            className="transform transition-all duration-1000 animate-hero-entrance"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px) rotateX(${scrollY * 0.02}deg)`,
            }}
          >
            {/* 3D Floating Name */}
            <div className="mb-8 relative">
              <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent animate-text-glow transform-gpu">
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0s' }}>J</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.1s' }}>e</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.2s' }}>f</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.3s' }}>f</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.3s' }}>r</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.3s' }}>e</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.3s' }}>y</span>
                <span className="inline-block animate-bounce-3d mx-4" style={{ animationDelay: '0.4s' }}></span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.5s' }}>Y</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.6s' }}>A</span>
                <span className="inline-block animate-bounce-3d" style={{ animationDelay: '0.7s' }}>J</span>
              </h1>
              
              {/* 3D Subtitle */}
              <div className="text-2xl md:text-4xl text-cyan-300 mb-8 animate-float transform-gpu">
               Full Stack Developer
              </div>
            </div>
            
            {/* 3D Floating Icons */}
            <div className="flex justify-center space-x-12 mb-12">
              <div className="group relative">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-125 animate-float-icon shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80">
                  <Code size={40} className="group-hover:animate-spin-slow" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              <div className="group relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-125 animate-float-icon shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80" style={{ animationDelay: '0.5s' }}>
                  <Palette size={40} className="group-hover:animate-bounce" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <div className="group relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-125 animate-float-icon shadow-2xl shadow-green-500/50 hover:shadow-green-500/80" style={{ animationDelay: '1s' }}>
                  <Zap size={40} className="group-hover:animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* 3D CTA Button */}
            <button
              onClick={() => scrollToSection('about')}
              className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-10 py-4 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 animate-button-glow"
            >
              <span className="relative z-10 flex items-center">
                Découvrir Mon Univers
                <ChevronDown className="ml-3 group-hover:translate-y-1 group-hover:animate-bounce transition-all duration-300" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* 3D Scroll Indicator */}
        {/*<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>*/}
      </section>

      {/* About Section with 3D Cards */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-title-entrance">
              À Propos de Moi
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full animate-line-grow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 3D Avatar */}
            <div className="relative flex justify-center">
              <div className="relative group">
                <div className="w-96 h-96 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full p-2 animate-spin-slow-reverse shadow-2xl shadow-cyan-500/30">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-8xl font-black animate-avatar-glow">
                      YAJ
                    </div>
                    
                    {/* Floating Elements around Avatar */}
                    <div className="absolute top-10 right-10 w-8 h-8 bg-cyan-400 rounded-full animate-orbit"></div>
                    <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-400 rounded-full animate-orbit-reverse"></div>
                    <div className="absolute top-1/2 left-5 w-4 h-4 bg-pink-400 rounded-full animate-float-small"></div>
                    <div className="absolute top-1/2 right-5 w-5 h-5 bg-green-400 rounded-full animate-float-small" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* 3D Rings */}
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ring-1"></div>
                <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-ring-2"></div>
                <div className="absolute inset-8 border-2 border-pink-400/30 rounded-full animate-ring-3"></div>
              </div>
            </div>

            {/* Content with 3D Effects */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed animate-text-slide-in">
                  Je suis un développeur full-stack passionné
                  dans la création de solutions numériques innovantes et immersives.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed animate-text-slide-in" style={{ animationDelay: '0.2s' }}>
                  Mon expertise couvre le développement frontend avec React, ViteJS,
                  le backend avec PHP et Python, ainsi que les technologies cloud.
                </p>
              </div>
              
              {/* 3D Skill Tags */}
              <div className="flex flex-wrap gap-4 pt-8">
                {[
                  { text: 'Frontend crafter', color: 'cyan', icon: Code },
                  { text: 'Développeur Backend', color: 'purple', icon: Database },
                  { text: 'Architecte Cloud', color: 'cyan', icon: Globe },
                  { text: 'Innovation Tech', color: 'purple', icon: Rocket }
                ].map((tag, index) => (
                  <div 
                    key={tag.text}
                    className={`group relative bg-${tag.color}-500/20 border border-${tag.color}-500/50 px-6 py-3 rounded-full text-${tag.color}-400 hover:bg-${tag.color}-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-tag-entrance shadow-lg hover:shadow-${tag.color}-500/50`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-2">
                      <tag.icon size={16} className="group-hover:animate-spin" />
                      <span className="font-semibold">{tag.text}</span>
                    </div>
                    <div className={`absolute inset-0 bg-${tag.color}-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with 3D Cards */}
      <section id="skills" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-title-entrance">
              Compétences & Technologies
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full animate-line-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: 'Frontend', 
                skills: ['React', 'ViteJS', 'TypeScript', 'Tailwind CSS'],
                color: 'cyan',
                icon: Code,
                gradient: 'from-cyan-500 to-blue-500'
              },
              { 
                category: 'Backend', 
                skills: ['Flutter', 'Python', 'PostgreSQL', 'MongoDB', 'MySQL'],
                color: 'purple',
                icon: Database,
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                category: 'DevOps', 
                skills: ['AWS', 'Docker',],
                color: 'green',
                icon: Cpu,
                gradient: 'from-green-500 to-teal-500'
              }
            ].map((skillSet, index) => (
              <div 
                key={skillSet.category}
                className="group relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1 animate-card-entrance shadow-2xl hover:shadow-cyan-500/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* 3D Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skillSet.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 blur-xl`}></div>
                
                {/* Floating Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skillSet.gradient} rounded-2xl flex items-center justify-center group-hover:animate-bounce-3d shadow-lg group-hover:shadow-${skillSet.color}-500/50 transition-all duration-500`}>
                    <skillSet.icon size={32} className="group-hover:animate-spin-slow" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className={`text-3xl font-bold mb-6 text-${skillSet.color}-400 group-hover:text-${skillSet.color}-300 transition-colors duration-500`}>
                    {skillSet.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill} 
                        className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-500"
                        style={{ transitionDelay: `${skillIndex * 0.1}s` }}
                      >
                        <div className={`w-4 h-4 bg-${skillSet.color}-500 rounded-full animate-pulse group-hover:animate-bounce shadow-lg shadow-${skillSet.color}-500/50`}></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-500 text-lg font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3D Corner Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with 3D Gallery */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-title-entrance">
              Projets Innovants
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-line-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                title: 'WellnessWear',
                description: 'Solution e-commerce complète avec gestion d\'inventaire en temps réel et interface 3D immersive',
                tech: ['Flutter', 'C++', 'PostgreSQL',],
                gradient: 'from-cyan-500 to-blue-500',
                icon: ShieldIcon
              },
              { 
                title: 'App de Gestion des autorisations ',
                description: 'Application permettant d\'assurer le controle d\'autorisations entre les applications des appareils mobiles ',
                tech: ['Flutter', 'Kotlin', ],
                gradient: 'from-purple-500 to-pink-500',
                icon: Cpu
              },
              { 
                title: 'Platform de gestion d\'hopital ',
                description: 'Tableau de bord de visualisation de données des patients ainsi que du personnel d\'un hopital ainsi que des insight IA',
                tech: ['React', 'PostgreSQL', 'Python', 'TensorFlow'],
                gradient: 'from-green-500 to-teal-500',
                icon: Database
              },
              { 
                title: 'App Banking Mobile', 
                description: 'Solution bancaire mobile sécurisée avec authentification biométrique et blockchain',
                tech: ['React Native', 'Node.js', 'Firebase', 'Blockchain'],
                gradient: 'from-orange-500 to-red-500',
                icon: Rocket
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="group relative bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 animate-project-entrance shadow-2xl hover:shadow-cyan-500/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* 3D Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                <div className="relative z-10 p-8">
                  {/* 3D Project Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center group-hover:animate-bounce-3d shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500`}>
                      <project.icon size={32} className="group-hover:animate-spin-slow" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* 3D Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 group-hover:bg-gray-600/50 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 animate-tech-tag"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* 3D Action Buttons */}
                  <div className="flex space-x-6">
                    <button className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                      <Github size={18} className="group-hover/btn:animate-spin" />
                      <span className="font-semibold">Code</span>
                    </button>
                    <button className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                      <ExternalLink size={18} className="group-hover/btn:animate-bounce" />
                      <span className="font-semibold">Demo</span>
                    </button>
                  </div>
                </div>

                {/* 3D Hover Effects */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with 3D Form */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent animate-title-entrance">
              Contactez-Moi
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full animate-line-grow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 3D Contact Info */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-6 text-cyan-400 animate-text-slide-in">
                  Collaborons Ensemble
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed animate-text-slide-in" style={{ animationDelay: '0.2s' }}>
                  Je suis toujours intéressé par de nouveaux défis et projets innovants. 
                  N'hésitez pas à me contacter pour discuter de vos idées !
                </p>
              </div>

              {/* 3D Social Links */}
              <div className="flex justify-center lg:justify-start space-x-8">
                {[
                  { icon: Github, color: 'cyan', gradient: 'from-cyan-600 to-blue-600' },
                  { icon: Linkedin, color: 'purple', gradient: 'from-purple-600 to-pink-600' },
                  { icon: Mail, color: 'red', gradient: 'from-red-600 to-pink-600' },
                  { icon: Phone, color:'green', gradient:'from-green-600 to-teal-600'
                  }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="https://github.com/JeffreyYAJ"
                    className={`group relative w-16 h-16 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center hover:scale-125 hover:-translate-y-2 transition-all duration-500 animate-social-entrance shadow-2xl hover:shadow-${social.color}-500/50`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <social.icon size={24} className="group-hover:animate-bounce transition-transform duration-300" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* 3D Contact Form */}
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 shadow-2xl hover:shadow-cyan-500/30 animate-form-entrance">
                <form className="space-y-6">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Votre Nom" 
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-500 hover:bg-gray-700/50 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Votre Email" 
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-500 hover:bg-gray-700/50 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      placeholder="Votre Message" 
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-500 hover:bg-gray-700/50 resize-none transform hover:scale-105"
                    ></textarea>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="group relative w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-cyan-500/50 animate-button-glow"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Envoyer le Message
                      <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className="text-cyan-400 animate-twinkle" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="text-gray-400 text-lg animate-fade-in">
            © 2024 Jeffrey YAJ. Créé avec passion et technologies de pointe.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
