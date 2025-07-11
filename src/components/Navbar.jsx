import { useEffect, useState } from "react";
import MyLogo from "../assets/MyLogo.png";

export default function Navbar() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navLinksIds = navLinks.map(link => link.href);
    const timeout = setTimeout(() => {
      const sections = navLinksIds.map(id => document.querySelector(id)).filter(Boolean);
      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.4 }
      );

      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[80%] bg-dark/70 backdrop-blur-lg border border-royalblue rounded-full shadow-xl z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-3 relative">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <img
            src={MyLogo}
            alt="My Logo"
            className="w-12 h-12 object-cover rounded-full transition-transform group-hover:scale-110 group-hover:shadow-[0_6px_24px_0_#4169E1]"
          />
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-7 h-0.5 bg-royalblue mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-7 h-0.5 bg-royalblue mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-7 h-0.5 bg-royalblue transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Navigation */}
        <div
          className={`font-body text-white font-bold flex-col md:flex-row md:flex items-center absolute md:static w-full md:w-auto bg-dark md:bg-transparent rounded-b-2xl md:rounded-none shadow-xl md:shadow-none transition-all duration-300 z-40 ${
            menuOpen ? "flex top-[72px] left-0 px-6 py-4" : "hidden md:flex"
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className={`relative py-2 md:py-1 px-4 transition hover:text-royalblue hover:scale-105 ${
                activeSection === href ? "text-royalblue" : ""
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-royalblue transition-all duration-300 ${
                  activeSection === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
