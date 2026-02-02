import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const photos = [
  "/photos/jess1.jpg",
  "/photos/jess2.jpg",
  "/photos/jess3.jpg",
  "/photos/jess4.jpg"
];

export default function MiniSlideshow() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((v) => (v + 1) % photos.length);
    }, 2500);

    return () => clearInterval(t);
  }, []);

  return (
    <motion.img
      key={i}
      src={photos[i]}
      className="mini-slideshow"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
}
