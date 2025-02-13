import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlitchImage from "../Components/GlitchImage";
import WaveTransition from "../Components/WaveTransition";
import NextSection from "../Components/NextSection";

function Home() {
  const refX = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refX,
    offset: ["start end", "end start"],
  });

  // Ejemplo: activa el efecto glitch solo en un rango de scroll
  const [activeGlitch, setActiveGlitch] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Por ejemplo: activa glitch entre 30% y 60% del scroll
      if (latest > 0.3 && latest < 0.6) {
        setActiveGlitch(true);
      } else {
        setActiveGlitch(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Las animaciones para el texto o imagen pueden mantenerse si lo deseas
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);

  return (
    <>
      <section ref={refX} className="parallax-container">
        <div className="parallax-text-wrapper">
          <motion.h1 style={{ x: textX, opacity: textOpacity }} className="parallax-h1">
            Iñigo Esteban
          </motion.h1>
          <motion.h2 style={{ x: textX, opacity: textOpacity }} className="parallax-h2">
            Web Developer
          </motion.h2>
        </div>
        <div className={activeGlitch ? "activate-glitch" : ""}>
          <GlitchImage />
        </div>
      </section>

      <WaveTransition scrollYProgress={scrollYProgress} />
      <NextSection scrollYProgress={scrollYProgress} />
    </>
  );
}

export default Home;
