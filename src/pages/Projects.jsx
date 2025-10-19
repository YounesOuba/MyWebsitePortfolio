import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

import project1a from "../assets/projects/project1/project1a.png";
import project1b from "../assets/projects/project1/project1b.png";
import project1c from "../assets/projects/project1/project1c.jpg";
import project1d from "../assets/projects/project1/project1d.jpg";
import project1e from "../assets/projects/project1/project1e.jpg";
import project1f from "../assets/projects/project1/project1f.jpg";
import project1g from "../assets/projects/project1/project1g.jpg";
import project1h from "../assets/projects/project1/project1h.jpg";
import project1i from "../assets/projects/project1/project1i.jpg";
import project1j from "../assets/projects/project1/project1j.jpg";
import project1k from "../assets/projects/project1/project1k.jpg";
import project1l from "../assets/projects/project1/project1l.jpg";
import project1m from "../assets/projects/project1/project1m.jpg";

import project2a from "../assets/projects/project2/project2.png";
import project2b from "../assets/projects/project2/project2b.png";
import project2c from "../assets/projects/project2/project2c.png";
import project2d from "../assets/projects/project2/project2d.png";
import project2e from "../assets/projects/project2/project2e.png";

import project3a from "../assets/projects/project3/project3a.png";
import project3b from "../assets/projects/project3/project3b.png";
import project3c from "../assets/projects/project3/project3c.png";
import project3d from "../assets/projects/project3/project3d.png";
import project3e from "../assets/projects/project3/project3e.png";
import project3f from "../assets/projects/project3/project3f.png";
import project3g from "../assets/projects/project3/project3g.png";
import project3h from "../assets/projects/project3/project3h.png";
import project3i from "../assets/projects/project3/project3i.png";
import project3j from "../assets/projects/project3/project3j.png";
import project3k from "../assets/projects/project3/project3k.png";

import project4a from "../assets/projects/project4/project4a.png";
import project4b from "../assets/projects/project4/project4b.png";

import spoty1 from "../assets/projects/spotyflex/1.png";
import spoty2 from "../assets/projects/spotyflex/2.png";
import spoty3 from "../assets/projects/spotyflex/3.png";
import spoty4 from "../assets/projects/spotyflex/4.png";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      title: "Accounting App - AccouNext",
      images: [project1a, project1b, project1c, project1d, project1e, project1f, project1g, project1h, project1i, project1j, project1k, project1l, project1m],
      description: "A modern accounting web app built with React, PHP & MySQL, tailored for Moroccan SMEs.",
      demo: "https://coming-soon-seven-theta.vercel.app/",
      github: "https://github.com/bumpex/accounext",
      tags: ["React", "PHP", "MySQL", "Tailwind"],
    },
    {
      title: "Parc Informatique",
      images: [project3e, project3f, project3g, project3h, project3i, project3j, project3k, project3a, project3b, project3c, project3d],
      description: "A comprehensive IT park management system with user-friendly interface and responsive design.",
      demo: "https://coming-soon-seven-theta.vercel.app/",
      github: "https://github.com/YounesOuba/ParcInformatique",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "UI/UX", "Responsive Design"],
    },
    {
      title: "Portfolio Website",
      images: [project2a, project2b, project2c, project2d, project2e],
      description: "Interactive portfolio showcasing projects, skills, and experience with cool animations.",
      demo: "https://hasnae-portfolio.vercel.app/",
      github: "https://github.com/YounesOuba/Hasnae-Portfolio-V3",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Converter App",
      images: [project4a, project4b],
      description: "Responsive clean UI/UX, App converter between GB and MB, with a simple and intuitive design.",
      demo: "https://gbtombconverter.vercel.app/",
      github: "https://github.com/YounesOuba/gbtombconverter",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    },
    {
      title: "SpotyFlex",
      images: [spoty1, spoty2, spoty3, spoty4],
      description: "Spotyflex is a blog of fitness & wellness articles, with a modern and responsive design.",
      demo: "https://spotyflex.com/",
      github: "https://github.com/YounesOuba/spotyflex",
      tags: ["Vite Js", "React", "React Router", "Tailwind CSS", "Toastify"],
    }
  ];

  const openModal = (images, project) => {
    setCurrentImages(images);
    setModalProject(project);
    setActiveIndex(0);
    setShowModal(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
  <section id="projects" className="min-h-screen px-4 sm:px-8 py-20 bg-gradient-to-b from-[#070A10] to-[#00020694] text-white flex flex-col items-center gap-16 relative overflow-hidden">

      {/* Title with Animated Lines */}
      <div className="w-full flex items-center justify-center gap-4" data-aos="fade-up">
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-pulse blur-sm"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-[#5ea1ff] text-center uppercase tracking-widest">
          My Projects
        </h2>
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-pulse blur-sm"></div>
      </div>

      {/* Projects Grid */}
  <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {projects.map((project, index) => (
          <div key={index} className="group bg-gradient-to-br from-blue-950 via-blue-950 to-transparent rounded-3xl border border-royalblue p-4 flex flex-col shadow-xl hover:shadow-[0_0_30px_rgba(65,105,225,0.35)] transition transform-gpu" data-aos="fade-up" data-aos-delay={index * 100}>
            
            {/* Image with Hover */}
            <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer" onClick={() => openModal(project.images, project)}>
              <img src={project.images[0]} alt={project.title} className="h-48 w-full object-cover rounded-xl transform group-hover:scale-110 transition duration-500" />
              {project.images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.images.map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-royalblue/70 opacity-70 group-hover:opacity-100 shadow-sm"></span>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold text-blue-100 mb-2">{project.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-royalblue/10 border border-royalblue rounded-full text-xs text-white hover:bg-royalblue/20 transition">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-royalblue to-royalblue/60 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg hover:scale-110 transition">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-royalblue text-royalblue text-sm font-bold px-4 py-2 rounded-full hover:bg-royalblue hover:text-white hover:scale-110 transition">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Side Arrows */}
      {showModal && (
        <div className="fixed inset-0 bg-blue-950 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl bg-[#111827] rounded-3xl p-6 flex flex-col items-center gap-6">
            
            {/* Image with Side Arrows */}
            <div className="relative w-full flex items-center justify-center">
                  <img src={currentImages[activeIndex]} alt="Project Preview" className="h-72 object-contain rounded-xl mx-auto" />
              {currentImages.length > 1 && (
                <>
                      <button onClick={prevImage} className="absolute left-2 bg-royalblue text-white p-2 rounded-full hover:bg-royalblue/80 transition">
                    <FaArrowLeft />
                  </button>
                      <button onClick={nextImage} className="absolute right-2 bg-royalblue text-white p-2 rounded-full hover:bg-royalblue/80 transition">
                    <FaArrowRight />
                  </button>
                </>
              )}
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-bold text-royalblue">{modalProject.title}</h3>
            <p className="text-gray-200 text-sm text-center">{modalProject.description}</p>

            <div className="flex justify-center gap-4 mt-4">
              <a href={modalProject.demo} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-royalblue to-royalblue/60 text-white px-6 py-2 rounded-full shadow-lg hover:scale-110 transition">
                Live Demo
              </a>
              <a href={modalProject.github} target="_blank" rel="noreferrer" className="border border-royalblue text-royalblue px-6 py-2 rounded-full hover:bg-royalblue hover:text-white transition">
                GitHub
              </a>
            </div>

            {/* Close Button */}
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-white text-2xl hover:text-royalblue"> <IoMdCloseCircleOutline /> </button>
          </div>
        </div>
      )}

    </section>
  );
}
