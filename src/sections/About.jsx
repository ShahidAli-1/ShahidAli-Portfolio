
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const About = () => {
  useGSAP(() => {
    gsap.from(".about-info", {
      y: 35,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
      },
    });

    gsap.from(".about-3d-stage", {
      x: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
      },
    });
  });

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">GET TO KNOW ME</span>

          <h2>
            About <span className="gradient-text">Me</span>
          </h2>

          <p>A little introduction about who I am and what I do.</p>
        </div>

        <div className="about-content">
          <div className="about-info">
            <span className="about-small-label">WHO I AM</span>

            <h3>
              Building Digital Solutions
              <span className="gradient-text"> With Purpose.</span>
            </h3>

            <p>
              I'm Shahid Ali, a Computer Science graduate from the
              University of Southern Punjab, Multan, Pakistan.
              I'm passionate about software development and building
              practical, user-friendly web applications.
            </p>

            <p>
              My primary focus is backend and web application development
              using C#, ASP.NET Core, and SQL Server, along with modern
              frontend technologies. I'm continuously improving my skills
              through hands-on projects and professional experience.
            </p>

            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">EDUCATION</span>
                <span className="detail-value">BS Computer Science</span>
                <span className="detail-sub">
                  University of Southern Punjab
                </span>
              </div>

              <div className="about-detail">
                <span className="detail-label">LOCATION</span>
                <span className="detail-value">Multan, Pakistan</span>
              </div>

              <div className="about-detail">
                <span className="detail-label">CURRENT FOCUS</span>
                <span className="detail-value">Full Stack Developer</span>
              </div>

              <div className="about-detail">
                <span className="detail-label">INTEREST</span>
                <span className="detail-value">Software Engineering</span>
              </div>
            </div>
          </div>

          <div className="about-visual about-3d-visual">
            <div className="about-3d-stage">
              <HeroExperience />
            </div>

            <div className="about-3d-caption">
              <span className="hero-status-dot" />
              EXPLORING THE 3D WORLD
            </div>

            <div className="about-decoration about-decoration-one" />
            <div className="about-decoration about-decoration-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
