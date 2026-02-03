import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function MotionContainer({ children }) {
  const ref = useRef(null);
  const controls = useAnimation();

  const inView = useInView(ref, {
    margin: "-120px",
    once: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children }) {
  return <motion.div variants={itemVariants}>{children}</motion.div>;
}
