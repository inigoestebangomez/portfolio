import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animaciones basadas en scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <footer ref={ref}>
      <div className="footer-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M1440 120H0V0c0 0 200 70 720 70s720-70 720-70v120z"></path>
        </svg>
      </div>

      <div className="footer-content-center">
        <div className="footer-content">
          <motion.h2 style={{ scale, y }}>Let’s talk!</motion.h2>
          {/* <motion.p style={{ opacity, y }}>Send me an email.</motion.p> */}
          <motion.div
            className="footer-links"
            style={{ opacity, y }}
            transition={{ delay: 0.2 }}
          >
            <a href="mailto:inistephenblog@gmail.com">inistephenblog@gmail.com</a>
            <div className="socials">
              <a href="https://github.com/inigoestebangomez">GitHub</a>
              <a href="https://www.linkedin.com/in/inigo-esteban-gomez/">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <p className="footer-credit">
        © 2025 Iñigo Esteban. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
