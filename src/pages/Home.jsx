import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import MyPic from "../assets/MyPic.png";
import SquaresBG from "../components/SquaresBG";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const HeroHello = "Hello There!";
  const HeroName = "I'm Younes";

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      
      {/* 3D Squares Background */}
      <SquaresBG />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto h-full overflow-x-hidden flex flex-col md:flex-row justify-center items-center text-center md:text-left z-10 relative font-body px-2 md:px-4 mt-10 md:mt-20 gap-8">
        {/* Hero Text */}
        <motion.div
          className="flex flex-col items-center md:items-start w-full md:w-1/2 ml-0 md:ml-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-royalblue mb-4 ml-0 md:ml-14 leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {HeroHello} <span className="text-white ml-2">{HeroName}</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-white max-w-xl font-bold mb-8 text-center md:text-left ml-0 md:ml-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Typewriter
              words={[
                "> Full-Stack Developer",
                "> Creative Developer",
                "> Building Modern, Interactive Experiences",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.p>
        </motion.div>

        {/* Profile Picture - hidden on mobile */}
        <motion.div
          className="hidden md:flex mt-4 md:mt-0 md:ml-12 md:w-1/2 justify-center ml-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <img
            src={MyPic}
            alt="That's me!"
            className="w-72 ml-10 md:ml-16 object-cover rounded-full shadow-lg hover:scale-105 transition"
          />
        </motion.div>
      </div>

      {/* Gradient Overlays */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-30 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-20 z-0"></div>

    <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent via-[#111827c4] to-[#00020694] z-0"></div>
  
    <div className="absolute bottom-6 w-full flex justify-center z-10">
      <button
        onClick={scrollToAbout}
        className="animate-bounce cursor-pointer bg-royalblue/20 p-3 rounded-full border border-royalblue hover:bg-royalblue/40 transition"
      >
        <ChevronDown className="text-royalblue w-6 h-6" />
      </button>
    </div>
      


    </div>
  );
}
