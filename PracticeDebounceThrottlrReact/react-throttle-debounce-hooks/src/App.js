import React, { useState } from "react";
import { useThrottleOrDebounce } from "./hooks/useThrottleOrDebounce";

function App() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("throttle");
  const output = useThrottleOrDebounce(input, 1000, mode);

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h2>{mode.toUpperCase()} Demo</h2>
      <label>
        Mode:
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="throttle">Throttle</option>
          <option value="debounce">Debounce</option>
        </select>
      </label>
      <br /><br />
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />
      <p>Live Input: {input}</p>
      <p>Optimized Output: {output}</p>
    </div>
  );
}

export default App;
