import { motion } from "framer-motion";
type Direction = "up" | "down" | "left" | "right";

interface Transition {
  type: string;
  duration: number;
  delay: number;
  ease: [number, number, number, number];
}

interface AnimationState {
  y: number;
  x: number;
  opacity?: number;
  transition?: Transition;
}

interface Animation {
  hidden: AnimationState;
  show: AnimationState;
}
export const fadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 15 : direction === "down" ? -15 : 0,
      x: direction === "left" ? 15 : direction === "right" ? -15 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};
