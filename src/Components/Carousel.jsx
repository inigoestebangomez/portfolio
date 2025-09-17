import { useState, useRef } from "react";
import { projects } from "../data/projectData.js";

// Importamos los hooks necesarios de Framer Motion
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

function Carousel() {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  // 1. Usamos MotionValues para las coordenadas del ratón.
  // Esto no causa re-renders y permite animaciones más complejas.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Usamos useSpring para suavizar el movimiento de la imagen
  const smoothOptions = { damping: 50, stiffness: 300, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);

  // 2. Creamos una transformación para la rotación (el efecto de inclinación)
  // Mapeamos la posición X del ratón a un valor de rotación en grados.
  const transform = useTransform(
    smoothMouseX,
    [0, ref.current?.clientWidth || 0],
    [-5, 5] // Inclinación
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Actualizamos MotionValues en lugar del estado
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="recent-work" onMouseMove={handleMouseMove} ref={ref}>
      <p className="recent-work-p">RECENT WORK</p>
      <ul className="project-list">
        {projects.map((p) => (
          <motion.li
            key={p.id}
            className="project-item"
            onMouseEnter={() => setHovered(p)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{
              scale: 0.96,
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3>{p.title}</h3>
            <p>{p.des}</p>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.div
            key={hovered.id}
            className="floating-preview"
            onMouseEnter={() => setHovered(hovered)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              x: smoothMouseX,
              y: smoothMouseY,
              rotate: transform,
              translateX: "-50%",
              translateY: "-50%",
              pointerEvents: "none",
            }}
          >
            <motion.img
              key={hovered.preview}
              src={hovered.preview}
              alt={hovered.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Botón centrado y clicable */}
            <Link to={`/work/${hovered.slug}`} className="preview-button">
              View
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
