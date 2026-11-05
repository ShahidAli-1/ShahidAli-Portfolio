
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const cardRef = useRef(null);
  const ropeRef = useRef(null);
  const sceneRef = useRef(null);

  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
  });

  const updateRope = (x, y) => {
    const rope = ropeRef.current;
    if (!rope) return;

    const anchorY = 55;
    const distance = Math.sqrt(x * x + (anchorY + y) ** 2);
    const angle = Math.atan2(x, anchorY + y) * (180 / Math.PI);

    gsap.set(rope, {
      rotation: angle,
      scaleY: distance / anchorY,
    });
  };

  const handlePointerDown = (e) => {
    const card = cardRef.current;
    if (!card) return;

    e.preventDefault();

    dragRef.current.active = true;
    dragRef.current.startX = e.clientX - dragRef.current.x;
    dragRef.current.startY = e.clientY - dragRef.current.y;

    card.setPointerCapture(e.pointerId);

    gsap.killTweensOf(card);
    gsap.killTweensOf(ropeRef.current);
    gsap.killTweensOf(sceneRef.current);
  };

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();

    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    if (dragRef.current.active) {
      const x = Math.max(
        -125,
        Math.min(e.clientX - dragRef.current.startX, 125)
      );

      const y = Math.max(
        -100,
        Math.min(e.clientY - dragRef.current.startY, 150)
      );

      dragRef.current.x = x;
      dragRef.current.y = y;

      gsap.set(card, {
        x,
        y,
        rotationX: (e.clientY - centerY) * -0.08,
        rotationY: (e.clientX - centerX) * 0.08,
        rotationZ: x * 0.045,
      });

      updateRope(x, y);
      return;
    }

    const normalizedX = (e.clientX - centerX) / (bounds.width / 2);
    const normalizedY = (e.clientY - centerY) / (bounds.height / 2);

    gsap.to(card, {
      rotationX: normalizedY * -10,
      rotationY: normalizedX * 12,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handlePointerUp = () => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;

    const card = cardRef.current;
    const rope = ropeRef.current;

    if (!card || !rope) return;

    gsap.to(card, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      duration: 1.8,
      ease: "elastic.out(1, 0.35)",
      overwrite: "auto",
      onUpdate: () => {
        const currentX = gsap.getProperty(card, "x");
        const currentY = gsap.getProperty(card, "y");
        updateRope(currentX, currentY);
      },
      onComplete: () => {
        dragRef.current.x = 0;
        dragRef.current.y = 0;
      },
    });
  };

  useGSAP(() => {
    const card = cardRef.current;

    if (!card) return;

    // Gentle continuous hanging movement
    gsap.to(card, {
      rotationZ: 1.8,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Intro animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(".hero-kicker", {
      y: 25,
      opacity: 0,
      duration: 0.7,
    })
      .from(
        ".hero-heading",
        {
          y: 45,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.35"
      )
      .from(
        ".hero-description",
        {
          y: 25,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.45"
      )
      .from(
        ".hero-actions",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.35"
      )
      .from(
        ".hero-socials",
        {
          y: 15,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        ".hero-profile-frame",
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
        },
        "-=0.5"
      );

    gsap.to(".hero-glow", {
      opacity: 0.8,
      scale: 1.15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section id="home" className="portfolio-hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-container">
        {/* Hanging Profile Photo */}
        <div className="hero-visual hero-photo-visual">
          <div ref={sceneRef} className="hanging-photo-scene">
            <div className="rope-anchor">
              <div className="rope-anchor-ring" />
            </div>

            <div ref={ropeRef} className="hanging-rope">
              <div className="rope-string" />
              <div className="rope-connector" />
            </div>

            <div
              ref={cardRef}
              className="hero-profile-frame hanging-photo-card"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onLostPointerCapture={handlePointerUp}
            >
              <div className="hero-profile-glow" />

              <img
                src="/images/shahid-profile.jpeg"
                alt="Shahid Ali - Full Stack Developer"
                className="hero-profile-photo"
                draggable="false"
              />

              <div className="hero-profile-caption">
                <span className="hero-active-dot" />
                FULL STACK DEVELOPER
              </div>
            </div>
          </div>
        </div>

        {/* Hero Introduction */}
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="hero-status-dot" />
            Full Stack Developer · MULTAN, PAKISTAN
          </div>

          <h1 className="hero-heading">
            Hi, I'm
            <br />
            <span className="gradient-text">Shahid Ali.</span>
            <br />
            <span className="hero-role">Full Stack Developer</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive web applications with a focus on
            clean architecture, practical problem-solving, and great user
            experiences. My core development stack includes C#, ASP.NET
            Core, SQL Server, and modern frontend technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's Talk <span>→</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/ShahidAli-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <span className="hero-social-divider">/</span>

            <a
              href="https://www.linkedin.com/in/shahidali64/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="hero-focus">
            <span>CORE TECHNOLOGIES</span>

            <div>
              <span>C#</span>
              <span>ASP.NET CORE</span>
              <span>SQL SERVER</span>
              <span>JAVASCRIPT</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>BOOTSTRAP</span>
              <span>PYTHON</span>
              <span>GIT & GITHUB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
