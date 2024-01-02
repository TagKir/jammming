import "./Tracklist.css";
import React, { useState } from "react";
import SendButton from "../send/SendButton.js";

export default function Tracklist(props) {
  const [input, setInput] = useState("Default");
  const [chose, setChose] = useState([]);

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function addCardToChosen(card) {
    setChose((prev) => {
      if (prev.find((c) => c.id === card.id)) {
        return prev;
      }
      return [...prev, card];
    });
  }

  function removeCardFromChosen(card) {
    setChose((prev) => {
      return [...prev.filter((c) => c.id !== card.id)];
    });
  }

  let cards = [
    {
      name: "Hell of the Book",
      artist: "Hell",
      album: "None",
      id: 1,
    },
    {
      name: "Hello",
      artist: "BBB",
      album: "WLR",
      id: 2,
    },
  ];

  return (
    <div className="all">
      <div className="tracks">
        <h2>Result</h2>
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <span className="name">{card.name} </span>
              <span
                className="plus_button"
                onClick={() => addCardToChosen(card)}
              >
                +
              </span>

              <br />

              <span className="artist_album">
                {card.artist} | {card.album}
              </span>
            </li>
          );
        })}
      </div>
      <div className="chosen">
        <input
          className="playlist_name_input"
          onChange={inputHandler}
          value={input}
        />

        {chose.map((card) => {
          return (
            <li key={card.id}>
              <span className="name">{card.name} </span>
              <span
                className="plus_button"
                onClick={() => removeCardFromChosen(card)}
              >
                -
              </span>
              <br></br>
              <span className="artist_album">
                {card.artist} | {card.album}
              </span>
            </li>
          );
        })}

        <SendButton />
      </div>
    </div>
  );
}
