
import { useState, useEffect } from "react";

const links = [
  { name: "Home", link: "#home" },
{ name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`portfolio-nav ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="portfolio-nav-inner">

        <a href="#home" className="portfolio-logo" onClick={closeMenu}>
          SHAHID<span>.</span>
        </a>

        <nav className={`portfolio-links ${menuOpen ? "menu-open" : ""}`}>
          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            Contact Me ↗
          </a>
        </nav>
<a
  href="/files/Shahid-Ali-CV.pdf"
  download="Shahid-Ali-CV.pdf"
  className="download-cv-btn"
>
  <span>Download CV</span>
  <i className="ri-download-line"></i>
</a>
        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
};

export default NavBar;
