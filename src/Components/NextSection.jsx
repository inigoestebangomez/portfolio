import { motion, useTransform, useScroll } from 'framer-motion'

function NextSection() {
    
    const { scrollYProgress } = useScroll();
    const nextOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
    const nextY = useTransform(scrollYProgress, [0.6, 1], [50, 0]);
  
    return (
        <section className="next-section">
            <motion.div style={{ opacity: nextOpacity, y: nextY }} className="next-section-content">
                <h3>Projects</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores rem ipsum sequi veniam quos quae soluta eaque incidunt expedita nihil vel ex suscipit, illum, sunt officiis facere deserunt similique</p>
            </motion.div>
        </section>
  )
}

export default NextSection