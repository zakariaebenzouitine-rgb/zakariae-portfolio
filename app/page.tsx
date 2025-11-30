// @ts-nocheck
"use client"
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "XPLAIN: A Chest X-ray Report Generator",
      description: "Advanced medical imaging system using Vision Transformers and Grad-CAM for explainable AI in radiology report generation.",
      tags: ["Deep Learning", "Computer Vision", "Transformers", "Medical AI"],
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
      github: "https://github.com/zakariaebenzouitine-rgb/xplain",
      category: "computer-vision"
    },
    {
      title: "Machine Learning Fundamentals Collection",
      description: "Comprehensive collection of Jupyter notebooks covering core ML algorithms including Linear/Logistic Regression, Decision Trees, Ensemble Learning (Bagging, Random Forests, Boosting), and hyperparameter tuning with GridSearchCV. Includes practical implementations with ~93% accuracy benchmarks.",
      tags: ["Machine Learning", "Scikit-learn", "Python", "Ensemble Methods", "Model Optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com/zakariaebenzouitine-rgb/Machinelearning_notebooks",
      category: "machine-learning"
    },
    {
      title: "X-ray Image Enhancement Pipeline",
      description: "Preprocessing pipeline using CLAHE, normalization, and advanced enhancement techniques for medical imaging quality improvement.",
      tags: ["Computer Vision", "Image Processing", "Medical Imaging"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      github: "https://github.com/zakariaebenzouitine-rgb/Medical-Image-Analysis-System-Development",
      category: "computer-vision"
    },
    {
      title: "Real-Time Sign Language Translation System",
      description: "ML-powered system that recognizes sign language gestures and translates them into spoken/written language in real-time. Uses MediaPipe for hand landmark detection and Random Forest classifier for gesture recognition, integrated with a Tkinter GUI for seamless interaction.",
      tags: ["Computer Vision", "Machine Learning", "MediaPipe", "OpenCV", "Real-Time Processing"],
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
      github: "https://github.com/zakariaebenzouitine-rgb/Sign_language_system",
      category: "computer-vision"
    },
    {
      title: "Speech Emotion Classification",
      description: "Deep learning system for emotion recognition from speech audio using CNN trained on mel-spectrograms. Classifies emotions into 8 categories (happy, sad, angry, fearful, calm, surprised, disgusted, neutral) from the RAVDESS dataset with an interactive Streamlit interface.",
      tags: ["Deep Learning", "CNN", "Audio Processing", "Streamlit", "PyTorch"],
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop",
      github: "https://github.com/zakariaebenzouitine-rgb/streamlit_app.py",
      category: "deep-learning"
    },
    
    {
      title: "Extreme Rainfall Modeling",
      description: "Statistical modeling and machine learning approach to predict extreme rainfall patterns in Morocco using climate data.",
      tags: ["Machine Learning", "Statistical Modeling", "Climate Science"],
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/rainfall-modeling",
      category: "machine-learning"
    }
  ];

  const skills = {
    "Languages": ["Python", "SQL", "R"],
    "Frameworks": ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn"],
    "MLOps": ["Docker", "FastAPI", "MLflow", "Streamlit", "Git"],
    "AI Expertise": ["Vision Models", "Transformers", "Training Pipelines", "Data Processing", "Model Optimization"]
  };

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              BZ
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center md:text-left animate-fadeIn">
              <div className="mb-6">
                <span className={`inline-block px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'} border ${darkMode ? 'border-blue-500/20' : 'border-blue-200'}`}>
                  Available for opportunities
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-slideDown">
                Zakariae Benzouitine
              </h1>
              <h2 className={`text-xl md:text-2xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Data Scientist
              </h2>
              <p className={`text-base md:text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Building intelligent systems with clarity, precision, and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/Benzouitine_resume.pdf"
                  download="Zakariae_Benzouitine_CV.pdf"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 ${darkMode ? 'border-gray-700 hover:border-blue-500 hover:bg-gray-800' : 'border-gray-300 hover:border-blue-500 hover:bg-gray-100'}`}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="flex justify-center md:justify-end animate-fadeIn">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src="/profile_picture.jpg"
                  alt="Zakariae Benzouitine"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-blue-500/20 shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center animate-bounce">
            <ChevronDown size={32} className={darkMode ? 'text-gray-600' : 'text-gray-400'} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} shadow-xl`}>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a <span className="text-blue-400 font-semibold">Data Scientist</span> with a Master's degree in Computer Science, 
              specializing in building intelligent systems that solve real-world problems. My work focuses on creating solutions that are not just powerful—but 
              <span className="text-cyan-400 font-semibold"> explainable, interpretable, and impactful</span>.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently wrapping up an intensive <span className="font-semibold">Le Wagon Data Science Bootcamp</span>, I combine deep technical expertise 
              with hands-on experience in <span className="text-blue-400 font-semibold">deep learning, computer vision, and MLOps</span>. From medical imaging 
              systems with Grad-CAM explainability to climate modeling on supercomputers, I thrive on turning complex data into actionable insights that drive decisions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  🚀 Expertise
                </h3>
                <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span><span className="font-semibold">Python & PyTorch</span> — Building production-ready ML models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span><span className="font-semibold">Deep Learning & Transformers</span> — CNNs, Vision-Language Models, NLP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span><span className="font-semibold">MLOps & Deployment</span> — Docker, AWS, Streamlit, FastAPI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span><span className="font-semibold">Explainable AI (XAI)</span> — Grad-CAM, Model Interpretability</span>
                  </li>
                </ul>
              </div>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  💡 Passionate About
                </h3>
                <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span><span className="font-semibold">Medical AI & Healthcare</span> — Transforming diagnostics with vision models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span><span className="font-semibold">Climate & Environmental Modeling</span> — Data-driven climate resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span><span className="font-semibold">Real-Time AI Systems</span> — Building scalable, production-grade solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span><span className="font-semibold">Continuous Learning</span> — Staying ahead in the AI evolution</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20' : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'}`}>
              <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} italic`}>
                "Building AI systems that don't just predict—they <span className="text-blue-400 font-semibold">explain, adapt, and empower</span> decision-makers to act with confidence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'computer-vision', 'machine-learning'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Equipped with the <span className="text-blue-400 font-semibold">most in-demand skills</span> — from foundation models to production deployment. 
              Every tool mastered with hands-on experience across real-world projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Core Programming
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><span className="font-semibold">Python</span> (Advanced)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><span className="font-semibold">SQL</span> (PostgreSQL, MySQL)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Git & Version Control</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  ML/DL Frameworks
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span><span className="font-semibold">PyTorch</span> (Production)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span><span className="font-semibold">TensorFlow</span> / Keras</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span><span className="font-semibold">Hugging Face</span> Transformers</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Scikit-learn</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Data & Analytics
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span><span className="font-semibold">Pandas</span> & NumPy</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Matplotlib & Seaborn</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span><span className="font-semibold">Statistical Modeling</span></span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Data Preprocessing</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  MLOps & Cloud
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span><span className="font-semibold">Docker</span> & Containers</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span><span className="font-semibold">AWS</span> (SageMaker, EC2)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>FastAPI & Streamlit</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>GCP</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Computer Vision
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span><span className="font-semibold">OpenCV</span> (Advanced)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Vision Transformers (ViT)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span><span className="font-semibold">CNNs</span> & ResNet</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>MediaPipe</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  AI Specialization
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span><span className="font-semibold">LLMs</span> (LLAMA 2)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span><span className="font-semibold">Explainable AI</span> (Grad-CAM)</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Transfer Learning</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Model Fine-tuning</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Development Tools
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>Jupyter & VS Code</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span><span className="font-semibold">Linux</span> & Bash</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>Flask & Django</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>REST APIs</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Soft Skills
                </h3>
              </div>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Critical Thinking</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Problem Solving</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Team Collaboration</span>
                </li>
                <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Technical Writing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Education</h2>
          
          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Professional Experience</h3>
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-blue-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">AI Researcher - Internship</h4>
                    <p className="text-blue-400 mt-1">College of Computing - UM6P</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Apr 2025 – Sep 2025</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ben Guerir, Morocco</p>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Authored survey paper analyzing AI applications for climate change resilience in Morocco</li>
                  <li>• Applied hierarchical clustering on extreme precipitation events using Toubkal supercomputer</li>
                </ul>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-cyan-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">Data Scientist - Internship</h4>
                    <p className="text-cyan-400 mt-1">Intelcap Sarl</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aug 2024 – Nov 2024</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rabat, Morocco</p>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Built CNN model for facial emotion recognition achieving 85%+ accuracy with ResNet50 transfer learning</li>
                  <li>• Developed sign language recognition system using OpenCV</li>
                </ul>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-purple-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">ML/DL Engineer - Internship</h4>
                    <p className="text-purple-400 mt-1">LIMIARF - Research Laboratory</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>May 2024 – Sep 2024</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rabat, Morocco</p>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Developed Qwaze, an AI-powered platform using LLAMA 2 LLM on Amazon SageMaker for quiz generation</li>
                  <li>• Deployed scalable model on AWS for educators</li>
                </ul>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-green-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">AI Developer - Internship</h4>
                    <p className="text-green-400 mt-1">Province Sidi Kacem</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Apr 2023 – Jun 2023</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sidi Kacem, Morocco</p>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Developed document classification model with Scikit-learn and PyPDF2 for automated categorization</li>
                  <li>• Deployed via web interface for real-time use</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Education</h3>
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-blue-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">Le Wagon Data Science Bootcamp</h4>
                    <p className="text-blue-400 mt-1">Intensive 9-week program</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aug 2025 – Present</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Casablanca, Morocco</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Comprehensive training covering data analysis, machine learning, deep learning, and deployment
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-cyan-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">Master's Degree in Computer Science</h4>
                    <p className="text-cyan-400 mt-1">Faculty of Science - UM5</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2023 – 2025</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rabat, Morocco</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Specialization in Computer Science and Telecommunications
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border-l-4 border-purple-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold">Bachelor's Degree</h4>
                    <p className="text-purple-400 mt-1">Faculty of Science - UM5</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2022 – 2023</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rabat, Morocco</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Networking and Telecommunications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <p className={`text-center mb-8 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Interested in collaborating or have a project in mind? Let's connect!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="zakariaebenzouitine@gmail.com"
                className={`flex items-center gap-3 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href="https://github.com/zakariaebenzouitine-rgb"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zakariaebenzouitine/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Zakariae Benzouitine. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }
      `}</style>
    </div>
  );
}