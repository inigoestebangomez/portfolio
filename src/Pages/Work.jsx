import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectData.js";
import { motion } from "framer-motion";

export default function Work() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h3 className="not-found">Project not found!</h3>;
  }

  // "Next case"
  const keys = projects.map((p) => p.slug);
  const idx = keys.indexOf(slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="work-detail">
      <div className="work-grid">
        {/* META / SIDEBAR */}
        <aside className="work-meta">
          <div className="meta-inner">
            <Link to="/" className="meta-back">← Home</Link>

            <h1 className="work-title">{project.title}</h1>
            <p className="work-short">{project.des}</p>
            {project.longDes && <p className="work-long">{project.longDes}</p>}

            {project.services && project.services.length > 0 && (
              <div className="meta-block">
                <h4>Services</h4>
                <ul className="meta-list">
                  {project.services.map((s, i) => (
                    <li key={i}>
                      <a href={s.url} target="_blank" rel="noreferrer">
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.credits && project.credits.length > 0 && (
              <div className="meta-block">
                <h4>Credits</h4>
                <ul className="meta-list">
                  {project.credits.map((c, i) => (
                    <li key={i}>
                      <strong>{c.role}:</strong> {c.person}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="meta-footer">
              {project.year && <div className="meta-year">{project.year}</div>}
            </div>
          </div>
        </aside>

        {/* GALLERY (full-bleed images / GIFs) */}
        <main className="work-gallery">
          {project.img.map((src, i) => (
            <motion.figure
              className="work-figure"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Si quieres logo flotante sobre el primer GIF */}
              {i === 0 && (
                <div className="project-hero-logo" aria-hidden>
                  <span className="hero-title">{project.title}</span>
                </div>
              )}

              <img src={src} alt={`${project.title} preview ${i + 1}`} />
            </motion.figure>
          ))}
        </main>
      </div>

      {/* FOOT / NAV: Next case & Live site */}
      <div className="work-nav">
        <div className="work-nav-left">
          {project.services && project.services.find(s => s.name.toLowerCase().includes("live")) ? (
            <a
              className="live-link"
              href={project.services.find(s => s.name.toLowerCase().includes("live")).url}
              target="_blank"
              rel="noreferrer"
            >
              Live site ↗
            </a>
          ) : null}
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