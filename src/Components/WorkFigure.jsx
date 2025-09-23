import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * WorkFigure
 * Props:
 *   - src: image source URL (string)
 *   - alt: image alt text (string)
 * 
 */
export default function WorkFigure({ src, alt }) {
  const [orientation, setOrientation] = useState("landscape"); // 'landscape' | 'portrait'
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    function checkOrientation() {
   
      if (img.naturalWidth && img.naturalHeight) {
        setOrientation(img.naturalHeight > img.naturalWidth ? "portrait" : "landscape");
      }
    }

    if (img.complete) {
      checkOrientation();
    } else {
      img.addEventListener("load", checkOrientation);

      img.addEventListener("error", checkOrientation);
    }

    return () => {
      img.removeEventListener("load", checkOrientation);
      img.removeEventListener("error", checkOrientation);
    };
  }, [src]);

  return (
    <figure className={`work-figure ${orientation}`} aria-hidden={false}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

WorkFigure.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
