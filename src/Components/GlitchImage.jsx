import mainPicture from "../images/Prueba de cara.png";

const GlitchImage = () => {
  return (
    <div className="glitch-image-container" style={{ "--stacks": 3 }}>
      <img src={mainPicture} alt="Glitch" style={{ "--index": 0 }} />
      <img src={mainPicture} alt="Glitch" style={{ "--index": 1 }} />
      <img src={mainPicture} alt="Glitch" style={{ "--index": 2 }} />
    </div>
  );
};

export default GlitchImage;