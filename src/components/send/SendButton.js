import "./SendButton.css";
import React, { useState } from "react";

export default function SendButton() {
  const [input, setInput] = useState("");
  function inputHandler(e) {
    setInput(e.target.value);
  }
  return (
    <form>
      <input
        className="playlist_name_input"
        onChange={inputHandler}
        placeholder="Best playlist"
        required
      />
      <button className="save">SAVE TO SPOTIFY</button>
    </form>
  );
}
