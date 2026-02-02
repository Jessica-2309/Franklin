import { motion } from "framer-motion";

export default function Timeline({ next }) {
  const memories = [
    {
      title: "💫 The day I first saw you",
      desc: "In my mum's class, long hair, skinny boy, with veiny arms 😍."
    },
    {
      title: "😊 The day we first spoke to each other",
      desc: "Two classmates... put into the same group... maybe that was DESTINY'S work 🤷‍♀️"
    },
    {
      title: "😂 Our dumbest laughs",
      desc: "From silly jokes to crying-from-laughing moments."
    },
    {
      title: "🤍 The moment I knew",
      desc: "Somewhere between you and your smile, my heart tingled."
    },
    {
      title: "🌙 Late-night talks",
      desc: "Where time disappeared and hearts spoke."
    },
    {
      title: "✨ Every single moment",
      desc: "Each passing day is quietly making me fall harder."
    }
  ];

  return (
    <div className="screen">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Story 🤍
      </motion.h1>

      <div className="timeline">
        {memories.map((m, i) => (
          <motion.div
            key={i}
            className="card timeline-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
      >
        Continue our story →
      </motion.button>
    </div>
  );
}
