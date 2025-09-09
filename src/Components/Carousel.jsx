import { useState, useRef } from "react";
import roy from "../images/roy.gif";
import coolmex from "../images/coolmex.gif";
import wineweb from "../images/wineweb.gif";
import workoutsweb from "../images/workoutsweb.gif";
import winevalue from "../images/wine-tasting-notes.gif";
import livewave from "../images/livewave.gif";

// Importamos los hooks necesarios de Framer Motion
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const projects = [
  {
    id: 1,
    title: "WINE TASTING NOTES",
    des: "React Native + Expo Router | Supabase",
    img: winevalue,
    link: "#",
  },
  { id: 2, title: "ROY", des: "VueJs + NuxtJs", img: roy, link: "#" },
  {
    id: 3,
    title: "LIVEWAVE",
    des: "React Native | Supabase",
    img: livewave,
    link: "#",
  },
  {
    id: 4,
    title: "COOLMEX",
    des: "React + NodeJs | NodeJs + Express",
    img: coolmex,
    link: "#",
  },
  {
    id: 5,
    title: "WINEWEB",
    des: "React + NodeJs | NodeJs + Express",
    img: wineweb,
    link: "#",
  },
  {
    id: 6,
    title: "WORKOUTSWEB",
    des: "React + NodeJs | NodeJs + Express",
    img: workoutsweb,
    link: "#",
  },
];

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
          <li
            key={p.id}
            className="project-item"
            onMouseEnter={() => setHovered(p)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>{p.title}</h3>
            <p>{p.des}</p>
          </li>
        ))}
      </ul>

      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.div
            key={hovered.id}
            className="floating-preview"
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
            }}
          >
            <motion.img
              key={hovered.img}
              src={hovered.img}
              alt={hovered.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
