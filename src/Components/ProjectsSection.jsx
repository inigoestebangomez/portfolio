import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Carousel from "./Carousel";

function ProjectsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animaciones corregidas para el texto
  const opacityP1 = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const yP1 = useTransform(scrollYProgress, [0.2, 0.5], [0, -30]);
  const opacityP2 = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const yP2 = useTransform(scrollYProgress, [0.5, 0.8], [30, 0]);

  return (
    // Usamos un Fragmento para devolver dos elementos hermanos
    <>
      {/* PARTE 1: La sección del texto animado (se mantiene como estaba) */}
      <section className="next-section" ref={sectionRef}>
        <div className="next-section-content">
          <motion.p
            style={{ opacity: opacityP1, y: yP1 }}
            className="next-section-content--text--des overlapping-text"
          >
            Creating digital experiences that don&apos;t just stand out—they set the standard.
          </motion.p>
          <motion.p
            style={{ opacity: opacityP2, y: yP2 }}
            className="next-section-content--text--des overlapping-text"
          >
            Redefine your brand&apos;s presence, focusing on cutting-edge design and seamless functionality to position you as a leader in the digital landscape.
          </motion.p>
        </div>
      </section>
      <div className="projects-section-wrapper">
        <div className="recent-work">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;