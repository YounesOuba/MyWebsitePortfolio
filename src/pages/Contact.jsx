import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() { 
  const [state, handleSubmit] = useForm("xqabjaqp"); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);


  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-royalblue to-purple-500 text-transparent bg-clip-text">
          🎉 Message Sent!
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Thank you for reaching out! I'll get back to you soon.
        </p>
        <a
          href="#home"
          className="bg-gradient-to-r from-royalblue to-purple-500 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-4 md:px-12 flex flex-col items-center text-white bg-[#0f172a]"
    >
      <div className="w-full flex items-center justify-center gap-4 mb-12" data-aos="fade-up">
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-pulse blur-sm"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-royalblue to-purple-500 text-center glitch">
          Contact Me
        </h2>
        <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse blur-sm"></div>
      </div>

      <div
        className="w-full max-w-6xl bg-slate-800/60 p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-10"
        data-aos="zoom-in"
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
          <p className="text-gray-300 mb-4">
            Feel free to contact me through the following platforms:
          </p>
          <ul className="space-y-4">
            <li
              className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg hover:scale-105 transition"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <FaEnvelope size={20} />
              <a
                href="mailto:oubayounesouba@gmail.com"
                className="text-royalblue hover:underline"
              >
                oubayounesouba@gmail.com
              </a>
            </li>
            <li
              className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg hover:scale-105 transition"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <FaLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/younes-ouba-4560292a9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royalblue hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li
              className="flex items-center gap-4 bg-[#111827] p-4 rounded-lg hover:scale-105 transition"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <FaPhone size={20} />
              <span className="text-royalblue">+212 6 51 25 08 89</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3" data-aos="fade-left">
          <h3 className="text-3xl font-bold mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="bg-[#111827] p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-royalblue"
            />
            <ValidationError prefix="Name" field="Name" errors={state.errors} />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="bg-[#111827] p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-royalblue"
            />
            <ValidationError prefix="Email" field="Email" errors={state.errors} />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="bg-[#111827] p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-royalblue"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-gradient-to-r from-royalblue to-purple-500 hover:scale-105 transition text-white font-bold py-3 rounded-lg mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
