import MiniSlideshow from "./MiniSlideshow";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Final() {
  useEffect(() => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="screen final">
      <MiniSlideshow />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="final-title"
      >
        You’ve always been my Valentine 💕
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="final-sub"
      >
        Now it’s official 😌❤️
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="final-love"
      >
        I love you so much my babydoll.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="final-heart"
      >
        💖
      </motion.div>
    </div>
  );
}
