import { motion,useScroll, useTransform } from "framer-motion";
import mainPicture from "../images/Prueba de cara.png";
import { useRef } from "react";

function Home() {
  const refX = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refX,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div ref={refX} className="parallax-container">
      <motion.h1 
        style={{ x: textX, opacity: textOpacity }}
        className="parallax-text">
        Iñigo Esteban</motion.h1>
      <motion.img
        src={mainPicture}
        alt="Main Picture"
        style={{ y: imageY }}
        className="parallax-image"
      />
    </div>
  );
}

export default Home;
