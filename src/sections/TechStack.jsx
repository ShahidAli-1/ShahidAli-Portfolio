
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

const skillCategories = [
  {
    id: "all",
    label: "All Skills",
  },
  {
    id: "backend",
    label: "Backend",
  },
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "database",
    label: "Database",
  },
  {
    id: "ai",
    label: "AI & Vision",
  },
  {
    id: "tools",
    label: "Tools",
  },
];

const skills = [
  { name: "C#", symbol: "C#", category: "backend", level: "Working Knowledge", color: "blue" },
  { name: "ASP.NET Core MVC", symbol: ".NET", category: "backend", level: "Practical Experience", color: "purple" },
  { name: "Entity Framework Core", symbol: "EF", category: "backend", level: "Working Knowledge", color: "blue" },
  { name: "ASP.NET Core Web API", symbol: "API", category: "backend", level: "Learning", color: "purple" },

  { name: "HTML5", symbol: "5", category: "frontend", level: "Working Knowledge", color: "orange" },
  { name: "CSS3", symbol: "CSS", category: "frontend", level: "Working Knowledge", color: "blue" },
  { name: "JavaScript", symbol: "JS", category: "frontend", level: "Working Knowledge", color: "yellow" },
  { name: "Bootstrap", symbol: "B", category: "frontend", level: "Working Knowledge", color: "purple" },
  { name: "React", symbol: "R", category: "frontend", level: "Basic", color: "cyan" },

  { name: "SQL Server", symbol: "SQL", category: "database", level: "Working Knowledge", color: "red" },
  { name: "MySQL", symbol: "MY", category: "database", level: "Working Knowledge", color: "blue" },
  { name: "SQL Queries", symbol: "DB", category: "database", level: "Working Knowledge", color: "cyan" },

  { name: "Python", symbol: "Py", category: "ai", level: "Basic", color: "yellow" },
  { name: "Flask", symbol: "Fl", category: "ai", level: "Project Experience", color: "blue" },
  { name: "OpenCV", symbol: "CV", category: "ai", level: "Used in Project", color: "green" },
  { name: "YOLO", symbol: "YO", category: "ai", level: "Used in Project", color: "purple" },
  { name: "DeepFace", symbol: "DF", category: "ai", level: "Used in Project", color: "cyan" },

  { name: "Git", symbol: "Git", category: "tools", level: "Working Knowledge", color: "orange" },
  { name: "GitHub", symbol: "GH", category: "tools", level: "Working Knowledge", color: "purple" },
  { name: "Visual Studio", symbol: "VS", category: "tools", level: "Working Knowledge", color: "purple" },
  { name: "VS Code", symbol: "</>", category: "tools", level: "Working Knowledge", color: "blue" },
  { name: "Postman", symbol: "PM", category: "tools", level: "Practical Use", color: "orange" },
  { name: "Swagger", symbol: "SW", category: "tools", level: "Practical Use", color: "green" },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useGSAP(
    () => {
      gsap.fromTo(
        ".compact-skill",
        { y: 25, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.045,
          ease: "power2.out",
        }
      );
    },
    {
      scope: sectionRef,
      dependencies: [activeCategory],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="modern-skills-section section-padding"
    >
      <div className="modern-skills-container">
        <TitleHeader
          title="My Technical Skills"
          sub="⚡ WHAT I WORK WITH"
        />

        <div className="modern-skills-heading">
          <div>
            <span className="modern-skills-eyebrow">
              MY DEVELOPER TOOLKIT
            </span>
            <h3>
              Technologies behind
              <span> my work.</span>
            </h3>
            <p>
              From .NET application development to databases, frontend
              technologies, and AI-powered projects.
            </p>
          </div>

          <div className="modern-skills-total">
            <strong>{skills.length}</strong>
            <span>TECHNOLOGIES</span>
          </div>
        </div>

        <div className="modern-skill-filters">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={
                activeCategory === category.id
                  ? "modern-filter active"
                  : "modern-filter"
              }
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
              {category.id === "all" && (
                <span>{skills.length}</span>
              )}
            </button>
          ))}
        </div>   

<div className="modern-skills-grid">
  {filteredSkills.map((skill) => (
    <article className="compact-skill" key={skill.name}>
      <div className={`compact-skill-icon ${skill.color}`}>
        {skill.symbol}
      </div>
      <h4>{skill.name}</h4>
    </article>
  ))}
</div>

        <div className="modern-skills-bottom">
          <span>
            <i />
            CONTINUOUSLY LEARNING
          </span>
          <span>SHAHID ALI · SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
