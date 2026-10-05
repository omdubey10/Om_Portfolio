import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AnimatedHobbyStickers.module.css";

interface AnimatedHobbyStickersProps {
  color?: string;
}

// Each hobby: label + high-quality professional 24x24 SVG paths
const hobbies = [
  {
    label: "Analytics",
    viewBox: "0 0 24 24",
    paths: ["M4 19h16", "M7 16V9", "M12 16V5", "M17 16v-6"],
  },
  {
    label: "Dashboards",
    viewBox: "0 0 24 24",
    paths: [
      "M4 4h7v7H4z",
      "M13 4h7v4h-7z",
      "M13 10h7v10h-7z",
      "M4 13h7v7H4z",
    ],
  },
  {
    label: "Automation",
    viewBox: "0 0 24 24",
    paths: ["M6 7h.01", "M18 17h.01", "M7 7l10 10", "M6 12h4", "M14 12h4"],
  },
  {
    label: "Insights",
    viewBox: "0 0 24 24",
    paths: ["M12 3v2", "M12 19v2", "M3 12h2", "M19 12h2", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  },
];

// SVG path draw-on animation
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as const,
      },
      opacity: { delay: i * 0.1, duration: 0.2 },
    },
  }),
  exit: {
    opacity: 0,
    pathLength: 0,
    transition: { duration: 0.25 },
  },
};

export default function AnimatedHobbyStickers({
  color = "rgba(210, 255, 0, 0.85)",
}: AnimatedHobbyStickersProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hobbies.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const hobby = hobbies[currentIndex];

  return (
    <div className={styles.sticker}>
      <AnimatePresence mode="wait">
        <motion.svg
          key={hobby.label}
          viewBox={hobby.viewBox}
          width="50"
          height="50"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
          transition={{ duration: 0.4 }}
          className={styles.icon}
        >
          {hobby.paths.map((d, i) => (
            <motion.path
              key={`${hobby.label}-${i}`}
              d={d}
              variants={pathVariants}
              custom={i}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          ))}
        </motion.svg>
      </AnimatePresence>
    </div>
  );
}
