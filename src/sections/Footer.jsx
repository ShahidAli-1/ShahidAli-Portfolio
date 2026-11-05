
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          <a
            href="https://www.instagram.com/shahid_chaudhary.x/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/194VZ1c99E/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/shahidali64/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shahid Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
