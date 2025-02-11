import { motion,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mainPicture from "../images/Prueba de cara.png";
import WaveTransition from "../Components/WaveTransition";
import NextSection from "../Components/NextSection";

function Home() {
  const refX = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refX,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <>
      {/* Sección Parallax */}
      <section ref={refX} className="parallax-container">
        <div className="parallax-text-wrapper">
          <motion.h1
            style={{ x: textX, opacity: textOpacity }}
            className="parallax-h1"
          >
            Iñigo Esteban
          </motion.h1>
          <motion.h2
            style={{ x: textX, opacity: textOpacity }}
            className="parallax-h2"
          >
            Web Developer
          </motion.h2>
        </div>
        <motion.img
          src={mainPicture}
          alt="Main"
          style={{ y: imageY, opacity: imageOpacity }}
          className="parallax-image"
        />
      </section>

      {/* Transición orgánica de blobs */}
      <WaveTransition scrollYProgress={scrollYProgress} />

      {/* Segunda sección con contenido */}
      <NextSection scrollYProgress={scrollYProgress}/>
    </>
  );
}

export default Home;
