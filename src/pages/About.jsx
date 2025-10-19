import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="about"
         className="min-h-screen bg-gradient-to-b from-[#070A10] to-[#00020694] text-white px-8 py-20 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Section Title */}
      <div
        className="w-full flex items-center justify-center gap-4 mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-[#4169E1] to-transparent blur-sm"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-[#5ea1ff] text-center uppercase tracking-widest">
          About Me
        </h2>
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-[#4169e1b1] to-transparent blur-sm"></div>
      </div>

      {/* Two Main Cards */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 mb-20 z-10">
        {/* Who I Am */}
        <motion.div
          className="p-6 bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-2xl border border-[#4169E1] shadow-[0_0_25px_#4169E1] hover:shadow-[0_0_40px_#4169E1] transition-all duration-500"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-[#4169E1] mb-5 uppercase">
            Who I Am
          </h3>
          <p className="text-gray-300 leading-relaxed text-base">
            I’m a passionate{" "}
            <span className="text-[#5ea1ff] font-semibold">
              Full-Stack Web Developer
            </span>{" "}
            with a love for crafting dynamic, responsive, and user-centered web
            applications. My work bridges{" "}
            <span className="text-[#5ea1ff]">creativity</span> and{" "}
            <span className="text-[#4169E1]">technical precision</span> —
            designing intuitive interfaces and building robust backend systems
            to bring ideas to life.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="p-8 bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-2xl border border-[#4169E1] shadow-[0_0_25px_#4169E1] hover:shadow-[0_0_40px_#4169E1] transition-all duration-500"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-[#4169E1] mb-5 uppercase">
            Contact
          </h3>
          <ul className="space-y-1 text-gray-300 text-base">
            <li className="flex items-center gap-3 hover:text-[#5ea1ff] transition">
              <FaEnvelope className="text-[#4169E1]" />
              <a
                href="mailto:oubayounesouba@gmail.com"
                className="hover:underline"
              >
                oubayounesouba@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#5ea1ff] transition">
              <FaPhone className="text-[#4169E1]" />
              <a href="tel:+212636401454" className="hover:underline">
                +212 636 401454
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#5ea1ff] transition">
              <FaMapMarkerAlt className="text-[#4169E1]" />
              <span>Midelt, Morocco</span>
            </li>
            <li className="flex items-center gap-3 hover:text-[#5ea1ff] transition">
              <FaLinkedin className="text-[#4169E1]" />
              <a
                href="https://www.linkedin.com/in/younes-ouba-4560292a9"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#5ea1ff] transition">
              <FaGithub className="text-[#4169E1]" />
              <a
                href="https://github.com/YounesOuba"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Diploma Section */}
      <motion.div
        className="w-full max-w-5xl -mt-10 bg-gradient-to-r from-[#4169E1] to-[#5ea1ff] p-10 rounded-2xl shadow-[0_0_40px_#4169E1] hover:scale-105 transition-all duration-500 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2 uppercase tracking-wider">
          <FaGraduationCap className="text-white" /> OFPPT Diploma
        </h3>
        <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-100">
          I earned my{" "}
          <span className="font-semibold text-white">
            Full Stack Web Development Diploma
          </span>{" "}
          from OFPPT, where I mastered front-end, back-end, and database
          technologies through hands-on projects that shaped me into a
          well-rounded developer ready for real-world challenges.
        </p>
      </motion.div>
    </section>
  );
}
