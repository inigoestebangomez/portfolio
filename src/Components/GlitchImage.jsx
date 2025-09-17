import { frontFace } from "../data/projectData.js";

const GlitchImage = () => {
  return (
    <div className="glitch-image-container" style={{ "--stacks": 3 }}>
      <img src={frontFace.img} alt="Glitch" style={{ "--index": 0 }} />
      <img src={frontFace.img} alt="Glitch" style={{ "--index": 1 }} />
      <img src={frontFace.img} alt="Glitch" style={{ "--index": 2 }} />
    </div>
  );
};

export default GlitchImage;