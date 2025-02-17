import { motion, useTransform, useScroll } from 'framer-motion'
import Carousel from './Carousel';

function ProjectsSection() {
    
    const { scrollYProgress } = useScroll();
    const nextOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
    const nextY = useTransform(scrollYProgress, [0.6, 1], [50, 0]);
  
    return (
        <section className="next-section">
            <motion.div style={{ opacity: nextOpacity, y: nextY }} className="next-section-content">
                <h3>PROJECTS</h3>
                <Carousel />
            </motion.div>
        </section>
  )
}

export default ProjectsSection