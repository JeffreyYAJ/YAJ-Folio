import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  LayoutGrid,
  Palette,
  PenTool,
  Server,
  Sparkles,
} from "lucide-react";

const designSkills = [
  { name: "Figma", icon: Palette },
  { name: "Adobe Illustrator", icon: Palette },
  { name: "Canva", icon: PenTool },
  { name: "UI/UX Design", icon: LayoutGrid },
  { name: "Branding & Identity", icon: Sparkles },
  { name: "Prototyping", icon: ArrowRight },
];

const devSkills = [
  { name: "Python", icon: Code2 },
  { name: "FastAPI / Django", icon: Server },
  { name: "Linux & Shell", icon: Server },
  { name: "Docker", icon: Database },
  { name: "API & Microservices", icon: LayoutGrid },
  { name: "System Administration", icon: Server },
  { name: "AI & Data", icon: BrainCircuit },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Computer Vision", icon: Database },
  { name: "Data Pipelines", icon: Database },
  { name: "RAG / LLMs", icon: Code2 },
];

const projects = [
  {
    id: "01",
    name: "PassAI",
    description: "AI-powered animal exam tutor for Cameroon, RAG, OCR and PDF processing with microservices.",
    stack: ["Python", "FastAPI", "React", "Docker"],
    theme: "passai",
    side: "left",
  },
  {
    id: "02",
    name: "FoVote",
    description: "Online voting platform for schools. Django backend, React frontend, secure authentication.",
    stack: ["Django", "React", "PostgreSQL", "Tailwind"],
    theme: "fovote",
    side: "right",
  },
  {
    id: "03",
    name: "LocalStore",
    description: "Vendor marketplace with agentic chatbot and cosine recommendation system.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL"],
    theme: "localstore",
    side: "left",
  },
  {
    id: "04",
    name: "EcoSolve",
    description: "Farmers marketplace with AI planting calendar, chatbot, and social features.",
    stack: ["Django", "React", "PostgreSQL", "Tailwind"],
    theme: "ecosolve",
    side: "right",
  },
  {
    id: "05",
    name: "EduTrust",
    description: "Student payments platform for schools and institutions.",
    stack: ["Django", "React", "PostgreSQL", "Tailwind"],
    theme: "edutrust",
    side: "left",
  },
  {
    id: "06",
    name: "AIO Online Service",
    description: "Electron app for local offline tools and automation with Node.js and Python.",
    stack: ["Electron", "Node.js", "Python", "LLM"],
    theme: "aioservice",
    side: "right",
  },
];

function SparkleIcon({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      ✦
    </span>
  );
}

export default function Home() {
  return (
    <main id="main-content" className="home-editorial">
      <div className="home-editorial__shell">
        <section className="editorial-hero">
          <div className="editorial-hero__panel editorial-hero__panel--left">
            <div className="eyebrow">// DESIGNER</div>
            <h1 className="editorial-heading">
              Designing<br />
              meaningful<br />
              <span className="editorial-heading__highlight">experiences.</span>
            </h1>
            <p className="editorial-copy">
              I turn ideas into visual stories.<br />
              From brand identity to user interfaces,<br />
              I design with purpose, focusing on<br />
              clarity, emotion and impact.
            </p>
            <a href="/about" className="editorial-link">
              View my design work <ArrowRight size={16} />
            </a>
          </div>

          <div className="editorial-hero__center" aria-hidden="true">
            <div className="editorial-hero__grid" />
            <div className="editorial-hero__line" />
            <div className="editorial-hero__portrait">
              <div className="editorial-hero__figure">
                <div className="figure-head" />
                <div className="figure-hood" />
                <div className="figure-neck" />
                <div className="figure-shoulders" />
              </div>
            </div>
            <div className="editorial-hero__halo editorial-hero__halo--left" />
            <div className="editorial-hero__halo editorial-hero__halo--right" />
          </div>

          <div className="editorial-hero__panel editorial-hero__panel--right">
            <div className="eyebrow eyebrow--right">// DEVELOPER</div>
            <h2 className="editorial-heading editorial-heading--right">
              Building<br />
              reliable<br />
              <span className="editorial-heading__highlight editorial-heading__highlight--right">systems.</span>
            </h2>
            <p className="editorial-copy">
              I develop scalable backend systems,<br />
              work with Linux, automate processes<br />
              and explore AI to solve real problems<br />
              and create useful tools.
            </p>
            <a href="/projects" className="editorial-link editorial-link--secondary">
              View my dev work <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="editorial-skills">
          <div className="section-kicker">// DUAL COMPETENCY</div>
          <div className="section-head">
            <h3>Skills &amp; Tools</h3>
            <div className="section-head__badge">Development</div>
          </div>

          <div className="skills-layout">
            <div className="skills-column skills-column--left">
              <h4>Design</h4>
              <ul>
                {designSkills.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <span className="skill-icon"><Icon size={16} /></span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skills-circuit" aria-hidden="true">
              <div className="skills-circuit__ring skills-circuit__ring--outer" />
              <div className="skills-circuit__ring skills-circuit__ring--inner" />
              <div className="skills-circuit__core">
                <span>&lt;/&gt;</span>
              </div>
            </div>

            <div className="skills-column skills-column--right">
              <h4>Development</h4>
              <ul>
                {devSkills.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <span className="skill-icon"><Icon size={16} /></span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="editorial-work">
          <div className="section-kicker">// PROJECTS</div>
          <h3 className="section-title">Works</h3>
          <p className="section-subtitle">A selection of projects where design,<br />development and AI come together.</p>

          <div className="work-timeline">
            {projects.map((project) => (
              <article key={project.id} className={`work-card work-card--${project.side}`}>
                <div className="work-card__index">{project.id}</div>
                <div className="work-card__inner">
                  <div className={`project-preview project-preview--${project.theme}`}>
                    <div className="preview-window" />
                    <div className="preview-chart preview-chart--one" />
                    <div className="preview-chart preview-chart--two" />
                    <div className="preview-chart preview-chart--three" />
                  </div>
                  <div className="project-info">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-meta">Role: Full-stack / AI</div>
                    <a href="/projects" className="project-link">
                      View case study <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
