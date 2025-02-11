import { motion, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'

function WaveTransition( { scrollYProgress } ) {

const initialBlob1 = "M0,80 C120,100 380,60 500,80 L500,0 L0,0 Z";
const finalBlob1   = "M0,80 C130,0 370,140 500,80 L500,0 L0,0 Z";
const blobD1 = useTransform(scrollYProgress, [0.7, 1], [initialBlob1, finalBlob1]);

const initialBlob2 = "M0,100 C100,150 400,50 500,100 L500,0 L0,0 Z";
const finalBlob2   = "M0,100 C150,0 350,200 500,100 L500,0 L0,0 Z";
const blobD2 = useTransform(scrollYProgress, [0.75, 1], [initialBlob2, finalBlob2]);

  return (
    <div className="multi-layer-blob-transition">
      {/* Capa inferior */}
      <motion.svg
        className="blob-transition blob-layer-1"
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
      >
        <motion.path d={blobD1} fill="#f8fafc" />
      </motion.svg>
      {/* Capa superior */}
      <motion.svg
        className="blob-transition blob-layer-2"
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
      >
        <motion.path d={blobD2} fill="#ffffff" />
      </motion.svg>
    </div>
  )
}

WaveTransition.propTypes = {
  scrollYProgress: PropTypes.object.isRequired
}

export default WaveTransition
