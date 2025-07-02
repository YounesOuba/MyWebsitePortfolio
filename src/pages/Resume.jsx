import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import cvFile from "../assets/mycv.pdf";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/javascript.png";
import reactIcon from "../assets/icons/react.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import phpIcon from "../assets/icons/php.png";
import mySqlIcon from "../assets/icons/mysql.png";
import mongoIcon from "../assets/icons/mongodb.png";
import pythonIcon from "../assets/icons/python.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import githubIcon from "../assets/icons/blackgithub.png";
import gitIcon from "../assets/icons/git.png";
import vscodeIcon from "../assets/icons/vscode.png";
import xamppIcon from "../assets/icons/xampp.png";
import mysqlworkbenchIcon from "../assets/icons/mysqlworkbench.png";
import { FaGraduationCap, FaCode, FaLanguage } from "react-icons/fa";

import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Resume() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const education = [
    { school: "OFPPT Mohammed El Fassi, Errachidia", degree: "Diploma DEVOWFS (Full Stack Web Development)", year: "Graduated: 2025" },
    { school: "Abdelmoumn High School, Tounfite", degree: "Bachelor's - Physics & Chemistry", year: "Graduated: 2023" },
  ];

  const skills = [
    { name: "HTML", icon: htmlIcon, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: cssIcon, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: jsIcon, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: reactIcon, url: "https://react.dev/" },
    { name: "Tailwind CSS", icon: tailwindIcon, url: "https://tailwindcss.com/" },
    { name: "Bootstrap", icon: bootstrapIcon, url: "https://getbootstrap.com/" },
    { name: "PHP", icon: phpIcon, url: "https://www.php.net/" },
    { name: "MySQL", icon: mySqlIcon, url: "https://www.mysql.com/" },
    { name: "MongoDB", icon: mongoIcon, url: "https://www.mongodb.com/" },
    { name: "Python", icon: pythonIcon, url: "https://www.python.org/" },
    { name: "Git", icon: gitIcon, url: "https://git-scm.com/" },
    { name: "GitHub", icon: githubIcon, url: "https://github.com/" },
    { name: "VS Code", icon: vscodeIcon, url: "https://code.visualstudio.com/" },
    { name: "XAMPP", icon: xamppIcon, url: "https://www.apachefriends.org/index.html" },
    { name: "MySQL Workbench", icon: mysqlworkbenchIcon, url: "https://www.mysql.com/products/workbench/" },
  ];

  const devSkills = ["HTML, CSS, JavaScript", "Bootstrap", "Tailwind CSS", "jQuery, Ajax", "React, Node.js", "UI/UX Design", "PHP, MySQL", "MongoDB, JSON", "Python", "Git & GitHub", "RESTful APIs", "Responsive Design", "Figma, Wireframing", "Version Control (Git)", "Linux", "XAMPP, MySQL Workbench", "Problem Solving", "Express.js", "Laravel", "Debugging & Testing", "VS Code Tools"];
  const languages = ["Arabic - Native", "Tamazight - Native", "English - Advanced", "French - Advanced", "German - Intermediate"];
  const softSkills = ["Problem Solving", "Project Management", "Organization", "Teamwork and Collaboration", "Data Analysis", "Creativity and Innovation", "Communication", "Time Management", "Adaptability", "Attention to Detail", "Critical Thinking", "Leadership"];

  return (
    <section id="resume" className="min-h-screen text-white px-4 sm:px-8 py-16 flex flex-col items-center gap-16">

      {/* Title */}
      <div className="w-full flex items-center justify-center gap-4" data-aos="fade-up" data-aos-duration="1000">
        {/* Left Line */}
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-pulse blur-sm"></div>
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-royalblue to-purple-500 text-center glitch relative">
            My Resume 
        </h2>
        {/* Right Line */}
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse blur-sm"></div>
    </div>


      {/* Responsive Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Education */}
        <div className="bg-[#111827] rounded-3xl border border-royalblue shadow-xl p-6 group hover:scale-105 transition relative" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1000">
          <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-royalblue">
            <FaGraduationCap /> Education
          </h3>
          {education.map((edu, i) => (
            <div key={i} className="bg-slate-800/60 p-4 rounded-xl border border-royalblue mb-4 hover:bg-royalblue/20 transition">
              <strong>{edu.school}</strong>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-xs text-royalblue mt-1">{edu.year}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-[#111827] rounded-3xl border border-purple-500 shadow-xl p-6 hover:scale-105 transition" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1100">
          <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-purple-400">
            <FaCode /> Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {devSkills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800/60 rounded-full border border-purple-500 text-xs hover:bg-purple-500/20 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-[#111827] rounded-3xl border border-green-400 shadow-xl p-6 hover:scale-105 transition" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
          <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-green-400">
            <FaLanguage /> Languages
          </h3>
          <ul className="space-y-3">
            {languages.map((lang, i) => (
              <li key={i} className="pl-4 border-l-4 border-green-400 bg-slate-800/60 p-3 rounded-lg hover:bg-green-400/10 transition">
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dev Toolbox */}
      <div className="max-w-7xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111827] p-5 rounded-xl flex flex-col items-center border border-royalblue shadow-[0_0_15px_#4169E1] hover:scale-110 hover:shadow-[0_0_30px_#4169E1] transition focus:outline-none focus:ring-2 focus:ring-royalblue"
            title={`Go to ${skill.name} official website`}
            data-aos="flip-left"
            data-aos-delay={500 + index * 50}
            data-aos-duration="900"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" loading="eager" />
            <p className="text-gray-300 text-sm">{skill.name}</p>
          </a>
        ))}
      </div>

      {/* Soft Skills Section */}
{/* Soft Skills & CV Container */}
<div className="w-full max-w-7xl flex flex-col md:flex-row gap-8" data-aos="fade-up">

  {/* Soft Skills*/}
  <div className="md:w-3/4 w-full bg-gradient-to-br from-royalblue to-purple-500 p-8 rounded-3xl shadow-xl">
    <h3 className="text-xl font-bold mb-6 text-[#0f172a] text-center">Soft Skills</h3>
    <ul className="flex flex-wrap justify-center gap-3">
      {softSkills.map((skill, i) => (
        <li key={i} className="bg-[#0f172a] text-white px-4 py-2 rounded-full border border-royalblue hover:scale-105 transition text-sm">
          {skill}
        </li>
      ))}
    </ul>
  </div>

  {/* CV Download */}
  <div className="md:w-1/4 w-full flex flex-col justify-center items-center bg-[#111827] border border-royalblue rounded-3xl p-8 shadow-xl hover:scale-105 transition">
    <h3 className="text-2xl font-bold text-royalblue mb-6 text-center">Download My CV</h3>
    <a
      href={cvFile}
      target='_blank'
      className="flex items-center gap-3 bg-royalblue hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition"
    >
      <FaDownload /> Download CV
    </a>
  </div>

</div>


{/* Contact Section */}
<div className="flex gap-6" data-aos="fade-up">
  <a
    href="https://github.com/YounesOuba"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
  >
    <FaGithub />
  </a>
  
  <a
    href="https://www.linkedin.com/in/younes-ouba-4560292a9"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
  >
    <FaLinkedin />
  </a>
  
  <a
    href="mailto:oubayounesouba@gmail.com"
    className="contact-icon"
  >
    <FaEnvelope />
  </a>
</div>
    </section>
  );
}
