import "./Tracklist.css";
import React, { useState } from "react";

export default function Tracklist() {
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
      id: 1,
    },
  ];

  return (
    <div className="all">
      <div className="tracks">
        <h2>Result</h2>
        {cards.map((card) => {
          return (
            <ul>
              <li className="name">{card.name}</li>
              <li className="artist_album">
                {card.artist} | {card.album}
              </li>
            </ul>
          );
        })}
      </div>
      <div className="chosen">
        <input className="playlist_name_input" />
        {cards.map((card) => {
          return (
            <ul>
              <li className="name">{card.name}</li>
              <li className="artist_album">
                {card.artist} | {card.album}
              </li>
            </ul>
          );
        })}
        <button className="save">SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
}
