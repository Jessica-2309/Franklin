import { motion } from "framer-motion";

export default function Intro({ next }) {
  return (
    <div className="screen intro">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="intro-title"
      >
        Oyyiii Franklin,
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="intro-line"
      >
        My frankie boy, the love of my life. 🤍
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="intro-line"
      >
        I hope this lights up your day, baby.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="intro-line"
      >
        Just spare five minutes of your time for this little surprise.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="intro-line"
      >
        Sit back… relax… and enjoy. ✨
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
      >
        Begin 💛
      </motion.button>
    </div>
  );
}
