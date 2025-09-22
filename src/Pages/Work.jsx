// src/pages/Work.jsx
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/projectData.js";

export default function Work() {
  const { slug } = useParams();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Parallax: logo se mueve más y escala un poco; fondo se mueve menos
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -180]); 
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // busca proyecto
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h3 className="not-found">Project not found!</h3>;
  }

  // next case
  const keys = projects.map((p) => p.slug);
  const idx = Math.max(0, keys.indexOf(slug));
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="work-detail">

      <header className="work-top-meta">
        <div className="meta-inner">
          <Link to="/" className="meta-back">← Home</Link>

          <h1 className="work-title">{project.title}</h1>

          <div className="meta-row">
            <div className="meta-col">
              <h4 className="meta-heading">Services</h4>
              <ul className="meta-list">
                {project.services?.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="meta-col">
              <h4 className="meta-heading">Credits</h4>
              <ul className="meta-list">
                {project.credits?.map((c, i) => (
                  <li key={i}>{c.role}: {c.person}</li>
                ))}
              </ul>
            </div>

            <div className="meta-col">
              <h4 className="meta-heading">Year</h4>
              <div className="meta-list">{project.year}</div>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section" ref={heroRef}>
        <motion.img
          className="hero-bg"
          src={project.img?.[2] ?? project.preview ?? ""}
          alt={`${project.title} hero`}
          style={{ y: bgY }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {project.logo?.[0] && (
          <motion.div
            className="hero-logo-wrap"
            style={{ y: logoY, scale: logoScale }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
            aria-hidden
          >
            <img className="hero-logo" src={project.logo[0]} alt={`${project.title} logo`} />
          </motion.div>
        )}
      </section>

      {/* 3. Presentación / sección con GIF en mockup o dos imágenes - abajo doy ideas */}
      <main className="work-main">
        <section className="work-intro">
        </section>

        {/* 4. Gallery: resto de imágenes (slice(1)) */}
        <section className="work-gallery">
          {project.img?.slice(1).map((src, i) => (
            <motion.figure
              className="work-figure"
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img src={src} alt={`${project.title} preview ${i + 2}`} />
            </motion.figure>
          ))}
        </section>
      </main>

      {/* 5. NEXT / LIVE area */}
      <div className="work-nav">
        <div className="work-nav-left">
          {project.services?.find(s => s.name.toLowerCase().includes("live")) && (
            <a
              className="live-link"
              href={project.services.find(s => s.name.toLowerCase().includes("live")).url}
              target="_blank"
              rel="noreferrer"
            >
              Live site ↗
            </a>
          )}
        </div>

        <div className="work-nav-right">
          {next && (
            <Link to={`/work/${next.slug}`} className="next-case">
              Next case <span className="next-title">{next.title}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
