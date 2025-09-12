import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function Work() {
    
    const { slug } = useParams();
    const project = projects[slug];

    if (!project) {
        return <h2>Project not found!</h2>
    }
    
    return (
        <div className="work-page">
            <header className="work-header">
                <h1>{projects.title}</h1>
                <p>{projects.des}</p>
            </header>
            <section className="work-content">
                {projects.img.map((img, index) => (
                    <div key={index} className="work-image">
                        <img src={img} alt={`${project.title} preview ${index + 1}`} />
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Work;