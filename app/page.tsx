// @ts-nocheck
"use client"
import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

// ─── Skills data ──────────────────────────────────────────────────────────────

const skills1 = [
  { label: "Python",         icon: "🐍" },
  { label: "LangChain",      icon: "🔗" },
  { label: "PyTorch",        icon: "🔥" },
  { label: "OpenAI API",     icon: "⚡" },
  { label: "RAG Systems",    icon: "📚" },
  { label: "HuggingFace",    icon: "🤗" },
  { label: "FastAPI",        icon: "🚀" },
  { label: "Pinecone",       icon: "🌲" },
  { label: "LlamaIndex",     icon: "🦙" },
  { label: "Docker",         icon: "🐳" },
  { label: "AWS",            icon: "☁️" },
  { label: "LangSmith",      icon: "🔍" },
  { label: "PostgreSQL",     icon: "🐘" },
  { label: "Streamlit",      icon: "📊" },
  { label: "Git",            icon: "🔀" },
];

const skills2 = [
  { label: "AI Agents",          icon: "🤖" },
  { label: "LLM Fine-tuning",    icon: "🎯" },
  { label: "LoRA / QLoRA",       icon: "⚙️" },
  { label: "LangGraph",          icon: "🕸️" },
  { label: "Vector Databases",   icon: "🗄️" },
  { label: "Prompt Engineering", icon: "✏️" },
  { label: "RAGAS",              icon: "📈" },
  { label: "CrewAI",             icon: "👥" },
  { label: "Weaviate",           icon: "🔷" },
  { label: "Qdrant",             icon: "🎯" },
  { label: "Anthropic Claude",   icon: "🧠" },
  { label: "Groq",               icon: "💨" },
  { label: "PEFT",               icon: "🛠️" },
  { label: "Multimodal AI",      icon: "👁️" },
  { label: "Axolotl",            icon: "🦎" },
];

// ─── Projects data ────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Production RAG Pipeline",
    description:
      "Confidential commercial product. A fault-tolerant, resumable multi-block document processing pipeline: OCR via Mistral AI, LLM-powered classification and structured extraction with Gemini 2.5 Flash, query-answer pair generation with automatic anonymisation, and pair-quality scoring — all backed by Google Cloud Storage. Built with Python 3.12, Pydantic, and a Typer CLI supporting parallel workers and date-range sharding.",
    tags: ["Gemini 2.5 Flash", "Mistral OCR", "GCS", "PyMuPDF", "Pydantic", "Python 3.12"],
    github: null,
    current: true,
    currentNote: "UI layer in progress",
    nda: true,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "hover:shadow-violet-500/20",
  },
  {
    title: "AI-Powered Presentation Builder",
    description:
      "Multi-agent system where specialized agents collaborate end-to-end: a researcher gathers information on the topic, a planner designs the slide structure via the Gemini API, and a builder agent generates each slide then iteratively self-corrects layout until quality standards are met.",
    tags: ["AI Agents", "Gemini API", "LangGraph", "Multi-Agent", "Python"],
    github: null,
    current: true,
    currentNote: "Inter-agent verification layer in progress",
    nda: false,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    glow: "hover:shadow-emerald-500/20",
  },
  {
    title: "XPLAIN — Explainable X-ray Report Generator",
    description:
      "Vision Transformer + LLM pipeline generating structured radiology reports with Grad-CAM heatmaps for visual explainability. Bridges medical imaging and natural language generation for interpretable AI in radiology.",
    tags: ["Vision Transformer", "Grad-CAM", "PyTorch", "Medical AI"],
    github: "https://github.com/zakariaebenzouitine-rgb/xplain",
    nda: false,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glow: "hover:shadow-pink-500/20",
  },
  {
    title: "Medical Imaging Analysis System",
    description:
      "Deep learning application for chest X-ray analysis using a dual-model approach: U-Net segments and highlights abnormal lung regions, while ResNet-50 classifies the image into possible chest pathologies. Served via a Flask web interface for real-time upload and inference.",
    tags: ["U-Net", "ResNet-50", "TensorFlow/Keras", "OpenCV", "Flask"],
    github: "https://github.com/zakariaebenzouitine-rgb/Medical-Image-Analysis-System-Development",
    nda: false,
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    glow: "hover:shadow-cyan-500/20",
  },
  {
    title: "Extreme Precipitation Regionalization — Morocco",
    description:
      "Climate science study segmenting Morocco into 6 homogeneous regions based on annual block maxima of extreme precipitation (ERA5, 1979–2021). Uses F-madogram distance (a tail-dependence measure), Ward-linkage hierarchical clustering, and a Spatial Coherence Test for validation. Goes beyond precipitation-only by jointly clustering on IVT (Integrated Vapour Transport), Z500 geopotential height, and MSLP — capturing the full atmospheric signature of extreme events.",
    tags: ["F-madogram", "ERA5", "xarray", "scipy", "GeoPandas", "cartopy"],
    github: null,
    nda: false,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glow: "hover:shadow-orange-500/20",
  },
  {
    title: "Machine Learning Notebooks",
    description:
      "Hands-on study collection covering core ML algorithms: Linear & Logistic Regression, Decision Trees, Ensemble Methods (Bagging, Random Forests, Boosting), and hyperparameter tuning with GridSearchCV — built while learning ML fundamentals.",
    tags: ["Scikit-learn", "Python", "Jupyter", "Ensemble Methods"],
    github: "https://github.com/zakariaebenzouitine-rgb/Machinelearning_notebooks",
    nda: false,
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    glow: "hover:shadow-indigo-500/20",
  },
];

// ─── Experience data ───────────────────────────────────────────────────────────

const experience = [
  {
    role: "Generative AI Engineer",
    type: "Current",
    company: "DecisiveAI",
    period: "2025 – Present",
    location: "Morocco",
    points: [
      "Building an advanced RAG system powering an AI Lawyer Assistant for legal document reasoning",
      "Developing a multi-agent AI pipeline that autonomously researches, verifies, and generates presentations using the Gemini API",
    ],
    accent: "#7C3AED",
  },
  {
    role: "AI Researcher",
    type: "Internship",
    company: "College of Computing · UM6P",
    period: "Apr 2025 – Sep 2025",
    location: "Ben Guerir, Morocco",
    points: [
      "Authored survey paper on AI applications for climate resilience in Morocco",
      "Applied hierarchical clustering on extreme precipitation events on Toubkal supercomputer",
    ],
    accent: "#0EA5E9",
  },
  {
    role: "Data Scientist",
    type: "Internship",
    company: "Intelcap Sarl",
    period: "Aug 2024 – Nov 2024",
    location: "Rabat, Morocco",
    points: [
      "Built CNN facial emotion recognition model — 85%+ accuracy with ResNet50 transfer learning",
      "Developed real-time sign language recognition system with OpenCV and MediaPipe",
    ],
    accent: "#10B981",
  },
  {
    role: "ML / DL Engineer",
    type: "Internship",
    company: "LIMIARF Research Lab",
    period: "May 2024 – Sep 2024",
    location: "Rabat, Morocco",
    points: [
      "Built Qwaze — AI quiz generation platform using LLAMA 2 LLM on Amazon SageMaker",
      "Deployed scalable model on AWS with FastAPI backend for educators",
    ],
    accent: "#F59E0B",
  },
  {
    role: "AI Developer",
    type: "Internship",
    company: "Province Sidi Kacem",
    period: "Apr 2023 – Jun 2023",
    location: "Sidi Kacem, Morocco",
    points: [
      "Built document classification model with Scikit-learn and PyPDF2",
      "Deployed via web interface for real-time document categorization",
    ],
    accent: "#EC4899",
  },
];

const education = [
  {
    degree: "Le Wagon Data Science Bootcamp",
    sub: "Intensive 9-week program · Casablanca, Morocco",
    period: "Aug 2025 – Oct 2025",
    accent: "#7C3AED",
  },
  {
    degree: "Master's in Computer Science",
    sub: "Faculty of Science · UM5 · Rabat, Morocco",
    period: "2023 – 2025",
    accent: "#0EA5E9",
  },
  {
    degree: "Bachelor's — Networking & Telecom",
    sub: "Faculty of Science · UM5 · Rabat, Morocco",
    period: "2022 – 2023",
    accent: "#10B981",
  },
];

// ─── Medium articles ──────────────────────────────────────────────────────────

const MEDIUM_PROFILE = "https://medium.com/@AI_with_Zakariae";

const articles = [
  {
    title: "Natural Language Processing: NLP",
    url: "https://medium.com/@AI_with_Zakariae/natural-language-processing-nlp-a947c8bb4709",
    cover: "https://miro.medium.com/v2/resize:fit:1200/0*GnBacoK2IKcvb_63.png",
    date: "Nov 27, 2024",
    tag: "NLP",
  },
  {
    title: "Residual Networks (ResNet)",
    url: "https://medium.com/@AI_with_Zakariae/residual-networks-resnet-184a32a26a86",
    cover: "https://miro.medium.com/v2/da:true/resize:fit:1024/0*ZYVc0I3163MMyAT8",
    date: "Nov 10, 2024",
    tag: "Deep Learning",
  },
  {
    title: "Accelerating Deep Learning: The Power of Batch Normalization",
    url: "https://medium.com/@AI_with_Zakariae/accelerating-deep-learning-the-power-of-batch-normalization-c544e5b723fa",
    cover: "https://miro.medium.com/v2/resize:fit:1024/0*cM9eaW45ifE62zdJ.png",
    date: "Oct 2024",
    tag: "Optimization",
  },
  {
    title: "Builder's Guide to PyTorch: Parameter Management & Initialization",
    url: "https://medium.com/@AI_with_Zakariae/builders-guide-to-pytorch-parameter-management-and-parameter-initialization-4677dff80f95",
    cover: "https://miro.medium.com/v2/resize:fit:1152/1*SwGhVSMvfuyCCi3zVGhMdA.jpeg",
    date: "Sep 9, 2024",
    tag: "PyTorch",
  },
  {
    title: "Forward & Backward Propagation",
    url: "https://medium.com/@AI_with_Zakariae/forward-backward-propagation-47daca80a12c",
    cover: "https://miro.medium.com/v2/resize:fit:749/1*dkK03pEglqZUA8IhB6SuXw.png",
    date: "Aug 26, 2024",
    tag: "Neural Networks",
  },
  {
    title: "Multilayer Perceptrons",
    url: "https://medium.com/@AI_with_Zakariae/multilayer-perceptrons-8ba658a9fab5",
    cover: "https://miro.medium.com/v2/resize:fit:522/1*2ASulrnv0P4iZUnNivpYAA.png",
    date: "Aug 19, 2024",
    tag: "Neural Networks",
  },
];

// ─── Main component ────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home',       id: 'home' },
    { label: 'About',      id: 'about' },
    { label: 'Skills',     id: 'skills' },
    { label: 'Projects',   id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact',    id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#07070F] text-slate-100 overflow-x-hidden selection:bg-violet-500/30">

      {/* ── Fixed aurora background ─────────────────────────────── */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        {/* subtle dot grid */}
        <div className="dot-grid" />
      </div>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center nav-glass border-b border-white/5">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">

          <button onClick={() => go('home')} className="font-black text-xl tracking-tight logo-gradient">
            BZ
          </button>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`text-sm transition-all duration-200 ${
                  activeSection === id
                    ? 'text-violet-400 font-medium'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/Benzouitine_resume.pdf"
              download="Zakariae_Benzouitine_CV.pdf"
              className="ml-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-semibold flex items-center gap-1.5 shadow-lg shadow-violet-500/20"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* mobile toggle */}
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMenuOpen(v => !v)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 inset-x-0 nav-glass border-t border-white/5 px-6 py-5 flex flex-col gap-4 md:hidden">
            {navItems.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)} className="text-left text-slate-300 hover:text-white text-sm">
                {label}
              </button>
            ))}
            <a
              href="/Benzouitine_resume.pdf"
              download
              className="self-start px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-sm font-semibold flex items-center gap-1.5"
            >
              <Download size={13} />
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-16 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs font-medium mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Open to full-time opportunities · 2026
        </div>

        <h1 className="font-black tracking-tight leading-none mb-6">
          <span className="block text-slate-100 text-5xl md:text-7xl lg:text-8xl">Zakariae</span>
          <span className="block hero-name text-5xl md:text-7xl lg:text-8xl">Benzouitine</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl font-medium mb-5">
          Generative AI Engineer
        </p>

        {/* role pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["RAG Systems", "LLMs", "AI Agents", "LangChain", "PyTorch"].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/4 text-slate-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-500 text-sm md:text-base italic max-w-md mb-12">
          "I build AI systems that answer real questions on real data."
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/Benzouitine_resume.pdf"
            download="Zakariae_Benzouitine_CV.pdf"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm cta-primary flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download CV
          </a>
          <button
            onClick={() => go('projects')}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={16} />
          </button>
        </div>

        <button onClick={() => go('about')} className="absolute bottom-10 animate-bounce text-slate-600 hover:text-slate-400 transition-colors">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ── About ───────────────────────────────────────────────── */}
      <section id="about" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Label>About Me</Label>
          <h2 className="text-4xl md:text-5xl font-black mb-14">Who I Am</h2>

          <div className="grid md:grid-cols-5 gap-10 items-center">

            {/* bio */}
            <div className="md:col-span-3 space-y-5 text-slate-400 text-base md:text-lg leading-relaxed">
              <p>
                I'm a <span className="text-slate-100 font-semibold">Generative AI Engineer</span> with a Master's in Computer Science,
                building production-grade AI systems — <span className="text-violet-400 font-semibold">RAG pipelines</span>,
                <span className="text-cyan-400 font-semibold"> autonomous agents</span>, and fine-tuned LLMs that solve real domain problems.
              </p>
              <p>
                Currently completing an intensive <span className="text-slate-100 font-semibold">Le Wagon Data Science Bootcamp</span> in Casablanca.
                I combine deep ML foundations (PyTorch, CNNs, transformers) with modern GenAI tooling — LangChain, LangGraph, HuggingFace PEFT, and cloud-native deployment.
              </p>
              <p>
                My work spans <span className="text-violet-400 font-semibold">medical AI, climate modeling, and real-time computer vision</span>.
                I care about AI that is not just powerful — but <em>interpretable, reliable, and production-ready</em>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:zakariaebenzouitine@gmail.com" className="social-link">
                  <Mail size={15} /> zakariaebenzouitine@gmail.com
                </a>
                <a href="https://github.com/zakariaebenzouitine-rgb" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={15} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/zakariaebenzouitine/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>

            {/* stats + photo */}
            <div className="md:col-span-2 flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-500/40 blur-xl" />
                <img
                  src="/profile_picture.jpg"
                  alt="Zakariae Benzouitine"
                  className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl object-cover border border-white/10"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 w-full">
                {[
                  { n: "4+",  l: "Internships" },
                  { n: "6+",  l: "AI Projects" },
                  { n: "2+",  l: "Years in ML" },
                  { n: "∞",   l: "Curiosity" },
                ].map(({ n, l }) => (
                  <div key={l} className="glass-card p-4 text-center rounded-xl">
                    <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{n}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Marquee ──────────────────────────────────────── */}
      <section id="skills" className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <Label>Skills</Label>
          <h2 className="text-4xl md:text-5xl font-black">2026 GenAI Stack</h2>
          <p className="text-slate-500 mt-3 text-sm max-w-lg">
            The skills every recruiter searches for in 2026 — from RAG pipelines to fine-tuned LLMs and autonomous agents.
          </p>
        </div>

        {/* Row 1 — scrolls LEFT */}
        <div className="marquee-track mb-4">
          <div className="marquee-inner marquee-left">
            {[...skills1, ...skills1, ...skills1].map((s, i) => (
              <SkillChip key={i} label={s.label} icon={s.icon} variant="violet" />
            ))}
          </div>
          <div className="fade-left" />
          <div className="fade-right" />
        </div>

        {/* Row 2 — scrolls RIGHT */}
        <div className="marquee-track">
          <div className="marquee-inner marquee-right">
            {[...skills2, ...skills2, ...skills2].map((s, i) => (
              <SkillChip key={i} label={s.label} icon={s.icon} variant="cyan" />
            ))}
          </div>
          <div className="fade-left" />
          <div className="fade-right" />
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────── */}
      <section id="projects" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Label>Projects</Label>
          <h2 className="text-4xl md:text-5xl font-black mb-14">Featured Work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div key={i} className={`group project-card rounded-2xl overflow-hidden hover:shadow-2xl ${p.glow} transition-all duration-300 hover:-translate-y-1.5`}>
                {/* top gradient bar */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${p.gradient}`} />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-white text-base leading-snug">{p.title}</h3>
                    {p.current && (
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Shipping Soon
                        </span>
                        {p.currentNote && (
                          <span className="text-[10px] text-slate-500 italic text-right">{p.currentNote}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400">{t}</span>
                    ))}
                  </div>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      <Github size={13} />
                      View on GitHub
                      <ExternalLink size={11} />
                    </a>
                  ) : p.nda ? (
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-amber-500/8 border border-amber-500/20 text-amber-400/70">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      Proprietary · NDA
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Writing strip ───────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <Label>Writing</Label>
              <h2 className="text-3xl font-black">On Medium</h2>
            </div>
            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-200 transition-colors border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg"
            >
              All articles
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-4" style={{width: 'max-content'}}>
              {articles.map((a, i) => (
                <a
                  key={i}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-64 rounded-xl overflow-hidden glass-card hover:border-white/20 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-white/80 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                      {a.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-white text-xs font-semibold leading-snug mb-2 line-clamp-2 group-hover:text-violet-300 transition-colors">
                      {a.title}
                    </p>
                    <div className="flex items-center gap-2 text-slate-600 text-[10px]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-slate-500"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                      Medium · {a.date}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-6 inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-200 transition-colors"
          >
            All articles <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────── */}
      <section id="experience" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Label>Experience</Label>
          <h2 className="text-4xl md:text-5xl font-black mb-14">Journey</h2>

          <div className="grid md:grid-cols-2 gap-14">

            {/* Work */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-semibold mb-8">Professional</p>
              <div className="relative space-y-6 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/8">
                {experience.map((e, i) => (
                  <div key={i} className="relative">
                    <span
                      className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full ring-[3px] ring-[#07070F]"
                      style={{ background: e.accent }}
                    />
                    <div className="glass-card rounded-xl p-5 hover:border-white/15 transition-colors"
                         style={{ borderLeftColor: e.accent + '60', borderLeftWidth: '2px' }}>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <span className="font-bold text-white text-sm">{e.role}</span>
                          {e.type === "Current" ? (
                            <span className="ml-2 inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded bg-violet-500/15 border border-violet-500/30 text-violet-300 font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                              Current
                            </span>
                          ) : (
                            <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-white/8 text-slate-400">{e.type}</span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-600 whitespace-nowrap">{e.period}</span>
                      </div>
                      <p className="text-xs mb-3" style={{ color: e.accent }}>{e.company} · {e.location}</p>
                      <ul className="space-y-1.5">
                        {e.points.map((pt, j) => (
                          <li key={j} className="flex gap-2 text-slate-400 text-xs leading-relaxed">
                            <span style={{ color: e.accent }} className="mt-0.5 flex-shrink-0">▸</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-semibold mb-8">Education</p>
              <div className="relative space-y-6 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/8">
                {education.map((e, i) => (
                  <div key={i} className="relative">
                    <span
                      className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full ring-[3px] ring-[#07070F]"
                      style={{ background: e.accent }}
                    />
                    <div className="glass-card rounded-xl p-5 hover:border-white/15 transition-colors"
                         style={{ borderLeftColor: e.accent + '60', borderLeftWidth: '2px' }}>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="font-bold text-white text-sm">{e.degree}</span>
                        <span className="text-[11px] text-slate-600 whitespace-nowrap">{e.period}</span>
                      </div>
                      <p className="text-xs" style={{ color: e.accent }}>{e.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <section id="contact" className="relative z-10 py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <Label>Contact</Label>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Let's Build Something</h2>
          <p className="text-slate-500 mb-12 text-sm leading-relaxed">
            Open to full-time roles, freelance GenAI projects, and research collaborations.
            I respond to every message.
          </p>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:zakariaebenzouitine@gmail.com"
                className="contact-btn contact-btn-violet"
              >
                <Mail size={16} />
                Send Email
              </a>
              <a
                href="https://github.com/zakariaebenzouitine-rgb"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn-ghost"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zakariaebenzouitine/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn-cyan"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/5 text-center text-slate-600 text-xs">
        © 2026 Zakariae Benzouitine &nbsp;·&nbsp; Generative AI Engineer &nbsp;·&nbsp; Built with Next.js
      </footer>

      {/* ── Global styles ────────────────────────────────────────── */}
      <style jsx global>{`
        /* Aurora blobs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.55;
        }
        .orb-1 {
          width: 700px; height: 700px;
          top: -15%; left: -10%;
          background: radial-gradient(circle, #5B21B6 0%, transparent 70%);
          animation: orbFloat1 18s ease-in-out infinite;
        }
        .orb-2 {
          width: 550px; height: 550px;
          top: 35%; right: -10%;
          background: radial-gradient(circle, #0E7490 0%, transparent 70%);
          animation: orbFloat2 22s ease-in-out infinite;
        }
        .orb-3 {
          width: 600px; height: 600px;
          bottom: -10%; left: 25%;
          background: radial-gradient(circle, #1D4ED8 0%, transparent 70%);
          animation: orbFloat3 26s ease-in-out infinite;
        }
        @keyframes orbFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(4%,8%) scale(1.08); }
          66%      { transform: translate(-3%,5%) scale(0.95); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-6%,-4%) scale(1.1); }
          70%      { transform: translate(5%,6%) scale(0.93); }
        }
        @keyframes orbFloat3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(6%,-6%) scale(1.06); }
        }

        /* Dot grid */
        .dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* Nav glass */
        .nav-glass {
          background: rgba(7,7,15,0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Logo gradient */
        .logo-gradient {
          background: linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Hero name gradient + animation */
        .hero-name {
          background: linear-gradient(90deg, #7C3AED, #22D3EE, #7C3AED);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientSlide 4s linear infinite;
        }
        @keyframes gradientSlide {
          to { background-position: 200% center; }
        }

        /* CTA primary */
        .cta-primary {
          background: linear-gradient(135deg, #7C3AED, #0EA5E9);
          box-shadow: 0 0 30px rgba(124,58,237,0.35);
          transition: all 0.25s;
        }
        .cta-primary:hover {
          box-shadow: 0 0 45px rgba(124,58,237,0.55);
          opacity: 0.92;
        }

        /* Glass card */
        .glass-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Project card */
        .project-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Marquee */
        .marquee-track {
          position: relative;
          overflow: hidden;
          padding: 6px 0;
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          gap: 12px;
          will-change: transform;
        }
        .marquee-left  { animation: scrollLeft  38s linear infinite; }
        .marquee-right { animation: scrollRight 38s linear infinite; }
        .marquee-track:hover .marquee-left,
        .marquee-track:hover .marquee-right {
          animation-play-state: paused;
        }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes scrollRight {
          from { transform: translateX(calc(-100% / 3)); }
          to   { transform: translateX(0); }
        }
        /* edge fades */
        .fade-left, .fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 140px;
          pointer-events: none;
          z-index: 10;
        }
        .fade-left  { left:  0; background: linear-gradient(to right,  #07070F, transparent); }
        /* hide scrollbar for article strip */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        /* line clamp */
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .fade-right { right: 0; background: linear-gradient(to left,   #07070F, transparent); }

        /* Skill chip hover */
        .skill-chip { transition: all 0.2s; }
        .skill-chip:hover { transform: translateY(-2px); }

        /* Social link */
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #64748b;
          transition: color 0.2s;
        }
        .social-link:hover { color: #e2e8f0; }

        /* Contact buttons */
        .contact-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.2s;
          text-decoration: none;
        }
        .contact-btn-violet {
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(124,58,237,0.3);
          color: #A78BFA;
        }
        .contact-btn-violet:hover {
          background: rgba(124,58,237,0.25);
          border-color: rgba(124,58,237,0.5);
        }
        .contact-btn-ghost {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8;
        }
        .contact-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          color: #e2e8f0;
        }
        .contact-btn-cyan {
          background: rgba(14,165,233,0.12);
          border: 1px solid rgba(14,165,233,0.25);
          color: #38BDF8;
        }
        .contact-btn-cyan:hover {
          background: rgba(14,165,233,0.22);
          border-color: rgba(14,165,233,0.45);
        }
      `}</style>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function Label({ children }) {
  return (
    <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-violet-400 mb-3">
      <span className="block w-8 h-px bg-violet-500" />
      {children}
    </p>
  );
}

function SkillChip({ label, icon, variant = "violet" }) {
  const v = {
    violet: "border-violet-500/20 bg-violet-500/8 text-violet-200",
    cyan:   "border-cyan-500/20 bg-cyan-500/8 text-cyan-200",
  }[variant];

  return (
    <div className={`skill-chip flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm cursor-default select-none ${v}`}>
      <span className="text-base leading-none">{icon}</span>
      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}
