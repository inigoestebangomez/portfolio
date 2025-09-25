import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlitchImage from "../Components/GlitchImage";
import ProjectsSection from "../Components/ProjectsSection";
import Footer from "../Components/Footer";

function Home() {
  const refX = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refX,
    offset: ["start end", "end start"],
  });

  const [activeGlitch, setActiveGlitch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.3 && latest < 0.6) setActiveGlitch(true);
      else setActiveGlitch(false);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const start = isMobile ? 0.3 : 0.5; 
  const end   = isMobile ? 0.9 : 1; 

  const h1X = useTransform(
    scrollYProgress,
    [start, end],
    isMobile ? ["0vw", "-40vw"] : ["0%", "-50%"]
  );
  const h2X = useTransform(
    scrollYProgress,
    [start, end],
    isMobile ? ["0vw", "40vw"] : ["0%", "50%"]
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);

  return (
    <>
      <section ref={refX} className="parallax-container">
        <div className="parallax-text-wrapper">
          <motion.h1
            style={{ x: h1X, opacity: textOpacity }}
            className="parallax-h1"
          >
            IÑIGO ESTEBAN
          </motion.h1>
          <motion.h2
            style={{ x: h2X, opacity: textOpacity }}
            className="parallax-h2"
          >
            WEB DEVELOPER
          </motion.h2>
        </div>
        <div className={activeGlitch ? "activate-glitch" : ""}>
          <GlitchImage />
        </div>
      </section>
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default Home;
