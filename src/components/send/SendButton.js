import "./SendButton.css";
import React, { useEffect, useState } from "react";

export default function SendButton(props) {
  const [input, setInput] = useState("");
  const [saveUris, setSaveUris] = useState([]);

  function inputHandler(e) {
    setInput(e.target.value);
  }
  function buttonHandler() {
    const hel = Object.values(saveUris);
    console.log(hel);
  }

  useEffect(() => {
    if (props.props[0]) {
      setSaveUris(props.props.map((track) => track.uri));
    } // object or array?
  }, [props.props]);
  return (
    <form>
      <input
        className="playlist_name_input"
        onChange={inputHandler}
        placeholder="Best playlist"
        required
      />
      <button className="save" onClick={buttonHandler}>
        SAVE TO SPOTIFY
      </button>
    </form>
  );
}
