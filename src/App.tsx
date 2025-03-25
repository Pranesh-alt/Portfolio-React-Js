import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ChevronDown, ExternalLink, Sun, Moon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 80 },
    { name: 'Java Script', level: 40 },
    { name: 'Python', level: 100 },
    { name: 'SQL', level: 100 },
    { name: 'Problem Solving', level: 100 }
  ];

  const projects = [
    {
      title: 'Comics TV',
      description: 'A streaming platform for comic enthusiasts',
      image: 'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Pranesh-alt/comics-tv',
      live: 'https://node-js-ott-6.onrender.com/'
    },
    {
      title: 'Expense Tracker',
      description: 'Python-based personal finance management tool',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/pranesh-alt/Python_Mini',
      live: 'https://pranesh-alt.github.io/Python_Mini/'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-black/95 backdrop-blur-sm' 
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-colors hover:text-blue-500 ${
                    activeSection === item ? 'text-blue-500' : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                } hover:bg-blue-500 hover:text-white transition-colors`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                } hover:bg-blue-500 hover:text-white transition-colors`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="p-2 rounded-md hover:bg-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                    activeSection === item
                      ? 'bg-red-500 text-white'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-900'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/comics-tv-8e695.appspot.com/o/Images%2FHome%20Page%2FPranesh-Photoroom.png?alt=media&token=ddb61f08-3d11-49ee-97f2-d6e740d82880"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500"
          />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Pranesh
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full transition-colors">
              View Work
            </a>
          </div>
          <div className="mt-12">
            <ChevronDown size={32}  className="mx-auto animate-bounce text-blue-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                I'm a passionate Full Stack Developer.
                I specialize in HTML, CSS, Javascript(Node JS) and Python(fastAPI).
              </p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                My journey in software development started with a deep curiosity for creating things that make a difference.
                Today, I focus on building scalable, user-friendly applications that solve real-world problems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg text-center border border-purple-500/20`}>
                <h3 className="text-2xl font-bold text-blue-500">2019-2022</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>PSG Polytechnic College</p>
              </div>
              <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg text-center border border-purple-500/20`}>
                <h3 className="text-2xl font-bold text-blue-500">2023-2024</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Texmo Blank</p>
              </div>
              <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg text-center border border-purple-500/20`}>
                <h3 className="text-2xl font-bold text-blue-500">2024-2025</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Freshworks Software Academy</p>
              </div>
              <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} p-4 rounded-lg text-center border border-purple-500/20`}>
                <h3 className="text-2xl font-bold text-blue-500"></h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg border border-purple-500/20`}>
                <div className="flex justify-between mb-2">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}%</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-black' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-lg overflow-hidden group border border-purple-500/20`}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{project.description}</p>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={project.github}
                      className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-purple-500' : 'text-gray-600 hover:text-purple-500'} transition-colors`}
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-purple-500' : 'text-gray-600 hover:text-purple-500'} transition-colors`}
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/10 p-4 rounded-full">
                  <Mail size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>pranestaker@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/10 p-4 rounded-full">
                  <Linkedin size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">LinkedIn</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>linkedin.com/in/pranesh-ragu-5344b931b</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/10 p-4 rounded-full">
                  <Github size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">GitHub</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>github.com/Pranesh-alt</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 ${
                    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 border border-red-500/20 ${
                    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 ${
                    isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Pranesh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;