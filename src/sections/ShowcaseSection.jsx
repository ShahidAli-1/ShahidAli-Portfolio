
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "HireHub",
    subtitle: "Job Marketplace & ATS Resume Checker",
    description:
      "A job marketplace with three user roles, job applications, recruiter dashboards, subscription management, admin analytics, and ATS resume analysis.",
    image: "/images/hirehub.png",
    technologies: ["ASP.NET Core", "C#", "EF Core", "SQL Server"],
    github: "https://github.com/ShahidAli-1/HireHub",
  },
  {
    title: "Bus Ticket Booking System",
    subtitle: "Online Bus Reservation Platform",
    description:
      "A booking platform with admin and passenger roles, bus and route management, seat reservations, booking confirmation, and admin-approved payments.",
    image: "/images/bus-booking.png",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap"],
    github: "https://github.com/ShahidAli-1/BusTicketBookingSystem",
  },
  {
    title: "AI-Powered Online Proctoring",
    subtitle: "Intelligent Examination System",
    description:
      "An AI-based examination platform using computer vision to monitor students and detect suspicious examination activities.",
    image: "/images/proctoring.jpeg",
    technologies: ["Python", "Flask", "OpenCV", "YOLO", "DeepFace"],
    github: "",
  },
];

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>

          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p>
            A selection of applications I've developed using modern
            technologies and practical problem-solving.
          </p>
        </div>

        {/* Three equal project cards */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>

              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <span className="project-number">
                  0{index + 1}
                </span>
              </div>

              <div className="project-details">

                <span className="project-subtitle">
                  {project.subtitle}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                      </svg>
                      View Repository
                    </a>
                  ) : (
                    <span className="github-pending">
                      Repository coming soon
                    </span>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppShowcase;
