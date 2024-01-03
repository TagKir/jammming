import "./Tracklist.css";
import React, { useState, useEffect } from "react";
import SendButton from "../send/SendButton.js";

export default function Tracklist(props) {
  const [chose, setChose] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (props.props.tracks) {
      setCards(props.props.tracks.items);
      console.log(props.props.tracks.items);
    }
  }, [props.props.tracks]);

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

              <span className="artist_album">| {card.album.name}</span>
            </li>
          );
        })}
      </div>
      <div className="chosen">
        {chose.map((card) => {
          return (
            <li key={card.id}>
              <span className="name">{card.name} </span>
              <span
                className="minus_button"
                onClick={() => removeCardFromChosen(card)}
              >
                -
              </span>
              <br></br>
              <span className="artist_album">| {card.album.name}</span>
            </li>
          );
        })}
        <SendButton />
      </div>
    </div>
  );
}
