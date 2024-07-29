import { motion, useScroll } from "framer-motion";
import "../../styles/global.css"

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
}
