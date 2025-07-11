export default function ContactSuccess({ setContactSent }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-royalblue to-purple-500 text-transparent bg-clip-text">
        🎉 Message Sent!
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-md">
        Thanks for reaching out! I’ll get back to you as soon as possible.
      </p>
      <a
        href="#home"
        className="bg-gradient-to-r from-royalblue to-purple-500 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg transition"
        onClick={() => setContactSent(false)}
      >
        Back to Home
      </a>
    </div>
  );
}
