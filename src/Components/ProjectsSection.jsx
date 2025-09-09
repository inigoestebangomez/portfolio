import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Carousel from "./Carousel";

function ProjectsSection() {
  // 1. Creamos una referencia para la sección
  const sectionRef = useRef(null);

  // 2. Apuntamos useScroll al 'ref' de la sección.
  // El 'offset' define cuándo empieza y termina la animación.
  // ["start end", "end start"] significa que la animación dura
  // mientras la sección está visible en la pantalla.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 3. Animación para el PRIMER párrafo: opacidad de 1 a 0
  // Empieza a desvanecerse al 20% del scroll de la sección y termina al 50%.
  const opacityP1 = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.2]);
  const yP1 = useTransform(scrollYProgress, [0.2, 0.5], [10, -30]); // Sube un poco al desaparecer

  // 4. Animación para el SEGUNDO párrafo: opacidad de 0 a 1
  // Empieza a aparecer al 60% y termina al 90%.
  const opacityP2 = useTransform(scrollYProgress, [0.5, 0.2], [0.2, 1]);
  const yP2 = useTransform(scrollYProgress, [0.9, 0.2], [60, 30]); // Baja un poco al aparecer

  return (
    // Añadimos el 'ref' a la sección
    <section className="next-section" ref={sectionRef}>
      <div className="next-section-content">
          <motion.p
            style={{ opacity: opacityP1, y: yP1 }}
            className="next-section-content--text--des overlapping-text"
          >
            <p>Creating digital experiences that don&apos;t just stand out—they set the standard.</p>
          </motion.p>
          <motion.p
            style={{ opacity: opacityP2, y: yP2 }}
            className="next-section-content--text--des overlapping-text"
          >
            <p>Redefine your brand&apos;s presence, focusing on cutting-edge design and seamless functionality to position you as a leader in the digital landscape.</p>
          </motion.p>
        </div>
      <Carousel />
    </section>
  );
}

export default ProjectsSection;