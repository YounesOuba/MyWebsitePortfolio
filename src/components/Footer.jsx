import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-md border-t border-white/20 text-gray-200 relative z-10">
      
      {/* Left side - Name & Copy */}
      <div className="mb-4 md:mb-0 text-left text-sm md:text-base font-medium">
        &copy; {new Date().getFullYear()} <span className="font-semibold">Younes Ouba</span>. All rights reserved.
      </div>
      
      {/* Right side - Icons */}
      <div className="flex gap-8 text-xl md:text-2xl">
        <a
          href="https://github.com/YounesOuba"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-royalblue transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/younes-ouba-4560292a9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:oubayounesouba@gmail.com"
          aria-label="Email"
          className="hover:text-pink-500 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>

    </footer>
  );
}
