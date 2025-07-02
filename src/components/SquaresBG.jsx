import { useEffect, useState } from "react";

export default function SquaresBG() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lights, setLights] = useState([]);

  const squareSize = 100;
  const cols = Math.ceil(window.innerWidth / squareSize);
  const rows = Math.ceil(window.innerHeight / squareSize);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const col = Math.floor(e.clientX / squareSize);
      const row = Math.floor(e.clientY / squareSize);
      const index = row * cols + col;
      setHoverIndex(index);

      const x = (e.clientY / window.innerHeight - 0.5) * 15;
      const y = (e.clientX / window.innerWidth - 0.5) * 15;
      setRotation({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cols]);

  // Generate falling lights
  useEffect(() => {
    const interval = setInterval(() => {
      setLights((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * window.innerWidth,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 2 + 1,
        },
      ]);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-5 bg-dark">
      {/* 3D Rotating Squares */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
          gridAutoRows: `${squareSize}px`,
          transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
          <div
            key={i}
            className="border border-blue-500 transition-all pointer-events-auto opacity-10"
            style={{
              backgroundColor: hoverIndex === i ? "rgba(65, 105, 225, 0.5)" : "transparent",
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              transition: "background-color 0.3s ease",
            }}
          ></div>
        ))}
      </div>

      {/* Falling Lights Layer */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute bg-blue-500 blur-sm opacity-90"
          style={{
            top: 0,
            left: `${light.left}px`,
            width: `${light.size}px`,
            height: `100vh`,
            animation: `fall ${3 + light.speed}s linear forwards`,
          }}
        ></div>
      ))}

      {/* Falling Animation */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
