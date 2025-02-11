import { motion, useTransform, useScroll } from 'framer-motion'

function NextSection() {
    
    const { scrollYProgress } = useScroll();
    const nextOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
    const nextY = useTransform(scrollYProgress, [0.6, 1], [50, 0]);
  
    return (
        <section className="next-section">
            <motion.div style={{ opacity: nextOpacity, y: nextY }} className="next-section-content">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores rem ipsum sequi veniam quos quae soluta eaque incidunt expedita nihil vel ex suscipit, illum, sunt officiis facere deserunt similique. Dolor.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In velit quam perspiciatis ut! Rem, porro neque? Ad aliquid, quasi corporis, veritatis dolores laboriosam nostrum accusantium repudiandae quo iure, soluta fugiat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae et nobis ratione officia! Explicabo maxime laudantium, asperiores provident laboriosam molestias aliquam in voluptate, error accusamus iure perferendis voluptas nesciunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum cupiditate ea unde voluptatibus quos voluptatum, tempora laboriosam animi fugit debitis nulla reiciendis non aperiam delectus cum rem repudiandae libero velit?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit autem ex dolor dicta exercitationem ab fugiat, similique, tenetur iste eius esse, facere sunt molestias ratione ea adipisci cupiditate recusandae!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque tempora veniam dolor nemo nam commodi facilis, cupiditate quod sint voluptatum sit totam assumenda amet animi autem sed quos id.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusamus asperiores neque vero nemo, in laboriosam quo debitis facere ipsam corrupti tempora? Tempora assumenda eum, maxime quia deserunt perferendis vero?
                </p>
            </motion.div>
        </section>
  )
}

export default NextSection