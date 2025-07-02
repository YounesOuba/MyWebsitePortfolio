import React, { useEffect, useRef } from "react";
import Zdog from "zdog";

export default function ZdogBG() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set initial size
    function setSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    setSize();

    // Setup illo (Zdog Illustration)
    const illo = new Zdog.Illustration({
      element: canvas,
      dragRotate: false,
      zoom: 1,
      resize: true, // this helps with auto resizing in Zdog v1.1.3+
    });

    // Group to hold cubes
    const group = new Zdog.Group({
      addTo: illo,
    });

    const cubeCount = 10; // smaller count for performance
    const spacing = 30;

    // Create cubes in grid
    for (let x = -cubeCount; x <= cubeCount; x++) {
      for (let y = -cubeCount; y <= cubeCount; y++) {
        new Zdog.Box({
          addTo: group,
          width: 20,
          height: 20,
          depth: 20,
          stroke: true,
          color: "#4169E1", // royal blue
          leftFace: "#f0c419",
          rightFace: "#b8860b",
          topFace: "#ffda44",
          translate: { x: x * spacing, y: y * spacing },
        });
      }
    }

    let pointerX = 0;
    let pointerY = 0;

    function animate() {
      // Rotate group slowly
      group.rotate.x += 0.01;
      group.rotate.y += 0.01;

      // Interpolate rotation towards pointer
      group.rotate.x += (pointerY * 0.002 - group.rotate.x) * 0.1;
      group.rotate.y += (pointerX * 0.002 - group.rotate.y) * 0.1;

      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left - rect.width / 2;
      pointerY = e.clientY - rect.top - rect.height / 2;
    }

    window.addEventListener("pointermove", onPointerMove);

    window.addEventListener("resize", () => {
      setSize();
      illo.resize(); // important to tell illo to resize
    });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 bg-dark"
      style={{ touchAction: "none" }}
    />
  );
}
