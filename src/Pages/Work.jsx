import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function Work() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h3>Project not found!</h3>;
  }

  return (
    <div className="work-page">
      <header className="work-header">
        <h1>{project.title}</h1>
        <p>{project.des}</p>
      </header>
      <section className="work-content">
        {project.img.map((imgSrc, index) => (
          <div key={index} className="work-image">
            <img src={imgSrc} alt={`${project.title} preview ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Work;
