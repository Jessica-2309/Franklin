import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Timeline from "./components/Timeline";
import Chat from "./components/Chat";
import Quiz from "./components/Quiz";
import Valentine from "./components/Valentine";
import Final from "./components/Final";
import Intro from "./components/Intro";

export default function App() {
  const [step, setStep] = useState(0);

  const screens = [
    <Intro next={() => setStep(1)} />,
    <Timeline next={() => setStep(2)} />,
    <Chat next={() => setStep(3)} />,
    <Quiz next={() => setStep(4)} />,
    <Valentine next={() => setStep(5)} />,
    <Final />
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="app"
      >
        {screens[step]}
      </motion.div>
    </AnimatePresence>
  );
}
