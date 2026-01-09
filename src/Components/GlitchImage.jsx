import { useState, useEffect } from "react";
import { frontFace } from "../data/projectData.js";
import LoadingSpinner from "./LoadingSpinner";

const GlitchImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = frontFace.img;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="glitch-wrapper">
      {isLoading && <LoadingSpinner />}
      <div
        className="glitch-image-container"
        style={{
          "--stacks": 3,
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <img src={frontFace.img} alt="Glitch" style={{ "--index": 0 }} />
        <img src={frontFace.img} alt="Glitch" style={{ "--index": 1 }} />
        <img src={frontFace.img} alt="Glitch" style={{ "--index": 2 }} />
      </div>
    </div>
  );
};

export default GlitchImage;