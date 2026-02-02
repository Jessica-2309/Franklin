import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    type: "mcq",
    q: 'When did we first start talking with the intention of "Lets see where this goes"?',
    options: ["October 21", "November 12", "November 5", " October 20"],
    answer: 3
  },
  {
    type: "mcq",
    q: "Where was our first date?",
    options: ["Bethania 😘", "Ullal Beach 🏖️", "St Pio Chapel ⛪", " Royal 😋", "Conrad 😍"],
    answer: 2
  },
  {
    type: "mcq",
    q: "What do I love most about you?",
    options: ["Your hands", "Your smile", "Your ****", "Your food", "Your personality",  "Everything 💖"],
    answer: 5
  },
  {
    type: "text",
    q: "When did you first realize you loved me 😏?"
  }  
];

export default function Quiz({ next }) {
  const [index, setIndex] = useState(0);
  const [textAnswer, setTextAnswer] = useState("");
  const [reaction, setReaction] = useState(false);

  const current = questions[index];

  function handleMCQ(i) {
    if (i === current.answer) {
      setIndex(index + 1);
    } else {
      alert("Hmm 🤨 try again");
    }
  }

  function handleTextSubmit() {
    if (!textAnswer.trim()) return;

    setReaction(true);

    setTimeout(() => {
      setReaction(false);
      setTextAnswer("");
      setIndex(index + 1);
    }, 2500);
  }

  // FINISHED QUIZ
  if (index === questions.length) {
    next();
    return null;
  }

  return (
    <div className="screen">
      <h2>{current.q}</h2>

      {/* MCQ QUESTION */}
      {current.type === "mcq" && (
        <div className="options">
          {current.options.map((opt, i) => {
            const isThirdQuestion = index === 2;
            const isWrong = i !== current.answer;

            return (
              <motion.button
                key={i}
                onClick={() => {
                  // Ignore clicks on wrong options for 3rd question
                  if (isThirdQuestion && isWrong) return;
                  handleMCQ(i);
                }}
                whileHover={
                  isThirdQuestion && isWrong
                    ? {
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        transition: { type: "spring", stiffness: 300 }
                      }
                    : {}
                }
              >
                {opt}
              </motion.button>
            );
          })}
        </div>
      )}

      {/* TEXT QUESTION */}
      {current.type === "text" && (
        <>
          {!reaction ? (
            <>
              <textarea
                placeholder="Type your answer here… 🫶"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                className="text-input"
              />
              <button onClick={handleTextSubmit}>
                Submit 💌
              </button>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="reaction"
            >
              😳🥹❤️  
              <p>Stop… that’s so sweet.</p>
              <p>I’m blushing fr.</p>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
