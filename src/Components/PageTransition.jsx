import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}   // Comienza invisible
      animate={{ opacity: 1 }}   // Se vuelve visible
      exit={{ opacity: 0 }}      // Al salir se desvanece
      transition={{ duration: 0.5 }} // Duración de la transición
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
