import { useState } from "react";

export default function Valentine({ next }) {
  const [noPos, setNoPos] = useState({ top: "60%", left: "50%" });

  function moveNo() {
    setNoPos({
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%"
    });
  }

  return (
    <div className="screen">
      <h1>Will you be my Valentine? 💖</h1>

      <button className="yes" onClick={next}>
        YES ❤️
      </button>

      <button
        className="no"
        style={{ position: "absolute", ...noPos }}
        onMouseEnter={moveNo}
        onClick={moveNo}
      >
        NO 😶
      </button>
    </div>
  );
}
