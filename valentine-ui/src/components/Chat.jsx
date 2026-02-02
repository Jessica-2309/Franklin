import { useEffect, useState } from "react";

export default function Chat({ next }) {
  const messages = [
    "Heyy 👀",
    "I was thinking about us…",
    "And I realized something 💭",
    "But before I ask…"
  ];

  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown < messages.length) {
      setTimeout(() => setShown(shown + 1), 1000);
    }
  }, [shown]);

  return (
    <div className="screen chat">
      {messages.slice(0, shown).map((msg, i) => (
        <div key={i} className="bubble">{msg}</div>
      ))}

      {shown === messages.length && (
        <button onClick={next}>Lets have a short quiz baby 😌</button>
      )}
    </div>
  );
}
