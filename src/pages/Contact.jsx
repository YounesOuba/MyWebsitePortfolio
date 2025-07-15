import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqabjaqp");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (state.succeeded) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 bg-[#0e111a]"
        data-aos="zoom-in"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#4169e1] to-purple-500 text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          🎉 Message Sent!
        </h1>
        <p
          className="text-lg text-gray-300 mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Thank you for reaching out! I’ll get back to you soon.
        </p>
        <a
          href="#home"
          className="bg-gradient-to-r from-[#4169e1] to-purple-500 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <>
        <div className="w-full flex items-center justify-center gap-4 mb-12" data-aos="fade-up">
        <div className="hidden md:block mt-16 -mb-10 flex-grow h-0.5 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-pulse blur-sm"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-royalblue to-purple-500 text-center mt-16 -mb-10 glitch">
          Contact Me
        </h2>
        <div className="hidden md:block mt-16 -mb-10 flex-grow h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse blur-sm"></div>
    </div>
    <section
      id="contact"
      className="w-full py-20 px-4 bg-[#0e111a] flex justify-center items-center"
    >
      <div
        className="w-full max-w-6xl bg-[#111827] shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
        data-aos="fade-up"
      >
        {/* LEFT SIDE: FORM */}
        <div
          className="w-full md:w-1/2 p-8 sm:p-12 bg-gradient-to-br from-[#1c1f3a] via-[#2c2f5b] to-[#4169e1] text-white"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold mb-8">Send me a message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 placeholder-gray-300 transition"
              data-aos="fade-right"
              data-aos-delay="100"
            />
            <ValidationError field="name" prefix="Name" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 placeholder-gray-300 transition"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <ValidationError field="email" prefix="Email" errors={state.errors} />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 placeholder-gray-300 resize-none transition"
              data-aos="fade-right"
              data-aos-delay="400"
            />
            <ValidationError field="message" prefix="Message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-600 hover:bg-purple-600 transition text-white font-semibold py-3 px-6 rounded-md mt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: CONTACT INFO */}
        <div
          className="w-full md:w-1/2 p-8 sm:p-12 bg-[#0e111a] text-white flex flex-col justify-center"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#4169e1]">Contact me</h3>
          <p className="text-gray-300 mb-6">
            Feel free to ask — I’m open to collaboration, freelance, or just a chat.
          </p>
          <ul className="space-y-6 text-base">
            <li className="flex items-center gap-4 p-3 rounded-lg border border-gray-700 bg-[#181a20] transition-colors duration-200 hover:bg-royalblue/80 group">
              <FaMapMarkerAlt className="text-blue-500 text-xl group-hover:text-white transition" />
              <span className="font-medium text-white group-hover:text-white">Midelt, Morocco</span>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-gray-700 bg-[#181a20] transition-colors duration-200 hover:bg-royalblue/80 group">
              <FaPhone className="text-blue-500 text-xl group-hover:text-white transition" />
              <a href="tel:+212651250889" className="text-white font-medium transition group-hover:text-white">
                +212 6 36 40 14 54
              </a>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-gray-700 bg-[#181a20] transition-colors duration-200 hover:bg-royalblue/80 group">
              <FaEnvelope className="text-blue-500 text-xl group-hover:text-white transition" />
              <a href="mailto:oubayounesouba@gmail.com" className="text-white font-medium transition group-hover:text-white">
                oubayounesouba@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-gray-700 bg-[#181a20] transition-colors duration-200 hover:bg-royalblue/80 group">
              <FaLinkedin className="text-blue-500 text-xl group-hover:text-white transition" />
              <a
                href="https://www.linkedin.com/in/younes-ouba-4560292a9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium transition group-hover:text-white"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
