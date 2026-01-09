import { motion } from "framer-motion";

const LoadingSpinner = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="spinner-container">
      <motion.div
        className="spinner"
        variants={spinnerVariants}
        animate="animate"
      />
      <p className="spinner-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
