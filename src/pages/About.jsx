import { motion } from "framer-motion";
import aos from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="min-h-screen mb-20 bg-[#0f172a] text-white px-6 py-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Section Title */}
      <div className="w-full flex items-center justify-center gap-4 mb-12" data-aos="fade-up" data-aos-duration="1000">
        {/* Left Line */}
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-pulse blur-sm"></div>
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-royalblue to-purple-500 text-center glitch relative">
            About Me
        </h2>
        {/* Right Line */}
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse blur-sm"></div>
    </div>


      {/* Two Main Cards */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 mb-16 z-10">

        {/* Who I Am */}
        <motion.div
          className="p-8 bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-xl border border-royalblue shadow-[0_0_25px_#4169E1] hover:shadow-[0_0_40px_#4169E1] transition-all duration-500"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-royalblue mb-4 uppercase">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed">
            I am a web developer with a passion for creating dynamic and
            responsive websites. I specialize in both front-end and back-end
            development, working with several technologies. I enjoy designing
            user-friendly interfaces and building functional web applications
            that deliver smooth user experiences.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="p-8 bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-xl border border-purple-500 shadow-[0_0_25px_#8b5cf6] hover:shadow-[0_0_40px_#8b5cf6] transition-all duration-500"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-purple-400 mb-4 uppercase">Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 hover:text-purple-300">
              <FaEnvelope className="text-purple-400" />
              <a href="mailto:oubayounesouba@gmail.com" className="hover:underline">oubayounesouba@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 hover:text-purple-300">
              <FaPhone className="text-purple-400" />
              <a href="tel:+212636401454" className="hover:underline">+212 636 401454</a>
            </li>
            <li className="flex items-center gap-3 hover:text-purple-300">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Tounfite, Midelt, Morocco</span>
            </li>
            <li className="flex items-center gap-3 hover:text-purple-300">
              <FaLinkedin className="text-purple-400" />
              <a href="https://www.linkedin.com/in/younes-ouba-4560292a9" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-3 hover:text-purple-300">
              <FaGithub className="text-purple-400" />
              <a href="https://github.com/YounesOuba" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* OFPPT Diploma Full Width */}
      <motion.div
        className="w-full max-w-6xl bg-gradient-to-r from-royalblue to-purple-500 p-10 rounded-xl shadow-[0_0_40px_#4169E1] hover:scale-105 transition-all duration-500 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4 flex items-center flex-nowrap gap-2 justify-center uppercase">
          <FaGraduationCap className="text-white" /> OFPPT Diploma
        </h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I earned my Full Stack Web Development diploma from OFPPT. Over two years, I gained strong skills in front-end, back-end, and databases, with real project experience that prepared me for professional work.
        </p>
      </motion.div>

    </section>
  );
}
